(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{165:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),i=(t(0),t(428)),o={title:"Recursion"},s={id:"version-0.6.0/tutorial/07_recursion",isDocsHomePage:!1,title:"Recursion",description:"Often we want to parse arbitrarily nested structures. Arrays, JSON, XML are such example. To do that, we need to be able to pass the parser to itself. Because of a limitation in PHP, we cannot pass a value around before it is created. The solution is to split this in two steps: create a placeholder for a recursive parser, and then define the parser in terms of itself.",source:"@site/versioned_docs/version-0.6.0/tutorial/07_recursion.md",permalink:"/docs/0.6.0/tutorial/07_recursion",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.0/tutorial/07_recursion.md",version:"0.6.0",sidebar:"version-0.6.0/docs",previous:{title:"Order matters",permalink:"/docs/0.6.0/tutorial/06_order_matters"},next:{title:"Looking ahead",permalink:"/docs/0.6.0/tutorial/08_look_ahead"},latestVersionMainDocPermalink:"/docs"},c=[{value:"Example",id:"example",children:[]},{value:"Using recusion to avoid loops",id:"using-recusion-to-avoid-loops",children:[]}],p={rightToc:c};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Often we want to parse arbitrarily nested structures. Arrays, JSON, XML are such example. To do that, we need to be able to pass the parser to itself. Because of a limitation in PHP, we cannot pass a value around before it is created. The solution is to split this in two steps: create a placeholder for a recursive parser, and then define the parser in terms of itself. "),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"We need to parse nested pairs such as ",Object(i.b)("inlineCode",{parentName:"p"},"[1,[2,[3,4]]]"),". The structure repeats itself, every item in the pair can be either a digit or another pair. "),Object(i.b)("p",null,"We cannot write this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"<?php\n$pair = collect(\n    ignore(char('[')),\n    digit()->or($pair),\n    ignore(char(',')),\n    digit()->or($pair),\n    ignore(char(']')),\n);\n")),Object(i.b)("p",null,'The above results in "Undefined variable: pair" because we\'re trying to use ',Object(i.b)("inlineCode",{parentName:"p"},"$pair")," before it's defined. Instead, we need to mark the parser as ",Object(i.b)("inlineCode",{parentName:"p"},"recursive")," in a first step, and then define how the parser should ",Object(i.b)("inlineCode",{parentName:"p"},"recurse"),": "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n// Create a recursive parser first\n$pair = recursive();\n\n// Then define the parser\n$pair->recurse(\n    between(\n        char('['),\n        char(']'),\n        collect(\n            digitChar()->or($pair)\n                ->thenIgnore(char(',')),\n            digitChar()->or($pair)\n        )\n    ),\n);\n\n$result = $pair->tryString(\"[1,[2,[3,4]]]\");\nassertSame(['1', ['2', ['3', '4']]], $result->output());\n")),Object(i.b)("p",null,"It's possible to nest multiple recursive parsers. Simply initialise them all first using  ",Object(i.b)("inlineCode",{parentName:"p"},"recursive()")," and then define them in terms of each other:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$curlyPair = recursive();\n$squarePair = recursive();\n$anyPair = $curlyPair->or($squarePair);\n\n$inner = collect(\n     digitChar()->or($anyPair)\n         ->thenIgnore(char(',')),\n     digitChar()->or($anyPair)\n );\n\n$curlyPair->recurse(\n    between(char('{'), char('}'), $inner),\n);\n\n$squarePair->recurse(\n    between(char('['), char(']'), $inner),\n\n);\n\n$mixed = \"{1,[2,{3,4}]}\";\n$result = $anyPair->tryString($mixed);\nassertSame(['1', ['2', ['3', '4']]], $result->output());\n")),Object(i.b)("p",null,"Note that when you initialize a parser with ",Object(i.b)("inlineCode",{parentName:"p"},"recursive()"),", it is in fact mutable, and the ",Object(i.b)("inlineCode",{parentName:"p"},"recurse()")," method mutates it. All parsers are immutable, and this is the only exception. After calling ",Object(i.b)("inlineCode",{parentName:"p"},"recurse()"),", the parser is immutable again and behaves just like any other parser."),Object(i.b)("h2",{id:"using-recusion-to-avoid-loops"},"Using recusion to avoid loops"),Object(i.b)("p",null,"Let's say we want to parse the character ",Object(i.b)("inlineCode",{parentName:"p"},"'a'")," at least one time, so that ",Object(i.b)("inlineCode",{parentName:"p"},'"aaab"')," outputs ",Object(i.b)("inlineCode",{parentName:"p"},'"aaa"'),", but ",Object(i.b)("inlineCode",{parentName:"p"},'"bbb"')," fails. Imperatively, you could solve this by running the ",Object(i.b)("inlineCode",{parentName:"p"},"char('a')")," parser in a while loop, and stop on the first failure. We can express it more concisely with recursion though: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Start by parsing ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')"),"."),Object(i.b)("li",{parentName:"ol"},"Append another ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')"),", but this second one is ",Object(i.b)("inlineCode",{parentName:"li"},"optional()"),"."),Object(i.b)("li",{parentName:"ol"},"Append another ",Object(i.b)("inlineCode",{parentName:"li"},"optional(char('a'))")),Object(i.b)("li",{parentName:"ol"},"Notice the similarity between the first two steps. This suggest an opportunity for recursion. "),Object(i.b)("li",{parentName:"ol"},"Wrap our ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')->append(optional(char('a')))")," in a ",Object(i.b)("inlineCode",{parentName:"li"},"recurse()")," parser. "),Object(i.b)("li",{parentName:"ol"},"Replace the second ",Object(i.b)("inlineCode",{parentName:"li"},"char('a')")," by the recursive parser.")),Object(i.b)("p",null,"The end result looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$rec = recursive();\n$rec->recurse(char(\'a\')->append(optional($rec)));\n$result = $rec->tryString("aaab");\nassertEquals("aaa", $result->output());\n')),Object(i.b)("p",null,"In fact the code above is how the ",Object(i.b)("inlineCode",{parentName:"p"},"atLeastOne()")," combinator works, so you can simplify that code by writing this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = atLeastOne(char(\'a\'));\n$result = $parser->tryString("aaab");\nassertEquals("aaa", $result->output());\n')))}l.isMDXComponent=!0},428:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(h,s(s({ref:r},p),{},{components:t})):a.a.createElement(h,s({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);