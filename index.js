'use strict';

var fs = require('fs');

var boolOptions = require('./boolean-opts.json');
var numberOptions = require('./number-opts.json');
var stringOptions = require('./string-opts.json');

function getTerminfoBuffer(name) {
	var path;
	try {
		path = '/usr/share/terminfo/' + name.charCodeAt(0).toString(16).toUpperCase() + '/' + name;
		return {path: path, buf: fs.readFileSync(path)};
	} catch (e) {
		try {
			path = '/usr/share/terminfo/' + name[0] + '/' + name;
			return {path: path, buf: fs.readFileSync(path)};
		} catch (e) {
			throw new Error('unknown TERM name: ' + name);
		}
	}
}

function toCString(buf, offset) {
	var end = offset;
	while (buf[end++] !== 0) { /* :) */ }
	return buf.toString('ascii', offset, end - 1);
}

function parseTermBuffer(bufPair, name) {
	var buf = bufPair.buf;
	var offset = 0;
	var i;

	// magic number
	var magic = buf.readInt16LE(offset);
	offset += 2;

	if (magic !== 0x11A) {
		throw new Error('terminfo for ' + name + ' has invalid magic number');
	}

	var result = {
		path: bufPair.path,
		namesSize: buf.readInt16LE(offset),
		boolSize: buf.readInt16LE(offset + 2),
		numCount: buf.readInt16LE(offset + 4),
		offCount: buf.readInt16LE(offset + 6),
		strSize: buf.readInt16LE(offset + 8)
	};
	offset += 10;

	// names (usually a descriptive name along with the $TERM name)
	result.names = buf.toString('ascii', offset, offset + result.namesSize - 1).split('|');
	offset += result.namesSize;

	// bools
	if (result.boolSize < boolOptions.length) {
		throw new Error('terminfo for ' + name + ' has invalid boolean section size (' + result.boolSize + ' < ' + boolOptions.length + ')');
	}

	boolOptions.forEach(function (opt, i) {
		result[opt] = Boolean(buf.readInt8(offset + i));
	});
	offset += result.boolSize;
	offset += offset % 2; // shorts are aligned to short boundary in file

	// numbers
	for (i = 0; i < result.numCount && i < numberOptions.length; i++) {
		var num = buf.readInt16LE(offset + (2 * i));
		if (num !== -1) {
			result[numberOptions[i]] = num;
		}
	}
	offset += 2 * result.numCount;

	// strings
	var offsetTable = offset + (result.offCount * 2);
	for (i = 0; i < result.offCount && i < stringOptions.length; i++) {
		var off = buf.readInt16LE(offset + (2 * i));
		if (off !== -1) {
			result[stringOptions[i]] = toCString(buf, offsetTable + off);
		}
	}

	return result;
}

module.exports = function (term) {
	if ((!term && process.platform === 'win32') || term === 'win32') {
		return require('./windows-profile.json');
	}

	term = term || process.env.TERM || 'dummy';

	if (term === 'dummy') {
		return {};
	}

	var infoBuffer = getTerminfoBuffer(term);
	return parseTermBuffer(infoBuffer, term);
};
