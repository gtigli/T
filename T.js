function T(key, src) { // _T reserved keyword
	let t = 'for(let _T in ctx)try{eval("var "+_T+"=ctx."+_T)}catch(e){}let _T={T:"",V:o=>o==null?"":o};'
	for (let s of src.split(/\[([#@][\s\S]*?)#\]/g)) 
		t += s.startsWith('@') ? '_T.T+=_T.V(' + s.slice(1).trim() + ');' : s.startsWith('#') ? s.slice(1) : '_T.T+=`' + s.replace(/`/g, '\\`') + '`;'
	T[key] = Function('ctx', t + 'return _T.T //# sourceURL=T.' + key)
} // v 5.0 - 2021 giovanni tigli - paolo verri