import test from 'ava';
import terminfo from './';

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
