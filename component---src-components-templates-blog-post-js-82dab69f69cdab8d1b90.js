(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});a(158),a(73);var r=a(0),n=a.n(r),l=a(159),i=a(174),o=a(185),s=a.n(o),c=a(187),m=a(244),u=a.n(m),d=a(247),p=a(202);t.default=function(e){var t=e.data,a=t.site.siteMetadata.commonKeywords,r=t.markdownRemark.html,o=t.markdownRemark.frontmatter,m=o.title,h=o.description,f=o.date,E=o.image,g=o.author;return n.a.createElement(l.a,null,n.a.createElement(i.a,{title:"Expatty Blog | "+m,description:h,keywords:[m].concat(a)}),n.a.createElement(p.a,{buffer:500}),n.a.createElement("div",{className:"container-fluid blog"},n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-md blog-image"},n.a.createElement("img",{className:"img-fluid",src:E,alt:m}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},n.a.createElement("main",null,n.a.createElement("article",{className:"mt-5",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.a.createElement("header",null,n.a.createElement("h1",{className:"title--header",itemProp:"name headline"},m),n.a.createElement("p",null,n.a.createElement("time",{className:"light-primary-colour pt-2",dateTime:s()(f),itemProp:"datePublished"},s()(f).format("dddd, D MMMM YYYY")),n.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},"  • ",n.a.createElement("span",{className:"light-primary-colour",itemProp:"name"},g)))),n.a.createElement("div",{itemProp:"articleBody",dangerouslySetInnerHTML:{__html:r}}),n.a.createElement("a",{href:t.markdownRemark.fields.slug,hidden:!0}," "))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},n.a.createElement(c.a,null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},n.a.createElement(u.a.DiscussionEmbed,{shortname:"expatty"})))),n.a.createElement("div",{className:"col-md-4 blog-picks"},n.a.createElement("h2",{className:"title--header small mt-5"},"Patty's Picks"),t.picks.edges.map(function(e,a){var r=e.node,l=r.frontmatter.tags.map(function(e){return t.categories.edges.map(function(e){return e.node}).find(function(t){return t.frontmatter.tag===e})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}});return n.a.createElement(d.a,{key:a,title:r.frontmatter.title,url:r.fields.slug,icons:l,description:r.frontmatter.description,content:r.html,image:r.frontmatter.image})})))))};var h="3226963431"},159:function(e,t,a){"use strict";var r=a(160),n=a(0),l=a.n(n),i=a(169),o=a(153),s=a(176),c=a(175);t.a=function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"1948935994",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title}),t,l.a.createElement(s.a,null),l.a.createElement(c.a,null))},data:r})}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}},187:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.callToAction;return n.a.createElement("div",{className:"share-bar mt-5"},n.a.createElement("h4",{className:"title--header small"},t||"Share this on:"),n.a.createElement("div",{className:"share-buttons"},n.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Facebook"},n.a.createElement("i",{className:"fa fa-facebook-official share-button"}," facebook")),n.a.createElement("a",{href:"https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Twitter"},n.a.createElement("i",{className:"fa fa-twitter share-button"}," twitter")),n.a.createElement("a",{href:"https://plus.google.com/share?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Google+"},n.a.createElement("i",{className:"fa fa-google-plus share-button"}," google")),n.a.createElement("a",{href:"http://pinterest.com/pin/create/button/?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Pinterest"},n.a.createElement("i",{className:"fa fa-pinterest-p share-button"}," pinterest")),n.a.createElement("a",{href:"http://www.tumblr.com/share/link?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Tumblr"},n.a.createElement("i",{className:"fa fa-tumblr share-button"}," tumblr")),n.a.createElement("a",{href:"http://www.reddit.com/submit?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Reddit"},n.a.createElement("i",{className:"fa fa-reddit-alien share-button"}," reddit")),n.a.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ site.baseurl }}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source={{ site.title }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on LinkedIn"},n.a.createElement("i",{className:"fa fa-linkedin share-button"}," linkedin")),n.a.createElement("a",{href:"mailto:?subject={{ page.title }}&body=Check out this site {{ site.url }}{{ site.baseurl }}{{ page.url }}",title:"Share via Email"},n.a.createElement("i",{className:"fa fa-envelope share-button"}," email"))))}},202:function(e,t,a){"use strict";a(74);var r=a(0),n=a.n(r);t.a=function(e){var t=e.buffer,a="undefined"!=typeof window&&window;return Object(r.useEffect)(function(){if(a){var e,r=function r(){e&&clearTimeout(e);var n=a.document.querySelectorAll("img.lazy");e=setTimeout(function(){var e=a.pageYOffset;n.forEach(function(r){(function(e){var t=e.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+a}})(r).top<a.innerHeight+e+t&&(r.src=r.dataset.src,r.classList.remove("lazy"))}),0===n.length&&(a.document.removeEventListener("scroll",r),a.removeEventListener("resize",r),a.removeEventListener("orientationChange",r),a.removeEventListener("load",r))},20)};a.addEventListener("load",r),a.document.addEventListener("scroll",r),a.addEventListener("resize",r),a.addEventListener("orientationChange",r)}},[]),n.a.createElement(n.a.Fragment,null)}},247:function(e,t,a){"use strict";a(158),a(34);var r=a(0),n=a.n(r),l=a(186);t.a=function(e){var t=e.title,a=(e.description,e.image),r=e.url,i=e.icons,o=e.content;return n.a.createElement("div",{className:"card"},a&&n.a.createElement("a",{href:r},n.a.createElement("img",{"data-src":a.replace("1600","500").replace("x400","x250"),alt:t,className:"lazy card-img-top"})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{className:"card-title"},n.a.createElement("a",{className:"link",href:r},t)),n.a.createElement("div",{className:"card-text dark-colour",dangerouslySetInnerHTML:{__html:o}}),n.a.createElement("p",null,i&&i.map(function(e,t){return n.a.createElement(l.a,{icon:e.icon,name:e.name,path:e.path,key:t})}))))}}}]);
//# sourceMappingURL=component---src-components-templates-blog-post-js-82dab69f69cdab8d1b90.js.map