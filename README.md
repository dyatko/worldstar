<p align="left">
  <a href="https://www.npmjs.com/worldstar"><img src="https://img.shields.io/npm/v/worldstar.svg?label=%20&style=flat-square" alt="World map NPM package" /></a>
  <a href="https://www.npmjs.com/worldstar"><img src="https://img.shields.io/npm/dw/worldstar.svg?style=flat-square" alt="Download worldstar" /></a>
  <a href="https://libraries.io/npm/worldstar/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/worldstar.svg?style=flat-square" alt="Dependents" /></a>
  <a href="https://codeclimate.com/github/dyatko/worldstar/issues"><img src="https://img.shields.io/codeclimate/tech-debt/dyatko/worldstar.svg?style=flat-square" alt="Technical debt" /></a>
</p>

## Generates world map chart of GitHub stargazers

These are first 5,000 stargazers of [D3](https://github.com/d3/d3), one of the major Worldstar dependencies.

![github stargazers map](worldstar.svg?sanitize=true)

### Usage

The tool requires few API keys from you:

- [GitHub API](https://github.com/settings/tokens)
- [Google Maps API](https://cloud.google.com/maps-platform/#get-started)

```console
user@machine:~$ npx worldstar --help
Options:
  --version       Show version number                                  [boolean]
  --help          Show help                                            [boolean]
  --github-token  GitHub token, alternatively GITHUB_TOKEN env var    [required]
  --google-token  Google API token, alternatively GOOGLE_TOKEN env var[required]
  --repo, -r      GitHub repo to parse, e.g. dyatko/arkit             [required]
  --max, -m       Maximum number of stargazers due to GitHub allows up to 5000
                  requests/hour                       [required] [default: 1000]
  --color, -c     Country color                  [required] [default: "#24292e"]
  --output, -o    Output path              [required] [default: "worldstar.svg"]
```

```sh
# Run it straight away
npx worldstar --github-token=... --google-token=...  --repo user/repo

# You can also pass secrets as environment variables
GITHUB_TOKEN=... GOOGLE_TOKEN=... npx worldstar --repo user/repo

# Or add it to your project as a dev dependency
npm install worldstar --save-dev
yarn add worldstar --dev
```

Besides nice SVG image, you will get some stats in your console:

```console
┌─────────┬──────┬───────┬────────┬────────┐
│ (index) │ name │ stars │ weight │ whiten │
├─────────┼──────┼───────┼────────┼────────┤
│    0    │ 'US' │ 1696  │   1    │   0    │
│    1    │ 'GB' │  245  │  0.97  │  0.02  │
│    2    │ 'DE' │  237  │  0.95  │  0.03  │
│    3    │ 'CN' │  183  │  0.92  │  0.04  │
│    4    │ 'CA' │  168  │  0.89  │  0.05  │
│    5    │ 'FR' │  118  │  0.86  │  0.07  │
│    6    │ 'AU' │  103  │  0.84  │  0.08  │
│    7    │ 'JP' │  87   │  0.81  │  0.09  │
│    8    │ 'BR' │  75   │  0.78  │  0.11  │
│    9    │ 'NL' │  65   │  0.76  │  0.12  │
│   10    │ 'IN' │  56   │  0.73  │  0.14  │
│   11    │ 'ES' │  55   │  0.7   │  0.15  │
│   12    │ 'RU' │  53   │  0.68  │  0.16  │
│   13    │ 'CH' │  45   │  0.65  │  0.17  │
│   14    │ 'SE' │  41   │  0.62  │  0.19  │
│   15    │ 'NO' │  36   │  0.59  │  0.21  │
...
```

##### In case you wonder, the tool architecture diagram (generated by [arkit](https://github.com/dyatko/arkit))

![arkit diagram](arkit.svg?sanitize=true)
