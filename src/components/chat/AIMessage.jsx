import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import useChatStore from "../../hooks/useChatStore";

const markdown = `
Pretty neat, eh?

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
[remark-gfm](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ remark-gfm |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

## HTML in markdown

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

# A demo of react-markdown

react-markdown is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using dangerouslySetInnerHTML
* Lets you define your own components (to render MyHeading instead of 'h1')
* Has a lot of plugins

## Contents

Here is an example of a plugin in action
([remark-toc](https://github.com/remarkjs/remark-toc)).
**This section is replaced by an actual table of contents**.

## Syntax highlighting

Here is an example of a plugin to highlight code:
[rehype-highlight](https://github.com/rehypejs/rehype-highlight).
~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'

ReactDOM.render(
  <Markdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr(props) {
        const {node, ...rest} = props
        return <MyFancyRule {...rest} />
      }
    }}
  >
    {markdown}
  </Markdown>,
  document.querySelector('#content')
)
~~~
`;

const math = `
$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

$$
\\frac{d_{mse}}{d_m}=-\\frac{2}{n}\\sum_{i=1}^n(y_i - (m*x_i+c)) * x_i
$$
And the derivative with respect to $c$ is:
$$
\\frac{d_{mse}}{d_c}=-\\frac{2}{n}\\sum_{i=1}^n(y_i - (m*x_i+c))
$$
So, after one iteration of the dataset, we calculate the gradient of $m$ and $c$. The update rule of $m$ and $c$ is:
$$
m = m - \\frac{d_{mse}}{d_m} * lr \\newline
c = c - \\frac{d_{mse}}{d_c} * lr 
$$

Lift($$L$$) can be determined by Lift Coefficient ($$C_L$$) like the following
equation.
`;

const AIMessage = () => {
  const aiMessage = useChatStore((state) => state.aiMessage);

  return (
    <div className="px-8 w-full">
      <Markdown
        className="w-full prose text-white prose-headings:text-white prose-p:text-white prose-a:text-blue-400 prose-strong:text-white prose-code:text-white !max-w-none"
        remarkPlugins={[remarkMath, remarkGfm, remarkParse]}
        rehypePlugins={[rehypeKatex]}
      >
        {markdown}
      </Markdown>
    </div>
  );
};

export default AIMessage;
