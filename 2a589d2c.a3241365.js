(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(428)),o={title:"numeric"},c={id:"version-0.6.1/api/numeric",isDocsHomePage:!1,title:"numeric",description:"integer",source:"@site/versioned_docs/version-0.6.1/api/numeric.md",permalink:"/docs/0.6.1/api/numeric",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.1/api/numeric.md",version:"0.6.1",sidebar:"version-0.6.1/docs",previous:{title:"combinators",permalink:"/docs/0.6.1/api/combinators"},next:{title:"predicates",permalink:"/docs/0.6.1/api/predicates"},latestVersionMainDocPermalink:"/docs"},p=[{value:"integer",id:"integer",children:[]},{value:"float",id:"float",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"integer"},"integer"),Object(i.b)("p",null,"Parse an integer and return it as a string. Use ->map('intval')\nor similar to cast it to a numeric type."),Object(i.b)("p",null,'Example: "-123"'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function integer() : Parser\n")),Object(i.b)("h3",{id:"float"},"float"),Object(i.b)("p",null,"Parse a float and return it as a string. Use ->map('floatval')\nor similar to cast it to a numeric type."),Object(i.b)("p",null,"Example: -123.456E-789"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"function float() : Parser\n")))}u.isMDXComponent=!0},428:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,b=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);