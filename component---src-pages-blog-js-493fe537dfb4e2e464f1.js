(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return o});var r=a(0),n=a.n(r),l=a(159),i=a(247),c=a(174),m=a(185),s=a.n(m);t.default=function(e){var t=e.data,a=s()();return n.a.createElement(l.a,null,n.a.createElement(c.a,{title:"Expatty | Blog",description:t.site.siteMetadata.description,keywords:t.site.siteMetadata.commonKeywords}),n.a.createElement("main",null,n.a.createElement("div",{className:"container-fluid blog"},n.a.createElement("h1",{className:"title--header"},"Patty's Blog"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},t.bloglist.edges.filter(function(e){var t=e.node;return a.isAfter(t.frontmatter.date)}).map(function(e,t){var a=e.node;return n.a.createElement(i.a,{key:t,excerpt:a.excerpt,image:a.frontmatter.image,url:a.fields.slug,title:a.frontmatter.title,author:a.frontmatter.author,date:a.frontmatter.date})}))))))};var o="555866054"},159:function(e,t,a){"use strict";var r=a(160),n=a(0),l=a.n(n),i=a(169),c=a(150),m=a(176),s=a(175);t.a=function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"1948935994",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title}),t,l.a.createElement(m.a,null),l.a.createElement(s.a,null))},data:r})}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}},247:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(185),i=a.n(l);t.a=function(e){var t=e.title,a=e.excerpt,r=e.image,l=e.url,c=e.author,m=e.date;return n.a.createElement("a",{className:"link light",href:l},n.a.createElement("div",{className:"card bg-transparent mb-5"},r&&n.a.createElement("img",{src:r,alt:t,className:"card-img-top"}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},t),n.a.createElement("p",null,n.a.createElement("small",null,n.a.createElement("time",{className:"light-primary-colour pt-2",dateTime:i()(m),itemProp:"datePublished"},i()(m).format("dddd, D MMMM YYYY")),n.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},"  • ",n.a.createElement("span",{className:"light-primary-colour",itemProp:"name"},c)))),n.a.createElement("div",{className:"card-text primary-text-colour",dangerouslySetInnerHTML:{__html:a}}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-493fe537dfb4e2e464f1.js.map