(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t);a(75),a(78),a(549),a(73),a(52),a(309),a(310),a(33),a(161);var n=a(0),r=a.n(n),c=a(158),l=a(174),i=a(153),s=a(191),o=function(e){var t=e.title,a=e.description,n=e.url,c=e.tags,l=e.icons;return r.a.createElement("div",{className:"row listing","data-tags":c},r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title title--header dark small"},r.a.createElement(i.Link,{className:"link",to:n},t)),r.a.createElement("p",{className:"card-text"},a),r.a.createElement("p",null,l&&l.map(function(e,t){return r.a.createElement(s.a,{icon:e.icon,name:e.name,path:e.path,key:t})}))))))},m=a(186),u=a(599),d=a(600),f=a(582),E=a(601),g=a(595),p=a(596),h=a(602),v=a(603),y=a(589),b=a(590),k=a(188),O=a(192),w=function(e){var t=e.filterObject,a=e.filterStates,c=e.setFilterStates,l=Object(n.useState)(!1),i=l[0],s=l[1];return r.a.createElement(u.a,{className:"mb-3"},r.a.createElement(d.a,{className:"pointer",onClick:function(e){return s(!i)}},r.a.createElement("strong",{className:"primary-colour"},r.a.createElement(k.a,{icon:O.a})," Filters")),r.a.createElement(f.a,{isOpen:i},r.a.createElement(E.a,null,r.a.createElement(g.a,null,Object.keys(t).sort().map(function(e,n){return r.a.createElement(p.a,{sm:6,md:4,lg:3,className:"card-text dark-colour",key:n},r.a.createElement(h.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(y.a,{onChange:function(t){return function(e){var t;c(Object.assign({},a,((t={})[e]=!a[e],t)))}(e)},type:"checkbox",value:e,checked:a[e]})," ",e," ",r.a.createElement(b.a,{color:"primary"},r.a.createElement("small",null,t[e])))))})))))},N=a(553);a.d(t,"pageQuery",function(){return j});t.default=function(e){var t=e.data,a="undefined"!=typeof window&&window,i=t.thisCategory.frontmatter,s=i.type,u=i.name,d=i.tag,f=t.site.siteMetadata.commonKeywords,E=t.listings.edges.map(function(e){return e.node}),g=t.categories.edges.map(function(e){return e.node}),p=Object(N.flatten)(E.filter(function(e){return e.frontmatter.tags.indexOf(d)>=0}).map(function(e){return e.frontmatter.tags})).reduce(function(e,t){var a,n;return void 0===e[t]?Object.assign({},e,((a={})[t]=1,a)):Object.assign({},e,((n={})[t]=++e[t],n))},{}),h=Object(n.useState)(Object.keys(p).sort().reduce(function(e,t){var a;return Object.assign({},e,((a={})[t]=!1,a))},p)),v=h[0],y=h[1];return Object(n.useEffect)(function(){v&&(Object.values(v).reduce(function(e,t){return e||t},!1)?a.document.querySelectorAll(".listing").forEach(function(e){e.dataset.tags.split(",").reduce(function(e,t){return e||v[t.trim()]},!1)?e.classList.remove("d-none"):e.classList.add("d-none")}):a.document.querySelectorAll(".listing").forEach(function(e){return e.classList.remove("d-none")}))},[v]),r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"helpmekaar.org | "+("category"===s?"category":"areas")+" | "+u,description:"helpmekaar.org besigheid: "+u,keywords:[u].concat(f)}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("main",null,r.a.createElement("h1",{className:"title--header"},u),r.a.createElement(w,{filterObject:p,filterStates:v,setFilterStates:y}),E.filter(function(e){return e.frontmatter.tags.indexOf(d)>=0}).map(function(e,t){var a=e.frontmatter.tags.map(function(e){return g.find(function(t){return t.frontmatter.tag===e})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}});return r.a.createElement(o,{key:t,tags:e.frontmatter.tags,description:e.frontmatter.description,title:e.frontmatter.title,url:e.fields.slug,icons:a})}),r.a.createElement(m.a,{callToAction:"Deel hierdie lys op:"}))))))};var j="4105432918"},158:function(e,t,a){"use strict";var n=a(159),r=a(0),c=a.n(r),l=a(169),i=a(153),s=a(176),o=a(175);t.a=function(e){var t=e.children;return c.a.createElement(i.StaticQuery,{query:"1948935994",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title,hideFacebook:!0}),t,c.a.createElement(s.a,null),c.a.createElement(o.a,null))},data:n})}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"helpmekaar.org"}}}}},186:function(e,t,a){"use strict";a(0),a(153);t.a=function(){return null}}}]);
//# sourceMappingURL=component---src-components-templates-listing-list-js-435183fb030f68097683.js.map