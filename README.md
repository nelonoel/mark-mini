##### mark-mini
###### Inline Markdown Parser
---

### Introduction
This is just a convenience package for [`markdown-it`][markdownIt]'s [`renderInline()`][renderInline].
This is created for using a limited subset of the Markdown syntax for use in comments,
contact fields, etc.

### Installation
```bash
npm install --save mark-mini
```

### Usage
```js
import mark from 'mark-mini'

const html = mark("Hey I'm a [`linked inline code block`](https://nelo.is)!")
// Hey I’m a <a href="https://nelo.is"><code>linked inline code block</code></a>!
```

### Rules enabled
 - `_italic_`
 - `**strong**`
 - ``` `code` ```
 - `~~strikethrough~~`
 - `[links](#links)` with auto-linking

Customizing [`markdown-it`][markdownIt] to accommodate your own rules should be easy. 😉

[markdownIt]: https://github.com/markdown-it/markdown-it
[renderInline]: https://markdown-it.github.io/markdown-it/#MarkdownIt.renderInline
