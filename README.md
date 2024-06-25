### Hexlet tests and linter status:
[![Actions Status](https://github.com/AnPopit/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/AnPopit/frontend-project-46/actions)
<a href="https://codeclimate.com/github/AnPopit/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/ee91eeef6631ce8702e6/maintainability" /></a>
<a href="https://codeclimate.com/github/AnPopit/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ee91eeef6631ce8702e6/test_coverage" /></a>
<h1>Project "Difference Calculator"</h1>
<h2>Minimum requirements:</h2><p>Node.js v20.11.1</p>
<h2>Launch:</h2> <p>node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json </p>
<h2>Valid options:</h2> <p>-V, --version; -f, --format [type]; -h, --help</p>
<h3>This project finds differences between files and outputs the difference in a specific format. Acceptable input file formats:</h3>
<ul>
<li>json</li>
<li>yaml, yml</li>
</ul>
<h3>Possible output formats:</h3>
<ul>
<li>stylish</li>
<li>plain</li>
<li>json</li>
</ul>
<h2>Plain File Comparison in format "json"</h2>
<a href="https://asciinema.org/a/3PmZMon2bKK9rS5UFT9QAL3kT" target="_blank"><img src="https://asciinema.org/a/3PmZMon2bKK9rS5UFT9QAL3kT.svg" /></a>
<h2>Plain File Comparison in format "json", "yaml"</h2>
<a href="https://asciinema.org/a/29DftIy0ZTKKz9UBua9W05Kst" target="_blank"><img src="https://asciinema.org/a/29DftIy0ZTKKz9UBua9W05Kst.svg" /></a>
<h2>Comparison of nested files in format "json":</h2>
<h3>output formats: stylish</h3>
<p>node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json </p>
<a href="https://asciinema.org/a/W0WNZfZ9606fl1MVnKZq6D4ec" target="_blank"><img src="https://asciinema.org/a/W0WNZfZ9606fl1MVnKZq6D4ec.svg" /></a>
<h3>output formats: plain</h3>
<p>node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json -f 'plain'</p>
<a href="https://asciinema.org/a/xodEwF1YJRoKTHb5ucPOhPPaD" target="_blank"><img src="https://asciinema.org/a/xodEwF1YJRoKTHb5ucPOhPPaD.svg" /></a>
<h3>output formats: json</h3>
<p>node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json -f 'json'</p>
<a href="https://asciinema.org/a/zqT9SmsTJyQ3VSMWQf7mrBY2B" target="_blank"><img src="https://asciinema.org/a/zqT9SmsTJyQ3VSMWQf7mrBY2B.svg" /></a>
<h2>Comparison of nested files in format "yaml":</h2>
<h3>output formats: stylish</h3>
<p>node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml </p>
<a href="https://asciinema.org/a/4yMvV8GiVNtpHM5RliMMyAANM" target="_blank"><img src="https://asciinema.org/a/4yMvV8GiVNtpHM5RliMMyAANM.svg" /></a>
<h3>output formats: plain</h3>
<p>node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml -f 'plain'</p>
<a href="https://asciinema.org/a/kB6OmY3P5mFj1ElLD3EGIhliF" target="_blank"><img src="https://asciinema.org/a/kB6OmY3P5mFj1ElLD3EGIhliF.svg" /></a>
<h3>output formats: json</h3>
<p>node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml -f 'json'</p>
<a href="https://asciinema.org/a/Liq2mKw2xKLsVtRhz365xIhQk" target="_blank"><img src="https://asciinema.org/a/Liq2mKw2xKLsVtRhz365xIhQk.svg" /></a>

