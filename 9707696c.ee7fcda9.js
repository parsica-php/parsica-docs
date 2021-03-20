(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(428)),i={title:"Side Effects and Events"},s={id:"version-0.4.0/tutorial/side_effects",isDocsHomePage:!1,title:"Side Effects and Events",description:"Sometimes you may want to perform actions when your parser encounters something you're interested in. Parsica provides combinator called emit(). It allows you to inject side effects at any point. It's intentionally very barebones: It's really just a callback function, that gets called only when the parser succeeds.",source:"@site/versioned_docs/version-0.4.0/tutorial/side_effects.md",permalink:"/docs/0.4.0/tutorial/side_effects",editUrl:"https://github.com/parsica-php/parsica/tree/main/versioned_docs/version-0.4.0/tutorial/side_effects.md",version:"0.4.0",sidebar:"version-0.4.0/docs",previous:{title:"Errors and labels",permalink:"/docs/0.4.0/tutorial/errors_and_labels"},next:{title:"Development Status",permalink:"/docs/0.4.0/resources/development_status"},latestVersionMainDocPermalink:"/docs"},c=[],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you may want to perform actions when your parser encounters something you're interested in. Parsica provides combinator called ",Object(o.b)("inlineCode",{parentName:"p"},"emit()"),". It allows you to inject side effects at any point. It's intentionally very barebones: It's really just a callback function, that gets called only when the parser succeeds."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n// Define a function that takes the output and performs some side effect:\n$print = fn(string $output) => print($output);\n// Define a parser:\n$parser = many(either(\n    char('a'),\n    // Combine the 'b' parser with emit:\n    char('b')->emit($print)\n));\n// Running the parser calls print() whenever a 'b' is encountered:\n$parser->try('aababba'); // Prints \"bbb\"\n")),Object(o.b)("p",null,"Using closures and mutable objects, you can embed mutability into a parsing process."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\nfinal class Counter\n{\n    private int $count = 0;\n    function incr(): void { $this->count++; }\n    function count(): int{ return $this->count; }\n}\n\n// Make a mutable object:\n$counter = new Counter();\n// Use it inside a closure:\n$incr = fn(string $output) => $counter->incr();\n$parser = many(either(\n    char('a'),\n    // Increment counter when we hit 'b'\n    char('b')->emit($incr)\n));\n$parser->try('aababba');\nassert($counter->count() == 3);\n")),Object(o.b)("p",null,"For most use cases, we suggest using ",Object(o.b)("inlineCode",{parentName:"p"},"emit()")," with an adapter for your application's event dispatching mechanism.  The following shows how to adapt ",Object(o.b)("inlineCode",{parentName:"p"},"emit()")," to any ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php-fig.org/psr/psr-14/"}),"PSR-14")," compatible event dispatcher. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n// Your (or your framework's) event dispatcher:\nfinal class YourDispatcher implements \\Psr\\EventDispatcher\\EventDispatcherInterface\n{\n    public function dispatch(object $event) { /* ... */ }\n}\n$yourDispatcher = new YourDispatcher();\n\n// An adapter that turns a value into an event and sends it to your dispatcher:\n$yourAdapter = function (Colour $colour) use ($yourDispatcher) : void {\n    $timestamp = new DateTimeImmutable(\"now\");\n    $event = new ColourWasEncountered($timestamp, $colour);\n    $yourDispatcher->dispatch($event);\n};\n$parser = many(\n    either(\n        string('red'),\n        string('green'),\n        string('blue'),\n    )\n        // The parser outputs string, the map() combinator turns those into domain objects:\n        ->map(fn(string $output) : Colour => new Colour($output))\n        // Emit the Colour object to the adapter:\n        ->emit($yourAdapter)\n);\n")),Object(o.b)("p",null,"This way, you can neatly separate the occurrence of a parsing event, from the actual side effect. If the dispatcher is asynchronous, the parsing process can keep continuing, without being interrupted by blocking side effects, such as writing to a database. Or when parsing a large input file or continuous input stream, you can start processing the results before the parsing has finished."))}u.isMDXComponent=!0},428:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);