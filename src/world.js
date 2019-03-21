const fs = require("fs");
const d3 = require("d3");
const D3Node = require("d3-node");
const topojson = require("topojson");

const countryNames = d3.map();

d3.tsvParse(
  fs.readFileSync("./node_modules/world-atlas/world/110m.tsv").toString(),
  data => countryNames.set(data.iso_n3, data.name)
);

module.exports.getSVG = ([countryPopularity, max]) => {
  const d3n = new D3Node();
  const svg = d3n.createSVG(640, 420);
  const world = require("world-atlas/world/110m");
  const countries = topojson.feature(world, world.objects.countries);
  const geoPath = d3.geoPath(
    d3.geoMercator().fitWidth(svg.attr("width"), countries)
  );
  const stats = [];

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
        const ratio = stars / max;
        const opacity = (ratio * 0.3 + 0.7).toFixed(2);

        countryPopularity.remove(name);
        stats.push({
          name,
          stars,
          fromMax: Math.round(ratio * 100) + '%',
          opacity
        });

        return `rgba(36, 41, 46, ${opacity})`;
      }

      return "white";
    })
    .style("stroke", "#afafaf")
    .style("stroke-width", "0.6px")
    .attr("d", geoPath);

  console.table(stats.sort((a, b) => b.stars - a.stars));

  return Promise.resolve(d3n.svgString());
};
