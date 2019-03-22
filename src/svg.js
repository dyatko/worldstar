const fs = require("fs");
const path = require("path");
const d3 = require("d3");
const D3Node = require("d3-node");
const color = require("color");
const { argv } = require("./utils");
const SVGO = require("svgo");

const stats = [];
const countriesDataPath = path.resolve(
  __dirname,
  "../node_modules/visionscarto-world-atlas/world/50m_countries.geojson"
);

const simplify = number => parseFloat(Number(number).toFixed(2));
const getColor = (name, stars, splits) => {
  if (!stars) return "#FFFFFF";

  const weight = simplify(splits.indexOf(stars) / (splits.length - 1));
  const whiten = simplify((1 - weight) / 2);

  stats.push({
    name,
    stars,
    weight,
    whiten
  });

  return color(argv.color)
    .mix(color("white"), whiten)
    .hex();
};

const determineCountryCode = props => {
  if (props.iso_a2 && props.iso_a2.match(/[A-Z]{2}/)) return props.iso_a2;
  if (props.wb_a2 && props.wb_a2.match(/[A-Z]{2}/)) return props.wb_a2;
  return props.sov_a3 ? props.sov_a3.substr(0, 2) : "";
};

module.exports.getSVG = ([countryPopularity]) => {
  const d3n = new D3Node();
  const svg = d3n.createSVG(640, 420);
  const countries = JSON.parse(fs.readFileSync(countriesDataPath).toString());
  const geoPath = d3.geoPath(
    d3.geoMercator().fitWidth(svg.attr("width"), countries)
  );
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
      const code = determineCountryCode(d.properties);
      const stars = countryPopularity.get(code);
      countryPopularity.delete(code);

      return getColor(code, stars, splits);
    })
    .style("stroke", "#afafaf")
    .style("stroke-width", "0.6px")
    .attr("d", geoPath);

  console.table(stats.sort((a, b) => b.stars - a.stars));

  console.log("Unmapped countries", Array.from(countryPopularity.entries()));

  return new SVGO().optimize(d3n.svgString()).then(optimised => optimised.data);
};
