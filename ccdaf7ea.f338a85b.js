(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{373:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),s=(t(0),t(428)),i={title:"PHPUnit/ParserAssertions"},c={id:"version-0.8.0/api/PHPUnit/ParserAssertions",isDocsHomePage:!1,title:"PHPUnit/ParserAssertions",description:"assertParses",source:"@site/versioned_docs/version-0.8.0/api/PHPUnit/ParserAssertions.md",permalink:"/docs/api/PHPUnit/ParserAssertions",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.8.0/api/PHPUnit/ParserAssertions.md",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"JSON/JSON",permalink:"/docs/api/JSON/JSON"},next:{title:"ParseResult",permalink:"/docs/api/ParseResult"}},o=[{value:"assertParses",id:"assertparses",children:[]},{value:"assertStrictlyEquals",id:"assertstrictlyequals",children:[]},{value:"assertRemainder",id:"assertremainder",children:[]},{value:"assertParseFails",id:"assertparsefails",children:[]},{value:"assertFailOnEOF",id:"assertfailoneof",children:[]},{value:"assertSucceedOnEOF",id:"assertsucceedoneof",children:[]}],p={rightToc:o};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"assertparses"},"assertParses"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'protected function assertParses(string $input, Parser $parser, $expectedOutput, string $message = "") : void\n')),Object(s.b)("h3",{id:"assertstrictlyequals"},"assertStrictlyEquals"),Object(s.b)("p",null,"Behaves like assertSame for primitives, behaves like assertEquals for objects of the same type, and fails\nfor everything else."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"protected function assertStrictlyEquals($expected, $actual, string $message = '') : void\n")),Object(s.b)("h3",{id:"assertremainder"},"assertRemainder"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'protected function assertRemainder(string $input, Parser $parser, string $expectedRemaining, string $message = "") : void\n')),Object(s.b)("h3",{id:"assertparsefails"},"assertParseFails"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'protected function assertParseFails(string $input, Parser $parser, ?string $expectedFailure = null, string $message = "") : void\n')),Object(s.b)("h3",{id:"assertfailoneof"},"assertFailOnEOF"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'protected function assertFailOnEOF(Parser $parser, string $message = "") : void\n')),Object(s.b)("h3",{id:"assertsucceedoneof"},"assertSucceedOnEOF"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'protected function assertSucceedOnEOF(Parser $parser, string $message = "") : void\n')))}l.isMDXComponent=!0},428:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return O}));var n=t(0),a=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,O=u["".concat(i,".").concat(b)]||u[b]||d[b]||s;return t?a.a.createElement(O,c(c({ref:r},p),{},{components:t})):a.a.createElement(O,c({ref:r},p))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=b;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<s;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);