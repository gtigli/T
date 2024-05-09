# T

Simple template engine, client-side

Define a template with: T('templatename', `template content...`)

Render a template with T.templatename({... hahahah})

# Usage

In this project is included a demo, namely composed by these files:
- index.html
- demo.html
- demo.js
- demo.css

# Bootstrap file: index.html

The initial file should:
- include T.js
- include the demo-related files (demo.html, demo.js, demo.css)
- in the body, put a `<div id="inner"></div>`
- in the body tag, use a `onload="init()"` and define it in "demo.js"

