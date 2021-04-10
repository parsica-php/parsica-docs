(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{318:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(469)),i={title:"Performance",sidebar_label:"Performance"},s={id:"version-0.8.0/resources/02_performance",isDocsHomePage:!1,title:"Performance",description:"At the time of writing, no effort has been made to measure the performance of Parsica. That doesn't mean it's slow; it means that we don't know yet. If you're going to use this on large amounts of data, do some profiling yourself first. Compute == carbon, and we'd like to keep this planet a little longer. You can help by contributing your profiling and optimisations.",source:"@site/versioned_docs/version-0.8.0/resources/02_performance.md",permalink:"/docs/0.8.0/resources/02_performance",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.8.0/resources/02_performance.md",version:"0.8.0",sidebar_label:"Performance",sidebar:"version-0.8.0/docs",previous:{title:"Development Status",permalink:"/docs/0.8.0/resources/01_development_status"},next:{title:"Naming Conventions",permalink:"/docs/0.8.0/resources/03_naming_conventions"},latestVersionMainDocPermalink:"/docs"},c=[{value:"XDebug",id:"xdebug",children:[]},{value:"Recursion",id:"recursion",children:[]},{value:"Performance tips",id:"performance-tips",children:[{value:"Reusing parsers is faster than rebuilding them",id:"reusing-parsers-is-faster-than-rebuilding-them",children:[]},{value:"Use predicates over higher level combinators",id:"use-predicates-over-higher-level-combinators",children:[]}]},{value:"Backtracking is slower",id:"backtracking-is-slower",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At the time of writing, no effort has been made to measure the performance of Parsica. That doesn't mean it's slow; it means that we don't know yet. If you're going to use this on large amounts of data, do some profiling yourself first. Compute == carbon, and we'd like to keep this planet a little longer. You can help by contributing your profiling and optimisations. "),Object(o.b)("p",null,"We have some ideas that will allow us to make it very efficient, and we intend to do that before getting to a 1.0 release."),Object(o.b)("h2",{id:"xdebug"},"XDebug"),Object(o.b)("p",null,"Turn off XDebug, as it will make things much slower. If you do turn on XDebug, you may get ",Object(o.b)("inlineCode",{parentName:"p"},"Maximum function nesting level of '256' reached, aborting!"),". Increase the nesting level until the error goes away, either in code or in ",Object(o.b)("inlineCode",{parentName:"p"},"php.ini"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\nini_set('xdebug.max_nesting_level', '1024');\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"xdebug.max_nesting_level=1024\n")),Object(o.b)("h2",{id:"recursion"},"Recursion"),Object(o.b)("p",null,'If you encounter a "Maximum function nesting level" error, the more likely problem is that you\'re building a recursive parser incorrectly. Have a look at the documentation page about recursion to learn more.'),Object(o.b)("h2",{id:"performance-tips"},"Performance tips"),Object(o.b)("p",null,"Below we'll list some approaches to improve performance. "),Object(o.b)("p",null,"The actual difference in performance depends on many factors, so measure your parsers' performance to know if it is actually faster."),Object(o.b)("h3",{id:"reusing-parsers-is-faster-than-rebuilding-them"},"Reusing parsers is faster than rebuilding them"),Object(o.b)("p",null,"Storing parsers in a variable or property is often faster than rebuilding them. Compare the these two equivalent parsers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$slow = between(\n    choice(char('\"'), char(\"'\")),\n    choice(char('\"'), char(\"'\")),\n    atLeastOne(alphaNumChar())\n);\n\n$quote = choice(char('\"'), char(\"'\"));\n$fast = between(\n    $quote,\n    $quote,\n    atLeastOne(alphaNumChar())\n);\n")),Object(o.b)("h3",{id:"use-predicates-over-higher-level-combinators"},"Use predicates over higher level combinators"),Object(o.b)("p",null,"Often, a combinator may be replaced with lower level combinators to get the same result faster. For example, the following parsers are equivalent, but the second one is a lot faster:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$somePredicate = isDigit();\n$slow = zeroOrMore(satisfy($somePredicate));\n$fast = takeWhile($somePredicate);\n")),Object(o.b)("p",null,"The reason is that ",Object(o.b)("inlineCode",{parentName:"p"},"$slow")," reads one token at a time, and then appends it to the previous tokens. ",Object(o.b)("inlineCode",{parentName:"p"},"$fast")," on the other hand, reads all the tokens until ",Object(o.b)("inlineCode",{parentName:"p"},"$predicate")," fails, and then returns them all at once. "),Object(o.b)("h2",{id:"backtracking-is-slower"},"Backtracking is slower"),Object(o.b)("p",null,"If your parser parses a long input, only to need to backtrack the whole thing when it fails, it's going to be slow. A better alternative is to organise your usage of choice in a way that only small chunks of the input need to be backtracked. "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = choice(\n    atLeastOne(alphaChar())->thenEof(), \n    atLeastOne(alphaNumChar())->thenEof()\n);\n$result = $parser->tryString("abc123");\n')),Object(o.b)("p",null,'In this example, the choice parser parses "abc", fails on "1", backtracks, and then parses all of "abc123". If we switch the two parsers inside the choice parser, we are more likely to reach the end of the input without doing any backtracking.    '))}p.isMDXComponent=!0},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);