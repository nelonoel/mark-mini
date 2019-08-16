const test = require('ava')
const mark = require('./index.js')

test('inline-level formatting', t => {
	const str = '_italic_ **bold** `code` [link](#link) ~~strikethrough~~'
	const html = '<em>italic</em> <strong>bold</strong> <code>code</code> <a href="#link">link</a> <s>strikethrough</s>'
	t.is(mark(str), html)
})

test('linked code-block', t => {
	const str = "Hey I'm a [`linked inline code block`](https://nelo.is)!"
	const html = `Hey I’m a <a href="https://nelo.is"><code>linked inline code block</code></a>!`
	t.is(mark(str), html)
})

test('autolinking', t => {
	const str = 'https://nelo.is, addintent.com'
	const html = '<a href="https://nelo.is">https://nelo.is</a>, <a href="http://addintent.com">addintent.com</a>'
	t.is(mark(str), html)
})

test('disabled block-level formatting', t => {
	const str = `# Heading ![avatar](https://nelo.is/avatar.png "Nelo")`
	const html = '# Heading !<a href="https://nelo.is/avatar.png" title="Nelo">avatar</a>'
	t.is(mark(str), html)
})
