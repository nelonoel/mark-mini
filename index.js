const md = require('markdown-it')({
	linkify: true,
	typographer: true,
	xhtmlOut: true
}).disable(['image'])

function mark(src) {
	return md.renderInline(src)
}

module.exports = mark
