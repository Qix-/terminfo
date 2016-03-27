import test from 'ava';
import terminfo from './';

test('xterm-256color', t => {
	var caps = terminfo('xterm-256color');

	t.ok(caps.bell === '\u0007');
	t.ok(caps.clrEol === '\u001b[K');
	t.ok(caps.clrEos === '\u001b[J');
	t.ok(caps.enterBoldMode === '\u001b[1m');
});

test('dummy', t => {
	var caps = terminfo('dummy');

	t.ok(Object.keys(caps).length === 0);
});
