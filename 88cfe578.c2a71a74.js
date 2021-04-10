(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{304:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(0),t(469)),i={title:"Design Goals",sidebar_label:"Design Goals"},s={id:"version-0.8.1/contribute/design_goals",isDocsHomePage:!1,title:"Design Goals",description:"Parsica aims to be the mainstream choice for anyone to create parsers. We want to support all use cases. When parsing a short string, Parsica should be worth picking over regular expressions; when parsing an entire language, it should be worth picking over a handwritten imperative parser. The API should be self-evident, it should be easy to get it right and hard to get it wrong.",source:"@site/versioned_docs/version-0.8.1/contribute/design_goals.md",permalink:"/docs/contribute/design_goals",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.8.1/contribute/design_goals.md",version:"0.8.1",sidebar_label:"Design Goals",sidebar:"version-0.8.1/docs",previous:{title:"Naming Conventions",permalink:"/docs/resources/03_naming_conventions"}},c=[],l={rightToc:c};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Parsica aims to be the mainstream choice for anyone to create parsers. We want to support all use cases. When parsing a short string, Parsica should be worth picking over regular expressions; when parsing an entire language, it should be worth picking over a handwritten imperative parser. The API should be self-evident, it should be easy to get it right and hard to get it wrong. "),Object(a.b)("p",null,"Developers should not have to learn anything other than this library itself: no need to learn FP, category theory, parser theory, or even the internals of this libary. Under the hood, we use theoretical concepts. However, when adhering to these concepts would require exposing them to the developers, we will prefer a tradeoff that hides them. "),Object(a.b)("p",null,"The same goes for performance: Parsica should be performant enough to be a viable choice, but for most use cases, developers should not have to worry about learning how to achieve greater performance."),Object(a.b)("p",null,"Parsica puts great focus on composability. To achieve this, we use immutability and referential transparency \u2014\xa0not for the sake of perfection, but because these help to achieve effortless composition."),Object(a.b)("p",null,"Finally, it should be easy for third party library authors to publish their own parsers as Composer packages, which in turn can be composed by other users."))}p.isMDXComponent=!0},469:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,d=u["".concat(i,".").concat(b)]||u[b]||h[b]||a;return t?o.a.createElement(d,s(s({ref:r},l),{},{components:t})):o.a.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);