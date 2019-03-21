<p align="left">
  <a href="https://www.npmjs.com/worldstar"><img src="https://img.shields.io/npm/v/worldstar.svg?label=%20&style=flat-square" alt="World map NPM package" /></a>
  <a href="https://www.npmjs.com/worldstar"><img src="https://img.shields.io/npm/dw/worldstar.svg?style=flat-square" alt="Download worldstar" /></a>
  <a href="https://libraries.io/npm/worldstar/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/worldstar.svg?style=flat-square" alt="Dependents" /></a>
  <a href="https://codeclimate.com/github/dyatko/worldstar/issues"><img src="https://img.shields.io/codeclimate/tech-debt/dyatko/worldstar.svg?style=flat-square" alt="Technical debt" /></a>
</p>

## Generates world map chart of GitHub stargazers

These are first 3,000 stargazers of [D3](https://github.com/d3/d3), one of the major Worldstar dependencies.

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
┌─────────┬──────────────────┬───────┬─────────┬─────────┐
│ (index) │       name       │ stars │ fromMax │ opacity │
├─────────┼──────────────────┼───────┼─────────┼─────────┤
│    0    │ 'United States'  │ 1078  │ '100%'  │ '1.00'  │
│    1    │ 'United Kingdom' │  155  │  '14%'  │ '0.74'  │
│    2    │    'Germany'     │  143  │  '13%'  │ '0.74'  │
│    3    │     'Canada'     │  106  │  '10%'  │ '0.73'  │
│    4    │     'China'      │  101  │  '9%'   │ '0.73'  │
│    5    │   'Australia'    │  70   │  '6%'   │ '0.72'  │
│    6    │     'France'     │  67   │  '6%'   │ '0.72'  │
│    7    │     'Japan'      │  56   │  '5%'   │ '0.72'  │
│    8    │     'Brazil'     │  47   │  '4%'   │ '0.71'  │
│    9    │  'Netherlands'   │  40   │  '4%'   │ '0.71'  │
│   10    │     'Spain'      │  35   │  '3%'   │ '0.71'  │
│   11    │     'Russia'     │  29   │  '3%'   │ '0.71'  │
│   12    │  'Switzerland'   │  28   │  '3%'   │ '0.71'  │
│   13    │     'Sweden'     │  27   │  '3%'   │ '0.71'  │
│   14    │     'Italy'      │  26   │  '2%'   │ '0.71'  │
│   15    │     'Poland'     │  25   │  '2%'   │ '0.71'  │
│   16    │     'India'      │  24   │  '2%'   │ '0.71'  │
│   17    │    'Belgium'     │  21   │  '2%'   │ '0.71'  │
│   18    │     'Norway'     │  20   │  '2%'   │ '0.71'  │
│   19    │    'Austria'     │  15   │  '1%'   │ '0.70'  │
│   20    │    'Denmark'     │  14   │  '1%'   │ '0.70'  │
│   21    │  'New Zealand'   │  14   │  '1%'   │ '0.70'  │
│   22    │   'Argentina'    │  13   │  '1%'   │ '0.70'  │
│   23    │    'Finland'     │  13   │  '1%'   │ '0.70'  │
│   24    │     'Taiwan'     │  13   │  '1%'   │ '0.70'  │
│   25    │    'Ukraine'     │  12   │  '1%'   │ '0.70'  │
│   26    │    'Portugal'    │  11   │  '1%'   │ '0.70'  │
│   27    │    'Romania'     │  10   │  '1%'   │ '0.70'  │
│   28    │     'Greece'     │   8   │  '1%'   │ '0.70'  │
│   29    │   'Indonesia'    │   8   │  '1%'   │ '0.70'  │
│   30    │     'Mexico'     │   8   │  '1%'   │ '0.70'  │
│   31    │    'Ireland'     │   7   │  '1%'   │ '0.70'  │
│   32    │     'Chile'      │   6   │  '1%'   │ '0.70'  │
│   33    │     'Israel'     │   6   │  '1%'   │ '0.70'  │
│   34    │    'Thailand'    │   6   │  '1%'   │ '0.70'  │
│   35    │     'Turkey'     │   6   │  '1%'   │ '0.70'  │
│   36    │    'Hungary'     │   5   │  '0%'   │ '0.70'  │
│   37    │    'Belarus'     │   4   │  '0%'   │ '0.70'  │
│   38    │   'Costa Rica'   │   3   │  '0%'   │ '0.70'  │
│   39    │  'Philippines'   │   3   │  '0%'   │ '0.70'  │
│   40    │    'Slovakia'    │   3   │  '0%'   │ '0.70'  │
│   41    │    'Vietnam'     │   3   │  '0%'   │ '0.70'  │
│   42    │    'Bulgaria'    │   2   │  '0%'   │ '0.70'  │
│   43    │    'Colombia'    │   2   │  '0%'   │ '0.70'  │
│   44    │     'Egypt'      │   2   │  '0%'   │ '0.70'  │
│   45    │    'Estonia'     │   2   │  '0%'   │ '0.70'  │
│   46    │    'Malaysia'    │   2   │  '0%'   │ '0.70'  │
│   47    │    'Pakistan'    │   2   │  '0%'   │ '0.70'  │
│   48    │     'Serbia'     │   2   │  '0%'   │ '0.70'  │
│   49    │    'Tunisia'     │   2   │  '0%'   │ '0.70'  │
│   50    │  'South Africa'  │   2   │  '0%'   │ '0.70'  │
│   51    │   'Bangladesh'   │   1   │  '0%'   │ '0.70'  │
│   52    │    'Bolivia'     │   1   │  '0%'   │ '0.70'  │
│   53    │    'Georgia'     │   1   │  '0%'   │ '0.70'  │
│   54    │    'Croatia'     │   1   │  '0%'   │ '0.70'  │
│   55    │    'Iceland'     │   1   │  '0%'   │ '0.70'  │
│   56    │   'Kyrgyzstan'   │   1   │  '0%'   │ '0.70'  │
│   57    │    'Cambodia'    │   1   │  '0%'   │ '0.70'  │
│   58    │   'Sri Lanka'    │   1   │  '0%'   │ '0.70'  │
│   59    │   'Lithuania'    │   1   │  '0%'   │ '0.70'  │
│   60    │   'Luxembourg'   │   1   │  '0%'   │ '0.70'  │
│   61    │ 'New Caledonia'  │   1   │  '0%'   │ '0.70'  │
│   62    │      'Peru'      │   1   │  '0%'   │ '0.70'  │
│   63    │  'Saudi Arabia'  │   1   │  '0%'   │ '0.70'  │
│   64    │    'Slovenia'    │   1   │  '0%'   │ '0.70'  │
│   65    │   'Venezuela'    │   1   │  '0%'   │ '0.70'  │
└─────────┴──────────────────┴───────┴─────────┴─────────┘
```

##### In case you wonder, the tool architecture diagram (generated by [arkit](https://github.com/dyatko/arkit))

![arkit diagram](arkit.svg?sanitize=true)
