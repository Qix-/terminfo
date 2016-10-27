# Terminfo [![Build Status](https://travis-ci.org/chalk/terminfo.svg?branch=master)](https://travis-ci.org/chalk/terminfo)

> Parse the terminfo database


## Install

```
$ npm install --save terminfo
```


## Usage

```js
const terminfo = require('terminfo');

const xterm256 = terminfo('xterm-256color');

console.log(xterm256.enterStandoutMode + 'hello!' + xterm256.exitStandoutMode);
```


## API

### terminfo([terminal-name])
Parses the given terminal's information from the terminfo database.

#### input

Type: `string`, optional

The terminal to lookup. If a terminal isn't supplied, defaults to `process.env['TERM'] || 'dummy'`.

#### return

Returns a map of terminal capabilities for the given terminal

For example, the following is for the `xterm-256color` terminal:

```json
{
  "path": "/usr/share/terminfo/78/xterm-256color",
  "namesSize": 37,
  "boolSize": 38,
  "numCount": 15,
  "offCount": 413,
  "strSize": 1449,
  "names": [
    "xterm-256color",
    "xterm with 256 colors"
  ],
  "autoLeftMargin": false,
  "autoRightMargin": true,
  "noEscCtlc": false,
  "ceolStandoutGlitch": false,
  "eatNewlineGlitch": true,
  "eraseOverstrike": false,
  "genericType": false,
  "hardCopy": false,
  "hasMetaKey": true,
  "hasStatusLine": false,
  "insertNullGlitch": false,
  "memoryAbove": false,
  "memoryBelow": false,
  "moveInsertMode": true,
  "moveStandoutMode": true,
  "overStrike": false,
  "statusLineEscOk": false,
  "destTabsMagicSmso": false,
  "tildeGlitch": false,
  "transparentUnderline": false,
  "xonXoff": false,
  "needsXonXoff": false,
  "prtrSilent": true,
  "hardCursor": false,
  "nonRevRmcup": false,
  "noPadChar": true,
  "nonDestScrollRegion": false,
  "canChange": true,
  "backColorErase": true,
  "hueLightnessSaturation": false,
  "colAddrGlitch": false,
  "crCancelsMicroMode": false,
  "hasPrintWheel": false,
  "rowAddrGlitch": false,
  "semiAutoRightMargin": false,
  "cpiChangesRes": false,
  "lpiChangesRes": false,
  "columns": 80,
  "initTabs": 8,
  "lines": 24,
  "maxColors": 256,
  "maxPairs": 32767,
  "backTab": "\u001b[Z",
  "bell": "\u0007",
  "carriageReturn": "\r",
  "changeScrollRegion": "\u001b[%i%p1%d;%p2%dr",
  "clearAllTabs": "\u001b[3g",
  "clearScreen": "\u001b[H\u001b[2J",
  "clrEol": "\u001b[K",
  "clrEos": "\u001b[J",
  "columnAddress": "\u001b[%i%p1%dG",
  "cursorAddress": "\u001b[%i%p1%d;%p2%dH",
  "cursorDown": "\n",
  "cursorHome": "\u001b[H",
  "cursorInvisible": "\u001b[?25l",
  "cursorLeft": "\b",
  "cursorNormal": "\u001b[?12l\u001b[?25h",
  "cursorRight": "\u001b[C",
  "cursorUp": "\u001b[A",
  "cursorVisible": "\u001b[?12;25h",
  "deleteCharacter": "\u001b[P",
  "deleteLine": "\u001b[M",
  "enterAltCharsetMode": "\u001b(0",
  "enterBlinkMode": "\u001b[5m",
  "enterBoldMode": "\u001b[1m",
  "enterCaMode": "\u001b[?1049h",
  "enterInsertMode": "\u001b[4h",
  "enterSecureMode": "\u001b[8m",
  "enterReverseMode": "\u001b[7m",
  "enterStandoutMode": "\u001b[7m",
  "enterUnderlineMode": "\u001b[4m",
  "eraseChars": "\u001b[%p1%dX",
  "exitAltCharsetMode": "\u001b(B",
  "exitAttributeMode": "\u001b(B\u001b[m",
  "exitCaMode": "\u001b[?1049l",
  "exitInsertMode": "\u001b[4l",
  "exitStandoutMode": "\u001b[27m",
  "exitUnderlineMode": "\u001b[24m",
  "flashScreen": "\u001b[?5h$<100/>\u001b[?5l",
  "init2String": "\u001b[!p\u001b[?3;4l\u001b[4l\u001b>",
  "insertLine": "\u001b[L",
  "keyBackspace": "\b",
  "keyDc": "\u001b[3~",
  "keyDown": "\u001bOB",
  "keyF1": "\u001bOP",
  "keyF10": "\u001b[21~",
  "keyF2": "\u001bOQ",
  "keyF3": "\u001bOR",
  "keyF4": "\u001bOS",
  "keyF5": "\u001b[15~",
  "keyF6": "\u001b[17~",
  "keyF7": "\u001b[18~",
  "keyF8": "\u001b[19~",
  "keyF9": "\u001b[20~",
  "keyHome": "\u001bOH",
  "keyIc": "\u001b[2~",
  "keyLeft": "\u001bOD",
  "keyNpage": "\u001b[6~",
  "keyPpage": "\u001b[5~",
  "keyRight": "\u001bOC",
  "keySf": "\u001b[1;2B",
  "keySr": "\u001b[1;2A",
  "keyUp": "\u001bOA",
  "keypadLocal": "\u001b[?1l\u001b>",
  "keypadXmit": "\u001b[?1h\u001b=",
  "metaOff": "\u001b[?1034l",
  "metaOn": "\u001b[?1034h",
  "parmDch": "\u001b[%p1%dP",
  "parmDeleteLine": "\u001b[%p1%dM",
  "parmDownCursor": "\u001b[%p1%dB",
  "parmIch": "\u001b[%p1%d@",
  "parmIndex": "\u001b[%p1%dS",
  "parmInsertLine": "\u001b[%p1%dL",
  "parmLeftCursor": "\u001b[%p1%dD",
  "parmRightCursor": "\u001b[%p1%dC",
  "parmRindex": "\u001b[%p1%dT",
  "parmUpCursor": "\u001b[%p1%dA",
  "printScreen": "\u001b[i",
  "prtrOff": "\u001b[4i",
  "prtrOn": "\u001b[5i",
  "reset1String": "\u001bc",
  "reset2String": "\u001b[!p\u001b[?3;4l\u001b[4l\u001b>",
  "restoreCursor": "\u001b8",
  "rowAddress": "\u001b[%i%p1%dd",
  "saveCursor": "\u001b7",
  "scrollForward": "\n",
  "scrollReverse": "\u001bM",
  "setAttributes": "%?%p9%t\u001b(0%e\u001b(B%;\u001b[0%?%p6%t;1%;%?%p2%t;4%;%?%p1%p3%|%t;7%;%?%p4%t;5%;%?%p7%t;8%;m",
  "setTab": "\u001bH",
  "tab": "\t",
  "keyB2": "\u001bOE",
  "acsChars": "``aaffggiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz{{||}}~~",
  "keyBtab": "\u001b[Z",
  "enterAmMode": "\u001b[?7h",
  "exitAmMode": "\u001b[?7l",
  "keyEnd": "\u001bOF",
  "keyEnter": "\u001bOM",
  "keySdc": "\u001b[3;2~",
  "keySend": "\u001b[1;2F",
  "keyShome": "\u001b[1;2H",
  "keySic": "\u001b[2;2~",
  "keySleft": "\u001b[1;2D",
  "keySnext": "\u001b[6;2~",
  "keySprevious": "\u001b[5;2~",
  "keySright": "\u001b[1;2C",
  "keyF11": "\u001b[23~",
  "keyF12": "\u001b[24~",
  "keyF13": "\u001b[1;2P",
  "keyF14": "\u001b[1;2Q",
  "keyF15": "\u001b[1;2R",
  "keyF16": "\u001b[1;2S",
  "keyF17": "\u001b[15;2~",
  "keyF18": "\u001b[17;2~",
  "keyF19": "\u001b[18;2~",
  "keyF20": "\u001b[19;2~",
  "keyF21": "\u001b[20;2~",
  "keyF22": "\u001b[21;2~",
  "keyF23": "\u001b[23;2~",
  "keyF24": "\u001b[24;2~",
  "keyF25": "\u001b[1;5P",
  "keyF26": "\u001b[1;5Q",
  "keyF27": "\u001b[1;5R",
  "keyF28": "\u001b[1;5S",
  "keyF29": "\u001b[15;5~",
  "keyF30": "\u001b[17;5~",
  "keyF31": "\u001b[18;5~",
  "keyF32": "\u001b[19;5~",
  "keyF33": "\u001b[20;5~",
  "keyF34": "\u001b[21;5~",
  "keyF35": "\u001b[23;5~",
  "keyF36": "\u001b[24;5~",
  "keyF37": "\u001b[1;6P",
  "keyF38": "\u001b[1;6Q",
  "keyF39": "\u001b[1;6R",
  "keyF40": "\u001b[1;6S",
  "keyF41": "\u001b[15;6~",
  "keyF42": "\u001b[17;6~",
  "keyF43": "\u001b[18;6~",
  "keyF44": "\u001b[19;6~",
  "keyF45": "\u001b[20;6~",
  "keyF46": "\u001b[21;6~",
  "keyF47": "\u001b[23;6~",
  "keyF48": "\u001b[24;6~",
  "keyF49": "\u001b[1;3P",
  "keyF50": "\u001b[1;3Q",
  "keyF51": "\u001b[1;3R",
  "keyF52": "\u001b[1;3S",
  "keyF53": "\u001b[15;3~",
  "keyF54": "\u001b[17;3~",
  "keyF55": "\u001b[18;3~",
  "keyF56": "\u001b[19;3~",
  "keyF57": "\u001b[20;3~",
  "keyF58": "\u001b[21;3~",
  "keyF59": "\u001b[23;3~",
  "keyF60": "\u001b[24;3~",
  "keyF61": "\u001b[1;4P",
  "keyF62": "\u001b[1;4Q",
  "keyF63": "\u001b[1;4R",
  "clrBol": "\u001b[1K",
  "user6": "\u001b[%i%d;%dR",
  "user7": "\u001b[6n",
  "user8": "\u001b[?1;2c",
  "user9": "\u001b[c",
  "origPair": "\u001b[39;49m",
  "initializeColor": "\u001b]4;%p1%d;rgb:%p2%{255}%*%{1000}%/%2.2X/%p3%{255}%*%{1000}%/%2.2X/%p4%{255}%*%{1000}%/%2.2X\u001b\\",
  "keyMouse": "\u001b[M",
  "setAForeground": "\u001b[%?%p1%{8}%<%t3%p1%d%e%p1%{16}%<%t9%p1%{8}%-%d%e38;5;%p1%d%;m",
  "setABackground": "\u001b[%?%p1%{8}%<%t4%p1%d%e%p1%{16}%<%t10%p1%{8}%-%d%e48;5;%p1%d%;m"
}
```

## License

MIT © [Josh Junon](https://github.com/qix-)
