This is an example note.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Emphasis

Emphasis aka italic: `*asterisks* or _underscores_` *asterisks* or _underscores_

Strong: `**asterisks** or __underscores__` **asterisks** or __underscores__

Emphasis  an strong: `**asterisks and _underscores_**` **asterisks and _underscores_**

Strikethrough: `~~Scratch this.~~` ~~Scratch this.~~

Highlight: `==highlight==`  ==highlight==

## Lists

1. First ordered list item
2. Another item
   * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)


* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"


## Code and Syntax Highlighting

Inline `code` has `back-ticks around` it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
```

## Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| This is a table | For real | Yess  |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
==hello== | 2 | 3

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

## Horizontal Rule

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Line Breaks

Here's a line for us to start with.

This line and other lines under it
only separated by one new line character
so it still a one line.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

## Emoji

You can insert emoji using unicode or it's github shortname.
For example, `:tent:` will make a :tent:, while `:U+1F44B:` will make :U+1F44B:.

You can find list of shortname [here](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#flags)
and list of unicode names [from this link](https://unicode.org/emoji/charts/full-emoji-list.html).

## Commands

Commands can be inserted insert a 'double colon' pair, i.e `::command_name::`.

Commands can have optional options, inserted after command name and separated by a colon
and separated from each other by a pipe. i.e `::command_name:op_1|op_2::

Currently supported commands:

### Table Of Content

Use `::table_of_content::`.

Content of the table will be all heading tag

**Options**:

This command comes with greate some styling options for the table
or each heading level

Options have 2 parts: `scope` and `modifier`.
Combine a scope then a `_` and a modifier.

Example: `toc_underline`, `h3_exclude`.


#### Scope name

| Tag nane | Explains |
| --- | --- |
| toc | The whole table of content |
| h1 | `# first level` |
| h2 | `## second level` |
| h3 | `### third level` |
| h4 | `#### fouth level` |
| h5 | `##### fifth level` |
| h6 | `####### six level` | 

#### Line modifiers

**Scope**: `toc`, `h{n}`.

| Modifiers name | Render |
| -------------- | ------ |
| none           | <span style="text-decoration-line: none">heading</style>         |
| underline      | <span style="text-decoration-line: underline">heading</style>    |
| overine        | <span style="text-decoration-line: overline">heading</style>     |
| line-through   | <span style="text-decoration-line: line-through">heading</style> |

#### Line style modifiers

**Scope**: `toc`, `h{n}`.

Must have a line modifier for this to have effect.

| Modifiers name | Render |
| -------------- | ------ |
| solid          | <span style="text-decoration-line: underline; text-decoration-style: solid">heading</style>  |
| double         | <span style="text-decoration-line: underline; text-decoration-style: double">heading</style> |
| dashe          | <span style="text-decoration-line: underline; text-decoration-style: dotted">heading</style> |
| dotted         | <span style="text-decoration-line: underline; text-decoration-style: dashed">heading</style> |
| wavy           | <span style="text-decoration-line: underline; text-decoration-style: wavy">heading</style>   |

#### Font style modifier

**Scope**: `toc`, `h{n}`

| Modifiers name | Render |
| -------------- | ------ |
| normal         | <span style="font-style: normal">heading</style>  |
| italic         | <span style="font-style: italic">heading</style>  |
| oblique        | <span style="font-style: oblique">heading</style> |

#### Font weight modifier

**Scope**: `toc`, `h{n}`

| Modifiers name | Render |
| -------------- | ------ |
| thin           | <span style="font-weight: 100">heading</style> |
| extralight     | <span style="font-weight: 200">heading</style> |
| light          | <span style="font-weight: 300">heading</style> |
| ordinary       | <span style="font-weight: 400">heading</style> |
| medium         | <span style="font-weight: 500">heading</style> |
| semibold       | <span style="font-weight: 600">heading</style> |
| bold           | <span style="font-weight: 700">heading</style> |
| extrabold      | <span style="font-weight: 800">heading</style> |
| back           | <span style="font-weight: 900">heading</style> |

#### Color modifier

**Scope**: `toc`, `h{n}`

**Name**: `color_{color_name|color_hash_code}`

`color_name` is a valid _css_ color name.
Ex: `color_red`, `colode_aquamarine`

`color_hash_code` is a vaidl _css_ color hash code.
Ex: `color_#ff0000`, `color_#00FBDECE`.

Change color of `scope`.

#### Exclude modifier

**Scope**: `h{n}`

**Name**: `exclude`

Remove headings from table of content.

#### Indent modifier

**Scope**: `toc`

**Name**: `indent_{n}`

Indent table of content.

`n` can be a negative to indent backwards.

#### No link modifier

**Scope**: `toc`

**Name**: `no_link`

Make table of content text only.

Examples:

Normal table of content:

::table_of_content::

With options:

::table_of_content:toc_indent_2|toc_no_link|h1_underline|h2_line-through|h2_color_red|h2_medium|h3_exclude|h4_extrabold|h4_color_blue|h4_overline|h4_wavy|h5_thin::

## HTML tags

HTML tags are **not sanitized** (this is intentional). Use set can put any tag they want. For example:

`<strong>strong</strong>` will create <strong>strong</strong> and have the same effect as **strong**.

`<input></input>` will create <input></input>

```html
<button onclick="alert('hello')" style="border: black solid 2px;">click me</button>
```
will create <button onclick="alert('hello')" style="border: black solid 2px">click me</button> 


```html
<button
    onclick="alert('hello')"
    style="border: black solid 2px; border-radius: 5px; padding: 3px 2px"
>
    click me
</button>
```
will create
<button onclick="alert('hello')" style="border: black solid 2px; border-radius: 5px; padding: 3px 2px">click me</button>

**Use this at you own risk.**
