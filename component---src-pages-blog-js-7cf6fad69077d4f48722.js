(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return m});var r=t(0),n=t.n(r),i=t(159),s=t(194),l=t(161),o=t(158),c=t.n(o);a.default=function(e){var a=e.data,t=c()();return n.a.createElement(i.a,null,n.a.createElement(l.a,{title:"Expatty | Blog",description:a.site.siteMetadata.description,keywords:a.site.siteMetadata.commonKeywords}),n.a.createElement("main",null,n.a.createElement("div",{className:"container-fluid blog"},n.a.createElement("h1",{className:"title--header"},"Patty's Blog"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},a.bloglist.edges.filter(function(e){var a=e.node;return t.isAfter(a.frontmatter.date)}).map(function(e,a){var t=e.node;return n.a.createElement(s.a,{key:a,excerpt:t.excerpt,image:t.frontmatter.image,url:t.fields.slug,title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date})}))))))};var m="555866054"},149:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return g}),t.d(a,"StaticQuery",function(){return u});var r=t(0),n=t.n(r),i=t(4),s=t.n(i),l=t(148),o=t.n(l);t.d(a,"Link",function(){return o.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var c=t(151),m=t.n(c);t.d(a,"PageRenderer",function(){return m.a});var d=t(32);t.d(a,"parsePath",function(){return d.a});var g=n.a.createContext({}),u=function(e){return n.a.createElement(g.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,a,t){var r;e.exports=(r=t(154))&&r.default||r},152:function(e,a,t){"use strict";t(33),t(150);var r=t(0),n=t.n(r),i=t(149);a.a=function(e){var a=e.path,t=e.icon,r=e.name;return n.a.createElement(i.Link,{className:"link",to:a},n.a.createElement("span",{title:r,className:"tag-icons pr-2",dangerouslySetInnerHTML:{__html:t.map(function(e){return"&#x"+e.replace("U+","")}).join("")}}))}},153:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(409),s=t(410),l=t(411),o=t(412),c=t(413),m=t(414),d=t(415);a.a=function(e){var a=e.siteTitle,t=e.showTitle,g=Object(r.useState)(!1),u=g[0],f=g[1];return n.a.createElement("header",null,n.a.createElement(i.a,{expand:"md",className:"navbar-dark bg-transparent"},t&&n.a.createElement(s.a,{href:"/"},n.a.createElement("h1",{className:"title--header brand"},a)),n.a.createElement(l.a,{className:"link light",onClick:function(){return f(!u)}}),n.a.createElement(o.a,{isOpen:u,navbar:!0},n.a.createElement(c.a,{className:"ml-auto",navbar:!0},n.a.createElement(m.a,null,n.a.createElement(d.a,{className:"link light",href:"/our-story/"},"Our Story")),n.a.createElement(m.a,null,n.a.createElement(d.a,{className:"link light",href:"/blog/"},"Blog")),n.a.createElement(m.a,null,n.a.createElement(d.a,{className:"link light",href:"/contact/"},"Free business listing"))))))}},154:function(e,a,t){"use strict";t.r(a);t(34);var r=t(0),n=t.n(r),i=t(4),s=t.n(i),l=t(51),o=t(2),c=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=c},155:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty",description:"Your expat and travelling directory in Andalusia that helps you to find and pick interesting places, events and attractions in one search"}},areas:{edges:[{node:{fields:{slug:"/areas/algeciras/"},frontmatter:{name:"Algeciras",tag:"Algeciras"}}},{node:{fields:{slug:"/areas/alhaurin-de-la-torre/"},frontmatter:{name:"Alhaurin de la Torre",tag:"Alhaurin de la Torre"}}},{node:{fields:{slug:"/areas/alhaurin-el-grande/"},frontmatter:{name:"Alhaurin el Grande",tag:"Alhaurin el Grande"}}},{node:{fields:{slug:"/areas/almeria/"},frontmatter:{name:"Almeria",tag:"Almeria"}}},{node:{fields:{slug:"/areas/almunerca/"},frontmatter:{name:"Almunerca",tag:"Almunerca"}}},{node:{fields:{slug:"/areas/benalmadena/"},frontmatter:{name:"Benalmadena",tag:"Benalmadena"}}},{node:{fields:{slug:"/areas/cadiz/"},frontmatter:{name:"Cadiz",tag:"Cadiz"}}},{node:{fields:{slug:"/areas/cartama/"},frontmatter:{name:"Cartama",tag:"Cartama"}}},{node:{fields:{slug:"/areas/coin/"},frontmatter:{name:"Coin",tag:"Coin"}}},{node:{fields:{slug:"/areas/cordoba/"},frontmatter:{name:"Cordoba",tag:"Cordoba"}}},{node:{fields:{slug:"/areas/costa-almeria/"},frontmatter:{name:"Costa Almeria",tag:"Costa Almeria"}}},{node:{fields:{slug:"/areas/costa-de-la-luz/"},frontmatter:{name:"Costa de la Luz",tag:"Costa de la Luz"}}},{node:{fields:{slug:"/areas/costa-del-sol/"},frontmatter:{name:"Costa del Sol",tag:"Costa del Sol"}}},{node:{fields:{slug:"/areas/elviria/"},frontmatter:{name:"Elviria",tag:"Elviria"}}},{node:{fields:{slug:"/areas/estepona/"},frontmatter:{name:"Estepona",tag:"Estepona"}}},{node:{fields:{slug:"/areas/fuengirola/"},frontmatter:{name:"Fuengirola",tag:"Fuengirola"}}},{node:{fields:{slug:"/areas/gibraltar/"},frontmatter:{name:"Gibraltar",tag:"Gibraltar"}}},{node:{fields:{slug:"/areas/granada/"},frontmatter:{name:"Granada",tag:"Granada"}}},{node:{fields:{slug:"/areas/huelva/"},frontmatter:{name:"Huelva",tag:"Huelva"}}},{node:{fields:{slug:"/areas/jaen/"},frontmatter:{name:"Jaen",tag:"Jaen"}}},{node:{fields:{slug:"/areas/malaga/"},frontmatter:{name:"Malaga",tag:"Malaga"}}},{node:{fields:{slug:"/areas/manilva/"},frontmatter:{name:"Manilva",tag:"Manilva"}}},{node:{fields:{slug:"/areas/marbella/"},frontmatter:{name:"Marbella",tag:"Marbella"}}},{node:{fields:{slug:"/areas/mijas/"},frontmatter:{name:"Mijas",tag:"Mijas"}}},{node:{fields:{slug:"/areas/nerja/"},frontmatter:{name:"Nerja",tag:"Nerja"}}},{node:{fields:{slug:"/areas/puerto-banus/"},frontmatter:{name:"Puerto Banus",tag:"Puerto Banus"}}},{node:{fields:{slug:"/areas/sabinilas/"},frontmatter:{name:"Sabinillas",tag:"Sabinillas"}}},{node:{fields:{slug:"/areas/san-pedro-de-alcantara/"},frontmatter:{name:"San Pedro de Alcantara",tag:"San Pedro de Alcantara"}}},{node:{fields:{slug:"/areas/seville/"},frontmatter:{name:"Seville",tag:"Seville"}}},{node:{fields:{slug:"/areas/sotogrande/"},frontmatter:{name:"Sotogrande",tag:"Sotogrande"}}},{node:{fields:{slug:"/areas/torre-del-mar/"},frontmatter:{name:"Torre del Mar",tag:"Torre del Mar"}}},{node:{fields:{slug:"/areas/torremolinos/"},frontmatter:{name:"Torremolinos",tag:"Torremolinos"}}},{node:{fields:{slug:"/areas/torrox/"},frontmatter:{name:"Torrox",tag:"Torrox"}}}]},categories:{edges:[{node:{frontmatter:{tag:"Adventure golf",name:"Adventure golf",icon:["U+1F3CC"]},fields:{slug:"/categories/adventure-golf/"}}},{node:{frontmatter:{tag:"Attractions",name:"Attractions",icon:["U+1F3AA"]},fields:{slug:"/categories/attractions/"}}},{node:{frontmatter:{tag:"Beach",name:"Beach",icon:["U+1F30A"]},fields:{slug:"/categories/beach/"}}},{node:{frontmatter:{tag:"Birdwatching",name:"Birdwatching",icon:["U+1F985"]},fields:{slug:"/categories/birdwatching/"}}},{node:{frontmatter:{tag:"Boat trips",name:"Boat trips",icon:["U+1F6A4"]},fields:{slug:"/categories/boat-trips/"}}},{node:{frontmatter:{tag:"Bowling",name:"Bowling",icon:["U+1F3B3"]},fields:{slug:"/categories/bowling/"}}},{node:{frontmatter:{tag:"Buggy",name:"Buggy",icon:["U+1F698"]},fields:{slug:"/categories/buggy/"}}},{node:{frontmatter:{tag:"Cable Car",name:"Cable Car",icon:["U+1F6A0"]},fields:{slug:"/categories/cable.car/"}}},{node:{frontmatter:{tag:"Cinema",name:"Cinema",icon:["U+1F3A6"]},fields:{slug:"/categories/cinema/"}}},{node:{frontmatter:{tag:"Day Out",name:"Day Out",icon:["U+1F697"]},fields:{slug:"/categories/day-out/"}}},{node:{frontmatter:{tag:"Dolphin watching",name:"Dolphin watching",icon:["U+1F42C"]},fields:{slug:"/categories/dolphin-watching/"}}},{node:{frontmatter:{tag:"Families",name:"Families",icon:["U+1F46A"]},fields:{slug:"/categories/families/"}}},{node:{frontmatter:{tag:"Ferris Wheel",name:"Ferris Wheel",icon:["U+1F3A1"]},fields:{slug:"/categories/ferris-wheel/"}}},{node:{frontmatter:{tag:"Free Activities",name:"Free Activities",icon:["U+1F193"]},fields:{slug:"/categories/free-activities/"}}},{node:{frontmatter:{tag:"Fishing",name:"Fishing",icon:["U+1F3A3"]},fields:{slug:"/categories/fishing/"}}},{node:{frontmatter:{tag:"Go-karts",name:"Go-karts",icon:["U+1F3C1"]},fields:{slug:"/categories/go-karts/"}}},{node:{frontmatter:{tag:"Local Ferias",name:"Local Ferias",icon:["U+1F3A0"]},fields:{slug:"/categories/local-ferias/"}}},{node:{frontmatter:{tag:"Parasailing",name:"Parasailing",icon:["U+1F6A4"]},fields:{slug:"/categories/parasailing/"}}},{node:{frontmatter:{tag:"School",name:"School",icon:["U+1F3EB"]},fields:{slug:"/categories/school/"}}},{node:{frontmatter:{tag:"Museums",name:"Museums",icon:["U+1F3E2"]},fields:{slug:"/categories/museums/"}}},{node:{frontmatter:{tag:"Scuba Diving",name:"Scuba Diving",icon:["U+1F421"]},fields:{slug:"/categories/scuba-diving/"}}},{node:{frontmatter:{tag:"Softplay",name:"Softplay",icon:["U+1F939"]},fields:{slug:"/categories/softplay/"}}},{node:{frontmatter:{tag:"Sports",name:"Sports",icon:["U+26BD"]},fields:{slug:"/categories/sports/"}}},{node:{frontmatter:{tag:"Street markets",name:"Street markets",icon:["U+1F34D"]},fields:{slug:"/categories/street-markets/"}}},{node:{frontmatter:{tag:"Swimming",name:"Swimming",icon:["U+1F3CA"]},fields:{slug:"/categories/swimming/"}}},{node:{frontmatter:{tag:"Theatre",name:"Theatre",icon:["U+1F3AD"]},fields:{slug:"/categories/theatre/"}}},{node:{frontmatter:{tag:"Theme Parks",name:"Theme Parks",icon:["U+1F3A2"]},fields:{slug:"/categories/theme-parks/"}}},{node:{frontmatter:{tag:"Trampoline Parks",name:"Trampoline Parks",icon:["U+1F938","U+200D","U+2640","U+FE0F"]},fields:{slug:"/categories/trampoline-parks/"}}},{node:{frontmatter:{tag:"Waterparks",name:"Waterparks",icon:["U+1F93D","U+200D","U+2642","U+FE0F"]},fields:{slug:"/categories/waterparks/"}}},{node:{frontmatter:{tag:"Watersports",name:"Watersports",icon:["U+1F305"]},fields:{slug:"/categories/watersports/"}}},{node:{frontmatter:{tag:"Wildlife Parks",name:"Wildlife Parks",icon:["U+1F43E"]},fields:{slug:"/categories/wildlife-parks/"}}},{node:{frontmatter:{tag:"Whale watching",name:"Whale watching",icon:["U+1F433"]},fields:{slug:"/categories/whale-watching/"}}},{node:{frontmatter:{tag:"Windsurfing",name:"Windsurfing",icon:["U+1F3C4"]},fields:{slug:"/categories/windsurfing/"}}},{node:{frontmatter:{tag:"Zipline",name:"Zipline",icon:["U+1F5FB"]},fields:{slug:"/categories/zipline/"}}}]}}}},156:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAFLUlEQVQ4y6WUeUzTZxjHiy46li2yOSMIc84D0JEZgcmpc3GJ08zgMXQocsllFBAU5Rj3Oc5yFEEQ5IZyUyoiR2FAhwXkEGrpD6ggIFoUVBQo5f2u7RL23/7Zk3zz5Hne9/vJk7wH7ej7Rdp/xSLSlCwGqU9pQuzazJ87coASO5tSM1EmlLhUpgmZ/OT7TEdm1q2afgNoh57NKptQM98YC8U/GQ+JHYyGxOEmgheF+wUzHfuEs9PXqYElz4lJGI0v4sCEBEYjb2EonMP3vc879R9Ntcrkswo0HHxxzmBgekkmYsAXw2h0HiYy4/6RDzj4RIycP7PwLiEMS0WFxKHv8fJ23nOJ/sPxFd2+19DtnYG+cBF7ueP/AvW6J730uiYlup0To/t4k9jX8WxZt2NcotU6sVzWfUeKZt+VsbxEMlaQQdoYBcShbRianKcLe1tEMTrNIus9TaMG33JEyqvAve1jOjoc0SGZbn3HnYIOZ1S6mzNG9O4PoLvElbwtDcJgbSlGOMVovZ1BfmQJsL12+IMma4i3izVUI2eoZvSu1cjrV6Jp1w0LtetFkGWJ9gMRtO5RRPuekGixKWhVDaI4yR1vGFfBC7mGidDLSKqsgUqZkOws42NH7QS2lfDff1002CiTrWI6TbbQTZNNWW0v5y9sKxdgawmfqBXzocHkE9XiIRwr4aDn7nkM+h6Dd2QituQNkK15/dDI7SfqOf0S9QIB1LP7ZmXTqall9SrTZMVh9fzBEFlDoprdC5eqDnKzvIUYFnQT1cweuDTyUMbJwgLTGQEV9/FFlgCqad1Qz+ghm9MekU2p3fgypWtuY3IXb2Ny50valtwn0Kibh72VA5yOniC3bSwwE++Jh+wSxDKrUcVi4JWwBWNPBaDGKARzBrAulgta5F/4LIZLPk98BJU4HjbEdEg3RHe8om1K7oxUyRRYnjKzro86Y46Ki2el4c6uxDipHuoxzVAJroXznUrMiyfh84DCeWYr8h8+Rli9QOpfx8dHwa2sT8LaLyiHtBms92v+ePWkjaPzzTyM9RCyS4PccLxBCkVLMCsSYG1YFzZE8dDb2gS/yj6YMyng7WvgzTRpo16C5t0mUvblSNZ7NR5ZhfWx7dRq7ljn0gOt4ONhTXLS48j7SQrMjGh4B3jBN+AmkiI9cTc5FOn0AFD8XkwN95Gy9BASEBEEr9h4nlN81k4FLMHTcI08Z/rpH6S7mSLc7gcEWpmSCJdT8Lc6gDAbU4RYGiDgggn8zhuB7nkOIuoJJMtSwvC1Qcg5vQXuVW0txRO2sVpDy478RQHMjvp5f0bgScK4aYEULwvC8DQH48YZJLifREbIJdz2t0Xy9V/RUHwL7+bnIZ6eWsn7wxV0j9PzMT72e+SMfC8zJVpZorkCWJ58QrckznKlMMIRheGOpCDMHqWxbhjg3kf7vUIwY90h72UHWKImzR+s1N9XCkLtUBThNFsY7rBDzpD5lGg1qRZK8oKVdlqnhmG7VE13Wammuy6XRdpLh3tapACkA201UlaCm7Q6/ooiV0Q7SStinCWsBFdUxV95IfN8JWdUx7vIgClnFcCqFLPdD9Js0ZTqjoZbHqhLuARheyXkMft8FG05QahnuCrWGmVqSHFHc9o11NCvzFXHXVZTDBV/WYnGjDupANamH9+UGXyKmxds3VQYasvKDbzAzg2yZjcUMdhFkc7sHD8LdlGYHbs43I5dEnGRXRHlUFUUdpGbG2zL6sm+pvhpKqMd/7k2sd6Haf83PGyOK/Lfo44+XolNI9sAAAAASUVORK5CYII=",width:200,height:188,src:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png",srcSet:"/static/c96414a400d98f0b8e2d1dd24422cb6a/23ee4/patty-working-at-desk.png 1x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/caa98/patty-working-at-desk.png 1.5x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/51380/patty-working-at-desk.png 2x,\n/static/c96414a400d98f0b8e2d1dd24422cb6a/240c8/patty-working-at-desk.png 3x"}}}}}},157:function(e,a,t){"use strict";t(150);var r=t(155),n=t(0),i=t.n(n),s=t(149),l=t(158),o=t.n(l),c=(t(164),t(156)),m=t(165),d=t.n(m),g=function(){return i.a.createElement(s.StaticQuery,{query:"1292776582",render:function(e){return i.a.createElement(d.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:c})},u=t(152);a.a=function(){return i.a.createElement(s.StaticQuery,{query:"2824076944",render:function(e){return i.a.createElement("footer",{className:"container-fluid mt-5 pb-3 footer"},i.a.createElement("div",{className:"row pt-5"},i.a.createElement("div",{className:"col-lg mb-5 pr-5"},i.a.createElement("h2",{className:"title--header small mb-4"},i.a.createElement("a",{className:"link brand",rel:"author",href:"/"},e.site.siteMetadata.title)),i.a.createElement("p",null,i.a.createElement("small",null,e.site.siteMetadata.description)),i.a.createElement(g,null),i.a.createElement("p",null,i.a.createElement("em",null,i.a.createElement("small",null,"All rights reserved. © expatty.com ",o()().format("YYYY"))))),i.a.createElement("div",{className:"col-lg mb-5"},i.a.createElement("h2",{className:"title--header small primary-colour mb-4"},"Areas"),i.a.createElement("ul",null,e.areas.edges.map(function(e,a){var t=e.node;return i.a.createElement("li",{key:a},i.a.createElement("span",{className:"spacer"})," ",i.a.createElement("a",{href:t.fields.slug,className:"link"},t.frontmatter.name))}))),i.a.createElement("div",{className:"col-lg mb-5"},i.a.createElement("h2",{className:"title--header small primary-colour mb-4"},"Categories"),i.a.createElement("ul",null,e.categories.edges.map(function(e,a){var t=e.node;return i.a.createElement("li",{key:a},i.a.createElement(u.a,{path:t.fields.slug,name:t.frontmatter.name,icon:t.frontmatter.icon}),i.a.createElement("a",{href:t.fields.slug,className:"link"}," ",t.frontmatter.name))}))),i.a.createElement("div",{className:"col-lg mb-5"},i.a.createElement("h2",{className:"title--header small primary-colour mb-4"},"Subscribe to our newsletter"),i.a.createElement("form",{action:"https://expatty.us7.list-manage.com/subscribe/post?u=a6b6c49a554f762c8c4c8d495&id=1eef58f2b5",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",name:"EMAIL",className:"form-control",id:"mce-EMAIL",placeholder:"email address",required:!0})),i.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},i.a.createElement("input",{type:"text",name:"b_a6b6c49a554f762c8c4c8d495_1eef58f2b5",tabIndex:"-1"})),i.a.createElement("div",{className:"clear"},i.a.createElement("button",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"btn"},"Subscribe"))))))},data:r})}},159:function(e,a,t){"use strict";var r=t(160),n=t(0),i=t.n(n),s=t(153),l=t(149),o=t(157);a.a=function(e){var a=e.children;return i.a.createElement(l.StaticQuery,{query:"1948935994",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title}),a,i.a.createElement(o.a,null))},data:r})}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}},161:function(e,a,t){"use strict";var r=t(162),n=t(0),i=t.n(n),s=t(4),l=t.n(s),o=t(173),c=t.n(o),m=t(149);function d(e){var a=e.description,t=e.lang,n=e.meta,s=e.keywords,l=e.title;return i.a.createElement(m.StaticQuery,{query:g,render:function(e){var r=a||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},a.a=d;var g="1025518380"},162:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty",description:"Your expat and travelling directory in Andalusia that helps you to find and pick interesting places, events and attractions in one search",author:"@expattydotcom"}}}}},194:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(158),s=t.n(i);a.a=function(e){var a=e.title,t=e.excerpt,r=e.image,i=e.url,l=e.author,o=e.date;return n.a.createElement("a",{className:"link light",href:i},n.a.createElement("div",{className:"card bg-transparent mb-5"},r&&n.a.createElement("img",{src:r,alt:a,className:"card-img-top"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},a),n.a.createElement("p",null,n.a.createElement("small",null,n.a.createElement("time",{className:"light-primary-colour pt-2",dateTime:s()(o),itemProp:"datePublished"},s()(o).format("dddd, D MMMM YYYY")),n.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},"  • ",n.a.createElement("span",{className:"light-primary-colour",itemProp:"name"},l)))),n.a.createElement("div",{className:"card-text primary-text-colour",dangerouslySetInnerHTML:{__html:t}}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-7cf6fad69077d4f48722.js.map