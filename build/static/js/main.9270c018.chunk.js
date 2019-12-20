(this["webpackJsonpreact-suspenselist-bug"]=this["webpackJsonpreact-suspenselist-bug"]||[]).push([[0],{4:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),s=a(1),i=b("A"),u=b("B"),o=b("C");function m(e){var t=e.version;return l.a.createElement("div",null,l.a.createElement("div",{style:{border:"dotted 1px black",margin:"1em",padding:"1em"}},l.a.createElement("div",null,"Rendering page number: ",t),l.a.createElement("div",null,"Rendering using ",l.a.createElement("code",null,"SuspenseList"),":"),l.a.createElement("ul",null,1===t?l.a.createElement(n.SuspenseList,{key:"1",revealOrder:"forwards"},l.a.createElement(n.SuspenseList,{key:"1.1",revealOrder:"forwards"},l.a.createElement(n.Suspense,{key:"1.1.c",fallback:l.a.createElement(v,{text:"Loading C"})},l.a.createElement(o,null)))):l.a.createElement(n.SuspenseList,{key:"1",revealOrder:"forwards"},l.a.createElement(n.SuspenseList,{key:"1.1",revealOrder:"forwards"},l.a.createElement(n.Suspense,{key:"1.1.a",fallback:l.a.createElement(v,{text:"Loading A"})},l.a.createElement(i,null)),l.a.createElement(n.Suspense,{key:"1.1.b",fallback:l.a.createElement(v,{text:"Loading B"})},l.a.createElement(u,null)),l.a.createElement(n.Suspense,{key:"1.1.c",fallback:l.a.createElement(v,{text:"Loading C"})},l.a.createElement(o,null)))))),l.a.createElement("div",null,"Rendering outside of ",l.a.createElement("code",null,"SuspenseList")," with simple"," ",l.a.createElement("code",null,"Suspense"),":"),l.a.createElement("div",null,"Help to visually check which ",l.a.createElement("code",null,"Components")," are already resolved"),l.a.createElement("ul",null,l.a.createElement(n.Suspense,{key:"1.1.a",fallback:l.a.createElement(v,{text:"Loading A"})},l.a.createElement(i,null)),l.a.createElement(n.Suspense,{key:"1.1.b",fallback:l.a.createElement(v,{text:"Loading B"})},l.a.createElement(u,null)),l.a.createElement(n.Suspense,{key:"1.1.c",fallback:l.a.createElement(v,{text:"Loading C"})},l.a.createElement(o,null))))}function d(){var e=l.a.useState(1),t=Object(s.a)(e,2),a=t[0],n=t[1],r=l.a.useState(0),c=Object(s.a)(r,2)[1],d=function(e){return function(){e(),c((function(e){return e+1}))}};return l.a.createElement("div",null,l.a.createElement("div",null,"Scenario is:",l.a.createElement("ul",null,l.a.createElement("li",null,"Click on ",l.a.createElement("em",null,"Resolve C")),l.a.createElement("li",null,"Click on ",l.a.createElement("em",null,"See second page")),l.a.createElement("li",null,"Click on ",l.a.createElement("em",null,"Resolve A"))),l.a.createElement("p",null,"Got: Loading A / Loading B / C"),l.a.createElement("p",null,"Expected: A / Loading B / C")),l.a.createElement("div",null,l.a.createElement("button",{disabled:i.isResolved(),onClick:d(i.resolve)},"Resolve A"),l.a.createElement("button",{disabled:u.isResolved(),onClick:d(u.resolve)},"Resolve B"),l.a.createElement("button",{disabled:o.isResolved(),onClick:d(o.resolve)},"Resolve C"),l.a.createElement("button",{disabled:2===a,onClick:function(){return n(2)}},"See second page")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(m,{version:a})))}var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flexGrow:1}},l.a.createElement(d,null))),l.a.createElement("div",{style:{textAlign:"center",margin:"2em"}},"Source is available at"," ",l.a.createElement("a",{href:"https://github.com/dubzzz/react-suspenselist-bug/"},"https://github.com/dubzzz/react-suspenselist-bug/"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/facebook/react/issues/17515#issuecomment-561418297"},"Version 2"),", previous version of the page available"," ",l.a.createElement("a",{href:"https://dubzzz.github.io/react-suspenselist-bug/build-v1/"},"here")),l.a.createElement("div",{style:{textAlign:"center",margin:"2em"}},"Inconsistency discovered thanks to"," ",l.a.createElement("a",{href:"https://github.com/dubzzz/fast-check/"},l.a.createElement("b",null,"fast-check"))))};function v(e){return l.a.createElement("li",null,e.text)}function b(e){var t=!1,a=function(){if(!t)throw n;return l.a.createElement(v,{text:e})},n=new Promise((function(e){a.resolve=function(){return t=!0,e()},a.isResolved=function(){return t}}));return a}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.createRoot(document.getElementById("root")).render(l.a.createElement(E,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[4,1,2]]]);
//# sourceMappingURL=main.9270c018.chunk.js.map