const T = new Proxy(function (src = '', val = {}, et = true) {
	let t = 'const _T={T:"",V:o=>o==null?"":o};'
	for (let s of src.split(/\[([#@][\s\S]*?)#\]/g))
		t += s.startsWith('@') ? '_T.T+=_T.V(' + s.slice(1).trim() + ');' : s.startsWith('#') ? s.slice(1) : '_T.T+=`' + s.replace(/`/g, '\\`') + '`;'
	return et ? Function('ctx', t + 'return _T.T')(val) : Function('ctx = {}', t + 'return _T.T //# sourceURL=T.' + val);
}, {
	set(target, prop, value) {
		target[prop] = target(value, prop, false);
		return true;
	},
	apply(target, thisArg, argumentsList) {
		return target(argumentsList[0], argumentsList[1]);
	}
})

function Q(q) {
	return document.querySelector(q)
}
