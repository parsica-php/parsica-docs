(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(428)),i={title:"Looking ahead"},l={id:"version-0.3.1/tutorial/look_ahead",isDocsHomePage:!1,title:"Looking ahead",description:"notFollowedBy",source:"@site/versioned_docs/version-0.3.1/tutorial/look_ahead.md",permalink:"/docs/0.3.1/tutorial/look_ahead",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.3.1/tutorial/look_ahead.md",version:"0.3.1",sidebar:"version-0.3.1/docs",previous:{title:"Recursion",permalink:"/docs/0.3.1/tutorial/recursion"},next:{title:"Development Status",permalink:"/docs/0.3.1/resources/development_status"},latestVersionMainDocPermalink:"/docs"},p=[{value:"notFollowedBy",id:"notfollowedby",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"notfollowedby"},"notFollowedBy"),Object(a.b)("p",null,"Say you want to match the ",Object(a.b)("inlineCode",{parentName:"p"},"print")," keyword in a programming language. You can express that with the ",Object(a.b)("inlineCode",{parentName:"p"},'string("print")')," parser, but it will match more than you'd like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = string("print");\n\n$result = $print->run("print(\'Hello World\');");\nassert($result->output() == "print");\n\n$result = $print->run("printXYZ(\'Hello World\');");\nassert($result->output() == "print"); // oops!\n')),Object(a.b)("p",null,'As you can see, "printXYZ" also results in "print", but it wasn\'t our intention, because "printXYZ" is not a valid keyword.'),Object(a.b)("p",null,"We can solve it by using the ",Object(a.b)("inlineCode",{parentName:"p"},"notFollowedBy")," combinator."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = keepFirst(string("print"), notFollowedBy(alphaNumChar()));\n$result = $print->run("printXYZ(\'Hello World\');");\nassert($result->isFail());\n')),Object(a.b)("p",null,"There's a fluent interface as well:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$print = string("print")->notFollowedBy(alphaNumChar());\n$result = $print->run("printXYZ(\'Hello World\');");\nassert($result->isFail());\n')),Object(a.b)("p",null,"In practice, we'll have a lot more keywords than just the one. A good habit is to first generalize this to all the keywords in our language. Then, using our new ",Object(a.b)("inlineCode",{parentName:"p"},"$keyword")," parser constructor, we can match the exact variations we like: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$keyword = fn(string $name) => keepFirst(string($name), notFollowedBy(alphaNumChar()));\n\n$parser = choice(\n    $keyword('printf'),\n    $keyword('print'),\n    $keyword('sprintf')\n);\n\n$result = $parser->try(\"print('Hello World');\");\nassert($result->output() == \"print\");\n\n$result = $parser->try(\"printf('Hello %s', 'world');\");\nassert($result->output() == \"printf\");\n")))}s.isMDXComponent=!0},428:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);