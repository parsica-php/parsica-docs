(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(428)),i={title:"Order matters",sidebar_label:"Order matters"},s={id:"version-0.5.2/tutorial/order_matters",isDocsHomePage:!1,title:"Order matters",description:'The order of clauses in an or() matters. If we do the following parser definition, the parser will consume "http", even if the strings starts with "https", leaving "s://..." as the remainder.',source:"@site/versioned_docs/version-0.5.2/tutorial/order_matters.md",permalink:"/docs/0.5.2/tutorial/order_matters",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.5.2/tutorial/order_matters.md",version:"0.5.2",sidebar_label:"Order matters",sidebar:"version-0.5.2/docs",previous:{title:"Mapping to Objects",permalink:"/docs/0.5.2/tutorial/mapping_to_objects"},next:{title:"Recursion",permalink:"/docs/0.5.2/tutorial/recursion"},latestVersionMainDocPermalink:"/docs"},c=[],p={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'The order of clauses in an or() matters. If we do the following parser definition, the parser will consume "http", even if the strings starts with "https", leaving "s://..." as the remainder.'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = string(\'http\')->or(string(\'https\'));\n$input = "https://verraes.net";\n$result = $parser->tryString($input);\nassert($result->output() === "http");\nassert($result->remainder() === "s://verraes.net");\n')),Object(o.b)("p",null,"The solution is to consider the order of or clauses:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = string(\'https\')->or(string(\'http\'));\n$input = "https://verraes.net";\n$result = $parser->tryString($input);\nassert($result->output() === "https");\nassert($result->remainder() === "://verraes.net");\n')))}l.isMDXComponent=!0},428:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);