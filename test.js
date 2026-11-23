import fs from 'fs';
import path from 'path';
import test from 'ava';
import terminfo from './';

console.log('TERM:', process.env.TERM);

test('xterm', t => {
	var caps = terminfo('xterm');

	t.ok(caps.bell === '\u0007');
	t.ok(caps.clrEol === '\u001b[K');
	t.ok(caps.clrEos === '\u001b[J');
	t.ok(caps.enterBoldMode === '\u001b[1m');
});

test('dummy', t => {
	var caps = terminfo('dummy');

	t.ok(Object.keys(caps).length === 0);
});

test('windows', t => {
	var caps = terminfo('win32');

	t.ok(caps.maxColors === 8);
	t.ok(caps.columns === 80);
});

test('32-bit numeric capabilities', t => {
	const fixture = fs.readFileSync(path.join(__dirname, 'test/fixtures/t/test-wide'));
	const readFileSync = fs.readFileSync;
	let caps;
	try {
		fs.readFileSync = () => fixture;
		caps = terminfo('test-wide');
	} finally {
		fs.readFileSync = readFileSync;
	}

	t.is(caps.columns, 80);
	t.is(caps.maxPairs, 65536);
	t.is(caps.initTabs, undefined);
	t.is(caps.bell, '\u0007');
});
