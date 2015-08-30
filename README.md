markdownReader
==============

markdownReader is a extention for chrome, used for reading markdown file.

Features:
==============

1. Reading markdown file
2. Auto reload local file when file is changed
3. Highlight the code area
4. Show outline beside the content
5. Support extension: Tasklist, table, LaTeX
6. Toggle raw mode and markdown mode by double Click

Install
==============

1. Install plugin: [https://chrome.google.com/webstore/detail/markdown-reader/gpoigdifkoadgajcincpilkjmejcaanc](https://chrome.google.com/webstore/detail/markdown-reader/gpoigdifkoadgajcincpilkjmejcaanc)
2. Open plugin center: [chrome://extensions/](chrome://extensions/), and enable file url for markdownReader
3. Drag md file to chrome

Demo
=============

Tasklist:
---------------

- [x] This task is done
- [ ] This is still pending

Code:
-----------------

    | Left-Aligned  | Center Aligned  | Right Aligned |
    | :------------ |:---------------:| -----:|
    | **col 3 is**      | some wordy text | $1600 |
    | ~~col 2 is~~      | centered        |   $12 |
    | zebra stripes | are neat        |    $1 |

```
function test() {
  console.log("notice the blank line before this function?");
}
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

Table:
---------------

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| **col 3 is**      | some wordy text | $1600 |
| ~~col 2 is~~      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

LaTeX:
---------------

Inline LaTeX: $$E=mc^2$$

Block LaTeX:

$$
E=mc^2
$$

Escaped LaTeX: \$$E=mc^2$$

License
================

markdownReader is released under the MIT license:

> The MIT License
>
> Copyright (c) 2014-2015 Yanis Wang \< yanis.wang@gmail.com \>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

Thanks
================

* showdown.js: [https://github.com/showdownjs/showdown](https://github.com/showdownjs/showdown)
* Katex: [https://github.com/Khan/KaTeX](https://github.com/Khan/KaTeX)
* prettify: [http://code.google.com/p/google-code-prettify/](http://code.google.com/p/google-code-prettify/)
* GitHub: [https://github.com/](https://github.com/)