(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,a,t){"use strict";t.r(a);var o=t(0),i=t.n(o),n=t(174),s=t(577),r=t(169),l=t(153),d=t(176),c=t(175),m=function(e){var a=e.children;return i.a.createElement(l.StaticQuery,{query:"2559738656",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{showTitle:!0,siteTitle:e.site.siteMetadata.title}),a,i.a.createElement(d.a,null),i.a.createElement(c.a,null))},data:s})},u=t(602),g=t(599),h=t(600),p=(t(201),t(578)),f=t(202),b=t.n(f),y=function(){return i.a.createElement(l.StaticQuery,{query:"1302177638",render:function(e){return i.a.createElement(b.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:p})},A=t(579),w=function(){return i.a.createElement(l.StaticQuery,{query:"353391793",render:function(e){return i.a.createElement(b.a,{fixed:e.placeholderImage.childImageSharp.fixed})},data:A})},v=function(){return i.a.createElement(u.a,{fluid:!0,className:"hero"},i.a.createElement(g.a,{className:"h-100 align-items-center"},i.a.createElement(h.a,{md:{size:4,order:1},className:"d-none d-sm-block h-100 text-center"},i.a.createElement(y,null)),i.a.createElement(h.a,{md:{size:4,order:1},className:"d-sm-block d-md-none h-50 text-center"},i.a.createElement(w,null)),i.a.createElement(h.a,{md:{size:3,order:2},className:"h-50 mx-auto text-center animated fadeIn"},i.a.createElement("h1",{className:"title--header slogan"},"Your personal expert assistant in Andalusia"))))},k=(t(158),t(73),t(580)),S=t(247),F=function(){return i.a.createElement(l.StaticQuery,{query:"922999384",render:function(e){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row mt-5 pb-5 picks"},i.a.createElement("div",{className:"col-md"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md"},i.a.createElement("h2",{className:"title--header small"},"Patty's Picks"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card-columns"},e.picks.edges.map(function(e){return e.node}).map(function(a,t){var o=a.frontmatter.tags.map(function(a){return e.categories.edges.map(function(e){return e.node}).find(function(e){return e.frontmatter.tag===a})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}});return i.a.createElement(S.a,{key:t,title:a.frontmatter.title,url:a.fields.slug,icons:o,description:a.frontmatter.description,content:a.html,image:a.frontmatter.image})})))))))},data:k})},T=t(581),M=t(248),C=t(185),E=t.n(C),U=function(){return i.a.createElement(l.StaticQuery,{query:"3971556623",render:function(e){var a=E()();return i.a.createElement("div",{className:"container-fluid blog"},i.a.createElement("h2",{className:"title--header small"},"Patty's Blog"),e.bloglist.edges.filter(function(e){var t=e.node;return a.isAfter(t.frontmatter.date)}).map(function(e,a){var t=e.node;return i.a.createElement(M.a,{key:a,excerpt:t.excerpt,image:t.frontmatter.image,url:t.fields.slug,title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date})}))},data:T})},P=t(204);t.d(a,"pageQuery",function(){return x});a.default=function(e){var a=e.data.site.siteMetadata,t=a.commonKeywords,o=a.description;return i.a.createElement(m,null,i.a.createElement(n.a,{title:"Home",keywords:t,description:o}),i.a.createElement("main",null,i.a.createElement(P.a,{buffer:300}),i.a.createElement(v,null),i.a.createElement(F,null),i.a.createElement(U,null)))};var x="241398299"},204:function(e,a,t){"use strict";t(74);var o=t(0),i=t.n(o);a.a=function(e){var a=e.buffer,t="undefined"!=typeof window&&window;return Object(o.useEffect)(function(){if(t){var e,o=function o(){e&&clearTimeout(e);var i=t.document.querySelectorAll("img.lazy");e=setTimeout(function(){var e=t.pageYOffset;i.forEach(function(o){(function(e){var a=e.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:a.top+o,left:a.left+t}})(o).top<t.innerHeight+e+a&&(o.src=o.dataset.src,o.classList.remove("lazy"))}),0===i.length&&(t.document.removeEventListener("scroll",o),t.removeEventListener("resize",o),t.removeEventListener("orientationChange",o),t.removeEventListener("load",o))},20)};t.addEventListener("load",o),t.document.addEventListener("scroll",o),t.addEventListener("resize",o),t.addEventListener("orientationChange",o)}},[]),i.a.createElement(i.a.Fragment,null)}},247:function(e,a,t){"use strict";t(158),t(34);var o=t(0),i=t.n(o),n=t(186);a.a=function(e){var a=e.title,t=(e.description,e.image),o=e.url,s=e.icons,r=e.content;return i.a.createElement("div",{className:"card"},t&&i.a.createElement("a",{href:o},i.a.createElement("img",{"data-src":t.replace("1600","500").replace("x400","x250"),alt:a,className:"lazy card-img-top"})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{className:"card-title"},i.a.createElement("a",{className:"link",href:o},a)),i.a.createElement("div",{className:"card-text dark-colour",dangerouslySetInnerHTML:{__html:r}}),i.a.createElement("p",null,s&&s.map(function(e,a){return i.a.createElement(n.a,{icon:e.icon,name:e.name,path:e.path,key:a})}))))}},248:function(e,a,t){"use strict";var o=t(0),i=t.n(o),n=t(185),s=t.n(n);a.a=function(e){var a=e.title,t=e.excerpt,o=e.image,n=e.url,r=e.author,l=e.date;return i.a.createElement("a",{className:"link light",href:n},i.a.createElement("div",{className:"card bg-transparent mb-5"},o&&i.a.createElement("img",{"data-src":o,alt:a,className:"lazy card-img-top"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},a),i.a.createElement("p",null,i.a.createElement("small",null,i.a.createElement("time",{className:"light-primary-colour pt-2",dateTime:s()(l),itemProp:"datePublished"},s()(l).format("dddd, D MMMM YYYY")),i.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},"  • ",i.a.createElement("span",{className:"light-primary-colour",itemProp:"name"},r)))),i.a.createElement("div",{className:"card-text primary-text-colour",dangerouslySetInnerHTML:{__html:t}}))))}},577:function(e){e.exports={data:{site:{siteMetadata:{title:"expatty"}}}}},578:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:500,height:804,src:"/static/ce6e99d191d09d6a565dac0d302ee9b0/10de5/patty-thumbs-up.png",srcSet:"/static/ce6e99d191d09d6a565dac0d302ee9b0/10de5/patty-thumbs-up.png 1x"}}}}}},579:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAAACXBIWXMAAAsSAAALEgHS3X78AAAGyklEQVRIx41VCVRTZxZ+AXU60zOn7Zna09rlzJk5p8t0ObU9tlZmpMVabLXLcI7FblhGtFYdYXCopMAgEBGwYTdAWBKIElkEkkBCFpIQlmihEgh72QyJ7GQxgSwv7zbvjxnbYmn/nJz/3vvf9/33fve++zDs9lpSULEFUQSSjapT/j67czKJio+y7bCoNuGrXV+QNusYx5/QDlJI2TGuxICpwNaseeFxL7D0uJ/PtjKYUAm8LLDEssFSqQQYV4Bjlhrw/8ucrdi6a04QgW6d50U8aqiPEM9xD8CN/8bh0ykpRHdirBPya8DdmFD6R8D8YajrCRShSYFBYOpaMGNHEgYjXkCz8osmWOXDXBPNYSlPItyqCgCdlBjIyQHbVywzXi9Ywlt7WaSvS9nhB9L+O0DO5gq0LzZEId7GGMFPmVoO2l3TWQT0FBM9BTSCW3yBsA7KgFPFcnMi48CcclFjzRMHkv6mpCoKXB37aXSutnqKT9ae37XT2HQIzKp/u538DGKwNJUoreESM608YlzBxRdll2C25DQifLGiYMOaVF1qAQJb5tDuJ3dV/O6gidLPYIIe6bLkUuFmJZ2wSMoIp4QFRm6GA2QVYC1IRtVeLaP5O4tbMFCN/Az0WvMjbk2Lzt1ay1Of3LqFf2LbrS5OOkzRj7nn6adBS4uG/qOhuKskFcz58Xpd+N4HUEeknKDMxBSuLYgn5U9geQTc1wQdpN5Feyfue1Y4yM/sxnWZYfh8RpR7Mu4ILJw92bt85tjzCCw10u8X22W1Jm83aIQA7TUFpA6wuMEo+7rIJImCKfb7oM0NdRgqUqA15g02eT5emLjR96zFYvlZdPLqEkKr6ne31oBDVPa9PjNti+8MrlODF2r2XDfVhoKdnwUd0dum38QwVAi+9IJ/Q68I8c/tE2KE8pKvbZhzMCQHY2edEwZbwcrPzAB4696bw+wTN6y6o3MDtaUO4Skw1p4jvquk2kzTN8LMAJt9lzb0SRCoU1TqNdj5OcUwrIJbaoHLJr/sgvYSAFUJWNvKQTCiBNOqFUZkVURXj9A9bTOBZdkECzMT4wOzE03R49KHSAzFQCvlDn+8rNPQLYBlWaXdoawCO485bOdx6IbssLNT4jOAu3HQmZZwC+6C5fl529jY2D6Azs3yXj7T0MSU+3BwyZXbA6A26VnoqAXobQFjXaFtofTccz6n2eqI/f2ab3Vd6k5YnDXAzMys6Mf84w0X+h2Kws9RLVoKvBMKRoQUizBvz8TljDBtNvUx1OSXzm8c1Q6hSmo0bZk3F5fA7MDBbFsp/TGgg5/f7WhO2IHk5pS7t9EkOx3x0SvNRw7t6qKXZ9saJkE/CvbpkWJ8SBoCPcJ4XFyU5RAmNaKgPD+7POp2a4jTMZuE6WdoYPhPl5+ngH4Y2Q/lHvMSHbV1U2FemkYjEkL7te/0cEONw4QaHMLkvhUrdg8qrPwwZd25mN24H/P7TIci3JueW/BBSRf8Rzi5ylBNALRdcUIdA4zskzmosbnRG73dQlsHUHwQ+3OUAJH8YW5aYcA3MgjI6YaA/OvAKKrDzVkx365cPP4pAiyK8rMLjmCugQPrT+/Y+iL0RsQ3lScEJZXBk9Hcsy/FMa8c5KjgVKfrHXRxXc8G7LcsAAxLEIlQhGlKSfgeusjmEREFH6RV9MXUD/V6PR/D0kSjGFM+tD5gVAMbO1wtQ0SnKKR/eSOvHX8mtiGY1J86krX3yGUtZF9d2knqyZJJv1+NMISlxQLylNg2ugGBBjE6ul/JULF85/vozcPxwvFqUg672OfPVOt/U+bYzkwFSjsoWxL+ek6nJfLi1QdJfVcyO/Io9/rqgAPuI/U44Rilcdi0PtgL34xjfwil+9RN29PEy//I7UZpf0T75+OhRc2OQ7UGVJxE8dQvF0cv2+75An6KGepTseo+BuKnz5D49+NVLUDlT57z+R0uKxT9r3GoHcAbpWLMTNFVxK8F7M7Yj8HH4J11tZc3kXuqrPFf5cMrwO018m53AaWwrbGncgqANWAPIW1C3uDGdVPWUO98Wm+qEgNHZVUGxdWhF322r5sk7yplYv1su2SfzyYPS1n7Cp79aDsGLAU60KenBt8qYWtdjVUrUFAJmg+TPyHtjJB8FI2FEdvpklabzYIa1vwZ3pN3b+opDjbytoDk7l5F+JfNKyc4MPnxBWh5M25iz8PPH/XYX/095XevecbCDtGBiG6cygXIVYL+JNtCe/rdx+8Kmr/7ZVTZ0L9tfpQVGPz26b8GvuXRn/X8n95E8X/Bj0LZ6pF3PPwnLLjotZDsjl1UpTwopvK9LS8+8QPITuXg1cFhagAAAABJRU5ErkJggg==",width:100,height:161,src:"/static/ce6e99d191d09d6a565dac0d302ee9b0/44d1c/patty-thumbs-up.png",srcSet:"/static/ce6e99d191d09d6a565dac0d302ee9b0/44d1c/patty-thumbs-up.png 1x,\n/static/ce6e99d191d09d6a565dac0d302ee9b0/3318a/patty-thumbs-up.png 1.5x,\n/static/ce6e99d191d09d6a565dac0d302ee9b0/23ee4/patty-thumbs-up.png 2x,\n/static/ce6e99d191d09d6a565dac0d302ee9b0/caa98/patty-thumbs-up.png 3x"}}}}}},580:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Attractions",name:"Attractions",icon:["U+1F3AA"]},fields:{slug:"/categories/attractions/"}}},{node:{frontmatter:{tag:"Beach",name:"Beach",icon:["U+1F30A"]},fields:{slug:"/categories/beach/"}}},{node:{frontmatter:{tag:"Adventure golf",name:"Adventure golf",icon:["U+1F3CC"]},fields:{slug:"/categories/adventure-golf/"}}},{node:{frontmatter:{tag:"Birdwatching",name:"Birdwatching",icon:["U+1F985"]},fields:{slug:"/categories/birdwatching/"}}},{node:{frontmatter:{tag:"Buggy",name:"Buggy",icon:["U+1F698"]},fields:{slug:"/categories/buggy/"}}},{node:{frontmatter:{tag:"Boat trips",name:"Boat trips",icon:["U+1F6A4"]},fields:{slug:"/categories/boat-trips/"}}},{node:{frontmatter:{tag:"Bowling",name:"Bowling",icon:["U+1F3B3"]},fields:{slug:"/categories/bowling/"}}},{node:{frontmatter:{tag:"Beaches for dogs",name:"Beaches for dogs",icon:["U+1F415"]},fields:{slug:"/categories/beaches-for-dogs/"}}},{node:{frontmatter:{tag:"Cinema",name:"Cinema",icon:["U+1F3A6"]},fields:{slug:"/categories/cinema/"}}},{node:{frontmatter:{tag:"Dolphin watching",name:"Dolphin watching",icon:["U+1F42C"]},fields:{slug:"/categories/dolphin-watching/"}}},{node:{frontmatter:{tag:"Cable Car",name:"Cable Car",icon:["U+1F6A0"]},fields:{slug:"/categories/cable-car/"}}},{node:{frontmatter:{tag:"Day Out",name:"Day Out",icon:["U+1F697"]},fields:{slug:"/categories/day-out/"}}},{node:{frontmatter:{tag:"Families",name:"Families",icon:["U+1F46A"]},fields:{slug:"/categories/families/"}}},{node:{frontmatter:{tag:"Fishing",name:"Fishing",icon:["U+1F3A3"]},fields:{slug:"/categories/fishing/"}}},{node:{frontmatter:{tag:"Ferris Wheel",name:"Ferris Wheel",icon:["U+1F3A1"]},fields:{slug:"/categories/ferris-wheel/"}}},{node:{frontmatter:{tag:"Go-karts",name:"Go-karts",icon:["U+1F3C1"]},fields:{slug:"/categories/go-karts/"}}},{node:{frontmatter:{tag:"Free Activities",name:"Free Activities",icon:["U+1F193"]},fields:{slug:"/categories/free-activities/"}}},{node:{frontmatter:{tag:"Golf Resorts",name:"Golf Resorts",icon:["U+1F3E8"]},fields:{slug:"/categories/golf-resorts/"}}},{node:{frontmatter:{tag:"Hiking",name:"Hiking",icon:["U+1F463"]},fields:{slug:"/categories/hiking/"}}},{node:{frontmatter:{tag:"Golf",name:"Golf",icon:["U+26F3"]},fields:{slug:"/categories/golf/"}}},{node:{frontmatter:{tag:"How to",name:"How to",icon:["U+2754"]},fields:{slug:"/categories/how-to/"}}},{node:{frontmatter:{tag:"Local Ferias",name:"Local Ferias",icon:["U+1F3A0"]},fields:{slug:"/categories/local-ferias/"}}},{node:{frontmatter:{tag:"Mother and toddler groups",name:"Mother and toddler groups",icon:["U+1F931"]},fields:{slug:"/categories/mother-and-toddler-groups/"}}},{node:{frontmatter:{tag:"Parasailing",name:"Parasailing",icon:["U+1F6A4"]},fields:{slug:"/categories/parasailing/"}}},{node:{frontmatter:{tag:"Museums",name:"Museums",icon:["U+1F3E2"]},fields:{slug:"/categories/museums/"}}},{node:{frontmatter:{tag:"Schools",name:"Schools",icon:["U+1F3EB"]},fields:{slug:"/categories/schools/"}}},{node:{frontmatter:{tag:"Scuba Diving",name:"Scuba Diving",icon:["U+1F421"]},fields:{slug:"/categories/scuba-diving/"}}},{node:{frontmatter:{tag:"Softplay",name:"Softplay",icon:["U+1F939"]},fields:{slug:"/categories/softplay/"}}},{node:{frontmatter:{tag:"Shopping",name:"Shopping",icon:["U+1F45C"]},fields:{slug:"/categories/shopping/"}}},{node:{frontmatter:{tag:"Sports",name:"Sports",icon:["U+26BD"]},fields:{slug:"/categories/sports/"}}},{node:{frontmatter:{tag:"Street markets",name:"Street markets",icon:["U+1F34D"]},fields:{slug:"/categories/street-markets/"}}},{node:{frontmatter:{tag:"Swimming",name:"Swimming",icon:["U+1F3CA"]},fields:{slug:"/categories/swimming/"}}},{node:{frontmatter:{tag:"Theatre",name:"Theatre",icon:["U+1F3AD"]},fields:{slug:"/categories/theatre/"}}},{node:{frontmatter:{tag:"Theme Parks",name:"Theme Parks",icon:["U+1F3A2"]},fields:{slug:"/categories/theme-parks/"}}},{node:{frontmatter:{tag:"Top Attractions in Andalusia",name:"Top Attractions in Andalusia",icon:["U+1F51D"]},fields:{slug:"/categories/top-attractions-in-andalusia/"}}},{node:{frontmatter:{tag:"Top Free Things to do with Kids in Andalusia",name:"Top Free Things to do with Kids in Andalusia",icon:["U+1F51D"]},fields:{slug:"/categories/top-free-things-to-do-with-kids-in-andalusia/"}}},{node:{frontmatter:{tag:"Top things to do in Andalusia when it rains",name:"Top things to do in Andalusia when it rains",icon:["U+1F51D"]},fields:{slug:"/categories/top-things-to-do-in-andalusia-when-it-rains/"}}},{node:{frontmatter:{tag:"Top things to do in Costa del Sol",name:"Top things to do in Costa del Sol",icon:["U+1F51D"]},fields:{slug:"/categories/top-things-to-do-in-costa-del-sol/"}}},{node:{frontmatter:{tag:"Top things to do in Granada",name:"Top things to do in Granada",icon:["U+1F51D"]},fields:{slug:"/categories/top-things-to-do-in-granada/"}}},{node:{frontmatter:{tag:"Top things to do in Cordoba",name:"Top things to do in Cordoba",icon:["U+1F51D"]},fields:{slug:"/categories/top-things-to-do-in-cordoba/"}}},{node:{frontmatter:{tag:"Top things to do in Malaga",name:"Top things to do in Malaga",icon:["U+1F51D"]},fields:{slug:"/categories/top-things-to-do-in-malaga/"}}},{node:{frontmatter:{tag:"Top things to do in Seville",name:"Top things to do in Seville",icon:["U+1F51D"]},fields:{slug:"/categories/top-things-to-do-in-seville/"}}},{node:{frontmatter:{tag:"Waterparks",name:"Waterparks",icon:["U+1F93D","U+200D","U+2642","U+FE0F"]},fields:{slug:"/categories/waterparks/"}}},{node:{frontmatter:{tag:"Trampoline Parks",name:"Trampoline Parks",icon:["U+1F938","U+200D","U+2640","U+FE0F"]},fields:{slug:"/categories/trampoline-parks/"}}},{node:{frontmatter:{tag:"Watersports",name:"Watersports",icon:["U+1F305"]},fields:{slug:"/categories/watersports/"}}},{node:{frontmatter:{tag:"Windsurfing",name:"Windsurfing",icon:["U+1F3C4"]},fields:{slug:"/categories/windsurfing/"}}},{node:{frontmatter:{tag:"Whale watching",name:"Whale watching",icon:["U+1F433"]},fields:{slug:"/categories/whale-watching/"}}},{node:{frontmatter:{tag:"Wildlife Parks",name:"Wildlife Parks",icon:["U+1F43E"]},fields:{slug:"/categories/wildlife-parks/"}}},{node:{frontmatter:{tag:"Zipline",name:"Zipline",icon:["U+1F5FB"]},fields:{slug:"/categories/zipline/"}}},{node:{frontmatter:{tag:"Top golf courses Costa del Sol",name:"Top golf courses Costa del Sol",icon:["U+1F51D"]},fields:{slug:"/categories/top-golf-couses-costa-del-sol/"}}},{node:{frontmatter:{tag:"Top golf resorts in Andalusia",name:"Top golf resorts in Andalusia",icon:["U+1F51D"]},fields:{slug:"/categories/top-golf-resorts-in-andalusia/"}}}]},picks:{edges:[{node:{fields:{slug:"/spain/andalusia/1271-crocodile-park/"},frontmatter:{title:"Crocodile Park",description:"Crocodile Park - The Crocodile Park is home to more than 200 crocodiles. Visits include a guided tour and live demonstrations.",image:"https://source.unsplash.com/YOX8ZMTo7hk/1600x400",tags:["Wildlife Parks","Torremolinos","Costa del Sol","Day Out","Families","Top things to do in Costa del Sol"]},html:"<p>The Crocodile Park is home to more than 200 crocodiles. Visits include a guided tour and live demonstrations.</p>"}},{node:{fields:{slug:"/spain/andalusia/1273-costa-jump-marbella/"},frontmatter:{title:"Costa Jump Marbella",description:"Costa Jump Marbella - A trampoline park offering an enormous indoor arena filled with 50 interconnected wall to wall trampolines. There are also sister parks in Seville and Granada.",image:"https://source.unsplash.com/3yLpryRajZs/1600x400",tags:["Trampoline Parks","Marbella","Costa del Sol","Day Out","Families","Attractions","Top things to do in Andalusia when it rains"]},html:"<p>A trampoline park offering an enormous indoor arena filled with 50 interconnected wall to wall trampolines. There are also sister parks in Seville and Granada.</p>"}},{node:{fields:{slug:"/spain/andalusia/1282-quadbike-safari-costa-del-sol/"},frontmatter:{title:"Quadbike safari costa del sol",description:"Quadbike safari costa del sol - Take an adventure in an off-road buggy and experience the breathtaking Andalusian countryside.",image:"https://source.unsplash.com/EEddCahUvY8/1600x400",tags:["Buggy","Sports","Mijas","Fuengirola","Costa del Sol","Day Out","Families","Attractions","Excursions","Top things to do in Costa del Sol"]},html:"<p>Take an adventure in an off-road buggy and experience the breathtaking Andalusian countryside.</p>"}},{node:{fields:{slug:"/spain/andalusia/1305-fuengirola-adventure-golf/"},frontmatter:{title:"Fuengirola Adventure Golf",description:"Fuengirola Adventure Golf - Lots of courses to play and some very tricky ones. There is also a good snack bar available.",image:"https://source.unsplash.com/dIp-z7Yr9T8/1600x400",tags:["Adventure golf","Fuengirola","Costa del Sol","Day Out","Families","Top things to do in Costa del Sol"]},html:"<p>Lots of courses to play and some very tricky ones. There is also a good snack bar available.</p>"}},{node:{fields:{slug:"/spain/andalusia/1308-cines-teatro-goya/"},frontmatter:{title:"Cines Teatro Goya",description:"Cines Teatro Goya - Cinema showing the latest released movies in English.",image:"https://source.unsplash.com/AEeoY_aqvNk/1600x400",tags:["Cinema","Puerto Banus","Marbella","Costa del Sol","Day Out","Families","Top things to do in Andalusia when it rains"]},html:"<p>Cinema showing the latest released movies in English.</p>"}},{node:{fields:{slug:"/spain/andalusia/1316-mijas-feria/"},frontmatter:{title:"Mijas Feria (September)",description:"Mijas Feria (September) - During the spring and summer months, many of the local towns and cities celebrate their local ‘ferias’ (fairs). Lasting anything from 5 days to 10 days, they all feature fun fairs in the evenings with lots of rides and activities for all the family",image:"https://source.unsplash.com/spzQ_RVzSsw/1600x400",tags:["Local Ferias","Mijas","Costa del Sol","Day Out","Attractions","Costa del Sol","Families","Top things to do in Costa del Sol"]},html:"<p>During the spring and summer months, many of the local towns and cities celebrate their local ‘ferias’ (fairs). Lasting anything from 5 days to 10 days, they all feature fun fairs in the evenings with lots of rides and activities for all the family</p>"}},{node:{fields:{slug:"/spain/andalusia/1371-pompidou-malaga/"},frontmatter:{title:"Centre Georges Pompidou Málaga",description:"Centre Georges Pompidou Málaga - The Pompidou de Málaga is located at the end of the promenade. A museum of contemporary art well thought out and with some very remarkable works of art. k",image:"https://source.unsplash.com/1qKLjc8nxP4/1600x400",tags:["Museums","Malaga","Costa del Sol","Attractions","Families","Day Out","Top things to do in Malaga"]},html:"<p>The Pompidou de Málaga is located at the end of the promenade. A museum of contemporary art well thought out and with some very remarkable works of art.</p>"}},{node:{fields:{slug:"/spain/andalusia/1376-museo-artes-costumbres-seville/"},frontmatter:{title:"Museo de Artes y Costumbres Populares de Sevilla",description:"Museo de Artes y Costumbres Populares de Sevilla - Located in the center of María Luisa Park, in Plaza de América. The Museum houses a unique collection of objects used in traditional crafts, as well as everyday objects of family life. .",image:"https://source.unsplash.com/yeXPzAzuCZw/1600x400",tags:["Museums","Seville","Attractions","Families","Day Out","Free Activities","Top Free Things to do with Kids in Andalusia"]},html:"<p>Located in the center of María Luisa Park, in Plaza de América. The Museum houses a unique collection of objects used in traditional crafts, as well as everyday objects of family life.</p>"}},{node:{fields:{slug:"/spain/andalusia/1380-marbella-street-market/"},frontmatter:{title:"Monday - Marbella steet market",description:"Monday - Marbella steet market - This market has 350+ stalls that sells fruit, vegetables, clothing, toys and locally-made arts and crafts..",image:"https://source.unsplash.com/4SIa1W3VR2Q/1600x400",tags:["Street markets","Marbella","Costa del Sol","Shopping","Top Free Things to do with Kids in Andalusia","Free Activities"]},html:"<p>This market has 350+ stalls that sells fruit, vegetables, clothing, toys and locally-made arts and crafts.</p>"}},{node:{fields:{slug:"/spain/andalusia/1388-friday-benalmadena-street-market/"},frontmatter:{title:"Friday Benalmadena street market",description:"Friday Benalmadena street market - The Friday market at Tivoli is large and very busy. You will find anything you are looking for, including clothes, fruit and vegetables, etc.",image:"https://source.unsplash.com/tnLFmR6mM_4/1600x400",tags:["Street markets","Benalmadena","Costa del Sol","Shopping","Top Free Things to do with Kids in Andalusia","Free Activities"]},html:"<p>The Friday market at Tivoli is large and very busy. You will find anything you are looking for, including clothes, fruit and vegetables, etc.</p>"}},{node:{fields:{slug:"/spain/andalusia/1389-coin-organic-market/"},frontmatter:{title:"Sunday - Coin - Organic Market",description:"Sunday - Coin - Organic Market - This market is situated beside La Trocha shopping centre to the north of the town centre and sells organic fruit and vegetables.",image:"https://source.unsplash.com/j2qoz9D7TYo/1600x400",tags:["Street markets","Coin","Costa del Sol","Top Free Things to do with Kids in Andalusia","Free Activities","Shopping"]},html:"<p>This market is situated beside La Trocha shopping centre to the north of the town centre and sells organic fruit and vegetables.</p>"}},{node:{fields:{slug:"/spain/andalusia/1387-torremolinos-street-market/"},frontmatter:{title:"Thursday- Torremolinos street market",description:"Thursday- Torremolinos street market - The market is in the Sports/Cultural area behind the Town Hall. Mostly sells clothes, underwear, and some Moroccan leather goods.",image:"https://source.unsplash.com/yPxk98lyMqE/1600x400",tags:["Street markets","Torremolinos","Costa del Sol","Top Free Things to do with Kids in Andalusia","Free Activities","Shopping"]},html:"<p>The market is in the Sports/Cultural area behind the Town Hall. Mostly sells clothes, underwear, and some Moroccan leather goods.</p>"}},{node:{fields:{slug:"/spain/andalusia/1394-real-alcazar-seville/"},frontmatter:{title:"Real Alcazar Seville",description:"Real Alcazar Seville - This monument were declared as a World Heritage Site by UNESCO in 1987 and represents the historical evolution of the city of Seville in the last millennium. Influences by different cultures is highly noticeable starting from the Arabic period, late Middle Ages Mudéjar right through to the Renaissance, Baroque and the XIX century.",image:"https://source.unsplash.com/f_izr-fusiQ/1600x400",tags:["Seville","Families","Attractions","Top things to do in Seville","Museums","Top Attractions in Andalusia"]},html:"<p>This monument were declared as a World Heritage Site by UNESCO in 1987 and represents the historical evolution of the city of Seville in the last millennium. Influences by different cultures is highly noticeable starting from the Arabic period, late Middle Ages Mudéjar right through to the Renaissance, Baroque and the XIX century.</p>"}},{node:{fields:{slug:"/spain/andalusia/1396-alcazaba-malaga/"},frontmatter:{title:"Alcazaba",description:"Alcazaba - This fortress palace whose name in Arabic means citadel is one of the historical monuments of the city, a space visited for combining history and beauty in the same place. Its military component makes it one of the most important Muslim works preserved in Spain.",image:"https://source.unsplash.com/pjujUMszeuE/1600x400",tags:["Malaga","Costa del Sol","Families","Attractions","Top things to do in Malaga","Museums","Top Attractions in Andalusia"]},html:"<p>This fortress palace whose name in Arabic means citadel is one of the historical monuments of the city, a space visited for combining history and beauty in the same place. Its military component makes it one of the most important Muslim works preserved in Spain.</p>"}},{node:{fields:{slug:"/spain/andalusia/1396-castillo-de-gibralfaro/"},frontmatter:{title:"Castillo de Gibralfaro",description:"Castillo de Gibralfaro - Located next to the historic center on top of a hill next to the Alcazaba in a superb watchtower on the Mediterranean. The Castle of Gibralfaro has a Phoenician origin when it was a lighthouse that stood on a hill called Gibralfaro, later the Arabs reconverted it into a fortress that, later, would be modified to become Alcázar.",image:"https://source.unsplash.com/7vKP5BAm8wg/1600x400",tags:["Malaga","Costa del Sol","Families","Attractions","Top things to do in Malaga","Museums","Top Attractions in Andalusia"]},html:"<p>Located next to the historic center on top of a hill next to the Alcazaba in a superb watchtower on the Mediterranean. The Castle of Gibralfaro has a Phoenician origin when it was a lighthouse that stood on a hill called Gibralfaro, later the Arabs reconverted it into a fortress that, later, would be modified to become Alcázar.</p>"}},{node:{fields:{slug:"/spain/andalusia/1414-metropol-parasol-seville/"},frontmatter:{title:"Metropol Parasol",description:"Metropol Parasol - Las Setas de Sevilla , also known as the Metropol Parasol project by the architect Jürgen Mayer, is the largest wooden structure in the world and its construction was carried out with the aim of renovating the Plaza de la Encarnación in the city of Seville.",image:"https://source.unsplash.com/TVLHmlAy31c/1600x400",tags:["Seville","Families","Attractions","Top things to do in Seville","Museums","Top Attractions in Andalusia"]},html:"<p>Las Setas de Sevilla , also known as the Metropol Parasol project by the architect Jürgen Mayer, is the largest wooden structure in the world and its construction was carried out with the aim of renovating the Plaza de la Encarnación in the city of Seville.</p>"}},{node:{fields:{slug:"/spain/andalusia/1415-museo-russo-malaga/"},frontmatter:{title:"Museo Ruso",description:"Museo Ruso - The Russian Museum Collection Center St. Petersburg Malaga is a seat of the Russian State Museum located in the former Royal Tobacco Factory in Malaga. Next to the exhibition halls, the center has an auditorium, three screening rooms, children's workshops, reading room with reference books, a virtual museum headquarters, cafeteria and shop.",image:"https://source.unsplash.com/QJ2HGuSSQz0/1600x400",tags:["Malaga","Costa del Sol","Families","Attractions","Top things to do in Malaga","Museums","Top Attractions in Andalusia"]},html:"<p>The Russian Museum Collection Center St. Petersburg Malaga is a seat of the Russian State Museum located in the former Royal Tobacco Factory in Malaga. Next to the exhibition halls, the center has an auditorium, three screening rooms, children's workshops, reading room with reference books, a virtual museum headquarters, cafeteria and shop.</p>"}},{node:{fields:{slug:"/spain/andalusia/1424-bullring-ronda/"},frontmatter:{title:"Bullring Ronda",description:"Bullring Ronda - Although not the largest by capacity, Plaza de Toros is the largest ring in Spain, and possibly the world. Even if you disapprove of bullfighting this is a great tour for the history and the architecture.",image:"https://source.unsplash.com/eAE9ZYPZXrU/1600x400",tags:["Ronda","Malaga","Costa del Sol","Families","Attractions","Top things to do in Malaga","Museums","Top Attractions in Andalusia"]},html:"<p>Although not the largest by capacity, Plaza de Toros is the largest ring in Spain, and possibly the world. Even if you disapprove of bullfighting this is a great tour for the history and the architecture.</p>"}},{node:{fields:{slug:"/spain/andalusia/1432-malaga-nostrum-commercial-park/"},frontmatter:{title:"Málaga Nostrum Commercial Park",description:"Málaga Nostrum Commercial Park - Although this Málaga shopping centre is not located in the city centre, Málaga Nostrum is a great place for shopping enthusiasts. Pick up some bargains from the factory outlet with discounts up to 70% off brands such as Levi's, Mango, Desigual, Spagnolo, Fifty Factory and Mustang. In addition, there is an entertainment zone with a bowling alley and a multitude of restaurants.",image:"https://source.unsplash.com/9Jr9hUzRVhc/1600x400",tags:["Shopping","Malaga","Costa del Sol"]},html:"<p>Málaga Nostrum Commercial Park - Although this Málaga shopping centre is not located in the city centre, Málaga Nostrum is a great place for shopping enthusiasts. Pick up some bargains from the factory outlet with discounts up to 70% off brands such as Levi's, Mango, Desigual, Spagnolo, Fifty Factory and Mustang. In addition, there is an entertainment zone with a bowling alley and a multitude of restaurants.</p>"}},{node:{fields:{slug:"/spain/andalusia/1459-miramar-fuengirola/"},frontmatter:{title:"Miramar Centro Comercial",description:"Miramar Centro Comercial - The Miramar shopping centre has a large supermarket and a big variety of other shops, eateries and coffee shops. The center is easily accessible from Fuengirola by local buses 1 or 4. There is a taxi rank directly outside the entrance. The centre also features a cinema and go karting on the roof level. Car parking is available inside or outside free of charge. A few minutes walk away, across the foot bridge is an Iceland and many more shops and cafes as well as petrol station.",image:"https://source.unsplash.com/3sLosN6dPoQ/1600x400",tags:["Shopping","Fuengirola","Mijas","Costa del Sol"]},html:"<p>Miramar Centro Comercial - The Miramar shopping centre has a large supermarket and a big varity of other shops, eateries and coffee shops. The center is easily accessible from Fuengirola by local buses 1 or 4. There is a taxi rank directly outside the entrance. The centre also features a cinema and go karting on the roof level. Car parking is available inside or outside free of charge. A few minutes walk away, across the foot bridge is an Iceland and many more shops and cafes as well as petrol station.</p>"}},{node:{fields:{slug:"/spain/andalusia/1467-baby-cakes-marbella-la-cala/"},frontmatter:{title:"Baby Cakes Marbella - Baby Bounce and Rhyme La Cala",description:"Baby Cakes Marbella - Baby Bounce and Rhyme La Cala - Looking for something fun to do with your babies and toddlers? Baby Cakes Marbella run fun workshops for children from 0 to 4 years of age. These workshops are run at different venues and on different days all along the Costa del  Sol.",image:"https://source.unsplash.com/e1Pvz-FRAmY/1600x400",tags:["Mother and toddler groups","Costa del Sol","Mijas","Malaga","La Cala","Fuengirola"]},html:"<p>Looking for something fun to do with your babies and toddlers? Baby Cakes Marbella run fun workshops for children from 0 to 4 years of age. These workshops are run at different venues and on different days all along the Costa del  Sol.</p>"}},{node:{fields:{slug:"/spain/andalusia/1476-club-valderrama/"},frontmatter:{title:"Real Club Valderrama",description:"Real Club Valderrama - This is a private golf club which allows non-members every day from 10h00 to 12h00 to play its magnificent golf course. The course is maintained well and in perfect condition. There is a Club House with all the facilities you need, a well equipped pro shop and a restaurant with very good food and service.",image:"https://source.unsplash.com/h7aVq-7FfPw/1600x400",tags:["Golf","Sotogrande","Malaga","Costa del Sol","Golf Resorts"]},html:"<p>This is a private golf club which allows non-members every day from 10h00 to 12h00 to play its magnificent golf course. The course is maintained well and in perfect condition. There is a Club House with all the facilities you need, a well equipped pro shop and a restaurant with very good food and service.</p>"}},{node:{fields:{slug:"/spain/andalusia/1580-ventura-de-mar-beach/"},frontmatter:{title:"Ventura de Mar beach",description:"Ventura de Mar beach - This beach has two designated dog-friendly zones. Dog owners are allowed to bring their pets without any time restrictions. Owners must be in full control of their dog at all times, carry proof of their dog’s vaccinations, respect other beach users and clean up any dog mess. The beach is not for swimming.",image:"https://source.unsplash.com/aYHgchNOsGY/1600x400",tags:["Beaches for dogs","Marbella","Malaga","Costa del Sol","Beach"]},html:"<p>This beach has two designated dog-friendly zones. Dog owners are allowed to bring their pets without any time restrictions. Owners must be in full control of their dog at all times, carry proof of their dog’s vaccinations, respect other beach users and clean up any dog mess. The beach is not for swimming.</p>"}},{node:{fields:{slug:"/spain/andalusia/1585-el-espigon-beach/"},frontmatter:{title:"El Espigón beach",description:"El Espigón beach  - Situated in Marismas de Odiel natural park, the canine zone extends from the 6th footbridge to the breakwater. The beach has fine sand but no services.",image:"https://source.unsplash.com/hzJi-v0wbRc/1600x400",tags:["Beaches for dogs","Huelva","Beach"]},html:"<p>Situated in Marismas de Odiel natural park, the canine zone extends from the 6th footbridge to the breakwater. The beach has fine sand but no services.</p>"}},{node:{fields:{slug:"/spain/andalusia/1299-simply-diving-marbella/"},frontmatter:{title:"Simply Diving Marbella",description:"Simply Diving Marbella - A British-run PADI 5 Star Career Development and IDC Dive Centres in Spain. Catering for all scuba diving levels from beginner to advance. Sister schoolin Torremolinos.",image:"https://source.unsplash.com/O1KSItQ1Uf4/1600x400",tags:["Waterparks","Watersports","Boat trips","Marbella","Beach","Sports","Costa del Sol","Day Out","Swimming","Families","Scuba Diving"]},html:"<p>A British-run PADI 5 Star Career Development and IDC Dive Centres in Spain. Catering for all scuba diving levels from beginner to advance. Sister schoolin Torremolinos.</p>"}}]}}}},581:function(e){e.exports={data:{bloglist:{edges:[{node:{fields:{slug:"/blog/2019-02-19-a-few-essential-spanish-phrases/"},excerpt:"There’s nothing that can make you feel quite as stupid as not knowing a language– even when you are simply using a toilet.\nYes, in a lot of…",frontmatter:{title:"A few essential Spanish phrases to help you survive the first few months of moving to Spain",image:"https://source.unsplash.com/ASKeuOZqhYU/3900x2600",date:"2019-02-19T19:12:28.000Z",author:"Mariska Grobler"}}},{node:{fields:{slug:"/blog/2019-02-08-which-school-do-i-choose-for-my-kids-when-moving-to-spain/"},excerpt:"When we moved to Spain, our daughters were 14 and 11 years old and just completed Year 9 and Year 6 in the UK. The \nyoungest was due to…",frontmatter:{title:"Which school do I choose for my kids when moving to Spain?",image:"https://images.expatty.com/blog/schools-in-spain.jpg",date:"2019-02-08T21:04:13.000Z",author:"Mariska Grobler"}}},{node:{fields:{slug:"/blog/2019-01-04-stray-cat-colonies-of-andalusia/"},excerpt:"A couple of months after moving into a finca in the campo, I felt sorry for a pregnant mother cat and her four kittens\nwho eventually…",frontmatter:{title:"The stray cat colonies of Andalusia",image:"https://images.expatty.com/blog/stray-cats.jpg",date:"2019-01-04T22:16:14.000Z",author:"Mariska Grobler"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9aa36fc394e115569a87.js.map