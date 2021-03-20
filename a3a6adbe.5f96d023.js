(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{319:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),s=(n(0),n(428)),o={title:"Mapping to Objects"},i={id:"version-0.6.1/tutorial/05_mapping_to_objects",isDocsHomePage:!1,title:"Mapping to Objects",description:"Parser types",source:"@site/versioned_docs/version-0.6.1/tutorial/05_mapping_to_objects.md",permalink:"/docs/0.6.1/tutorial/05_mapping_to_objects",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.6.1/tutorial/05_mapping_to_objects.md",version:"0.6.1",sidebar:"version-0.6.1/docs",previous:{title:"Running Parsers",permalink:"/docs/0.6.1/tutorial/04_running_parsers"},next:{title:"Order matters",permalink:"/docs/0.6.1/tutorial/06_order_matters"},latestVersionMainDocPermalink:"/docs"},c=[{value:"Parser types",id:"parser-types",children:[]},{value:"The map combinator",id:"the-map-combinator",children:[]},{value:"Casting to scalars",id:"casting-to-scalars",children:[]},{value:"Casting to objects",id:"casting-to-objects",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"parser-types"},"Parser types"),Object(s.b)("p",null,"Most of the parsers that come with Parsica, return strings as outputs."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = digitChar();\nassertInstanceOf('Verraes\\Parsica\\Parser', $parser);\n\n$result = $parser->tryString('1');\nassertIsString('Verraes\\Parsica\\StringStream', $result->output());\nassertEquals('1', $result->output());\n")),Object(s.b)("p",null,"In PHP 7.x, the type of ",Object(s.b)("inlineCode",{parentName:"p"},"$parser")," is ",Object(s.b)("inlineCode",{parentName:"p"},"Parser"),", but you can think of it having the type ",Object(s.b)("inlineCode",{parentName:"p"},"Parser<string>"),". PHP doesn't support generics, so it doesn't enforce that. However, working with Parsica is easier if you always think of parsers having an inner type. "),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("inlineCode",{parentName:"p"},"Parser<T>")," means that if we successfully run the parser on an input, it will output a value of type ",Object(s.b)("inlineCode",{parentName:"p"},"T"),".  ")),Object(s.b)("p",null,"Here's an example of a parser of type ",Object(s.b)("inlineCode",{parentName:"p"},"Parser<array<string>>"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = sepBy(char(\',\'), atLeastOne(digitChar()));\n$result = $parser->tryString(\'123,9,55\');\nassertEquals(["123", "9", "55"], $result->output());\n')),Object(s.b)("h2",{id:"the-map-combinator"},"The map combinator"),Object(s.b)("p",null,"The point of parsing to turn strings into more useful data structures. The combinator ",Object(s.b)("inlineCode",{parentName:"p"},"map")," can help you with that. It does the same thing as PHP's ",Object(s.b)("inlineCode",{parentName:"p"},"array_map")," function. You combine a parser and a ",Object(s.b)("inlineCode",{parentName:"p"},"callable"),", and you get a new parser. This new parser will apply the callable to the output of the parser."),Object(s.b)("p",null,"We can use it for manipulating the output. Here's a simple example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = atLeastOne(alphaChar())\n    ->map(fn(string $val) => strtolower($val));\n$result = $parser->tryString('PaRsIcA');\nassertEquals(\"parsica\", $result->output());\n")),Object(s.b)("p",null,"If the parser fails, the callable is not applied to the output (because there is no output). So you don't need to worry about error handling."),Object(s.b)("h2",{id:"casting-to-scalars"},"Casting to scalars"),Object(s.b)("p",null,"We can now use this to cast the parser's output to scalars:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'<?php\n$parser = atLeastOne(digitChar())\n    ->map(fn(string $val) => intval($val));\n$result = $parser->tryString("123"); // input is still a string\nassertSame(123, $result->output()); // output is an int\n')),Object(s.b)("p",null,"It also works inside nested parsers. We can use this on the ",Object(s.b)("inlineCode",{parentName:"p"},"sepBy")," example from above:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n$parser = sepBy(\n    char(','), \n    atLeastOne(digitChar())\n        ->map(fn($val) => intval($val))\n);\n$result = $parser->tryString('123,9,55');\nassertSame([123, 9, 55], $result->output()); // array of ints\n")),Object(s.b)("p",null,"The type of this last parser is now ",Object(s.b)("inlineCode",{parentName:"p"},"Parser<array<int>>")," instead of the original ",Object(s.b)("inlineCode",{parentName:"p"},"Parser<array<string>>"),". "),Object(s.b)("h2",{id:"casting-to-objects"},"Casting to objects"),Object(s.b)("p",null,"We'll want to cast to much more interesting data structures than scalars and arrays. Let's parse some monetary values into a nested value object structure. ",Object(s.b)("inlineCode",{parentName:"p"},"Money")," is composed of an integer value and a ",Object(s.b)("inlineCode",{parentName:"p"},"Currency")," value object:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"\n\nfinal class Currency\n{\n    private string $currency;\n\n    function __construct(string $currency)\n    {\n        $this->currency = $currency;\n    }\n}\n\n// Side warning: don't actually use floats to do computations with money.\nfinal class Money\n{\n    private float $amount;\n    private Currency $currency;\n\n    function __construct(float $amount, Currency $currency)\n    {\n        $this->amount = $amount;\n        $this->currency = $currency;\n    }\n}\n\n// $currency is a parser of type Parser<Currency>\n$currency = repeat(3, upperChar())\n    ->map(fn(string $c) => new Currency($c));\n\n// $amount has type Parser<float>\n$amount = float()\n    ->map(fn(string $val) => floatval($val));\n\n// $money has type Parser<[Currency, float]) because collect() has type Parser<[T]>\n$money = collect($currency, skipHSpace()->followedBy($amount));\n\n// Let's change $money to type Parser<Money>\n$money = $money->map(fn(array $a) => new Money($a[1], $a[0]));\n\n$result = $money->tryString('EUR 12.34');\nassertEquals(new Money(12.34, new Currency('EUR')), $result->output());\n\n// We can now composer our Parser<Money> in larger parsers\n// $pricelist has type Parser<array<Money>>\n$priceList = collect(\n    string(\"exVAT \")->followedBy($money)->thenIgnore(whitespace()),\n    string(\"incVAT \")->followedBy($money)\n);\n$result = $priceList->tryString('exVAT EUR 100.00 incVAT EUR 121.00');\n\n")))}l.isMDXComponent=!0},428:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||b[m]||s;return n?a.a.createElement(y,i(i({ref:t},p),{},{components:n})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);