(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{234:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return b}));var r=t(2),n=t(6),c=(t(0),t(428)),i={title:"predicates"},l={id:"version-0.6.1/api/predicates",isDocsHomePage:!1,title:"predicates",description:"isEqual",source:"@site/versioned_docs/version-0.6.1/api/predicates.md",permalink:"/docs/0.6.1/api/predicates",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.1/api/predicates.md",version:"0.6.1",sidebar:"version-0.6.1/docs",previous:{title:"numeric",permalink:"/docs/0.6.1/api/numeric"},next:{title:"primitives",permalink:"/docs/0.6.1/api/primitives"},latestVersionMainDocPermalink:"/docs"},p=[{value:"isEqual",id:"isequal",children:[]},{value:"notPred",id:"notpred",children:[]},{value:"andPred",id:"andpred",children:[]},{value:"orPred",id:"orpred",children:[]},{value:"isCharCode",id:"ischarcode",children:[]},{value:"isSpace",id:"isspace",children:[]},{value:"isHSpace",id:"ishspace",children:[]},{value:"isDigit",id:"isdigit",children:[]},{value:"isControl",id:"iscontrol",children:[]},{value:"isBlank",id:"isblank",children:[]},{value:"isWhitespace",id:"iswhitespace",children:[]},{value:"isUpper",id:"isupper",children:[]},{value:"isLower",id:"islower",children:[]},{value:"isAlpha",id:"isalpha",children:[]},{value:"isAlphaNum",id:"isalphanum",children:[]},{value:"isHexDigit",id:"ishexdigit",children:[]},{value:"isPrintable",id:"isprintable",children:[]},{value:"isPunctuation",id:"ispunctuation",children:[]}],s={rightToc:p};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"isequal"},"isEqual"),Object(c.b)("p",null,"Creates an equality predicate"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isEqual(string $x) : callable\n")),Object(c.b)("h3",{id:"notpred"},"notPred"),Object(c.b)("p",null,"Negates a predicate."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function notPred(callable $predicate) : callable\n")),Object(c.b)("h3",{id:"andpred"},"andPred"),Object(c.b)("p",null,"Boolean And predicate."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function andPred(callable $first, callable $second) : callable\n")),Object(c.b)("h3",{id:"orpred"},"orPred"),Object(c.b)("p",null,"Boolean Or predicate."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function orPred(callable $first, callable $second) : callable\n")),Object(c.b)("h3",{id:"ischarcode"},"isCharCode"),Object(c.b)("p",null,"Predicate that checks if a character is in an array of character codes."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isCharCode(array $chars) : callable\n")),Object(c.b)("h3",{id:"isspace"},"isSpace"),Object(c.b)("p",null,"Returns true for a space character, and the control characters \\t, \\n, \\r, \\f, \\v."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isSpace() : callable\n")),Object(c.b)("h3",{id:"ishspace"},"isHSpace"),Object(c.b)("p",null,"Like 'isSpace', but does not accept newlines and carriage returns."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isHSpace() : callable\n")),Object(c.b)("h3",{id:"isdigit"},"isDigit"),Object(c.b)("p",null,"True for 0-9"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isDigit() : callable\n")),Object(c.b)("h3",{id:"iscontrol"},"isControl"),Object(c.b)("p",null,"Control character predicate (a non-printing character of the Latin-1 subset of Unicode)."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isControl() : callable\n")),Object(c.b)("h3",{id:"isblank"},"isBlank"),Object(c.b)("p",null,"Returns true for a space or a tab character"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isBlank()\n")),Object(c.b)("h3",{id:"iswhitespace"},"isWhitespace"),Object(c.b)("p",null,"Returns true for a space character, and \\t, \\n, \\r, \\f, \\v."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isWhitespace()\n")),Object(c.b)("h3",{id:"isupper"},"isUpper"),Object(c.b)("p",null,"Returns true for an uppercase character A-Z."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isUpper()\n")),Object(c.b)("h3",{id:"islower"},"isLower"),Object(c.b)("p",null,"Returns true for a lowercase character a-z."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isLower()\n")),Object(c.b)("h3",{id:"isalpha"},"isAlpha"),Object(c.b)("p",null,"Returns true for an uppercase or lowercase character A-Z, a-z."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isAlpha()\n")),Object(c.b)("h3",{id:"isalphanum"},"isAlphaNum"),Object(c.b)("p",null,"Returns true for an alpha or numeric character A-Z, a-z, 0-9."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isAlphaNum()\n")),Object(c.b)("h3",{id:"ishexdigit"},"isHexDigit"),Object(c.b)("p",null,"Returns true if the given character is a hexadecimal numeric character 0123456789abcdefABCDEF."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isHexDigit()\n")),Object(c.b)("h3",{id:"isprintable"},"isPrintable"),Object(c.b)("p",null,"Returns true if the given character is a printable ASCII char."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isPrintable()\n")),Object(c.b)("h3",{id:"ispunctuation"},"isPunctuation"),Object(c.b)("p",null,"Returns true if the given character is a punctuation character !\"#$%&'()*+,-./:;<=>?@[","]","^_`{|}~"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"function isPunctuation()\n")))}b.isMDXComponent=!0},428:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return h}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),b=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=b(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=b(t),d=r,h=o["".concat(i,".").concat(d)]||o[d]||u[d]||c;return t?n.a.createElement(h,l(l({ref:a},s),{},{components:t})):n.a.createElement(h,l({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);