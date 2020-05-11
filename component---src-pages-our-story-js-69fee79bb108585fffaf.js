(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{146:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(159),s=t(161),o=(t(164),t(408)),l=t(149),c=t(165),d=t.n(c),m=function(){return r.a.createElement(l.StaticQuery,{query:"4163959492",render:function(e){return r.a.createElement(d.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:o})};a.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"Expatty | Our story",description:"About Expatty"}),r.a.createElement("main",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"title--header"},"Our story"),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-3 text-center"},r.a.createElement(m,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,"Less than a year ago our family moved to Spain after living in the UK for 10 years. We are originally from South Africa but have lived in a few countries over the last 15 years. We became fascinated by the idea of helping other new and existing expats to discover their new home and what it has to offer through a website that has all the information they need presented in an easy way. We have enough experience through living in 5 different countries to know what a wonderful friend the Internet can be."),r.a.createElement("p",null,"We have a vision of creating an online assistant who can answer all your questions about every facet of expat life in a factually correct and informed way. This is the idea that helped us invent Patty, the personal expert who becomes more and more knowledgeable about Andalusia and Spain every day as you feed her with your questions."),r.a.createElement("p",null,"We have sympathy with people living far from their familiar home countries, family and friends. We try to make it easier for you."))))))}},149:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return g}),t.d(a,"StaticQuery",function(){return u});var n=t(0),r=t.n(n),i=t(4),s=t.n(i),o=t(148),l=t.n(o);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var c=t(151),d=t.n(c);t.d(a,"PageRenderer",function(){return d.a});var m=t(32);t.d(a,"parsePath",function(){return m.a});var g=r.a.createContext({}),u=function(e){return r.a.createElement(g.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,a,t){var n;e.exports=(n=t(154))&&n.default||n},152:function(e,a,t){"use strict";t(33),t(150);var n=t(0),r=t.n(n),i=t(149);a.a=function(e){var a=e.path,t=e.icon,n=e.name;return r.a.createElement(i.Link,{className:"link",to:a},r.a.createElement("span",{title:n,className:"tag-icons pr-2",dangerouslySetInnerHTML:{__html:t.map(function(e){return"&#x"+e.replace("U+","")}).join("")}}))}},153:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(409),s=t(410),o=t(411),l=t(412),c=t(413),d=t(414),m=t(415);a.a=function(e){var a=e.siteTitle,t=e.showTitle,g=Object(n.useState)(!1),u=g[0],f=g[1];return r.a.createElement("header",null,r.a.createElement(i.a,{expand:"md",className:"navbar-dark bg-transparent"},t&&r.a.createElement(s.a,{href:"/"},r.a.createElement("h1",{className:"title--header brand"},a)),r.a.createElement(o.a,{className:"link light",onClick:function(){return f(!u)}}),r.a.createElement(l.a,{isOpen:u,navbar:!0},r.a.createElement(c.a,{className:"ml-auto",navbar:!0},r.a.createElement(d.a,null,r.a.createElement(m.a,{className:"link light",href:"/our-story/"},"Our Story")),r.a.createElement(d.a,null,r.a.createElement(m.a,{className:"link light",href:"/blog/"},"Blog")),r.a.createElement(d.a,null,r.a.createElement(m.a,{className:"link light",href:"/contact/"},"Free business listing"))))))}},154:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),i=t(4),s=t.n(i),o=t(51),l=t(2),c=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=c},155:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty",description:"Your expat and travelling directory in Andalusia that helps you to find and pick interesting places, events and attractions in one search"}},areas:{edges:[{node:{fields:{slug:"/areas/algeciras/"},frontmatter:{name:"Algeciras",tag:"Algeciras"}}},{node:{fields:{slug:"/areas/alhaurin-de-la-torre/"},frontmatter:{name:"Alhaurin de la Torre",tag:"Alhaurin de la Torre"}}},{node:{fields:{slug:"/areas/alhaurin-el-grande/"},frontmatter:{name:"Alhaurin el Grande",tag:"Alhaurin el Grande"}}},{node:{fields:{slug:"/areas/almeria/"},frontmatter:{name:"Almeria",tag:"Almeria"}}},{node:{fields:{slug:"/areas/almunerca/"},frontmatter:{name:"Almunerca",tag:"Almunerca"}}},{node:{fields:{slug:"/areas/benalmadena/"},frontmatter:{name:"Benalmadena",tag:"Benalmadena"}}},{node:{fields:{slug:"/areas/cadiz/"},frontmatter:{name:"Cadiz",tag:"Cadiz"}}},{node:{fields:{slug:"/areas/cartama/"},frontmatter:{name:"Cartama",tag:"Cartama"}}},{node:{fields:{slug:"/areas/coin/"},frontmatter:{name:"Coin",tag:"Coin"}}},{node:{fields:{slug:"/areas/cordoba/"},frontmatter:{name:"Cordoba",tag:"Cordoba"}}},{node:{fields:{slug:"/areas/costa-almeria/"},frontmatter:{name:"Costa Almeria",tag:"Costa Almeria"}}},{node:{fields:{slug:"/areas/costa-de-la-luz/"},frontmatter:{name:"Costa de la Luz",tag:"Costa de la Luz"}}},{node:{fields:{slug:"/areas/costa-del-sol/"},frontmatter:{name:"Costa del Sol",tag:"Costa del Sol"}}},{node:{fields:{slug:"/areas/elviria/"},frontmatter:{name:"Elviria",tag:"Elviria"}}},{node:{fields:{slug:"/areas/estepona/"},frontmatter:{name:"Estepona",tag:"Estepona"}}},{node:{fields:{slug:"/areas/fuengirola/"},frontmatter:{name:"Fuengirola",tag:"Fuengirola"}}},{node:{fields:{slug:"/areas/gibraltar/"},frontmatter:{name:"Gibraltar",tag:"Gibraltar"}}},{node:{fields:{slug:"/areas/granada/"},frontmatter:{name:"Granada",tag:"Granada"}}},{node:{fields:{slug:"/areas/huelva/"},frontmatter:{name:"Huelva",tag:"Huelva"}}},{node:{fields:{slug:"/areas/jaen/"},frontmatter:{name:"Jaen",tag:"Jaen"}}},{node:{fields:{slug:"/areas/malaga/"},frontmatter:{name:"Malaga",tag:"Malaga"}}},{node:{fields:{slug:"/areas/manilva/"},frontmatter:{name:"Manilva",tag:"Manilva"}}},{node:{fields:{slug:"/areas/marbella/"},frontmatter:{name:"Marbella",tag:"Marbella"}}},{node:{fields:{slug:"/areas/mijas/"},frontmatter:{name:"Mijas",tag:"Mijas"}}},{node:{fields:{slug:"/areas/nerja/"},frontmatter:{name:"Nerja",tag:"Nerja"}}},{node:{fields:{slug:"/areas/puerto-banus/"},frontmatter:{name:"Puerto Banus",tag:"Puerto Banus"}}},{node:{fields:{slug:"/areas/sabinilas/"},frontmatter:{name:"Sabinillas",tag:"Sabinillas"}}},{node:{fields:{slug:"/areas/san-pedro-de-alcantara/"},frontmatter:{name:"San Pedro de Alcantara",tag:"San Pedro de Alcantara"}}},{node:{fields:{slug:"/areas/seville/"},frontmatter:{name:"Seville",tag:"Seville"}}},{node:{fields:{slug:"/areas/sotogrande/"},frontmatter:{name:"Sotogrande",tag:"Sotogrande"}}},{node:{fields:{slug:"/areas/torre-del-mar/"},frontmatter:{name:"Torre del Mar",tag:"Torre del Mar"}}},{node:{fields:{slug:"/areas/torremolinos/"},frontmatter:{name:"Torremolinos",tag:"Torremolinos"}}},{node:{fields:{slug:"/areas/torrox/"},frontmatter:{name:"Torrox",tag:"Torrox"}}}]},categories:{edges:[{node:{frontmatter:{tag:"Adventure golf",name:"Adventure golf",icon:["U+1F3CC"]},fields:{slug:"/categories/adventure-golf/"}}},{node:{frontmatter:{tag:"Attractions",name:"Attractions",icon:["U+1F3AA"]},fields:{slug:"/categories/attractions/"}}},{node:{frontmatter:{tag:"Beach",name:"Beach",icon:["U+1F30A"]},fields:{slug:"/categories/beach/"}}},{node:{frontmatter:{tag:"Birdwatching",name:"Birdwatching",icon:["U+1F985"]},fields:{slug:"/categories/birdwatching/"}}},{node:{frontmatter:{tag:"Boat trips",name:"Boat trips",icon:["U+1F6A4"]},fields:{slug:"/categories/boat-trips/"}}},{node:{frontmatter:{tag:"Bowling",name:"Bowling",icon:["U+1F3B3"]},fields:{slug:"/categories/bowling/"}}},{node:{frontmatter:{tag:"Buggy",name:"Buggy",icon:["U+1F698"]},fields:{slug:"/categories/buggy/"}}},{node:{frontmatter:{tag:"Cable Car",name:"Cable Car",icon:["U+1F6A0"]},fields:{slug:"/categories/cable.car/"}}},{node:{frontmatter:{tag:"Cinema",name:"Cinema",icon:["U+1F3A6"]},fields:{slug:"/categories/cinema/"}}},{node:{frontmatter:{tag:"Day Out",name:"Day Out",icon:["U+1F697"]},fields:{slug:"/categories/day-out/"}}},{node:{frontmatter:{tag:"Dolphin watching",name:"Dolphin watching",icon:["U+1F42C"]},fields:{slug:"/categories/dolphin-watching/"}}},{node:{frontmatter:{tag:"Families",name:"Families",icon:["U+1F46A"]},fields:{slug:"/categories/families/"}}},{node:{frontmatter:{tag:"Fishing",name:"Fishing",icon:["U+1F3A3"]},fields:{slug:"/categories/fishing/"}}},{node:{frontmatter:{tag:"Ferris Wheel",name:"Ferris Wheel",icon:["U+1F3A1"]},fields:{slug:"/categories/ferris-wheel/"}}},{node:{frontmatter:{tag:"Free Activities",name:"Free Activities",icon:["U+1F193"]},fields:{slug:"/categories/free-activities/"}}},{node:{frontmatter:{tag:"Go-karts",name:"Go-karts",icon:["U+1F3C1"]},fields:{slug:"/categories/go-karts/"}}},{node:{frontmatter:{tag:"Local Ferias",name:"Local Ferias",icon:["U+1F3A0"]},fields:{slug:"/categories/local-ferias/"}}},{node:{frontmatter:{tag:"Museums",name:"Museums",icon:["U+1F3E2"]},fields:{slug:"/categories/museums/"}}},{node:{frontmatter:{tag:"Parasailing",name:"Parasailing",icon:["U+1F6A4"]},fields:{slug:"/categories/parasailing/"}}},{node:{frontmatter:{tag:"School",name:"School",icon:["U+1F3EB"]},fields:{slug:"/categories/school/"}}},{node:{frontmatter:{tag:"Scuba Diving",name:"Scuba Diving",icon:["U+1F421"]},fields:{slug:"/categories/scuba-diving/"}}},{node:{frontmatter:{tag:"Softplay",name:"Softplay",icon:["U+1F939"]},fields:{slug:"/categories/softplay/"}}},{node:{frontmatter:{tag:"Sports",name:"Sports",icon:["U+26BD"]},fields:{slug:"/categories/sports/"}}},{node:{frontmatter:{tag:"Street markets",name:"Street markets",icon:["U+1F34D"]},fields:{slug:"/categories/street-markets/"}}},{node:{frontmatter:{tag:"Swimming",name:"Swimming",icon:["U+1F3CA"]},fields:{slug:"/categories/swimming/"}}},{node:{frontmatter:{tag:"Theatre",name:"Theatre",icon:["U+1F3AD"]},fields:{slug:"/categories/theatre/"}}},{node:{frontmatter:{tag:"Theme Parks",name:"Theme Parks",icon:["U+1F3A2"]},fields:{slug:"/categories/theme-parks/"}}},{node:{frontmatter:{tag:"Trampoline Parks",name:"Trampoline Parks",icon:["U+1F938","U+200D","U+2640","U+FE0F"]},fields:{slug:"/categories/trampoline-parks/"}}},{node:{frontmatter:{tag:"Waterparks",name:"Waterparks",icon:["U+1F93D","U+200D","U+2642","U+FE0F"]},fields:{slug:"/categories/waterparks/"}}},{node:{frontmatter:{tag:"Watersports",name:"Watersports",icon:["U+1F305"]},fields:{slug:"/categories/watersports/"}}},{node:{frontmatter:{tag:"Whale watching",name:"Whale watching",icon:["U+1F433"]},fields:{slug:"/categories/whale-watching/"}}},{node:{frontmatter:{tag:"Wildlife Parks",name:"Wildlife Parks",icon:["U+1F43E"]},fields:{slug:"/categories/wildlife-parks/"}}},{node:{frontmatter:{tag:"Windsurfing",name:"Windsurfing",icon:["U+1F3C4"]},fields:{slug:"/categories/windsurfing/"}}},{node:{frontmatter:{tag:"Zipline",name:"Zipline",icon:["U+1F5FB"]},fields:{slug:"/categories/zipline/"}}}]}}}},156:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAFLUlEQVQ4y6WUeUzTZxjHiy46li2yOSMIc84D0JEZgcmpc3GJ08zgMXQocsllFBAU5Rj3Oc5yFEEQ5IZyUyoiR2FAhwXkEGrpD6ggIFoUVBQo5f2u7RL23/7Zk3zz5Hne9/vJk7wH7ej7Rdp/xSLSlCwGqU9pQuzazJ87coASO5tSM1EmlLhUpgmZ/OT7TEdm1q2afgNoh57NKptQM98YC8U/GQ+JHYyGxOEmgheF+wUzHfuEs9PXqYElz4lJGI0v4sCEBEYjb2EonMP3vc879R9Ntcrkswo0HHxxzmBgekkmYsAXw2h0HiYy4/6RDzj4RIycP7PwLiEMS0WFxKHv8fJ23nOJ/sPxFd2+19DtnYG+cBF7ueP/AvW6J730uiYlup0To/t4k9jX8WxZt2NcotU6sVzWfUeKZt+VsbxEMlaQQdoYBcShbRianKcLe1tEMTrNIus9TaMG33JEyqvAve1jOjoc0SGZbn3HnYIOZ1S6mzNG9O4PoLvElbwtDcJgbSlGOMVovZ1BfmQJsL12+IMma4i3izVUI2eoZvSu1cjrV6Jp1w0LtetFkGWJ9gMRtO5RRPuekGixKWhVDaI4yR1vGFfBC7mGidDLSKqsgUqZkOws42NH7QS2lfDff1002CiTrWI6TbbQTZNNWW0v5y9sKxdgawmfqBXzocHkE9XiIRwr4aDn7nkM+h6Dd2QituQNkK15/dDI7SfqOf0S9QIB1LP7ZmXTqall9SrTZMVh9fzBEFlDoprdC5eqDnKzvIUYFnQT1cweuDTyUMbJwgLTGQEV9/FFlgCqad1Qz+ghm9MekU2p3fgypWtuY3IXb2Ny50valtwn0Kibh72VA5yOniC3bSwwE++Jh+wSxDKrUcVi4JWwBWNPBaDGKARzBrAulgta5F/4LIZLPk98BJU4HjbEdEg3RHe8om1K7oxUyRRYnjKzro86Y46Ki2el4c6uxDipHuoxzVAJroXznUrMiyfh84DCeWYr8h8+Rli9QOpfx8dHwa2sT8LaLyiHtBms92v+ePWkjaPzzTyM9RCyS4PccLxBCkVLMCsSYG1YFzZE8dDb2gS/yj6YMyng7WvgzTRpo16C5t0mUvblSNZ7NR5ZhfWx7dRq7ljn0gOt4ONhTXLS48j7SQrMjGh4B3jBN+AmkiI9cTc5FOn0AFD8XkwN95Gy9BASEBEEr9h4nlN81k4FLMHTcI08Z/rpH6S7mSLc7gcEWpmSCJdT8Lc6gDAbU4RYGiDgggn8zhuB7nkOIuoJJMtSwvC1Qcg5vQXuVW0txRO2sVpDy478RQHMjvp5f0bgScK4aYEULwvC8DQH48YZJLifREbIJdz2t0Xy9V/RUHwL7+bnIZ6eWsn7wxV0j9PzMT72e+SMfC8zJVpZorkCWJ58QrckznKlMMIRheGOpCDMHqWxbhjg3kf7vUIwY90h72UHWKImzR+s1N9XCkLtUBThNFsY7rBDzpD5lGg1qRZK8oKVdlqnhmG7VE13Wammuy6XRdpLh3tapACkA201UlaCm7Q6/ooiV0Q7SStinCWsBFdUxV95IfN8JWdUx7vIgClnFcCqFLPdD9Js0ZTqjoZbHqhLuARheyXkMft8FG05QahnuCrWGmVqSHFHc9o11NCvzFXHXVZTDBV/WYnGjDupANamH9+UGXyKmxds3VQYasvKDbzAzg2yZjcUMdhFkc7sHD8LdlGYHbs43I5dEnGRXRHlUFUUdpGbG2zL6sm+pvhpKqMd/7k2sd6Haf83PGyOK/Lfo44+XolNI9sAAAAASUVORK5CYII=",width:200,height:188,src:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png",srcSet:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png 1x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/caa98/patty-working-at-desk.png 1.5x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/51380/patty-working-at-desk.png 2x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/240c8/patty-working-at-desk.png 3x"}}}}}},157:function(e,a,t){"use strict";t(150);var n=t(155),r=t(0),i=t.n(r),s=t(149),o=t(158),l=t.n(o),c=(t(164),t(156)),d=t(165),m=t.n(d),g=function(){return i.a.createElement(s.StaticQuery,{query:"1292776582",render:function(e){return i.a.createElement(m.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:c})},u=t(152);a.a=function(){return i.a.createElement(s.StaticQuery,{query:"2824076944",render:function(e){return i.a.createElement("footer",{className:"container-fluid mt-5 pb-3 footer"},i.a.createElement("div",{className:"row pt-5"},i.a.createElement("div",{className:"col-lg mb-5 pr-5"},i.a.createElement("h2",{className:"title--header small mb-4"},i.a.createElement("a",{className:"link brand",rel:"author",href:"/"},e.site.siteMetadata.title)),i.a.createElement("p",null,i.a.createElement("small",null,e.site.siteMetadata.description)),i.a.createElement(g,null),i.a.createElement("p",null,i.a.createElement("em",null,i.a.createElement("small",null,"All rights reserved. © expatty.com ",l()().format("YYYY"))))),i.a.createElement("div",{className:"col-lg mb-5"},i.a.createElement("h2",{className:"title--header small primary-colour mb-4"},"Areas"),i.a.createElement("ul",null,e.areas.edges.map(function(e,a){var t=e.node;return i.a.createElement("li",{key:a},i.a.createElement("span",{className:"spacer"})," ",i.a.createElement("a",{href:t.fields.slug,className:"link"},t.frontmatter.name))}))),i.a.createElement("div",{className:"col-lg mb-5"},i.a.createElement("h2",{className:"title--header small primary-colour mb-4"},"Categories"),i.a.createElement("ul",null,e.categories.edges.map(function(e,a){var t=e.node;return i.a.createElement("li",{key:a},i.a.createElement(u.a,{path:t.fields.slug,name:t.frontmatter.name,icon:t.frontmatter.icon}),i.a.createElement("a",{href:t.fields.slug,className:"link"}," ",t.frontmatter.name))}))),i.a.createElement("div",{className:"col-lg mb-5"},i.a.createElement("h2",{className:"title--header small primary-colour mb-4"},"Subscribe to our newsletter"),i.a.createElement("form",{action:"https://expatty.us7.list-manage.com/subscribe/post?u=a6b6c49a554f762c8c4c8d495&id=1eef58f2b5",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",name:"EMAIL",className:"form-control",id:"mce-EMAIL",placeholder:"email address",required:!0})),i.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},i.a.createElement("input",{type:"text",name:"b_a6b6c49a554f762c8c4c8d495_1eef58f2b5",tabIndex:"-1"})),i.a.createElement("div",{className:"clear"},i.a.createElement("button",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"btn"},"Subscribe"))))))},data:n})}},159:function(e,a,t){"use strict";var n=t(160),r=t(0),i=t.n(r),s=t(153),o=t(149),l=t(157);a.a=function(e){var a=e.children;return i.a.createElement(o.StaticQuery,{query:"1948935994",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title}),a,i.a.createElement(l.a,null))},data:n})}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}},161:function(e,a,t){"use strict";var n=t(162),r=t(0),i=t.n(r),s=t(4),o=t.n(s),l=t(173),c=t.n(l),d=t(149);function m(e){var a=e.description,t=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:g,render:function(e){var n=a||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},a.a=m;var g="1025518380"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty",description:"Your expat and travelling directory in Andalusia that helps you to find and pick interesting places, events and attractions in one search",author:"@expattydotcom"}}}}},408:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:200,height:445,src:"/static/0955c3f8f81731ef9058ef6c65a2c284/23ee4/patty-duckface.png",srcSet:"/static/0955c3f8f81731ef9058ef6c65a2c284/23ee4/patty-duckface.png 1x,\n/static/0955c3f8f81731ef9058ef6c65a2c284/caa98/patty-duckface.png 1.5x,\n/static/0955c3f8f81731ef9058ef6c65a2c284/51380/patty-duckface.png 2x"}}}}}}}]);
//# sourceMappingURL=component---src-pages-our-story-js-69fee79bb108585fffaf.js.map