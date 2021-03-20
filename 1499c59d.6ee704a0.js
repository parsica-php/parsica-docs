(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),i=(r(0),r(428)),s={title:"Building Blocks"},o={id:"version-0.6.1/tutorial/02_building_blocks",isDocsHomePage:!1,title:"Building Blocks",description:"Predicates",source:"@site/versioned_docs/version-0.6.1/tutorial/02_building_blocks.md",permalink:"/docs/0.6.1/tutorial/02_building_blocks",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.1/tutorial/02_building_blocks.md",version:"0.6.1",sidebar:"version-0.6.1/docs",previous:{title:"What are parser combinators?",permalink:"/docs/0.6.1/tutorial/01_introduction"},next:{title:"Using Combinators",permalink:"/docs/0.6.1/tutorial/03_combinators"},latestVersionMainDocPermalink:"/docs"},p=[{value:"Predicates",id:"predicates",children:[]},{value:"Character parsers",id:"character-parsers",children:[]},{value:"Strings",id:"strings",children:[]},{value:"Other parsers",id:"other-parsers",children:[]}],c={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"predicates"},"Predicates"),Object(i.b)("p",null,"The simplest building block is a parser that only considers the first character of an input. If the character satisfies some condition, we consume it from the input. We could write that with some ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statements and ",Object(i.b)("inlineCode",{parentName:"p"},"substr")," calls, but Parsica provides abstractions for that."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = satisfy(isEqual(\'a\'));\n$input = "abc";\n$result = $parser->tryString($input);\nassertEquals("a", $result->output());\nassertEquals("bc", $result->remainder());\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"isEqual('a')")," is a predicate. If you call it with another argument, you get a boolean: ",Object(i.b)("inlineCode",{parentName:"p"},"isEqual('a')('b') == false"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"satisfy($predicate)")," is a function returns a ",Object(i.b)("inlineCode",{parentName:"p"},"Parser")," object. You can think of it as a parser constructor. This object will do the heavy lifting of taking the first character of ",Object(i.b)("inlineCode",{parentName:"p"},"$input"),", and testing it with the predicate. "),Object(i.b)("p",null,"Parsica comes with some useful predicates, including boolean and/or/not combinators: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = satisfy(orPred(isDigit(), isWhitespace()));\n")),Object(i.b)("h2",{id:"character-parsers"},"Character parsers"),Object(i.b)("p",null,"In practice, you may not need to use predicates and ",Object(i.b)("inlineCode",{parentName:"p"},"satisfy")," very often. The characters API provides commonly used parsers for single characters instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = char('a');\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"char($x)")," is defined as ",Object(i.b)("inlineCode",{parentName:"p"},"satisfy(isEqual($x))")," so the code above is equivalent to the first example. ",Object(i.b)("inlineCode",{parentName:"p"},"charI()")," is the case-insensitive version of ",Object(i.b)("inlineCode",{parentName:"p"},"char()"),". It preserves the case as is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = charI(\'a\');\n$result = $parser->tryString("ABC");\nassertEquals("A", $result->output());\n$result = $parser->tryString("abc");\nassertEquals("a", $result->output());\n')),Object(i.b)("p",null,"Parsica provides various parsers for groups of characters, like ",Object(i.b)("inlineCode",{parentName:"p"},"alphaNumChar"),", ",Object(i.b)("inlineCode",{parentName:"p"},"upperChar"),", ",Object(i.b)("inlineCode",{parentName:"p"},"punctuationChar"),", ",Object(i.b)("inlineCode",{parentName:"p"},"newline"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"digitChar"),". You can find them all listed in the API Reference."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = digitChar();\n$result = $parser->tryString('123');\nassertEquals('1', $result->output());\n")),Object(i.b)("p",null,"Note that even though we parsed a ",Object(i.b)("inlineCode",{parentName:"p"},"digitChar"),", the output is a string, not an int. That's because at this point, we're parsing characters. We'll talk about outputting other types than string later."),Object(i.b)("h2",{id:"strings"},"Strings"),Object(i.b)("p",null,"For longer sequences of characters, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"string")," and ",Object(i.b)("inlineCode",{parentName:"p"},"stringI"),". Keep in mind that ",Object(i.b)("inlineCode",{parentName:"p"},"stringI"),"is not just case-insensitive, but also case-preserving. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = stringI("parsica");\n$result = $parser->tryString("PARSICA");\nassertEquals("PARSICA", $result->output()); \n$result = $parser->tryString("pArSiCa");\nassertEquals("pArSiCa", $result->output()); \n')),Object(i.b)("p",null,"If you want the output to be consistent, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"map")," to convert it."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = stringI("parsica")\n    ->map(fn($output) => strtolower($output));\n$result = $parser->tryString("pArSiCa");\nassertEquals("parsica", $result->output()); \n')),Object(i.b)("h2",{id:"other-parsers"},"Other parsers"),Object(i.b)("p",null,"Parsica comes with a growing library of other useful parsers, such as numeric types, and spaces. Always make sure to check the API documentation to know what the type of a parser is (aka the tpye of the output that the parser will produce.) For example, parsers like ",Object(i.b)("inlineCode",{parentName:"p"},"space"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tab"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"newline")," all output strings containing the characters they matched. On the other hand, ",Object(i.b)("inlineCode",{parentName:"p"},"skipSpace")," will output ",Object(i.b)("inlineCode",{parentName:"p"},"null"),", no matter if it consumed spaces or not. This makes sense because the point is to ignore them, not use them.    "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"skipSpace")," consumes all kinds of space, whereas ",Object(i.b)("inlineCode",{parentName:"p"},"skipHSpace")," will stop consuming at newlines and carriage returns. They also come with two friends, ",Object(i.b)("inlineCode",{parentName:"p"},"skipSpace1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"skipHSpace1"),", which expect at least on space to present."))}l.isMDXComponent=!0},428:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(h,o(o({ref:t},c),{},{components:r})):a.a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);