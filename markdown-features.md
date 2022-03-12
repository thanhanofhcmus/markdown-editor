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


## Emoji

You can insert emoji using unicode or it's github shortname.
For example, `:tent:` will make a :tent:, while `:U+1F44B:` will make :U+1F44B:.

You can find list of shortname [here](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#flags)
and list of unicode names [from this link](https://unicode.org/emoji/charts/full-emoji-list.html).


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

## HTML tags

HTML tags are **not sanitized** (this is intentional). Use set can put any tag they want. For example:

`<strong>strong</strong>` will create <strong>strong</strong> and have the same effect as **strong**.

`<input></input>` will create <input></input>

`<button onclick="alert('hello')" style="border: black solid 2px;>click me<button>`
will create <button onclick="alert('hello')" style="border: black solid 2px">click me<button> 


```html
<button
    onclick="alert('hello')"
    style="border: black solid 2px; border-radius: 5px; padding: 3px 2px"
>
    click me
<button>
```
will create
<button onclick="alert('hello')" style="border: black solid 2px; border-radius: 5px; padding: 3px 2px">click me<button>

**Use this at you own risk.**


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
