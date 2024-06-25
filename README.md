### Hexlet tests and linter status:
[![Actions Status](https://github.com/AnPopit/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AnPopit/frontend-project-46/actions)
<a href="https://codeclimate.com/github/AnPopit/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/ee91eeef6631ce8702e6/maintainability" /></a>
<a href="https://codeclimate.com/github/AnPopit/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ee91eeef6631ce8702e6/test_coverage" /></a>
Project "Difference Calculator"
Minimum requirements: Node.js v20.11.1
Launch: node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json 
Valid options: -V, --version; -f, --format [type]; -h, --help
This project finds differences between files and outputs the difference in a specific format. Acceptable input file formats:
-json
-yaml, yml
Possible output formats:
-stylish
-plain
-json
Plain File Comparison in format "json"
[![asciicast](https://asciinema.org/a/3PmZMon2bKK9rS5UFT9QAL3kT.svg)](https://asciinema.org/a/3PmZMon2bKK9rS5UFT9QAL3kT)
Plain File Comparison in format "json", "yaml"
[![asciicast](https://asciinema.org/a/29DftIy0ZTKKz9UBua9W05Kst.svg)](https://asciinema.org/a/29DftIy0ZTKKz9UBua9W05Kst)
Comparison of nested files in format "json":
output formats: stylish
node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json 
[![asciicast](https://asciinema.org/a/W0WNZfZ9606fl1MVnKZq6D4ec.svg)](https://asciinema.org/a/W0WNZfZ9606fl1MVnKZq6D4ec)
output formats: plain
node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json -f 'plain'
[![asciicast](https://asciinema.org/a/xodEwF1YJRoKTHb5ucPOhPPaD.svg)](https://asciinema.org/a/xodEwF1YJRoKTHb5ucPOhPPaD)
output formats: json
node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json -f 'json'
[![asciicast](https://asciinema.org/a/zqT9SmsTJyQ3VSMWQf7mrBY2B.svg)](https://asciinema.org/a/zqT9SmsTJyQ3VSMWQf7mrBY2B)
Comparison of nested files in format "yaml":
output formats: stylish
node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml 
[![asciicast](https://asciinema.org/a/4yMvV8GiVNtpHM5RliMMyAANM.svg)](https://asciinema.org/a/4yMvV8GiVNtpHM5RliMMyAANM)
output formats: plain
node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml -f 'plain'
[![asciicast](https://asciinema.org/a/kB6OmY3P5mFj1ElLD3EGIhliF.svg)](https://asciinema.org/a/kB6OmY3P5mFj1ElLD3EGIhliF)
output formats: json
node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml -f 'json'
[![asciicast](https://asciinema.org/a/Liq2mKw2xKLsVtRhz365xIhQk.svg)](https://asciinema.org/a/Liq2mKw2xKLsVtRhz365xIhQk)

