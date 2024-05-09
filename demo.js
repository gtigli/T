function init() {
	Q('#inner').innerHTML = T.main()
}

function query(str) {
	var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search"
	 + "&srsearch=" + encodeURI(str)
	 + "&sroffset=0&srlimit=15"
	 + "&origin=*"

	fetch(url, { method: "GET" })
		.then(resp => resp.json())
		.then(json => processQueryResult(json))
}

function processQueryResult(json) {
	Q("#results").innerHTML = T.results({res: json})
}

var res;

function show(pageid) {
	var url="https://en.wikipedia.org/w/api.php?origin=*&format=json&action=parse&prop=text&pageid="+pageid;

	fetch(url, { method: "GET" })
		.then(resp => resp.json())
		.then(json => processPreview(json))
}

function processPreview(json) {
console.log(json);
	Q("#preview").innerHTML = json.parse.text['*']
}