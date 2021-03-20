(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{220:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return o}));var n=r(2),a=r(6),l=(r(0),r(428)),c={title:"Parser"},i={id:"api/Parser",isDocsHomePage:!1,title:"Parser",description:"recursive",source:"@site/docs/api/Parser.md",permalink:"/docs/next/api/Parser",editUrl:"https://github.com/parsica-php/parsica/tree/main/docs/api/Parser.md",version:"next",sidebar:"docs",previous:{title:"ParseResult",permalink:"/docs/next/api/ParseResult"},next:{title:"ParserHasFailed",permalink:"/docs/next/api/ParserHasFailed"},latestVersionMainDocPermalink:"/docs"},s=[{value:"recursive",id:"recursive",children:[]},{value:"recurse",id:"recurse",children:[]},{value:"run",id:"run",children:[]},{value:"optional",id:"optional",children:[]},{value:"or",id:"or",children:[]},{value:"followedBy",id:"followedby",children:[]},{value:"sequence",id:"sequence",children:[]},{value:"then",id:"then",children:[]},{value:"bind",id:"bind",children:[]},{value:"map",id:"map",children:[]},{value:"continueFrom",id:"continuefrom",children:[]},{value:"append",id:"append",children:[]},{value:"and",id:"and",children:[]},{value:"tryString",id:"trystring",children:[]},{value:"try",id:"try",children:[]},{value:"apply",id:"apply",children:[]},{value:"thenIgnore",id:"thenignore",children:[]},{value:"notFollowedBy",id:"notfollowedby",children:[]},{value:"label",id:"label",children:[]},{value:"emit",id:"emit",children:[]},{value:"thenEof",id:"theneof",children:[]}],p={rightToc:s};function o(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"recursive"},"recursive"),Object(l.b)("p",null,"Create a recursive parser. Used in combination with recurse(Parser)."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public static function recursive() : Parser\n")),Object(l.b)("h3",{id:"recurse"},"recurse"),Object(l.b)("p",null,"Recurse on a parser. Used in combination with {@see recursive()}. After calling this method, this parser behaves\nlike a regular parser."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function recurse(Parser $parser) : void\n")),Object(l.b)("h3",{id:"run"},"run"),Object(l.b)("p",null,"Run the parser on an input"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function run(Stream $input) : ParseResult\n")),Object(l.b)("h3",{id:"optional"},"optional"),Object(l.b)("p",null,"Optionally parse something, but still succeed if the thing is not there."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function optional() : Parser\n")),Object(l.b)("h3",{id:"or"},"or"),Object(l.b)("p",null,"Try the first parser, and failing that, try the second parser. Returns the first succeeding result, or the first\nfailing result."),Object(l.b)("p",null,"Caveat: The order matters!\nstring('http')->or(string('https')"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function or(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"followedby"},"followedBy"),Object(l.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function followedBy(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"sequence"},"sequence"),Object(l.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function sequence(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"then"},"then"),Object(l.b)("p",null,"Parse something, then follow by something else. Ignore the result of the first parser and return the result of\nthe second parser. Alias for sequence()."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function then(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"bind"},"bind"),Object(l.b)("p",null,"Create a parser that takes the output from the first parser (if successful) and feeds it to the callable. The\ncallable must return another parser. If the first parser fails, the first parser is returned."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function bind(callable $f) : Parser\n")),Object(l.b)("h3",{id:"map"},"map"),Object(l.b)("p",null,"Map a function over the parser (which in turn maps it over the result)."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function map(callable $transform) : Parser\n")),Object(l.b)("h3",{id:"continuefrom"},"continueFrom"),Object(l.b)("p",null,"Take the remaining input from the result and parse it."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function continueFrom(ParseResult $result) : ParseResult\n")),Object(l.b)("h3",{id:"append"},"append"),Object(l.b)("p",null,"Combine the parser with another parser of the same type, which will cause the results to be appended."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function append(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"and"},"and"),Object(l.b)("p",null,"Combine the parser with another parser of the same type, which will cause the results to be appended."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function and(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"trystring"},"tryString"),Object(l.b)("p",null,"Try to parse a string. Alias of ",Object(l.b)("inlineCode",{parentName:"p"},"try(new StringStream($string))"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function tryString(string $input) : ParseResult\n")),Object(l.b)("h3",{id:"try"},"try"),Object(l.b)("p",null,"Try to parse the input, or throw an exception."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function try(Stream $input) : ParseResult\n")),Object(l.b)("h3",{id:"apply"},"apply"),Object(l.b)("p",null,"Sequential application. Given a parser which outputs a callable, return a new parser that applies the callable on the\noutput of the second parser."),Object(l.b)("p",null,"The first parser must be of type Parser<callable(T1):T2>. {@see pure()} can be used to wrap a callable in a Parser."),Object(l.b)("p",null,"Callables with more than 1 argument need to be curried: pure(curry(fn($x, $y)))->apply($parser2)->apply($parser3)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function apply(Parser $parser) : Parser\n")),Object(l.b)("h3",{id:"thenignore"},"thenIgnore"),Object(l.b)("p",null,"Sequence two parsers, and return the output of the first one, ignore the second."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function thenIgnore(Parser $other) : Parser\n")),Object(l.b)("h3",{id:"notfollowedby"},"notFollowedBy"),Object(l.b)("p",null,"notFollowedBy only succeeds when $second fails. It never consumes any input."),Object(l.b)("p",null,"Example:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'string("print")'),' will also match "printXYZ"'),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},'string("print")->notFollowedBy(alphaNumChar()))'),' will match "print something" but not "printXYZ something"'),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function notFollowedBy(Parser $second) : Parser\n")),Object(l.b)("h3",{id:"label"},"label"),Object(l.b)("p",null,"Label a parser. When a parser fails, you'll see your label as the \"expected\" value. As a best practice, the\nlabels should make sense to the person who provides the input for your parser. That's often an end user or a\nthird party, so keep them in mind."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function label(string $label) : Parser\n")),Object(l.b)("h3",{id:"emit"},"emit"),Object(l.b)("p",null,"If the parser is successful, call the $receiver function with the output of the parser. The resulting parser\nbehaves identical to the original one. This combinator is useful for expressing side effects during the parsing\nprocess. It can be hooked into existing event publishing libraries by using $receiver as an adapter for those.\nOther use cases are logging, caching, performing an action whenever a value is matched in a long running input\nstream, ..."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function emit(callable $receiver) : Parser\n")),Object(l.b)("h3",{id:"theneof"},"thenEof"),Object(l.b)("p",null,"Make sure that the input ends after the parser has successfully completed. The output is the output of the\noriginal parser."),Object(l.b)("p",null,"Also useful in unit tests to make sure a parser doesn't consume more than you intended."),Object(l.b)("p",null,"Alias for $parser->thenIgnore(eof())."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function thenEof() : Parser\n")))}o.isMDXComponent=!0},428:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(r),h=n,d=u["".concat(c,".").concat(h)]||u[h]||b[h]||l;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<l;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);