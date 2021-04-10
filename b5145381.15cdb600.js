(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{370:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return i})),a.d(r,"metadata",(function(){return l})),a.d(r,"rightToc",(function(){return p})),a.d(r,"default",(function(){return u}));var t=a(2),n=a(6),c=(a(0),a(469)),i={title:"characters"},l={id:"version-0.8.1/api/characters",isDocsHomePage:!1,title:"characters",description:"char",source:"@site/versioned_docs/version-0.8.1/api/characters.md",permalink:"/docs/api/characters",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.8.1/api/characters.md",version:"0.8.1",sidebar:"version-0.8.1/docs",previous:{title:"StringStream",permalink:"/docs/api/StringStream"},next:{title:"combinators",permalink:"/docs/api/combinators"}},p=[{value:"char",id:"char",children:[]},{value:"charI",id:"chari",children:[]},{value:"controlChar",id:"controlchar",children:[]},{value:"upperChar",id:"upperchar",children:[]},{value:"lowerChar",id:"lowerchar",children:[]},{value:"alphaChar",id:"alphachar",children:[]},{value:"alphaNumChar",id:"alphanumchar",children:[]},{value:"printChar",id:"printchar",children:[]},{value:"punctuationChar",id:"punctuationchar",children:[]},{value:"digitChar",id:"digitchar",children:[]},{value:"binDigitChar",id:"bindigitchar",children:[]},{value:"octDigitChar",id:"octdigitchar",children:[]},{value:"hexDigitChar",id:"hexdigitchar",children:[]}],o={rightToc:p};function u(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},o,a,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"char"},"char"),Object(c.b)("p",null,"Parse a single character."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function char(string $c) : Parser\n")),Object(c.b)("h3",{id:"chari"},"charI"),Object(c.b)("p",null,"Parse a single character, case-insensitive and case-preserving. On success it returns the string cased as the\nactually parsed input."),Object(c.b)("p",null,'eg charI(\'a\'\')->run("ABC") will succeed with "A", not "a".'),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function charI(string $c) : Parser\n")),Object(c.b)("h3",{id:"controlchar"},"controlChar"),Object(c.b)("p",null,"Parse a control character (a non-printing character of the Latin-1 subset of Unicode)."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function controlChar() : Parser\n")),Object(c.b)("h3",{id:"upperchar"},"upperChar"),Object(c.b)("p",null,"Parse an uppercase character A-Z."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function upperChar() : Parser\n")),Object(c.b)("h3",{id:"lowerchar"},"lowerChar"),Object(c.b)("p",null,"Parse a lowercase character a-z."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function lowerChar() : Parser\n")),Object(c.b)("h3",{id:"alphachar"},"alphaChar"),Object(c.b)("p",null,"Parse an uppercase or lowercase character A-Z, a-z."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function alphaChar() : Parser\n")),Object(c.b)("h3",{id:"alphanumchar"},"alphaNumChar"),Object(c.b)("p",null,"Parse an alpha or numeric character A-Z, a-z, 0-9."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function alphaNumChar() : Parser\n")),Object(c.b)("h3",{id:"printchar"},"printChar"),Object(c.b)("p",null,"Parse a printable ASCII char."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function printChar() : Parser\n")),Object(c.b)("h3",{id:"punctuationchar"},"punctuationChar"),Object(c.b)("p",null,"Parse a single punctuation character !\"#$%&'()*+,-./:;<=>?@[","]","^_`{|}~"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function punctuationChar() : Parser\n")),Object(c.b)("h3",{id:"digitchar"},"digitChar"),Object(c.b)("p",null,"Parse 0-9. Returns the digit as a string. Use ->map('intval')\nor similar to cast it to a numeric type."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function digitChar() : Parser\n")),Object(c.b)("h3",{id:"bindigitchar"},"binDigitChar"),Object(c.b)("p",null,"Parse a binary character 0 or 1."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function binDigitChar() : Parser\n")),Object(c.b)("h3",{id:"octdigitchar"},"octDigitChar"),Object(c.b)("p",null,"Parse an octodecimal character 0-7."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function octDigitChar() : Parser\n")),Object(c.b)("h3",{id:"hexdigitchar"},"hexDigitChar"),Object(c.b)("p",null,"Parse a hexadecimal numeric character 0123456789abcdefABCDEF."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"function hexDigitChar() : Parser\n")))}u.isMDXComponent=!0},469:function(e,r,a){"use strict";a.d(r,"a",(function(){return b})),a.d(r,"b",(function(){return d}));var t=a(0),n=a.n(t);function c(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){c(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),u=function(e){var r=n.a.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},b=function(e){var r=u(e.components);return n.a.createElement(o.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},s=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=u(a),s=t,d=b["".concat(i,".").concat(s)]||b[s]||h[s]||c;return a?n.a.createElement(d,l(l({ref:r},o),{},{components:a})):n.a.createElement(d,l({ref:r},o))}));function d(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=a.length,i=new Array(c);i[0]=s;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var o=2;o<c;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);