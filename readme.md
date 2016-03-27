# Terminfo [![Build Status](https://travis-ci.org/chalk/terminfo.svg?branch=master)](https://travis-ci.org/chalk/terminfo)

> Parse the terminfo database


## Install

```
$ npm install --save terminfo
```


## Usage

```js
const terminfo = require('terminfo');

var xterm256 = terminfo('xterm-256color');
```


## API

### terminfo([terminal-name])
Parses the given terminal's information from the terminfo database.

#### input

Type: `string`, optional

The terminal to lookup. If a terminal isn't supplied, defaults to `process.env['TERM'] || 'dummy'`.

#### return

Returns a map of terminal capabilities for the given terminal

## License

MIT © [Josh Junon](https://github.com/qix-)
