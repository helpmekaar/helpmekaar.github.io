(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(174),s=t(575),o=t(169),l=t(153),m=t(176),d=t(175),c=function(e){var a=e.children;return i.a.createElement(l.StaticQuery,{query:"2559738656",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{showTitle:!0,hideFacebook:!0,siteTitle:e.site.siteMetadata.title}),a,i.a.createElement(m.a,null),i.a.createElement(d.a,null))},data:s})},g=t(598),u=t(595),f=t(596),k=function(){return i.a.createElement(g.a,{fluid:!0,className:"hero"},i.a.createElement(u.a,{className:"h-100 align-items-center"},i.a.createElement(f.a,{md:{size:3},className:"h-50 mx-auto text-center animated fadeIn"},i.a.createElement("h1",{className:"title--header slogan"},"Hier meen ons besigheid."))))},p=(t(161),t(75),t(576)),h=t(246),v=function(){return i.a.createElement(l.StaticQuery,{query:"922999384",render:function(e){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row mt-5 pb-5 picks"},i.a.createElement("div",{className:"col-md"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md"},i.a.createElement("h2",{className:"title--header small"},"Wie's nuut"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"card-columns"},e.picks.edges.map(function(e){return e.node}).map(function(a,t){var n=a.frontmatter.tags.map(function(a){return e.categories.edges.map(function(e){return e.node}).find(function(e){return e.frontmatter.tag===a})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}});return i.a.createElement(h.a,{key:t,title:a.frontmatter.title,url:a.fields.slug,icons:n,description:a.frontmatter.description,content:a.html,image:a.frontmatter.image})})))))))},data:p})},w=(t(577),t(247),t(185),t(202));t.d(a,"pageQuery",function(){return y});a.default=function(e){var a=e.data.site.siteMetadata.description;return i.a.createElement(c,null,i.a.createElement(r.a,{title:"helpmekaar.org: Tuis",description:a}),i.a.createElement("main",null,i.a.createElement(w.a,{buffer:300}),i.a.createElement(k,null),i.a.createElement(v,null)))};var y="241398299"},202:function(e,a,t){"use strict";t(73);var n=t(0),i=t.n(n);a.a=function(e){var a=e.buffer,t="undefined"!=typeof window&&window;return Object(n.useEffect)(function(){if(t){var e,n=function n(){e&&clearTimeout(e);var i=t.document.querySelectorAll("img.lazy");e=setTimeout(function(){var e=t.pageYOffset;i.forEach(function(n){(function(e){var a=e.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:a.top+n,left:a.left+t}})(n).top<t.innerHeight+e+a&&(n.src=n.dataset.src,n.classList.remove("lazy"))}),0===i.length&&(t.document.removeEventListener("scroll",n),t.removeEventListener("resize",n),t.removeEventListener("orientationChange",n),t.removeEventListener("load",n))},20)};t.addEventListener("load",n),t.document.addEventListener("scroll",n),t.addEventListener("resize",n),t.addEventListener("orientationChange",n)}},[]),i.a.createElement(i.a.Fragment,null)}},246:function(e,a,t){"use strict";t(161),t(34);var n=t(0),i=t.n(n),r=t(191);a.a=function(e){var a=e.title,t=(e.description,e.image),n=e.url,s=e.icons,o=e.content;return i.a.createElement("div",{className:"card"},t&&i.a.createElement("a",{href:n},i.a.createElement("img",{"data-src":t.replace("1600","500").replace("x400","x250"),alt:a,className:"lazy card-img-top"})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{className:"card-title"},i.a.createElement("a",{className:"link",href:n},a)),i.a.createElement("div",{className:"card-text dark-colour",dangerouslySetInnerHTML:{__html:o}}),i.a.createElement("p",null,s&&s.map(function(e,a){return i.a.createElement(r.a,{icon:e.icon,name:e.name,path:e.path,key:a})}))))}},247:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(185),s=t.n(r);a.a=function(e){var a=e.title,t=e.excerpt,n=e.image,r=e.url,o=e.author,l=e.date;return i.a.createElement("a",{className:"link light",href:r},i.a.createElement("div",{className:"card bg-transparent mb-5"},n&&i.a.createElement("img",{"data-src":n,alt:a,className:"lazy card-img-top"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},a),i.a.createElement("p",null,i.a.createElement("small",null,i.a.createElement("time",{className:"light-primary-colour pt-2",dateTime:s()(l),itemProp:"datePublished"},s()(l).format("dddd, D MMMM YYYY")),i.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},"  • ",i.a.createElement("span",{className:"light-primary-colour",itemProp:"name"},o)))),i.a.createElement("div",{className:"card-text primary-text-colour",dangerouslySetInnerHTML:{__html:t}}))))}},575:function(e){e.exports={data:{site:{siteMetadata:{title:"helpmekaar.org"}}}}},576:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Landbou",name:"Landbou",icon:["U+1F331"]},fields:{slug:"/categories/landbou/"}}},{node:{frontmatter:{tag:"Finansies",name:"Finansies",icon:["U+1F4B0"]},fields:{slug:"/categories/finansies/"}}},{node:{frontmatter:{tag:"Stencils",name:"Stencils",icon:["U+1F468","U+200D","U+1F3A8"]},fields:{slug:"/categories/stencils/"}}},{node:{frontmatter:{tag:"Meubels",name:"Meubels",icon:["U+1F6CF"]},fields:{slug:"/categories/meubels/"}}},{node:{frontmatter:{tag:"Blindings",name:"Blindings",icon:["U+1F3E0"]},fields:{slug:"/categories/blindings/"}}},{node:{frontmatter:{tag:"Binne-huis versiering",name:"Binne-huis versiering",icon:["U+1F3EE"]},fields:{slug:"/categories/binnehuis-versiering/"}}},{node:{frontmatter:{tag:"Kos",name:"Kos",icon:["U+1F372"]},fields:{slug:"/categories/kos/"}}},{node:{frontmatter:{tag:"Reg",name:"Reg",icon:["U+2696"]},fields:{slug:"/categories/reg/"}}},{node:{frontmatter:{tag:"Eiendom",name:"Eiendom",icon:["U+1F3E1"]},fields:{slug:"/categories/eiendom/"}}},{node:{frontmatter:{tag:"Handyman",name:"Handyman",icon:["U+1F6E0"]},fields:{slug:"/categories/handyman/"}}},{node:{frontmatter:{tag:"Internet",name:"Internet",icon:["U+1F5B1"]},fields:{slug:"/categories/internet/"}}},{node:{frontmatter:{tag:"Stoffering",name:"Stoffering",icon:["U+1F6CB"]},fields:{slug:"/categories/stoffering/"}}},{node:{frontmatter:{tag:"Akkommodasie",name:"Akkommodasie",icon:["U+1F4E3"]},fields:{slug:"/categories/akkommodasie/"}}},{node:{frontmatter:{tag:"Bemarking",name:"Bemarking",icon:["U+1F4BB"]},fields:{slug:"/categories/bemarking/"}}},{node:{frontmatter:{tag:"Fietswinkel",name:"Fietswinkel",icon:["U+1F6B2"]},fields:{slug:"/categories/fietswinkel/"}}},{node:{frontmatter:{tag:"Hotel",name:"Hotel",icon:["U+1F3E8"]},fields:{slug:"/categories/hotel/"}}},{node:{frontmatter:{tag:"Kroeg",name:"Kroeg",icon:["U+1F37B"]},fields:{slug:"/categories/kroeg/"}}},{node:{frontmatter:{tag:"Kunstenaar",name:"Kunstenaar",icon:["U+1F399"]},fields:{slug:"/categories/kustenaar/"}}},{node:{frontmatter:{tag:"Musiek",name:"Musiek",icon:["U+1F3BC"]},fields:{slug:"/categories/musiek/"}}},{node:{frontmatter:{tag:"Netwerk-Installasie",name:"Netwek-Installasie",icon:["U+1F4F2"]},fields:{slug:"/categories/netwerk-installasies/"}}},{node:{frontmatter:{tag:"Motorverhuring",name:"Motorverhuring",icon:["U+1F697"]},fields:{slug:"/categories/motorverhuring/"}}},{node:{frontmatter:{tag:"Skryfbehoeftes",name:"Skryfbehoeftes",icon:["U+270D"]},fields:{slug:"/categories/skryfbehoeftes/"}}}]},picks:{edges:[{node:{fields:{slug:"/rsa/gauteng/1260-cakes-crafts-cofee-petronellas/"},frontmatter:{title:"Cakes, Crafts, Coffee t/a Petronella's",description:"Ons maak tuisgemaakte aand-etes, tuisnywerheid, biltong, maak ook platters vir enige geleentheid.",image:"https://source.unsplash.com/n4po6S3Movs/1600x400",tags:["Gauteng","Boksburg","Tuisnywerheid","Bakkery"]},html:"<p>Ons maak tuisgemaakte aand-etes, tuisnywerheid, biltong, maak ook platters vir enige geleentheid.</p>"}},{node:{fields:{slug:"/rsa/gauteng/1263-resq-rent-a-car/"},frontmatter:{title:"ResQ Rent a Car",description:"Motorverhuring",image:"https://source.unsplash.com/vVyLAN8iRvc/1600x400",tags:["Alberton","Gauteng","Motorverhuring"]},html:"<p>Motorverhuring</p>"}},{node:{fields:{slug:"/rsa/limpopo/1266-intikadi-project-solutions/"},frontmatter:{title:"Intikadi Project Solutions",description:"Verskaf korporatiewe klere en geskenke aan skole en besighede. Soos uniforms, sportsakke, skryfbehoeftes en ook sanitasie produkte. Borduurwerk en printwerk word ook gereel.",image:"https://source.unsplash.com/yzpaR5SvVCQ/1600x400",tags:["Marken","Limpopo","Skryfbehoeftes","Klerewinkel"]},html:"<p>Verskaf korporatiewe klere en geskenke aan skole en besighede. Soos uniforms, sportsakke, skryfbehoeftes en ook sanitasie produkte. Borduurwerk en printwerk word ook gereel.</p>"}},{node:{fields:{slug:"/rsa/oos-kaap/1264-wolwefontein-hotel/"},frontmatter:{title:"Wolwefontein Hotel",description:"Akkomodasie / Restaurant / Bar/ Off Sales / General dealer",image:"https://source.unsplash.com/9RLk3ZpulUk/1600x400",tags:["Kroeg","Oos-Kaap","Hotel","Wolwefontein","Akkommodasie"]},html:"<p>Akkomodasie / Restaurant / Bar/ Off Sales / General dealer\nDie eenheid is so 4 jaa rgelede deur my gekoop en gerenovate. Herlewing van dooie karoo dorpies. Die besigheid en al sy entiteite bedien die hele gemeenskap. Geen ander besighede hier nie . Gemmenskap suffer onder die lockdown omdat ek toe is . Ek verskaf akkomodasie aan jagters en toeriste . Naweek groepe .</p>"}},{node:{fields:{slug:"/rsa/wes-kaap/1267-gaston/"},frontmatter:{title:"Gaston",description:"Instrumentale Kitaar musiek. Musiek is my passie. Ek kry my inspirasies van Solly Marx, Hansie Roodt, Ricardo Borman, Mark Knofler, Eric Clapton en die Shadows. Ek doen alle genres.",image:"https://source.unsplash.com/fCEJGBzAkrU/1600x400",tags:["Wes-Kaap","Musiek","George","Kunstenaar"]},html:"<p>Musiek is my passie. Ek kry my inspirasies van Solly Marx, Hansie Roodt, Ricardo Borman, Mark Knofler, Eric Clapton en die Shadows. Ek doen alle genres. My eerste album - Kitaar is my taal - is in 2015 bekend gestel. Kitaar is my taal was genomineer vir 'n Goema Toekenning in 2017. Op die album is Yellow River, 'n Shadows medley, On the road again, Spanish eyes, 'n Afrikaanse medley, Moody blue, Warm snare, Stand by me, Samba Pa Ti en Ver in die ou Kalahari. Ek is beskikbaar vir enige geleentheid in George omgewing, maar ook landswyd vir, troues, \"house-parties\", restaurante, verjaardae, noem maar en ek is beskikbaar.</p>"}},{node:{fields:{slug:"/rsa/wes-kaap/1268-riesa/"},frontmatter:{title:"Riesa",description:"Crowd1 - Multi-level Marketing (Internet en Finansiële vryheid)",image:"https://source.unsplash.com/RSc6D7bO0fA/1600x400",tags:["Wes-Kaap","Bemarking","George"]},html:"<p>Crowd1 - Multi-level Marketing (Internet en Finansiële vryheid) Werk vanaf jou foon of rekenaar. Jou besigheid sit letterlik in jou sak.</p>\n<ul>\n<li>Geen kantoorruimte nodig.</li>\n<li>Minimale aansluitingskoste</li>\n<li>Verskeie vergoedingspakkette en bonusse</li>\n<li>Verdien in euro's spandeer in rand</li>\n</ul>"}},{node:{fields:{slug:"/rsa/wes-kaap/1265-stayatbelinda/"},frontmatter:{title:"StayatBelinda",description:"Twee kort termyn selfsorg kamers te huur vir vakansie of besigheids besoeke in George, Wes Kaap",image:"https://source.unsplash.com/ZIceMdnIsIw/1600x400",tags:["Wes-Kaap","Hotel","George","Akkommodasie"]},html:"<p>Twee kort termyn selfsorg kamers te huur vir vakansie of besigheids besoeke in George, Wes Kaap\nKeuse uit:</p>\n<ul>\n<li>Kamer 1: 1 x Dubbelbed met eie stort, toilet en wasbak</li>\n<li>Kamer 2: 2x Enkelbeddens met eie stort, toilet en wasbak</li>\n</ul>\n<p>Prys per nag sluit in:</p>\n<ul>\n<li>Verblyf (maksimum 2 volwassenes per kamer. Reëling vir kinders/groepe kan getref word)</li>\n<li>Elektrisiteit</li>\n<li>Water</li>\n<li>Gebruik van gemeenskaplike areas (kombuis, woon- braaikamer en tuin)</li>\n</ul>\n<p>Loop afstand vanaf deli, kafee, dokter, apteek</p>"}},{node:{fields:{slug:"/rsa/wes-kaap/1269-communication-connectivity-solutions/"},frontmatter:{title:"Communication Connectivity Solutions",description:"Communication Connectivity Solutions verskaf konsultasie dienste en opleiding in die kommunikasie bekabeling, beide koper (Cat5e, Cat6, Cat6A, Cat7, Car7A en Cat8) en optiese vesel, Multi mode en Singlemode.",image:"https://source.unsplash.com/RSc6D7bO0fA/1600x400",tags:["Wes-Kaap","Bemarking","George","Internet","Netwerk-Installasies"]},html:"<p>Communication Connectivity Solutions verskaf konsultasie dienste en opleiding in die kommunikasie bekabeling, beide koper (Cat5e, Cat6, Cat6A, Cat7, Car7A en Cat8) en optiese vesel, Multi mode en Singlemode.</p>"}},{node:{fields:{slug:"/rsa/wes-kaap/1270-mainly-for-men-hairstylist-for-gents/"},frontmatter:{title:"Mainly for Men Hairstylist for Gents",description:"Ons sny en versorg mans hare.",image:"https://source.unsplash.com/taZSJ6xmt48/1600x400",tags:["Wes-Kaap","Kaapstad","Haarsalon"]},html:"<p>Ons sny en versorg mans hare.</p>"}},{node:{fields:{slug:"/rsa/wes-kaap/1271-cycle-addict/"},frontmatter:{title:"Cycle Addict",description:"Verkope van nuwe fietse, parte, fietsryklere, indoor trainers, en als fietsryverwant.",image:"https://source.unsplash.com/wh9I0jokix8/1600x400",tags:["Wes-Kaap","Oudtshoorn","Fietswinkel"]},html:"<p>Verkope van nuwe fietse, parte, fietsryklere, indoor trainers, en als fietsryverwant.</p>"}},{node:{fields:{slug:"/rsa/gauteng/1272-elardi-relief-initiative/"},frontmatter:{title:"Elardi Relief Initiative",description:"Online shop vir lokale voedsel verkope",image:"https://source.unsplash.com/qvWnGmoTbik/1600x400",tags:["Pretoria","Gauteng","Bakkery","Tuisnywerheid","Online"]},html:"<p>Online shop vir lokale voedsel verkope</p>"}},{node:{fields:{slug:"/rsa/wes-kaap/1262-change-of-venue/"},frontmatter:{title:"Change of Venue",description:"Ons maak diefwering, veiligheids- en oprithekke, balkon- en traprelings, gordyn- en handoekrelings, stoele, beddens, tafels, kandelare en alles waaraan jy kan dink uit staal.",image:"https://source.unsplash.com/EJd6PvoGWJg/1600x400",tags:["Wes-Kaap","Kaapstad","Blindings","Binne-huis versiering","Sweis","Konstruksie"]},html:"<p>Ons maak diefwering, veiligheids- en oprithekke, balkon- en traprelings, gordyn- en handoekrelings, stoele, beddens, tafels, kandelare en alles waaraan jy kan dink uit staal.</p>"}},{node:{fields:{slug:"/rsa/gauteng/1261-bes-pies/"},frontmatter:{title:"Be's Pies",description:'Ek maak vars pasteie. "steak, pepper steak, chicken, hamburger pie, cheese grillers.',image:"https://source.unsplash.com/2GmuRlwt_Q4/1600x400",tags:["Gauteng","Boksburg","Tuisnywerheid","Bakkery"]},html:"<p>Ek maak vars pasteie oa steak, pepper steak, chicken, hamburger pie, cheese grillers.</p>"}}]}}}},577:function(e){e.exports={data:{bloglist:{edges:[{node:{fields:{slug:"/blog/2019-02-19-a-few-essential-spanish-phrases/"},excerpt:"There’s nothing that can make you feel quite as stupid as not knowing a language– even when you are simply using a toilet.\nYes, in a lot of…",frontmatter:{title:"A few essential Spanish phrases to help you survive the first few months of moving to Spain",image:"https://source.unsplash.com/ASKeuOZqhYU/3900x2600",date:"2019-02-19T19:12:28.000Z",author:"Mariska Grobler"}}},{node:{fields:{slug:"/blog/2019-02-08-which-school-do-i-choose-for-my-kids-when-moving-to-spain/"},excerpt:"When we moved to Spain, our daughters were 14 and 11 years old and just completed Year 9 and Year 6 in the UK. The \nyoungest was due to…",frontmatter:{title:"Which school do I choose for my kids when moving to Spain?",image:"https://images.expatty.com/blog/schools-in-spain.jpg",date:"2019-02-08T21:04:13.000Z",author:"Mariska Grobler"}}},{node:{fields:{slug:"/blog/2019-01-04-stray-cat-colonies-of-andalusia/"},excerpt:"A couple of months after moving into a finca in the campo, I felt sorry for a pregnant mother cat and her four kittens\nwho eventually…",frontmatter:{title:"The stray cat colonies of Andalusia",image:"https://images.expatty.com/blog/stray-cats.jpg",date:"2019-01-04T22:16:14.000Z",author:"Mariska Grobler"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d3799dc770209fc538eb.js.map