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
┌─────────┬──────┬───────┬────────┬────────┐
│ (index) │ name │ stars │ weight │ whiten │
├─────────┼──────┼───────┼────────┼────────┤
│    0    │ 'US' │ 1078  │   1    │   0    │
│    1    │ 'GB' │  155  │  0.97  │  0.02  │
│    2    │ 'DE' │  143  │  0.94  │  0.03  │
│    3    │ 'CA' │  106  │  0.91  │  0.04  │
│    4    │ 'CN' │  101  │  0.88  │  0.06  │
│    5    │ 'AU' │  70   │  0.85  │  0.08  │
│    6    │ 'FR' │  67   │  0.82  │  0.09  │
│    7    │ 'JP' │  56   │  0.79  │  0.1   │
│    8    │ 'BR' │  47   │  0.76  │  0.12  │
│    9    │ 'NL' │  40   │  0.73  │  0.14  │
│   10    │ 'ES' │  35   │  0.7   │  0.15  │
│   11    │ 'RU' │  29   │  0.67  │  0.16  │
│   12    │ 'CH' │  28   │  0.64  │  0.18  │
│   13    │ 'SE' │  27   │  0.61  │  0.2   │
│   14    │ 'IT' │  26   │  0.58  │  0.21  │
│   15    │ 'PL' │  25   │  0.55  │  0.22  │
│   16    │ 'IN' │  24   │  0.52  │  0.24  │
│   17    │ 'BE' │  21   │  0.48  │  0.26  │
│   18    │ 'NO' │  20   │  0.45  │  0.28  │
│   19    │ 'SG' │  16   │  0.42  │  0.29  │
│   20    │ 'AT' │  15   │  0.39  │  0.3   │
│   21    │ 'DK' │  14   │  0.36  │  0.32  │
│   22    │ 'NZ' │  14   │  0.36  │  0.32  │
│   23    │ 'AR' │  13   │  0.33  │  0.33  │
│   24    │ 'CZ' │  13   │  0.33  │  0.33  │
│   25    │ 'FI' │  13   │  0.33  │  0.33  │
│   26    │ 'TW' │  13   │  0.33  │  0.33  │
│   27    │ 'UA' │  12   │  0.3   │  0.35  │
│   28    │ 'PT' │  11   │  0.27  │  0.36  │
│   29    │ 'KR' │  10   │  0.24  │  0.38  │
│   30    │ 'RO' │  10   │  0.24  │  0.38  │
│   31    │ 'GR' │   8   │  0.21  │  0.4   │
│   32    │ 'ID' │   8   │  0.21  │  0.4   │
│   33    │ 'MX' │   8   │  0.21  │  0.4   │
│   34    │ 'HK' │   7   │  0.18  │  0.41  │
│   35    │ 'IE' │   7   │  0.18  │  0.41  │
│   36    │ 'CL' │   6   │  0.15  │  0.42  │
│   37    │ 'IL' │   6   │  0.15  │  0.42  │
│   38    │ 'TH' │   6   │  0.15  │  0.42  │
│   39    │ 'TR' │   6   │  0.15  │  0.42  │
│   40    │ 'HU' │   5   │  0.12  │  0.44  │
│   41    │ 'BY' │   4   │  0.09  │  0.46  │
│   42    │ 'CR' │   3   │  0.06  │  0.47  │
│   43    │ 'PH' │   3   │  0.06  │  0.47  │
│   44    │ 'SK' │   3   │  0.06  │  0.47  │
│   45    │ 'VN' │   3   │  0.06  │  0.47  │
│   46    │ 'BG' │   2   │  0.03  │  0.48  │
│   47    │ 'CO' │   2   │  0.03  │  0.48  │
│   48    │ 'EG' │   2   │  0.03  │  0.48  │
│   49    │ 'EE' │   2   │  0.03  │  0.48  │
│   50    │ 'MY' │   2   │  0.03  │  0.48  │
│   51    │ 'PK' │   2   │  0.03  │  0.48  │
│   52    │ 'RS' │   2   │  0.03  │  0.48  │
│   53    │ 'TN' │   2   │  0.03  │  0.48  │
│   54    │ 'ZA' │   2   │  0.03  │  0.48  │
│   55    │ 'BD' │   1   │   0    │  0.5   │
│   56    │ 'BO' │   1   │   0    │  0.5   │
│   57    │ 'GE' │   1   │   0    │  0.5   │
│   58    │ 'HR' │   1   │   0    │  0.5   │
│   59    │ 'IS' │   1   │   0    │  0.5   │
│   60    │ 'KG' │   1   │   0    │  0.5   │
│   61    │ 'KH' │   1   │   0    │  0.5   │
│   62    │ 'LK' │   1   │   0    │  0.5   │
│   63    │ 'LT' │   1   │   0    │  0.5   │
│   64    │ 'LU' │   1   │   0    │  0.5   │
│   65    │ 'MO' │   1   │   0    │  0.5   │
│   66    │ 'MM' │   1   │   0    │  0.5   │
│   67    │ 'NC' │   1   │   0    │  0.5   │
│   68    │ 'PE' │   1   │   0    │  0.5   │
│   69    │ 'SA' │   1   │   0    │  0.5   │
│   70    │ 'SI' │   1   │   0    │  0.5   │
│   71    │ 'VE' │   1   │   0    │  0.5   │
└─────────┴──────┴───────┴────────┴────────┘
```

##### In case you wonder, the tool architecture diagram (generated by [arkit](https://github.com/dyatko/arkit))

![arkit diagram](arkit.svg?sanitize=true)
