(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{153:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return g});var n=t(0),r=t.n(n),s=t(4),o=t.n(s),i=t(180),l=t.n(i);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var c=t(252),m=t.n(c);t.d(a,"PageRenderer",function(){return m.a});var u=t(49);t.d(a,"parsePath",function(){return u.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},169:function(e,a,t){"use strict";t(160);var n=t(322),r=t(0),s=t.n(r),o=t(581),i=t(582),l=t(583),c=t(584),m=t(585),u=t(586),d=t(587),g=t(607),f=t(588),p=t(589),k=t(153),h=t(411),w=t(188),E=t(325),y=t(253);a.a=function(e){var a=e.siteTitle,t=e.showTitle,b=e.hideFacebook,v=Object(r.useState)(!1),S=v[0],F=v[1];return s.a.createElement(k.StaticQuery,{query:"1496510596",render:function(e){var n=e.categories.edges.map(function(e){return e.node}),r=e.areas.edges.map(function(e){return e.node});return s.a.createElement("header",null,s.a.createElement(o.a,{expand:"lg",className:"navbar-dark bg-transparent"},t&&s.a.createElement(i.a,{href:"/"},s.a.createElement("h1",{className:"title--header brand"},a)),s.a.createElement(l.a,{className:"link light",onClick:function(){return F(!S)}}),s.a.createElement(c.a,{isOpen:S,navbar:!0},s.a.createElement(m.a,{className:"ml-auto",navbar:!0},s.a.createElement(u.a,null,s.a.createElement(d.a,{className:"link light",href:"/"},"Tuis")),s.a.createElement(g.a,{nav:!0,inNavbar:!0},s.a.createElement(f.a,{nav:!0,caret:!0,className:"link light"},"Areas"),s.a.createElement(p.a,{right:!0},r.map(function(e,a){return s.a.createElement(h.a,{key:a,href:e.fields.slug},e.frontmatter.name)}))),s.a.createElement(g.a,{nav:!0,inNavbar:!0},s.a.createElement(f.a,{nav:!0,caret:!0,className:"link light"},"Kategorieë"),s.a.createElement(p.a,{right:!0},n.map(function(e,a){return s.a.createElement(h.a,{key:a,href:e.fields.slug},e.frontmatter.name)}))),s.a.createElement(u.a,null,s.a.createElement(d.a,{className:"link light",href:"/contact/"},"Kom op ons lys")),s.a.createElement(u.a,null,s.a.createElement(d.a,{className:"link light",href:"https://facebook.com/groups/221643825770134",target:"_blank",title:"Our Facebook page",rel:"nofollow noopener noreferrer"},s.a.createElement(w.a,{icon:E.a})))))),t&&!b&&s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md facebook-wrapper"},s.a.createElement(y.FacebookProvider,{appId:"934192397029973"},s.a.createElement(y.Like,{href:"http://www.facebook.com/groups/221643825770134",colorScheme:"light",showFaces:!0,share:!0}))))))},data:n})}},174:function(e,a,t){"use strict";var n=t(527),r=t(0),s=t.n(r),o=t(4),i=t.n(o),l=t(528),c=t.n(l),m=t(153);function u(e){var a=e.description,t=e.lang,r=e.meta,o=e.keywords,i=e.title;return s.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=a||e.site.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=u;var d="1025518380"},175:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(600),o=t(597),i=t(598),l=t(590),c=t(608),m=t(410),u=t(188),d=t(192),g=t(606),f=t(593),p=t(594),k=t(595),h=t(596),w=t(599),E=t(591),y=function(e){var a=e.onInput,t=Object(n.useState)(""),s=t[0],o=t[1],i=function(e){e&&(a(e),o(""))};return r.a.createElement(l.a,null,r.a.createElement(E.a,{onKeyPress:function(e){return!(!e.shiftKey||13!==e.charCode)||(13===e.charCode?(i(e.target.value),e.preventDefault(),!1):void 0)},value:s,onChange:function(e){return o(e.target.value)},autoFocus:!0,placeholder:"Soek in helpmekaar.org..."}),r.a.createElement(c.a,{addonType:"append"},r.a.createElement(m.a,{title:"Soek",onClick:function(e){e.preventDefault(),i(s)}},r.a.createElement(u.a,{icon:d.b}))))},b=t(585),v=t(586),S=t(592),F=t(587),N=t(149),U=t.n(N),A=function(e){var a=e.activeTab,t=e.setActiveTab,n=(e.newChat,e.newSearch);return r.a.createElement(b.a,{tabs:!0},r.a.createElement(v.a,null,r.a.createElement("div",{className:"tab-container"},null!=n&&0!==n&&r.a.createElement(S.a,{className:"notification-badge"},r.a.createElement("small",null,n)),r.a.createElement(F.a,{className:U()({active:"2"===a}),onClick:function(){t("2")}},r.a.createElement("strong",null,r.a.createElement(u.a,{icon:d.b})," Soek")))),r.a.createElement(v.a,null,r.a.createElement(F.a,{className:U()({active:"3"===a}),onClick:function(){t("3")}},r.a.createElement("strong",null,r.a.createElement(u.a,{icon:d.c})," Inhoud"))))},O=t(417),T=(t(500),t(501),t(73),t(153)),K=t(502),x=t.n(K),j=t(522),I=t.n(j),C=function(){var e="undefined"!=typeof window&&window,a=Object(n.useState)([]),t=a[0],r=a[1],s=e&&Object(n.useState)(e.sessionStorage.getItem("expatty-chat")?JSON.parse(e.sessionStorage.getItem("expatty-chat")):[]),o=s[0],i=s[1],l=Object(n.useState)(!1),c=l[0],m=l[1],u=e&&Object(n.useState)(e.sessionStorage.getItem("expatty-search")?JSON.parse(e.sessionStorage.getItem("expatty-search")):{}),d=u[0],g=u[1],f=Object(n.useState)("pattybot-web"+Date.now())[0],p=Object(n.useState)([]),k=p[0],h=p[1],w=Object(n.useState)(null),E=w[0],y=w[1],b=Object(n.useState)(null),v=b[0],S=b[1],F=Object(n.useRef)(o);F.current=o;var N=Object(n.useRef)(k);N.current=k;var U=function(e){r([].concat(t,e)),S({count:e.length})},A=function(e){return{avatar:Object(T.withPrefix)("/img/patty_avatar_small.png"),position:"left",title:"Patty:",type:"text",text:e,date:new Date}};return Object(n.useEffect)(function(){e&&(e.sessionStorage.getItem("expatty-chat")||(I.a.get("expatty-visited")?U([A("Oh, you're back! Anything I can help you with?")]):U([A("Hola! I'm Patty."),A("If you have questions about Andalusia, you've come to the right place."),A("You can ask me a question, or just do a search."),A("Just start typing in the box.")]),I.a.set("expatty-visited",!0)))},[]),Object(n.useEffect)(function(){E&&x.a.post("https://o1f9xnry71.execute-api.eu-west-1.amazonaws.com/prod/expattyChat",{inputText:E,userId:f,sessionAttributes:{}}).then(function(a){var t=a.data;g(t.sessionAttributes),e&&e.sessionStorage.setItem("expatty-search",JSON.stringify(t.sessionAttributes));var n=t.message.startsWith("{")?JSON.parse(t.message).messages.map(function(e){return e.value}):[t.message];U(n.map(function(e){return A(e)}))},console.error)},[E]),t.length&&function(){var a=t[0],n=t.slice(1);if("left"===a.position){if(c)return;r(n),m(!0);var s=setTimeout(function(){i([].concat(F.current,[a])),e&&e.sessionStorage.setItem("expatty-chat",JSON.stringify(F.current)),m(!1),clearTimeout(s),h(N.current.filter(function(e){return e!==s}))},a.text?5*a.text.length:200);h([].concat(k,[s]))}else r(n),m(!1),k.forEach(function(e){return clearInterval(e)}),i([].concat(o,[a])),e&&e.sessionStorage.setItem("expatty-chat",JSON.stringify(F.current)),y(a.text)}(),{dataSource:o,processInput:function(e){e&&r([{avatar:"img/you-avatar.png",position:"right",title:"You:",type:"text",text:e}])},isTyping:c,newChatCount:v,sessionAttributes:d||{}}},D=function(e){var a=e.userInput,t=e.onSearchResults,s=e.updateCount,o=e.setScrollToBottom,i=C(),l=i.dataSource,c=i.processInput,m=i.isTyping,u=i.sessionAttributes,d=i.newChatCount,g=Object(n.useRef)(null);return Object(n.useEffect)(function(){var e=document.querySelector("#is-typing");if(e&&e.remove(),m&&(o(!0),!document.querySelector("#is-typing"))){var a=document.createElement("div");a.setAttribute("id","is-typing"),a.setAttribute("class","loading"),g.current.mlistRef.appendChild(a)}}),Object(n.useEffect)(function(){u.searchResults&&(t(u.searchResults.results),o(!0))},[u.searchResults]),Object(n.useEffect)(function(){a&&c(a)},[a]),Object(n.useEffect)(function(){d&&s(d.count)},[d]),r.a.createElement("div",{className:"chat"},r.a.createElement(O.MessageList,{ref:g,className:"message-list h-100",lockable:!0,toBottomHeight:"100%",dataSource:l}))},H=(t(160),t(75),t(523)),B=t(191),R=function(e){var a=e.title,t=e.description,n=e.icons,s=e.url;return r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-md"},r.a.createElement("h1",{className:"title--header small"},r.a.createElement("a",{className:"link",href:s,target:"_blank",rel:"noopener noreferrer"},a)),r.a.createElement("p",null,r.a.createElement("small",null,t)),r.a.createElement("p",null,n&&n.map(function(e,a){return r.a.createElement(B.a,{icon:e.icon,name:e.name,path:e.path,key:a})}))))},J=t(524),L=function(e){var a=e.results,t=Object(n.useRef)(null);return Object(n.useEffect)(function(){t.current.scrollTop=0},[a]),r.a.createElement(T.StaticQuery,{query:"2696684912",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search",ref:t},a.length?a.map(function(a,t){var n=a.tags?a.tags.map(function(a){return e.categories.edges.map(function(e){return e.node}).find(function(e){return e.frontmatter.tag===a})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}}):[];return r.a.createElement(R,{key:t,description:a.description,icons:n,url:a.url,title:a.title})}):r.a.createElement("div",{className:"row text-center align-items-center h-100"},r.a.createElement("div",{className:"col-md"},r.a.createElement(J.a,{className:"bg-transparent"},r.a.createElement(u.a,{className:"display-1",icon:d.b}))))))},data:H})},G=t(282),q=t(283),M=t(525),Q=function(e){var a=e.className;return r.a.createElement(T.StaticQuery,{query:"950903051",render:function(e){var t=e.topLists.edges.map(function(e){return e.node});return r.a.createElement("div",{className:U()("content-list",a)},r.a.createElement("h2",{className:"title--header small primary-colour mb-3"},"Top things to do"),r.a.createElement("ul",null,t.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{className:"spacer"})," ",r.a.createElement("a",{href:e.fields.slug,className:"link"}," ",e.frontmatter.name))})))},data:M})},z=t(526),V=function(e){var a=e.className;return r.a.createElement(T.StaticQuery,{query:"1827578978",render:function(e){var t=e.howtos.edges.map(function(e){return e.node});return r.a.createElement("div",{className:U()("content-list",a)},r.a.createElement("h2",{className:"title--header small primary-colour mb-3"},"How to's"),r.a.createElement("ul",null,t.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{className:"spacer"})," ",r.a.createElement("a",{href:e.fields.slug,className:"link"}," ",e.frontmatter.title))})))},data:z})},P=function(e){var a=e.close,t=Object(n.useState)("2"),s=t[0],l=t[1],c=Object(n.useState)([]),m=c[0],u=c[1],d=Object(n.useState)(null),E=d[0],b=d[1],v=Object(n.useState)(null),S=v[0],F=v[1],N=Object(n.useState)(null),U=N[0],O=N[1],T=Object(n.useState)(!1),K=T[0],x=T[1],j=Object(n.useState)(!1),I=j[0],C=j[1],H="undefined"!=typeof window&&window;return Object(n.useEffect)(function(){I&&"2"===s&&(H&&(H.document.querySelector(".modal-body").scrollTop=0),C(!1))}),Object(n.useEffect)(function(){m&&"2"!==s&&O(U+m.length)},[m]),Object(n.useEffect)(function(){if(K&&"1"===s){if(H){var e=H.document.querySelector(".modal-body");e.scrollTop=e.scrollHeight+150}x(!1)}}),r.a.createElement(g.a,{isOpen:!0,className:"patty-bot",fade:!1,autoFocus:!1},r.a.createElement(f.a,{className:"pb-0",toggle:function(){return a()}},r.a.createElement(A,{activeTab:s,setActiveTab:function(e){"2"===e?(O(0),C(!0)):"3"===e&&C(!0),l(e)},newChat:S,newSearch:U})),r.a.createElement(p.a,null,r.a.createElement(k.a,{activeTab:s},r.a.createElement(h.a,{tabId:"1"},r.a.createElement(o.a,null,r.a.createElement(i.a,{md:{size:6,offset:3}},r.a.createElement(D,{onSearchResults:u,userInput:E,updateCount:function(e){"1"!==s&&F(S+e)},setScrollToBottom:x})))),r.a.createElement(h.a,{tabId:"2"},r.a.createElement(o.a,null,r.a.createElement(i.a,{md:{size:6,offset:3}},r.a.createElement(L,{results:m})))),r.a.createElement(h.a,{tabId:"3"},r.a.createElement(o.a,null,r.a.createElement(i.a,{md:"3"},r.a.createElement(Q,{className:"pb-5"})),r.a.createElement(i.a,{md:"3"},r.a.createElement(V,{className:"pb-5"})),r.a.createElement(i.a,{md:"3"},r.a.createElement(G.a,{className:"pb-5"})),r.a.createElement(i.a,{md:"3"},r.a.createElement(q.a,{className:"pb-5"})))))),r.a.createElement(w.a,{className:"search-shadow-bottom"},r.a.createElement(y,{onInput:b})))};a.a=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(P,{close:function(){return t(!1)}}),r.a.createElement(s.a,{fluid:!0,className:"fixed-search p-3 m-0 bg-white search-shadow"},r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"form-control pointer",onClick:function(e){e.preventDefault(),t(!0)}},"Soek in helpmekaar.org..."),r.a.createElement(c.a,{addonType:"append"},r.a.createElement(m.a,{title:"Soek",onClick:function(e){e.preventDefault(),t(!0)}},r.a.createElement(u.a,{icon:d.b}))))))))}},176:function(e,a,t){"use strict";var n=t(412),r=t(0),s=t.n(r),o=t(153),i=t(185),l=t.n(i),c=(t(237),t(414),t(238),t(282)),m=t(283),u=t(253);a.a=function(){return s.a.createElement(o.StaticQuery,{query:"1955721241",render:function(e){return s.a.createElement("footer",{className:"container-fluid mt-5 pb-5 footer"},s.a.createElement("div",{className:"row pt-5"},s.a.createElement("div",{className:"col-lg mb-5 pr-5"},s.a.createElement("h2",{className:"title--header small mb-4"},s.a.createElement("a",{className:"link brand",rel:"author",href:"/"},e.site.siteMetadata.title)),s.a.createElement("p",null,s.a.createElement("small",null,e.site.siteMetadata.description)),s.a.createElement("p",null,s.a.createElement("em",null,s.a.createElement("small",null,"Alle regte voorbehou. © helpmekaar.org ",l()().format("YYYY"))))),s.a.createElement("div",{className:"col-lg mb-5"},s.a.createElement(c.a,null)),s.a.createElement("div",{className:"col-lg mb-5"},s.a.createElement(m.a,null)),s.a.createElement("div",{className:"col-lg mb-5"},s.a.createElement(u.FacebookProvider,{appId:"934192397029973"},s.a.createElement(u.Group,{href:"https://www.facebook.com/groups/221643825770134",width:"280",showSocialContext:!0,showMetaData:!0,skin:"dark"})))))},data:n})}},191:function(e,a,t){"use strict";t(34),t(160);var n=t(0),r=t.n(n),s=t(153);a.a=function(e){var a=e.path,t=e.icon,n=e.name;return r.a.createElement(s.Link,{className:"link",to:a},r.a.createElement("span",{title:n,className:"tag-icons pr-2",dangerouslySetInnerHTML:{__html:t.map(function(e){return"&#x"+e.replace("U+","")}).join("")}}))}},252:function(e,a,t){var n;e.exports=(n=t(323))&&n.default||n},282:function(e,a,t){"use strict";t(160);var n=t(415),r=t(0),s=t.n(r),o=t(153),i=t(149),l=t.n(i);a.a=function(e){var a=e.className;return s.a.createElement(o.StaticQuery,{query:"4035855273",render:function(e){var t=e.areas.edges.map(function(e){return e.node});return s.a.createElement("div",{className:l()("content-list",a)},s.a.createElement("h2",{className:"title--header small primary-colour mb-3"},"Areas"),s.a.createElement("ul",null,t.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("span",{className:"spacer"})," ",s.a.createElement("a",{href:e.fields.slug,className:"link"},e.frontmatter.name))})))},data:n})}},283:function(e,a,t){"use strict";t(160);var n=t(416),r=t(0),s=t.n(r),o=t(153),i=t(191),l=t(149),c=t.n(l);a.a=function(e){var a=e.className;return s.a.createElement(o.StaticQuery,{query:"1824489638",render:function(e){var t=e.categories.edges.map(function(e){return e.node});return s.a.createElement("div",{className:c()("content-list",a)},s.a.createElement("h2",{className:"title--header small primary-colour mb-3"},"Kategorieë"),s.a.createElement("ul",null,t.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement(i.a,{path:e.fields.slug,name:e.frontmatter.name,icon:e.frontmatter.icon}),s.a.createElement("a",{href:e.fields.slug,className:"link"}," ",e.frontmatter.name))})))},data:n})}},322:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}}]},topLists:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}}]},howtos:{edges:[{node:{frontmatter:{title:"How to import your car to Spain"},fields:{slug:"/how-to/import-your-car-to-spain/"}}}]},areas:{edges:[{node:{fields:{slug:"/areas/baltimore/"},frontmatter:{name:"Baltimore",tag:"Baltimore"}}},{node:{fields:{slug:"/areas/benoni/"},frontmatter:{name:"Benoni",tag:"Benoni"}}},{node:{fields:{slug:"/areas/ellisras/"},frontmatter:{name:"Ellisras",tag:"Ellisras"}}},{node:{fields:{slug:"/areas/gauteng/"},frontmatter:{name:"Gauteng",tag:"Gauteng"}}},{node:{fields:{slug:"/areas/johannesburg/"},frontmatter:{name:"Johannesburg",tag:"Johannesburg"}}},{node:{fields:{slug:"/areas/limpopo/"},frontmatter:{name:"Limpopo",tag:"Limpopo"}}},{node:{fields:{slug:"/areas/louis-trichardt/"},frontmatter:{name:"Louis Trichardt",tag:"Louis Trichardt"}}},{node:{fields:{slug:"/areas/nylstroom/"},frontmatter:{name:"Nylstroom",tag:"Nylstroom"}}},{node:{fields:{slug:"/areas/online/"},frontmatter:{name:"Online",tag:"Online"}}},{node:{fields:{slug:"/areas/oos-kaap/"},frontmatter:{name:"Oos-Kaap",tag:"Oos-Kaap"}}},{node:{fields:{slug:"/areas/pretoria/"},frontmatter:{name:"Pretoria",tag:"Pretoria"}}},{node:{fields:{slug:"/areas/st-francis/"},frontmatter:{name:"St Francis",tag:"St Francis"}}}]}}}},323:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),s=t(4),o=t.n(s),i=t(69),l=t(2),c=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=c},412:function(e){e.exports={data:{site:{siteMetadata:{title:"helpmekaar.org",description:"Die Helpmekaar Plan is beplan vir daardie middelklasgroep in ons gemeenskap wat nie kan reken op sosio-ekonomiese hulp van die regering of NGO’s tydens die depressie wat voorlê nie. Ons debietorders hop. Ons verloor ons werk. Ons besighede maak toe. Ons rekenings is agter. Ons versekering verval. Ons verbande en voertuie word nie betaal nie en sal mettertyd deur finansiers teruggeneem word vir ‘n appel en ‘n ei. Baie van ons gaan binnekort nie meer kos hê vir onsself en ons kinders nie. Sonder dat dit sigbaar is na buite, gaan ons mekaar help; gaan ons saam, baie hard baklei vir ons oorlewing.\nGeen welsyn of liefdadigheid nie maar wedersydse lojaliteit en hulp. Binne ons groep help ons mekaar en baklei ons saam vir oorlewing. Sonder die groep staan u alleen en sal u waarskynlik ondergaan. Daarom word u en u familie en vriende hartlik uitgenooi om by ons groep in te skakel. Hoe meer ons is, hoe sterker sal ons wees! Saam gaan ons met trots en waardigheid anderkant uitkom!\nEk sal in die volgende post die onderskeie komponente van die plan uiteensit. Dit staan u vry om daarop te reageer en ‘n bydrae te lewer."}}}}},414:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAFLUlEQVQ4y6WUeUzTZxjHiy46li2yOSMIc84D0JEZgcmpc3GJ08zgMXQocsllFBAU5Rj3Oc5yFEEQ5IZyUyoiR2FAhwXkEGrpD6ggIFoUVBQo5f2u7RL23/7Zk3zz5Hne9/vJk7wH7ej7Rdp/xSLSlCwGqU9pQuzazJ87coASO5tSM1EmlLhUpgmZ/OT7TEdm1q2afgNoh57NKptQM98YC8U/GQ+JHYyGxOEmgheF+wUzHfuEs9PXqYElz4lJGI0v4sCEBEYjb2EonMP3vc879R9Ntcrkswo0HHxxzmBgekkmYsAXw2h0HiYy4/6RDzj4RIycP7PwLiEMS0WFxKHv8fJ23nOJ/sPxFd2+19DtnYG+cBF7ueP/AvW6J730uiYlup0To/t4k9jX8WxZt2NcotU6sVzWfUeKZt+VsbxEMlaQQdoYBcShbRianKcLe1tEMTrNIus9TaMG33JEyqvAve1jOjoc0SGZbn3HnYIOZ1S6mzNG9O4PoLvElbwtDcJgbSlGOMVovZ1BfmQJsL12+IMma4i3izVUI2eoZvSu1cjrV6Jp1w0LtetFkGWJ9gMRtO5RRPuekGixKWhVDaI4yR1vGFfBC7mGidDLSKqsgUqZkOws42NH7QS2lfDff1002CiTrWI6TbbQTZNNWW0v5y9sKxdgawmfqBXzocHkE9XiIRwr4aDn7nkM+h6Dd2QituQNkK15/dDI7SfqOf0S9QIB1LP7ZmXTqall9SrTZMVh9fzBEFlDoprdC5eqDnKzvIUYFnQT1cweuDTyUMbJwgLTGQEV9/FFlgCqad1Qz+ghm9MekU2p3fgypWtuY3IXb2Ny50valtwn0Kibh72VA5yOniC3bSwwE++Jh+wSxDKrUcVi4JWwBWNPBaDGKARzBrAulgta5F/4LIZLPk98BJU4HjbEdEg3RHe8om1K7oxUyRRYnjKzro86Y46Ki2el4c6uxDipHuoxzVAJroXznUrMiyfh84DCeWYr8h8+Rli9QOpfx8dHwa2sT8LaLyiHtBms92v+ePWkjaPzzTyM9RCyS4PccLxBCkVLMCsSYG1YFzZE8dDb2gS/yj6YMyng7WvgzTRpo16C5t0mUvblSNZ7NR5ZhfWx7dRq7ljn0gOt4ONhTXLS48j7SQrMjGh4B3jBN+AmkiI9cTc5FOn0AFD8XkwN95Gy9BASEBEEr9h4nlN81k4FLMHTcI08Z/rpH6S7mSLc7gcEWpmSCJdT8Lc6gDAbU4RYGiDgggn8zhuB7nkOIuoJJMtSwvC1Qcg5vQXuVW0txRO2sVpDy478RQHMjvp5f0bgScK4aYEULwvC8DQH48YZJLifREbIJdz2t0Xy9V/RUHwL7+bnIZ6eWsn7wxV0j9PzMT72e+SMfC8zJVpZorkCWJ58QrckznKlMMIRheGOpCDMHqWxbhjg3kf7vUIwY90h72UHWKImzR+s1N9XCkLtUBThNFsY7rBDzpD5lGg1qRZK8oKVdlqnhmG7VE13Wammuy6XRdpLh3tapACkA201UlaCm7Q6/ooiV0Q7SStinCWsBFdUxV95IfN8JWdUx7vIgClnFcCqFLPdD9Js0ZTqjoZbHqhLuARheyXkMft8FG05QahnuCrWGmVqSHFHc9o11NCvzFXHXVZTDBV/WYnGjDupANamH9+UGXyKmxds3VQYasvKDbzAzg2yZjcUMdhFkc7sHD8LdlGYHbs43I5dEnGRXRHlUFUUdpGbG2zL6sm+pvhpKqMd/7k2sd6Haf83PGyOK/Lfo44+XolNI9sAAAAASUVORK5CYII=",width:200,height:188,src:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png",srcSet:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png 1x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/caa98/patty-working-at-desk.png 1.5x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/51380/patty-working-at-desk.png 2x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/240c8/patty-working-at-desk.png 3x"}}}}}},415:function(e){e.exports={data:{areas:{edges:[{node:{fields:{slug:"/areas/baltimore/"},frontmatter:{name:"Baltimore",tag:"Baltimore"}}},{node:{fields:{slug:"/areas/benoni/"},frontmatter:{name:"Benoni",tag:"Benoni"}}},{node:{fields:{slug:"/areas/ellisras/"},frontmatter:{name:"Ellisras",tag:"Ellisras"}}},{node:{fields:{slug:"/areas/gauteng/"},frontmatter:{name:"Gauteng",tag:"Gauteng"}}},{node:{fields:{slug:"/areas/johannesburg/"},frontmatter:{name:"Johannesburg",tag:"Johannesburg"}}},{node:{fields:{slug:"/areas/limpopo/"},frontmatter:{name:"Limpopo",tag:"Limpopo"}}},{node:{fields:{slug:"/areas/louis-trichardt/"},frontmatter:{name:"Louis Trichardt",tag:"Louis Trichardt"}}},{node:{fields:{slug:"/areas/nylstroom/"},frontmatter:{name:"Nylstroom",tag:"Nylstroom"}}},{node:{fields:{slug:"/areas/online/"},frontmatter:{name:"Online",tag:"Online"}}},{node:{fields:{slug:"/areas/oos-kaap/"},frontmatter:{name:"Oos-Kaap",tag:"Oos-Kaap"}}},{node:{fields:{slug:"/areas/pretoria/"},frontmatter:{name:"Pretoria",tag:"Pretoria"}}},{node:{fields:{slug:"/areas/st-francis/"},frontmatter:{name:"St Francis",tag:"St Francis"}}}]}}}},416:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}}]}}}},523:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}}]}}}},525:function(e){e.exports={data:{topLists:{edges:[{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}}]}}}},526:function(e){e.exports={data:{howtos:{edges:[{node:{frontmatter:{title:"How to import your car to Spain",description:"This guide explains the procedure to import a car purchased outside of Spain"},fields:{slug:"/how-to/import-your-car-to-spain/"}}}]}}}},527:function(e){e.exports={data:{site:{siteMetadata:{title:"helpmekaar.org",description:"Die Helpmekaar Plan is beplan vir daardie middelklasgroep in ons gemeenskap wat nie kan reken op sosio-ekonomiese hulp van die regering of NGO’s tydens die depressie wat voorlê nie. Ons debietorders hop. Ons verloor ons werk. Ons besighede maak toe. Ons rekenings is agter. Ons versekering verval. Ons verbande en voertuie word nie betaal nie en sal mettertyd deur finansiers teruggeneem word vir ‘n appel en ‘n ei. Baie van ons gaan binnekort nie meer kos hê vir onsself en ons kinders nie. Sonder dat dit sigbaar is na buite, gaan ons mekaar help; gaan ons saam, baie hard baklei vir ons oorlewing.\nGeen welsyn of liefdadigheid nie maar wedersydse lojaliteit en hulp. Binne ons groep help ons mekaar en baklei ons saam vir oorlewing. Sonder die groep staan u alleen en sal u waarskynlik ondergaan. Daarom word u en u familie en vriende hartlik uitgenooi om by ons groep in te skakel. Hoe meer ons is, hoe sterker sal ons wees! Saam gaan ons met trots en waardigheid anderkant uitkom!\nEk sal in die volgende post die onderskeie komponente van die plan uiteensit. Dit staan u vry om daarop te reageer en ‘n bydrae te lewer.",author:"@expattydotcom"}}}}}}]);
//# sourceMappingURL=1-c7cb067a390a7b538397.js.map