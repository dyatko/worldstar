#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const { getStargazers, getGeoLocations } = require("./github");
const { getCountryPopularity, argv } = require("./utils");
const { getSVG } = require("./world");

const outputPath = path.resolve(process.cwd(), argv.output);
const repoPath = `https://api.github.com/repos/${
  argv.repo
}/stargazers?per_page=100`;

getStargazers(repoPath)
  .then(getGeoLocations)
  .then(getCountryPopularity)
  .then(getSVG)
  .then(svg => {
    console.log(`Map saved to ${outputPath}`);
    fs.writeFileSync(outputPath, svg);
  });
