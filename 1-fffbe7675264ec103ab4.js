(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(180),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(250),m=a.n(c);a.d(t,"PageRenderer",function(){return m.a});var d=a(49);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),g=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(e,t,a){"use strict";a(161);var n=a(318),r=a(0),s=a.n(r),i=a(579),o=a(580),l=a(581),c=a(582),m=a(583),d=a(584),u=a(585),g=a(605),f=a(586),p=a(587),k=a(153),h=a(407),b=a(188),E=a(321),y=a(251);t.a=function(e){var t=e.siteTitle,a=e.showTitle,w=e.hideFacebook,v=Object(r.useState)(!1),F=v[0],S=v[1];return s.a.createElement(k.StaticQuery,{query:"1496510596",render:function(e){var n=e.categories.edges.map(function(e){return e.node}),r=e.areas.edges.map(function(e){return e.node});return s.a.createElement("header",null,s.a.createElement(i.a,{expand:"lg",className:"navbar-dark bg-transparent"},a&&s.a.createElement(o.a,{href:"/"},s.a.createElement("h1",{className:"title--header brand"},t)),s.a.createElement(l.a,{className:"link light",onClick:function(){return S(!F)}}),s.a.createElement(c.a,{isOpen:F,navbar:!0},s.a.createElement(m.a,{className:"ml-auto",navbar:!0},s.a.createElement(d.a,null,s.a.createElement(u.a,{className:"link light",href:"/"},"Tuis")),s.a.createElement(g.a,{nav:!0,inNavbar:!0},s.a.createElement(f.a,{nav:!0,caret:!0,className:"link light"},"Areas"),s.a.createElement(p.a,{right:!0},r.map(function(e,t){return s.a.createElement(h.a,{key:t,href:e.fields.slug},e.frontmatter.name)}))),s.a.createElement(g.a,{nav:!0,inNavbar:!0},s.a.createElement(f.a,{nav:!0,caret:!0,className:"link light"},"Kategorieë"),s.a.createElement(p.a,{right:!0},n.map(function(e,t){return s.a.createElement(h.a,{key:t,href:e.fields.slug},e.frontmatter.name)}))),s.a.createElement(d.a,null,s.a.createElement(u.a,{className:"link light",href:"/contact/"},"Kom op ons lys")),s.a.createElement(d.a,null,s.a.createElement(u.a,{className:"link light",href:"https://facebook.com/groups/221643825770134",target:"_blank",title:"Our Facebook page",rel:"nofollow noopener noreferrer"},s.a.createElement(b.a,{icon:E.a})))))),a&&!w&&s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md facebook-wrapper"},s.a.createElement(y.FacebookProvider,{appId:"934192397029973"},s.a.createElement(y.Like,{href:"http://www.facebook.com/groups/221643825770134",colorScheme:"light",showFaces:!0,share:!0}))))))},data:n})}},174:function(e,t,a){"use strict";var n=a(521),r=a(0),s=a.n(r),i=a(4),o=a.n(i),l=a(522),c=a.n(l),m=a(153);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return s.a.createElement(m.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1850028229"},175:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(598),i=a(595),o=a(596),l=a(588),c=a(606),m=a(406),d=a(188),u=a(192),g=a(604),f=a(591),p=a(592),k=a(593),h=a(594),b=a(597),E=a(589),y=function(e){var t=e.onInput,a=Object(n.useState)(""),s=a[0],i=a[1],o=function(e){e&&(t(e),i(""))};return r.a.createElement(l.a,null,r.a.createElement(E.a,{onKeyPress:function(e){return!(!e.shiftKey||13!==e.charCode)||(13===e.charCode?(o(e.target.value),e.preventDefault(),!1):void 0)},value:s,onChange:function(e){return i(e.target.value)},autoFocus:!0,placeholder:"Soek in helpmekaar.org..."}),r.a.createElement(c.a,{addonType:"append"},r.a.createElement(m.a,{title:"Soek",onClick:function(e){e.preventDefault(),o(s)}},r.a.createElement(d.a,{icon:u.b}))))},w=a(583),v=a(584),F=a(590),S=a(585),U=a(149),N=a.n(U),O=function(e){var t=e.activeTab,a=e.setActiveTab,n=(e.newChat,e.newSearch);return r.a.createElement(w.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement("div",{className:"tab-container"},null!=n&&0!==n&&r.a.createElement(F.a,{className:"notification-badge"},r.a.createElement("small",null,n)),r.a.createElement(S.a,{className:N()({active:"2"===t}),onClick:function(){a("2")}},r.a.createElement("strong",null,r.a.createElement(d.a,{icon:u.b})," Soek")))),r.a.createElement(v.a,null,r.a.createElement(S.a,{className:N()({active:"3"===t}),onClick:function(){a("3")}},r.a.createElement("strong",null,r.a.createElement(d.a,{icon:u.c})," Inhoud"))))},A=a(413),B=(a(496),a(76),a(73),a(153)),K=(a(497),a(517)),j=a.n(K),T=a(518),I=a.n(T)()("V2FZ8PQPU1","53dfa38126e32c85b534b72c3830168d").initIndex("helpmekaar"),x=function(){var e="undefined"!=typeof window&&window,t=Object(n.useState)([]),a=t[0],r=t[1],s=e&&Object(n.useState)(e.sessionStorage.getItem("expatty-chat")?JSON.parse(e.sessionStorage.getItem("expatty-chat")):[]),i=s[0],o=s[1],l=Object(n.useState)(!1),c=l[0],m=l[1],d=e&&Object(n.useState)(e.sessionStorage.getItem("expatty-search")?JSON.parse(e.sessionStorage.getItem("expatty-search")):{}),u=d[0],g=d[1],f=(Object(n.useState)("pattybot-web"+Date.now())[0],Object(n.useState)([])),p=f[0],k=f[1],h=Object(n.useState)(null),b=h[0],E=h[1],y=Object(n.useState)(null),w=y[0],v=y[1],F=Object(n.useRef)(i);F.current=i;var S=Object(n.useRef)(p);S.current=p;var U=function(e){r([].concat(a,e)),v({count:e.length})},N=function(e){return{avatar:Object(B.withPrefix)("/img/patty_avatar_small.png"),position:"left",title:"Patty:",type:"text",text:e,date:new Date}};return Object(n.useEffect)(function(){e&&(e.sessionStorage.getItem("expatty-chat")||(j.a.get("expatty-visited")?U([N("Oh, you're back! Anything I can help you with?")]):U([N("Hola! I'm Patty."),N("If you have questions about Andalusia, you've come to the right place."),N("You can ask me a question, or just do a search."),N("Just start typing in the box.")]),j.a.set("expatty-visited",!0)))},[]),Object(n.useEffect)(function(){b&&(console.log("Doing search"),I.search(b).then(function(e){return g({searchResults:(t=e,{results:t.hits.map(function(e){return{title:e.title,description:e.description,url:e.url,tags:e.tags}}),number:t.nbHits})});var t}))},[b]),a.length&&function(){var t=a[0],n=a.slice(1);if("left"===t.position){if(c)return;r(n),m(!0);var s=setTimeout(function(){o([].concat(F.current,[t])),e&&e.sessionStorage.setItem("expatty-chat",JSON.stringify(F.current)),m(!1),clearTimeout(s),k(S.current.filter(function(e){return e!==s}))},t.text?5*t.text.length:200);k([].concat(p,[s]))}else r(n),m(!1),p.forEach(function(e){return clearInterval(e)}),o([].concat(i,[t])),e&&e.sessionStorage.setItem("expatty-chat",JSON.stringify(F.current)),E(t.text)}(),{dataSource:i,processInput:function(e){e&&r([{avatar:"img/you-avatar.png",position:"right",title:"You:",type:"text",text:e}])},isTyping:c,newChatCount:w,sessionAttributes:u||{}}},C=function(e){var t=e.userInput,a=e.onSearchResults,s=e.updateCount,i=e.setScrollToBottom,o=x(),l=o.dataSource,c=o.processInput,m=o.isTyping,d=o.sessionAttributes,u=o.newChatCount,g=Object(n.useRef)(null);return Object(n.useEffect)(function(){var e=document.querySelector("#is-typing");if(e&&e.remove(),m&&(i(!0),!document.querySelector("#is-typing"))){var t=document.createElement("div");t.setAttribute("id","is-typing"),t.setAttribute("class","loading"),g.current.mlistRef.appendChild(t)}}),Object(n.useEffect)(function(){d.searchResults&&(a(d.searchResults.results),i(!0))},[d.searchResults]),Object(n.useEffect)(function(){t&&c(t)},[t]),Object(n.useEffect)(function(){u&&s(u.count)},[u]),r.a.createElement("div",{className:"chat"},r.a.createElement(A.MessageList,{ref:g,className:"message-list h-100",lockable:!0,toBottomHeight:"100%",dataSource:l}))},R=(a(161),a(75),a(519)),H=a(191),D=function(e){var t=e.title,a=e.description,n=e.icons,s=e.url;return r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-md"},r.a.createElement("h1",{className:"title--header small"},r.a.createElement("a",{className:"link",href:s,target:"_blank",rel:"noopener noreferrer"},t)),r.a.createElement("p",null,r.a.createElement("small",null,a)),r.a.createElement("p",null,n&&n.map(function(e,t){return r.a.createElement(H.a,{icon:e.icon,name:e.name,path:e.path,key:t})}))))},L=a(520),J=function(e){var t=e.results,a=Object(n.useRef)(null);return Object(n.useEffect)(function(){a.current.scrollTop=0},[t]),r.a.createElement(B.StaticQuery,{query:"2696684912",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search",ref:a},t.length?t.map(function(t,a){var n=t.tags?t.tags.map(function(t){return e.categories.edges.map(function(e){return e.node}).find(function(e){return e.frontmatter.tag===t})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}}):[];return r.a.createElement(D,{key:a,description:t.description,icons:n,url:t.url,title:t.title})}):r.a.createElement("div",{className:"row text-center align-items-center h-100"},r.a.createElement("div",{className:"col-md"},r.a.createElement(L.a,{className:"bg-transparent"},r.a.createElement(d.a,{className:"display-1",icon:u.b}))))))},data:R})},M=a(280),G=a(281),q=function(e){var t=e.close,a=Object(n.useState)("2"),s=a[0],l=a[1],c=Object(n.useState)([]),m=c[0],d=c[1],u=Object(n.useState)(null),E=u[0],w=u[1],v=Object(n.useState)(null),F=v[0],S=v[1],U=Object(n.useState)(null),N=U[0],A=U[1],B=Object(n.useState)(!1),K=B[0],j=B[1],T=Object(n.useState)(!1),I=T[0],x=T[1],R="undefined"!=typeof window&&window;return Object(n.useEffect)(function(){I&&"2"===s&&(R&&(R.document.querySelector(".modal-body").scrollTop=0),x(!1))}),Object(n.useEffect)(function(){m&&"2"!==s&&A(N+m.length)},[m]),Object(n.useEffect)(function(){if(K&&"1"===s){if(R){var e=R.document.querySelector(".modal-body");e.scrollTop=e.scrollHeight+150}j(!1)}}),r.a.createElement(g.a,{isOpen:!0,className:"patty-bot",fade:!1,autoFocus:!1},r.a.createElement(f.a,{className:"pb-0",toggle:function(){return t()}},r.a.createElement(O,{activeTab:s,setActiveTab:function(e){"2"===e?(A(0),x(!0)):"3"===e&&x(!0),l(e)},newChat:F,newSearch:N})),r.a.createElement(p.a,null,r.a.createElement(k.a,{activeTab:s},r.a.createElement(h.a,{tabId:"1"},r.a.createElement(i.a,null,r.a.createElement(o.a,{md:{size:6,offset:3}},r.a.createElement(C,{onSearchResults:d,userInput:E,updateCount:function(e){"1"!==s&&S(F+e)},setScrollToBottom:j})))),r.a.createElement(h.a,{tabId:"2"},r.a.createElement(i.a,null,r.a.createElement(o.a,{md:{size:6,offset:3}},r.a.createElement(J,{results:m})))),r.a.createElement(h.a,{tabId:"3"},r.a.createElement(i.a,null,r.a.createElement(o.a,{md:"6"},r.a.createElement(M.a,{className:"pb-5"})),r.a.createElement(o.a,{md:"6"},r.a.createElement(G.a,{className:"pb-5"})))))),r.a.createElement(b.a,{className:"search-shadow-bottom"},r.a.createElement(y,{onInput:w})))};t.a=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(q,{close:function(){return a(!1)}}),r.a.createElement(s.a,{fluid:!0,className:"fixed-search p-3 m-0 bg-white search-shadow"},r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"form-control pointer",onClick:function(e){e.preventDefault(),a(!0)}},"Soek in helpmekaar.org..."),r.a.createElement(c.a,{addonType:"append"},r.a.createElement(m.a,{title:"Soek",onClick:function(e){e.preventDefault(),a(!0)}},r.a.createElement(d.a,{icon:u.b}))))))))}},176:function(e,t,a){"use strict";var n=a(408),r=a(0),s=a.n(r),i=a(153),o=a(185),l=a.n(o),c=(a(237),a(410),a(238),a(280)),m=a(281),d=a(251);t.a=function(){return s.a.createElement(i.StaticQuery,{query:"1955721241",render:function(e){return s.a.createElement("footer",{className:"container-fluid mt-5 pb-5 footer"},s.a.createElement("div",{className:"row pt-5"},s.a.createElement("div",{className:"col-lg mb-5 pr-5"},s.a.createElement("h2",{className:"title--header small mb-4"},s.a.createElement("a",{className:"link brand",rel:"author",href:"/"},e.site.siteMetadata.title)),s.a.createElement("p",null,s.a.createElement("small",null,e.site.siteMetadata.description)),s.a.createElement("p",null,s.a.createElement("em",null,s.a.createElement("small",null,"Alle regte voorbehou. © helpmekaar.org ",l()().format("YYYY"))))),s.a.createElement("div",{className:"col-lg mb-5"},s.a.createElement(c.a,null)),s.a.createElement("div",{className:"col-lg mb-5"},s.a.createElement(m.a,null)),s.a.createElement("div",{className:"col-lg mb-5"},s.a.createElement(d.FacebookProvider,{appId:"934192397029973"},s.a.createElement(d.Group,{href:"https://www.facebook.com/groups/221643825770134",width:"280",showSocialContext:!0,showMetaData:!0,skin:"dark"})))))},data:n})}},191:function(e,t,a){"use strict";a(34),a(161);var n=a(0),r=a.n(n),s=a(153);t.a=function(e){var t=e.path,a=e.icon,n=e.name;return r.a.createElement(s.Link,{className:"link",to:t},r.a.createElement("span",{title:n,className:"tag-icons pr-2",dangerouslySetInnerHTML:{__html:a.map(function(e){return"&#x"+e.replace("U+","")}).join("")}}))}},250:function(e,t,a){var n;e.exports=(n=a(319))&&n.default||n},280:function(e,t,a){"use strict";a(161);var n=a(411),r=a(0),s=a.n(r),i=a(153),o=a(149),l=a.n(o);t.a=function(e){var t=e.className;return s.a.createElement(i.StaticQuery,{query:"4035855273",render:function(e){var a=e.areas.edges.map(function(e){return e.node});return s.a.createElement("div",{className:l()("content-list",t)},s.a.createElement("h2",{className:"title--header small primary-colour mb-3"},"Areas"),s.a.createElement("ul",null,a.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("span",{className:"spacer"})," ",s.a.createElement("a",{href:e.fields.slug,className:"link"},e.frontmatter.name))})))},data:n})}},281:function(e,t,a){"use strict";a(161);var n=a(412),r=a(0),s=a.n(r),i=a(153),o=a(191),l=a(149),c=a.n(l);t.a=function(e){var t=e.className;return s.a.createElement(i.StaticQuery,{query:"1824489638",render:function(e){var a=e.categories.edges.map(function(e){return e.node});return s.a.createElement("div",{className:c()("content-list",t)},s.a.createElement("h2",{className:"title--header small primary-colour mb-3"},"Kategorieë"),s.a.createElement("ul",null,a.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(o.a,{path:e.fields.slug,name:e.frontmatter.name,icon:e.frontmatter.icon}),s.a.createElement("a",{href:e.fields.slug,className:"link"}," ",e.frontmatter.name))})))},data:n})}},318:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Binne-huis versiering",name:"Binne-huis versiering",icon:["U+1F3EE"]},fields:{slug:"/categories/binnehuis-versiering/"}}},{node:{frontmatter:{tag:"Blindings",name:"Blindings",icon:["U+1F3E0"]},fields:{slug:"/categories/blindings/"}}},{node:{frontmatter:{tag:"Eiendom",name:"Eiendom",icon:["U+1F3E1"]},fields:{slug:"/categories/eiendom/"}}},{node:{frontmatter:{tag:"Finansies",name:"Finansies",icon:["U+1F4B0"]},fields:{slug:"/categories/finansies/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Handyman",name:"Handyman",icon:["U+1F6E0"]},fields:{slug:"/categories/handyman/"}}},{node:{frontmatter:{tag:"Internet",name:"Internet",icon:["U+1F5B1"]},fields:{slug:"/categories/internet/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Kos",name:"Kos",icon:["U+1F372"]},fields:{slug:"/categories/kos/"}}},{node:{frontmatter:{tag:"Landbou",name:"Landbou",icon:["U+1F331"]},fields:{slug:"/categories/landbou/"}}},{node:{frontmatter:{tag:"Meubels",name:"Meubels",icon:["U+1F6CF"]},fields:{slug:"/categories/meubels/"}}},{node:{frontmatter:{tag:"Reg",name:"Reg",icon:["U+2696"]},fields:{slug:"/categories/reg/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Stencils",name:"Stencils",icon:["U+1F468","U+200D","U+1F3A8"]},fields:{slug:"/categories/stencils/"}}},{node:{frontmatter:{tag:"Stoffering",name:"Stoffering",icon:["U+1F6CB"]},fields:{slug:"/categories/stoffering/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}}]},topLists:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Binne-huis versiering",name:"Binne-huis versiering",icon:["U+1F3EE"]},fields:{slug:"/categories/binnehuis-versiering/"}}},{node:{frontmatter:{tag:"Blindings",name:"Blindings",icon:["U+1F3E0"]},fields:{slug:"/categories/blindings/"}}},{node:{frontmatter:{tag:"Eiendom",name:"Eiendom",icon:["U+1F3E1"]},fields:{slug:"/categories/eiendom/"}}},{node:{frontmatter:{tag:"Finansies",name:"Finansies",icon:["U+1F4B0"]},fields:{slug:"/categories/finansies/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Handyman",name:"Handyman",icon:["U+1F6E0"]},fields:{slug:"/categories/handyman/"}}},{node:{frontmatter:{tag:"Internet",name:"Internet",icon:["U+1F5B1"]},fields:{slug:"/categories/internet/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Kos",name:"Kos",icon:["U+1F372"]},fields:{slug:"/categories/kos/"}}},{node:{frontmatter:{tag:"Landbou",name:"Landbou",icon:["U+1F331"]},fields:{slug:"/categories/landbou/"}}},{node:{frontmatter:{tag:"Meubels",name:"Meubels",icon:["U+1F6CF"]},fields:{slug:"/categories/meubels/"}}},{node:{frontmatter:{tag:"Reg",name:"Reg",icon:["U+2696"]},fields:{slug:"/categories/reg/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Stencils",name:"Stencils",icon:["U+1F468","U+200D","U+1F3A8"]},fields:{slug:"/categories/stencils/"}}},{node:{frontmatter:{tag:"Stoffering",name:"Stoffering",icon:["U+1F6CB"]},fields:{slug:"/categories/stoffering/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}}]},howtos:{edges:[{node:{frontmatter:{title:"How to import your car to Spain"},fields:{slug:"/how-to/import-your-car-to-spain/"}}}]},areas:{edges:[{node:{fields:{slug:"/areas/baltimore/"},frontmatter:{name:"Baltimore",tag:"Baltimore"}}},{node:{fields:{slug:"/areas/benoni/"},frontmatter:{name:"Benoni",tag:"Benoni"}}},{node:{fields:{slug:"/areas/bloemfontein/"},frontmatter:{name:"Bloemfonyein",tag:"Bloemfontein"}}},{node:{fields:{slug:"/areas/ellisras/"},frontmatter:{name:"Ellisras",tag:"Ellisras"}}},{node:{fields:{slug:"/areas/gauteng/"},frontmatter:{name:"Gauteng",tag:"Gauteng"}}},{node:{fields:{slug:"/areas/jeffreysbaai/"},frontmatter:{name:"Jeffrey's Bay",tag:"Jeffrey's Bay"}}},{node:{fields:{slug:"/areas/johannesburg/"},frontmatter:{name:"Johannesburg",tag:"Johannesburg"}}},{node:{fields:{slug:"/areas/limpopo/"},frontmatter:{name:"Limpopo",tag:"Limpopo"}}},{node:{fields:{slug:"/areas/louis-trichardt/"},frontmatter:{name:"Louis Trichardt",tag:"Louis Trichardt"}}},{node:{fields:{slug:"/areas/nylstroom/"},frontmatter:{name:"Nylstroom",tag:"Nylstroom"}}},{node:{fields:{slug:"/areas/online/"},frontmatter:{name:"Online",tag:"Online"}}},{node:{fields:{slug:"/areas/oos-kaap/"},frontmatter:{name:"Oos-Kaap",tag:"Oos-Kaap"}}},{node:{fields:{slug:"/areas/paarl/"},frontmatter:{name:"Paarl",tag:"Paarl"}}},{node:{fields:{slug:"/areas/pretoria/"},frontmatter:{name:"Pretoria",tag:"Pretoria"}}},{node:{fields:{slug:"/areas/somerset-wes/"},frontmatter:{name:"Somerset-Wes",tag:"Somerset-Wes"}}},{node:{fields:{slug:"/areas/st-francis/"},frontmatter:{name:"St Francis",tag:"St Francis"}}},{node:{fields:{slug:"/areas/vrystaat/"},frontmatter:{name:"Vrystaat",tag:"Vrystaat"}}},{node:{fields:{slug:"/areas/wes-kaap/"},frontmatter:{name:"Wes-Kaap",tag:"Wes-Kaap"}}}]}}}},319:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(69),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},408:function(e){e.exports={data:{site:{siteMetadata:{title:"helpmekaar.org",description:"Die Helpmekaar Plan is beplan vir daardie middelklasgroep in ons gemeenskap wat nie kan reken op sosio-ekonomiese hulp van die regering of NGO’s tydens die depressie wat voorlê nie. Ons debietorders hop. Ons verloor ons werk. Ons besighede maak toe. Ons rekenings is agter. Ons versekering verval. Ons verbande en voertuie word nie betaal nie en sal mettertyd deur finansiers teruggeneem word vir ‘n appel en ‘n ei. Baie van ons gaan binnekort nie meer kos hê vir onsself en ons kinders nie. Sonder dat dit sigbaar is na buite, gaan ons mekaar help; gaan ons saam, baie hard baklei vir ons oorlewing.\nGeen welsyn of liefdadigheid nie maar wedersydse lojaliteit en hulp. Binne ons groep help ons mekaar en baklei ons saam vir oorlewing. Sonder die groep staan u alleen en sal u waarskynlik ondergaan. Daarom word u en u familie en vriende hartlik uitgenooi om by ons groep in te skakel. Hoe meer ons is, hoe sterker sal ons wees! Saam gaan ons met trots en waardigheid anderkant uitkom!"}}}}},410:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAFLUlEQVQ4y6WUeUzTZxjHiy46li2yOSMIc84D0JEZgcmpc3GJ08zgMXQocsllFBAU5Rj3Oc5yFEEQ5IZyUyoiR2FAhwXkEGrpD6ggIFoUVBQo5f2u7RL23/7Zk3zz5Hne9/vJk7wH7ej7Rdp/xSLSlCwGqU9pQuzazJ87coASO5tSM1EmlLhUpgmZ/OT7TEdm1q2afgNoh57NKptQM98YC8U/GQ+JHYyGxOEmgheF+wUzHfuEs9PXqYElz4lJGI0v4sCEBEYjb2EonMP3vc879R9Ntcrkswo0HHxxzmBgekkmYsAXw2h0HiYy4/6RDzj4RIycP7PwLiEMS0WFxKHv8fJ23nOJ/sPxFd2+19DtnYG+cBF7ueP/AvW6J730uiYlup0To/t4k9jX8WxZt2NcotU6sVzWfUeKZt+VsbxEMlaQQdoYBcShbRianKcLe1tEMTrNIus9TaMG33JEyqvAve1jOjoc0SGZbn3HnYIOZ1S6mzNG9O4PoLvElbwtDcJgbSlGOMVovZ1BfmQJsL12+IMma4i3izVUI2eoZvSu1cjrV6Jp1w0LtetFkGWJ9gMRtO5RRPuekGixKWhVDaI4yR1vGFfBC7mGidDLSKqsgUqZkOws42NH7QS2lfDff1002CiTrWI6TbbQTZNNWW0v5y9sKxdgawmfqBXzocHkE9XiIRwr4aDn7nkM+h6Dd2QituQNkK15/dDI7SfqOf0S9QIB1LP7ZmXTqall9SrTZMVh9fzBEFlDoprdC5eqDnKzvIUYFnQT1cweuDTyUMbJwgLTGQEV9/FFlgCqad1Qz+ghm9MekU2p3fgypWtuY3IXb2Ny50valtwn0Kibh72VA5yOniC3bSwwE++Jh+wSxDKrUcVi4JWwBWNPBaDGKARzBrAulgta5F/4LIZLPk98BJU4HjbEdEg3RHe8om1K7oxUyRRYnjKzro86Y46Ki2el4c6uxDipHuoxzVAJroXznUrMiyfh84DCeWYr8h8+Rli9QOpfx8dHwa2sT8LaLyiHtBms92v+ePWkjaPzzTyM9RCyS4PccLxBCkVLMCsSYG1YFzZE8dDb2gS/yj6YMyng7WvgzTRpo16C5t0mUvblSNZ7NR5ZhfWx7dRq7ljn0gOt4ONhTXLS48j7SQrMjGh4B3jBN+AmkiI9cTc5FOn0AFD8XkwN95Gy9BASEBEEr9h4nlN81k4FLMHTcI08Z/rpH6S7mSLc7gcEWpmSCJdT8Lc6gDAbU4RYGiDgggn8zhuB7nkOIuoJJMtSwvC1Qcg5vQXuVW0txRO2sVpDy478RQHMjvp5f0bgScK4aYEULwvC8DQH48YZJLifREbIJdz2t0Xy9V/RUHwL7+bnIZ6eWsn7wxV0j9PzMT72e+SMfC8zJVpZorkCWJ58QrckznKlMMIRheGOpCDMHqWxbhjg3kf7vUIwY90h72UHWKImzR+s1N9XCkLtUBThNFsY7rBDzpD5lGg1qRZK8oKVdlqnhmG7VE13Wammuy6XRdpLh3tapACkA201UlaCm7Q6/ooiV0Q7SStinCWsBFdUxV95IfN8JWdUx7vIgClnFcCqFLPdD9Js0ZTqjoZbHqhLuARheyXkMft8FG05QahnuCrWGmVqSHFHc9o11NCvzFXHXVZTDBV/WYnGjDupANamH9+UGXyKmxds3VQYasvKDbzAzg2yZjcUMdhFkc7sHD8LdlGYHbs43I5dEnGRXRHlUFUUdpGbG2zL6sm+pvhpKqMd/7k2sd6Haf83PGyOK/Lfo44+XolNI9sAAAAASUVORK5CYII=",width:200,height:188,src:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png",srcSet:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png 1x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/caa98/patty-working-at-desk.png 1.5x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/51380/patty-working-at-desk.png 2x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/240c8/patty-working-at-desk.png 3x"}}}}}},411:function(e){e.exports={data:{areas:{edges:[{node:{fields:{slug:"/areas/baltimore/"},frontmatter:{name:"Baltimore",tag:"Baltimore"}}},{node:{fields:{slug:"/areas/benoni/"},frontmatter:{name:"Benoni",tag:"Benoni"}}},{node:{fields:{slug:"/areas/bloemfontein/"},frontmatter:{name:"Bloemfonyein",tag:"Bloemfontein"}}},{node:{fields:{slug:"/areas/ellisras/"},frontmatter:{name:"Ellisras",tag:"Ellisras"}}},{node:{fields:{slug:"/areas/gauteng/"},frontmatter:{name:"Gauteng",tag:"Gauteng"}}},{node:{fields:{slug:"/areas/jeffreysbaai/"},frontmatter:{name:"Jeffrey's Bay",tag:"Jeffrey's Bay"}}},{node:{fields:{slug:"/areas/johannesburg/"},frontmatter:{name:"Johannesburg",tag:"Johannesburg"}}},{node:{fields:{slug:"/areas/limpopo/"},frontmatter:{name:"Limpopo",tag:"Limpopo"}}},{node:{fields:{slug:"/areas/louis-trichardt/"},frontmatter:{name:"Louis Trichardt",tag:"Louis Trichardt"}}},{node:{fields:{slug:"/areas/nylstroom/"},frontmatter:{name:"Nylstroom",tag:"Nylstroom"}}},{node:{fields:{slug:"/areas/online/"},frontmatter:{name:"Online",tag:"Online"}}},{node:{fields:{slug:"/areas/oos-kaap/"},frontmatter:{name:"Oos-Kaap",tag:"Oos-Kaap"}}},{node:{fields:{slug:"/areas/paarl/"},frontmatter:{name:"Paarl",tag:"Paarl"}}},{node:{fields:{slug:"/areas/pretoria/"},frontmatter:{name:"Pretoria",tag:"Pretoria"}}},{node:{fields:{slug:"/areas/somerset-wes/"},frontmatter:{name:"Somerset-Wes",tag:"Somerset-Wes"}}},{node:{fields:{slug:"/areas/st-francis/"},frontmatter:{name:"St Francis",tag:"St Francis"}}},{node:{fields:{slug:"/areas/vrystaat/"},frontmatter:{name:"Vrystaat",tag:"Vrystaat"}}},{node:{fields:{slug:"/areas/wes-kaap/"},frontmatter:{name:"Wes-Kaap",tag:"Wes-Kaap"}}}]}}}},412:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Binne-huis versiering",name:"Binne-huis versiering",icon:["U+1F3EE"]},fields:{slug:"/categories/binnehuis-versiering/"}}},{node:{frontmatter:{tag:"Blindings",name:"Blindings",icon:["U+1F3E0"]},fields:{slug:"/categories/blindings/"}}},{node:{frontmatter:{tag:"Eiendom",name:"Eiendom",icon:["U+1F3E1"]},fields:{slug:"/categories/eiendom/"}}},{node:{frontmatter:{tag:"Finansies",name:"Finansies",icon:["U+1F4B0"]},fields:{slug:"/categories/finansies/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Handyman",name:"Handyman",icon:["U+1F6E0"]},fields:{slug:"/categories/handyman/"}}},{node:{frontmatter:{tag:"Internet",name:"Internet",icon:["U+1F5B1"]},fields:{slug:"/categories/internet/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Kos",name:"Kos",icon:["U+1F372"]},fields:{slug:"/categories/kos/"}}},{node:{frontmatter:{tag:"Landbou",name:"Landbou",icon:["U+1F331"]},fields:{slug:"/categories/landbou/"}}},{node:{frontmatter:{tag:"Meubels",name:"Meubels",icon:["U+1F6CF"]},fields:{slug:"/categories/meubels/"}}},{node:{frontmatter:{tag:"Reg",name:"Reg",icon:["U+2696"]},fields:{slug:"/categories/reg/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Stencils",name:"Stencils",icon:["U+1F468","U+200D","U+1F3A8"]},fields:{slug:"/categories/stencils/"}}},{node:{frontmatter:{tag:"Stoffering",name:"Stoffering",icon:["U+1F6CB"]},fields:{slug:"/categories/stoffering/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}}]}}}},519:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Landbou",name:"Landbou",icon:["U+1F331"]},fields:{slug:"/categories/landbou/"}}},{node:{frontmatter:{tag:"Finansies",name:"Finansies",icon:["U+1F4B0"]},fields:{slug:"/categories/finansies/"}}},{node:{frontmatter:{tag:"Stencils",name:"Stencils",icon:["U+1F468","U+200D","U+1F3A8"]},fields:{slug:"/categories/stencils/"}}},{node:{frontmatter:{tag:"Meubels",name:"Meubels",icon:["U+1F6CF"]},fields:{slug:"/categories/meubels/"}}},{node:{frontmatter:{tag:"Blindings",name:"Blindings",icon:["U+1F3E0"]},fields:{slug:"/categories/blindings/"}}},{node:{frontmatter:{tag:"Binne-huis versiering",name:"Binne-huis versiering",icon:["U+1F3EE"]},fields:{slug:"/categories/binnehuis-versiering/"}}},{node:{frontmatter:{tag:"Kos",name:"Kos",icon:["U+1F372"]},fields:{slug:"/categories/kos/"}}},{node:{frontmatter:{tag:"Reg",name:"Reg",icon:["U+2696"]},fields:{slug:"/categories/reg/"}}},{node:{frontmatter:{tag:"Eiendom",name:"Eiendom",icon:["U+1F3E1"]},fields:{slug:"/categories/eiendom/"}}},{node:{frontmatter:{tag:"Handyman",name:"Handyman",icon:["U+1F6E0"]},fields:{slug:"/categories/handyman/"}}},{node:{frontmatter:{tag:"Internet",name:"Internet",icon:["U+1F5B1"]},fields:{slug:"/categories/internet/"}}},{node:{frontmatter:{tag:"Stoffering",name:"Stoffering",icon:["U+1F6CB"]},fields:{slug:"/categories/stoffering/"}}}]}}}},521:function(e){e.exports={data:{site:{siteMetadata:{title:"helpmekaar.org",description:"Die Helpmekaar Plan is beplan vir daardie middelklasgroep in ons gemeenskap wat nie kan reken op sosio-ekonomiese hulp van die regering of NGO’s tydens die depressie wat voorlê nie. Ons debietorders hop. Ons verloor ons werk. Ons besighede maak toe. Ons rekenings is agter. Ons versekering verval. Ons verbande en voertuie word nie betaal nie en sal mettertyd deur finansiers teruggeneem word vir ‘n appel en ‘n ei. Baie van ons gaan binnekort nie meer kos hê vir onsself en ons kinders nie. Sonder dat dit sigbaar is na buite, gaan ons mekaar help; gaan ons saam, baie hard baklei vir ons oorlewing.\nGeen welsyn of liefdadigheid nie maar wedersydse lojaliteit en hulp. Binne ons groep help ons mekaar en baklei ons saam vir oorlewing. Sonder die groep staan u alleen en sal u waarskynlik ondergaan. Daarom word u en u familie en vriende hartlik uitgenooi om by ons groep in te skakel. Hoe meer ons is, hoe sterker sal ons wees! Saam gaan ons met trots en waardigheid anderkant uitkom!",author:"@expattydotcom"}}}}}}]);
//# sourceMappingURL=1-fffbe7675264ec103ab4.js.map