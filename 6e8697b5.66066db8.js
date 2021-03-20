(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{254:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),a=(r(0),r(428)),i={title:"Looking ahead"},l={id:"version-0.4.0/tutorial/look_ahead",isDocsHomePage:!1,title:"Looking ahead",description:"notFollowedBy",source:"@site/versioned_docs/version-0.4.0/tutorial/look_ahead.md",permalink:"/docs/0.4.0/tutorial/look_ahead",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.4.0/tutorial/look_ahead.md",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"Recursion",permalink:"/docs/0.4.0/tutorial/recursion"},next:{title:"Errors and labels",permalink:"/docs/0.4.0/tutorial/errors_and_labels"},latestVersionMainDocPermalink:"/docs"},p=[{value:"notFollowedBy",id:"notfollowedby",children:[]}],c={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"notfollowedby"},"notFollowedBy"),Object(a.b)("p",null,"Say you want to match the ",Object(a.b)("inlineCode",{parentName:"p"},"print")," keyword in a programming language. You can express that with the ",Object(a.b)("inlineCode",{parentName:"p"},'string("print")')," parser, but it will match more than you'd like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = string("print");\n\n$result = $print->tryString("print(\'Hello World\');");\nassert($result->output() == "print");\n\n$result = $print->tryString("printXYZ(\'Hello World\');");\nassert($result->output() == "print"); // oops!\n')),Object(a.b)("p",null,'As you can see, "printXYZ" also results in "print", but it wasn\'t our intention, because "printXYZ" is not a valid keyword.'),Object(a.b)("p",null,"We can solve it by using the ",Object(a.b)("inlineCode",{parentName:"p"},"notFollowedBy")," combinator."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = keepFirst(string("print"), notFollowedBy(alphaNumChar()));\n$result = $print->run(new StringStream("printXYZ(\'Hello World\');"));\nassert($result->isFail());\n')),Object(a.b)("p",null,"There's a fluent interface as well:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = string("print")->notFollowedBy(alphaNumChar());\n$result = $print->run(new StringStream("printXYZ(\'Hello World\');"));\nassert($result->isFail());\n')),Object(a.b)("p",null,"In practice, we'll have a lot more keywords than just the one. A good habit is to first generalize this to all the keywords in our language. Then, using our new ",Object(a.b)("inlineCode",{parentName:"p"},"$keyword")," parser constructor, we can match the exact variations we like: "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$keyword = fn(string $name) => keepFirst(string($name), notFollowedBy(alphaNumChar()));\n\n$parser = choice(\n    $keyword('printf'),\n    $keyword('print'),\n    $keyword('sprintf')\n);\n\n$result = $parser->tryString(\"print('Hello World');\");\nassert($result->output() == \"print\");\n\n$result = $parser->tryString(\"printf('Hello %s', 'world');\");\nassert($result->output() == \"printf\");\n")))}s.isMDXComponent=!0},428:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,l(l({ref:t},c),{},{components:r})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);