(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});a(73),a(158);var r=a(0),n=a.n(r),i=a(159),l=a(174),s=a(247),o=a(187);t.default=function(e){var t=e.data,a=t.thisCategory.frontmatter,r=a.type,c=a.name,u=a.tag,m=t.site.siteMetadata.commonKeywords,h=t.listings.edges.map(function(e){return e.node}),p=t.categories.edges.map(function(e){return e.node});return n.a.createElement(i.a,null,n.a.createElement(l.a,{title:"Expatty "+("category"===r?"category":"areas")+" | "+c,description:"Attractions, events, businesses and services in Andalusia, Spain, related to: "+c,keywords:[c].concat(m)}),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md"},n.a.createElement("main",null,n.a.createElement("h1",{className:"title--header"},c),h.filter(function(e){return e.frontmatter.tags.indexOf(u)>=0}).map(function(e,t){var a=e.frontmatter.tags.map(function(e){return p.find(function(t){return t.frontmatter.tag===e})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}});return n.a.createElement(s.a,{key:t,description:e.frontmatter.description,title:e.frontmatter.title,url:e.fields.slug,icons:a})}),n.a.createElement(o.a,{callToAction:"Share this list on:"}))))))};var c="4105432918"},159:function(e,t,a){"use strict";var r=a(160),n=a(0),i=a.n(n),l=a(169),s=a(150),o=a(176),c=a(175);t.a=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"1948935994",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title}),t,i.a.createElement(o.a,null),i.a.createElement(c.a,null))},data:r})}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}},187:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.callToAction;return n.a.createElement("div",{className:"share-bar mt-5"},n.a.createElement("h4",{className:"title--header small"},t||"Share this on:"),n.a.createElement("div",{className:"share-buttons"},n.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Facebook"},n.a.createElement("i",{className:"fa fa-facebook-official share-button"}," facebook")),n.a.createElement("a",{href:"https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Twitter"},n.a.createElement("i",{className:"fa fa-twitter share-button"}," twitter")),n.a.createElement("a",{href:"https://plus.google.com/share?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Google+"},n.a.createElement("i",{className:"fa fa-google-plus share-button"}," google")),n.a.createElement("a",{href:"http://pinterest.com/pin/create/button/?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Pinterest"},n.a.createElement("i",{className:"fa fa-pinterest-p share-button"}," pinterest")),n.a.createElement("a",{href:"http://www.tumblr.com/share/link?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Tumblr"},n.a.createElement("i",{className:"fa fa-tumblr share-button"}," tumblr")),n.a.createElement("a",{href:"http://www.reddit.com/submit?url={{ site.url }}{{ site.baseurl }}{{ page.url }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;",title:"Share on Reddit"},n.a.createElement("i",{className:"fa fa-reddit-alien share-button"}," reddit")),n.a.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ site.baseurl }}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source={{ site.title }}",onClick:"window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;",title:"Share on LinkedIn"},n.a.createElement("i",{className:"fa fa-linkedin share-button"}," linkedin")),n.a.createElement("a",{href:"mailto:?subject={{ page.title }}&body=Check out this site {{ site.url }}{{ site.baseurl }}{{ page.url }}",title:"Share via Email"},n.a.createElement("i",{className:"fa fa-envelope share-button"}," email"))))}},247:function(e,t,a){"use strict";a(158);var r=a(0),n=a.n(r),i=a(150),l=a(186);t.a=function(e){var t=e.title,a=e.description,r=e.url,s=e.icons;return n.a.createElement("div",{className:"row listing"},n.a.createElement("div",{className:"col-md"},n.a.createElement("div",{className:"card mb-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title title--header dark small"},n.a.createElement(i.Link,{className:"link",to:r},t)),n.a.createElement("p",{className:"card-text"},a),n.a.createElement("p",null,s&&s.map(function(e,t){return n.a.createElement(l.a,{icon:e.icon,name:e.name,path:e.path,key:t})}))))))}}}]);
//# sourceMappingURL=component---src-components-templates-listing-list-js-e74fcea2de07836339ec.js.map