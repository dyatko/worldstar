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
┌─────────┬──────────────────┬───────┬────────────┬─────────┐
│ (index) │       name       │ stars │ saturation │ opacity │
├─────────┼──────────────────┼───────┼────────────┼─────────┤
│    0    │ 'United States'  │ 1078  │   '1.00'   │ '1.00'  │
│    1    │ 'United Kingdom' │  155  │   '0.97'   │ '0.99'  │
│    2    │    'Germany'     │  143  │   '0.94'   │ '0.98'  │
│    3    │     'Canada'     │  106  │   '0.91'   │ '0.97'  │
│    4    │     'China'      │  101  │   '0.88'   │ '0.96'  │
│    5    │   'Australia'    │  70   │   '0.85'   │ '0.95'  │
│    6    │     'France'     │  67   │   '0.82'   │ '0.95'  │
│    7    │     'Japan'      │  56   │   '0.79'   │ '0.94'  │
│    8    │     'Brazil'     │  47   │   '0.76'   │ '0.93'  │
│    9    │  'Netherlands'   │  40   │   '0.73'   │ '0.92'  │
│   10    │     'Spain'      │  35   │   '0.70'   │ '0.91'  │
│   11    │     'Russia'     │  29   │   '0.67'   │ '0.90'  │
│   12    │  'Switzerland'   │  28   │   '0.64'   │ '0.89'  │
│   13    │     'Sweden'     │  27   │   '0.61'   │ '0.88'  │
│   14    │     'Italy'      │  26   │   '0.58'   │ '0.87'  │
│   15    │     'Poland'     │  25   │   '0.55'   │ '0.86'  │
│   16    │     'India'      │  24   │   '0.52'   │ '0.86'  │
│   17    │    'Belgium'     │  21   │   '0.48'   │ '0.84'  │
│   18    │     'Norway'     │  20   │   '0.45'   │ '0.83'  │
│   19    │    'Austria'     │  15   │   '0.39'   │ '0.82'  │
│   20    │    'Denmark'     │  14   │   '0.36'   │ '0.81'  │
│   21    │  'New Zealand'   │  14   │   '0.36'   │ '0.81'  │
│   22    │   'Argentina'    │  13   │   '0.33'   │ '0.80'  │
│   23    │    'Finland'     │  13   │   '0.33'   │ '0.80'  │
│   24    │     'Taiwan'     │  13   │   '0.33'   │ '0.80'  │
│   25    │    'Ukraine'     │  12   │   '0.30'   │ '0.79'  │
│   26    │    'Portugal'    │  11   │   '0.27'   │ '0.78'  │
│   27    │    'Romania'     │  10   │   '0.24'   │ '0.77'  │
│   28    │     'Greece'     │   8   │   '0.21'   │ '0.76'  │
│   29    │   'Indonesia'    │   8   │   '0.21'   │ '0.76'  │
│   30    │     'Mexico'     │   8   │   '0.21'   │ '0.76'  │
│   31    │    'Ireland'     │   7   │   '0.18'   │ '0.75'  │
│   32    │     'Chile'      │   6   │   '0.15'   │ '0.74'  │
│   33    │     'Israel'     │   6   │   '0.15'   │ '0.74'  │
│   34    │    'Thailand'    │   6   │   '0.15'   │ '0.74'  │
│   35    │     'Turkey'     │   6   │   '0.15'   │ '0.74'  │
│   36    │    'Hungary'     │   5   │   '0.12'   │ '0.74'  │
│   37    │    'Belarus'     │   4   │   '0.09'   │ '0.73'  │
│   38    │   'Costa Rica'   │   3   │   '0.06'   │ '0.72'  │
│   39    │  'Philippines'   │   3   │   '0.06'   │ '0.72'  │
│   40    │    'Slovakia'    │   3   │   '0.06'   │ '0.72'  │
│   41    │    'Vietnam'     │   3   │   '0.06'   │ '0.72'  │
│   42    │    'Bulgaria'    │   2   │   '0.03'   │ '0.71'  │
│   43    │    'Colombia'    │   2   │   '0.03'   │ '0.71'  │
│   44    │     'Egypt'      │   2   │   '0.03'   │ '0.71'  │
│   45    │    'Estonia'     │   2   │   '0.03'   │ '0.71'  │
│   46    │    'Malaysia'    │   2   │   '0.03'   │ '0.71'  │
│   47    │    'Pakistan'    │   2   │   '0.03'   │ '0.71'  │
│   48    │     'Serbia'     │   2   │   '0.03'   │ '0.71'  │
│   49    │    'Tunisia'     │   2   │   '0.03'   │ '0.71'  │
│   50    │  'South Africa'  │   2   │   '0.03'   │ '0.71'  │
│   51    │   'Bangladesh'   │   1   │   '0.00'   │ '0.70'  │
│   52    │    'Bolivia'     │   1   │   '0.00'   │ '0.70'  │
│   53    │    'Georgia'     │   1   │   '0.00'   │ '0.70'  │
│   54    │    'Croatia'     │   1   │   '0.00'   │ '0.70'  │
│   55    │    'Iceland'     │   1   │   '0.00'   │ '0.70'  │
│   56    │   'Kyrgyzstan'   │   1   │   '0.00'   │ '0.70'  │
│   57    │    'Cambodia'    │   1   │   '0.00'   │ '0.70'  │
│   58    │   'Sri Lanka'    │   1   │   '0.00'   │ '0.70'  │
│   59    │   'Lithuania'    │   1   │   '0.00'   │ '0.70'  │
│   60    │   'Luxembourg'   │   1   │   '0.00'   │ '0.70'  │
│   61    │ 'New Caledonia'  │   1   │   '0.00'   │ '0.70'  │
│   62    │      'Peru'      │   1   │   '0.00'   │ '0.70'  │
│   63    │  'Saudi Arabia'  │   1   │   '0.00'   │ '0.70'  │
│   64    │    'Slovenia'    │   1   │   '0.00'   │ '0.70'  │
│   65    │   'Venezuela'    │   1   │   '0.00'   │ '0.70'  │
└─────────┴──────────────────┴───────┴────────────┴─────────┘
```

##### In case you wonder, the tool architecture diagram (generated by [arkit](https://github.com/dyatko/arkit))

![arkit diagram](arkit.svg?sanitize=true)
