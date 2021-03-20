(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{322:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(428)),l={title:"Errors and labels"},i={id:"version-0.4.0/tutorial/errors_and_labels",isDocsHomePage:!1,title:"Errors and labels",description:"Error messages in Parsica give you information about what the parser expected, where the problem happened, and what it got instead.",source:"@site/versioned_docs/version-0.4.0/tutorial/errors_and_labels.md",permalink:"/docs/0.4.0/tutorial/errors_and_labels",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.4.0/tutorial/errors_and_labels.md",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"Looking ahead",permalink:"/docs/0.4.0/tutorial/look_ahead"},next:{title:"Side Effects and Events",permalink:"/docs/0.4.0/tutorial/side_effects"},latestVersionMainDocPermalink:"/docs"},s=[{value:"Doing your own error reporting",id:"doing-your-own-error-reporting",children:[]}],c={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Error messages in Parsica give you information about what the parser expected, where the problem happened, and what it got instead."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = sepBy1(char(','), atLeastOne(alphaChar()));\n$input = \"\u0178ellow,Red,Green\";\n//$parser->tryString($input);\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(Note: We're using ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mathiasverraes/uptodocs"}),"UpToDocs")," to automatically test all the code samples in this documentation. The downside is that throwing an exception in the docs causes the build to fail! That's why some of the code above is commented out.)")),Object(o.b)("p",null,"If you uncomment and run the above code, you'll get an exception like this: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"<input>:1:1\n  |\n1 | \u0178ellow,Red,Green\n  | ^\u2014 column 1\nUnexpected '\u0178'\nExpecting at least one A-Z or a-z, separated by ','\n")),Object(o.b)("p",null,"It shows the filename, line number and column position, as well as an autogenerated expectation. "),Object(o.b)("p",null,'Often you\'ll want something a bt more meaningful than "at least one A-Z or a-z". You can do that by attaching  your own labels to some of your parsers. For example, we can label the colours:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = sepBy1(\n    string(','),\n    atLeastOne(alphaChar())->label(\"colour\")\n);\n")),Object(o.b)("p",null,"That will yield: "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"...\nExpecting colour, separated by ','\n")),Object(o.b)("p",null,"Or you can attach the label to the entire parser:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = sepBy1(\n    string(','),\n    atLeastOne(alphaChar())\n)->label(\"a list of colours\");\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"...\nExpecting a list of colours\n")),Object(o.b)("p",null,"The best approach will of course depend on your specific use case. A good habit is to keep in mind that ultimately, the errors are there for the end user who will see them. This could be a user who enters some values in a form, a programmer using your API, someone building other parsers on top of your parser... Feed your parser with some wrong inputs that you are likely to get in the real world, and get a feel for what makes a helpful error message."),Object(o.b)("h2",{id:"doing-your-own-error-reporting"},"Doing your own error reporting"),Object(o.b)("p",null,"The information in the error message is also available from ",Object(o.b)("inlineCode",{parentName:"p"},"ParseResult"),". You can use this to make your own error messages, if you want to render them as HTML or send them to an API. For example, these are the line and column number where the parser ended up:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$result = string('Hello')->run(new StringStream(\"Hello, World\"));\nassert(1 == $result->position()->line());\nassert(6 == $result->position()->column());\n")),Object(o.b)("p",null,"Have a look at the ",Object(o.b)("inlineCode",{parentName:"p"},"ParseResult")," API to see what else it can do. "))}p.isMDXComponent=!0},428:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);