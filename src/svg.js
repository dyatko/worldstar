const fs = require("fs");
const d3 = require("d3");
const D3Node = require("d3-node");
const topojson = require("topojson");
const color = require("color");
const { argv } = require("./utils");

const countryNames = new Map();
const simplify = number => parseFloat(Number(number).toFixed(2));

d3.tsvParse(
  fs.readFileSync("./node_modules/world-atlas/world/50m.tsv").toString(),
  data => countryNames.set(data.iso_n3, data.iso_a2)
);

module.exports.getSVG = ([countryPopularity]) => {
  const d3n = new D3Node();
  const svg = d3n.createSVG(640, 420);
  const world = require("world-atlas/world/50m");
  const countries = topojson.feature(world, world.objects.countries);
  const geoPath = d3.geoPath(
    d3.geoMercator().fitWidth(svg.attr("width"), countries)
  );
  const stats = [];
  const splits = Array.from(new Set(countryPopularity.values())).sort(
    (a, b) => a - b
  );

  svg
    .append("g")
    .selectAll("path")
    .data(countries.features)
    .join("path")
    .attr("id", d => {
      return d.id;
    })
    .style("fill", d => {
      const name = countryNames.get(d.id);
      const stars = countryPopularity.get(name);

      if (stars) {
        const weight = simplify(splits.indexOf(stars) / (splits.length - 1));
        const whiten = simplify((1 - weight) / 2);

        countryPopularity.delete(name);
        stats.push({
          name,
          stars,
          weight,
          whiten
        });

        return color(argv.color)
          .mix(color("white"), whiten)
          .hex();
      }

      return "white";
    })
    .style("stroke", "#afafaf")
    .style("stroke-width", "0.6px")
    .attr("d", geoPath);

  console.table(stats.sort((a, b) => b.stars - a.stars));

  console.log("Unmapped countries", Array.from(countryPopularity.entries()));

  return Promise.resolve(d3n.svgString());
};
