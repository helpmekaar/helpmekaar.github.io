(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159),c=a(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"About",description:"About Expatty"}),r.a.createElement("main",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h1",{className:"title--header"},"About us"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("p",null,"This is the about us page."))))))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(145),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(147),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),c=a.n(i),o=a(222),s=a(223),u=a(224),l=a(228),d=a(225),p=a(226),m=a(227),f=function(e){var t=e.siteTitle,a=Object(i.useState)(!1),n=a[0],r=a[1];return c.a.createElement("header",null,c.a.createElement(o.a,{expand:"md",className:"navbar-dark bg-transparent"},c.a.createElement(s.a,{href:"/"},c.a.createElement("h1",{className:"title--header brand"},t)),c.a.createElement(u.a,{className:"link light",onClick:function(){return r(!n)}}),c.a.createElement(l.a,{isOpen:n,navbar:!0},c.a.createElement(d.a,{className:"ml-auto",navbar:!0},c.a.createElement(p.a,null,c.a.createElement(m.a,{className:"link light",href:"/about/"},"About"))))))};f.propTypes={siteTitle:r.a.string},f.defaultProps={siteTitle:""},t.a=f},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(51),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(157),u=a.n(s),l=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var p="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty",description:"Your expat and travelling directory in Andalusia that helps you to find and pick interesting places, events and attractions in one search",author:"@expattydotcom"}}}}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),c=a(148),o=a(146);t.a=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"1948935994",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{siteTitle:e.site.siteMetadata.title}),t,i.a.createElement("div",null,"Footer"))},data:n})}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-883162d0269d70bc0f3e.js.map