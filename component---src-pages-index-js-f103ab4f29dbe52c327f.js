(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(174),r=a(575),i=a(169),l=a(153),d=a(176),m=a(175),g=function(e){var t=e.children;return s.a.createElement(l.StaticQuery,{query:"2559738656",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{showTitle:!0,hideFacebook:!0,siteTitle:e.site.siteMetadata.title}),t,s.a.createElement(d.a,null),s.a.createElement(m.a,null))},data:r})},u=a(598),c=a(595),p=a(596),f=function(){return s.a.createElement(u.a,{fluid:!0,className:"hero"},s.a.createElement(c.a,{className:"h-100 align-items-center"},s.a.createElement(p.a,{md:{size:3},className:"h-50 mx-auto text-center animated fadeIn"},s.a.createElement("h1",{className:"title--header slogan"},"Hier meen ons besigheid."))))},k=(a(161),a(75),a(576)),h=a(246),v=function(){return s.a.createElement(l.StaticQuery,{query:"922999384",render:function(e){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row mt-5 pb-5 picks"},s.a.createElement("div",{className:"col-md"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md"},s.a.createElement("h2",{className:"title--header small"},"Wie's nuut"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"card-columns"},e.picks.edges.map(function(e){return e.node}).map(function(t,a){var n=t.frontmatter.tags.map(function(t){return e.categories.edges.map(function(e){return e.node}).find(function(e){return e.frontmatter.tag===t})}).filter(function(e){return e}).map(function(e){return{icon:e.frontmatter.icon,name:e.frontmatter.name,path:e.fields.slug}});return s.a.createElement(h.a,{key:a,title:t.frontmatter.title,url:t.fields.slug,icons:n,description:t.frontmatter.description,content:t.html,image:t.frontmatter.image})})))))))},data:k})},w=(a(577),a(247),a(185),a(202));a.d(t,"pageQuery",function(){return b});t.default=function(e){var t=e.data.site.siteMetadata.description;return s.a.createElement(g,null,s.a.createElement(o.a,{title:"helpmekaar.org: Tuis",description:t}),s.a.createElement("main",null,s.a.createElement(w.a,{buffer:300}),s.a.createElement(f,null),s.a.createElement(v,null)))};var b="241398299"},202:function(e,t,a){"use strict";a(73);var n=a(0),s=a.n(n);t.a=function(e){var t=e.buffer,a="undefined"!=typeof window&&window;return Object(n.useEffect)(function(){if(a){var e,n=function n(){e&&clearTimeout(e);var s=a.document.querySelectorAll("img.lazy");e=setTimeout(function(){var e=a.pageYOffset;s.forEach(function(n){(function(e){var t=e.getBoundingClientRect(),a=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+a}})(n).top<a.innerHeight+e+t&&(n.src=n.dataset.src,n.classList.remove("lazy"))}),0===s.length&&(a.document.removeEventListener("scroll",n),a.removeEventListener("resize",n),a.removeEventListener("orientationChange",n),a.removeEventListener("load",n))},20)};a.addEventListener("load",n),a.document.addEventListener("scroll",n),a.addEventListener("resize",n),a.addEventListener("orientationChange",n)}},[]),s.a.createElement(s.a.Fragment,null)}},246:function(e,t,a){"use strict";a(161),a(34);var n=a(0),s=a.n(n),o=a(191);t.a=function(e){var t=e.title,a=(e.description,e.image),n=e.url,r=e.icons,i=e.content;return s.a.createElement("div",{className:"card"},a&&s.a.createElement("a",{href:n},s.a.createElement("img",{"data-src":a.replace("1600","500").replace("x400","x250"),alt:t,className:"lazy card-img-top"})),s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"card-title"},s.a.createElement("a",{className:"link",href:n},t)),s.a.createElement("div",{className:"card-text dark-colour",dangerouslySetInnerHTML:{__html:i}}),s.a.createElement("p",null,r&&r.map(function(e,t){return s.a.createElement(o.a,{icon:e.icon,name:e.name,path:e.path,key:t})}))))}},247:function(e,t,a){"use strict";var n=a(0),s=a.n(n),o=a(185),r=a.n(o);t.a=function(e){var t=e.title,a=e.excerpt,n=e.image,o=e.url,i=e.author,l=e.date;return s.a.createElement("a",{className:"link light",href:o},s.a.createElement("div",{className:"card bg-transparent mb-5"},n&&s.a.createElement("img",{"data-src":n,alt:t,className:"lazy card-img-top"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title"},t),s.a.createElement("p",null,s.a.createElement("small",null,s.a.createElement("time",{className:"light-primary-colour pt-2",dateTime:r()(l),itemProp:"datePublished"},r()(l).format("dddd, D MMMM YYYY")),s.a.createElement("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person"},"  • ",s.a.createElement("span",{className:"light-primary-colour",itemProp:"name"},i)))),s.a.createElement("div",{className:"card-text primary-text-colour",dangerouslySetInnerHTML:{__html:a}}))))}},575:function(e){e.exports={data:{site:{siteMetadata:{title:"helpmekaar.org"}}}}},576:function(e){e.exports={data:{categories:{edges:[{node:{frontmatter:{tag:"Haarsalon",name:"Haarsalon",icon:["U+1F487"]},fields:{slug:"/categories/haarsalon/"}}},{node:{frontmatter:{tag:"Afslaer",name:"Afslaer",icon:["U+1F4E3"]},fields:{slug:"/categories/afslaer/"}}},{node:{frontmatter:{tag:"Bakkery",name:"Bakkery",icon:["U+1F950"]},fields:{slug:"/categories/bakkery/"}}},{node:{frontmatter:{tag:"Juweliersware",name:"Juweliersware",icon:["U+1F48D"]},fields:{slug:"/categories/juweliersware/"}}},{node:{frontmatter:{tag:"Konstruksie",name:"Konstruksie",icon:["U+1F3D7"]},fields:{slug:"/categories/konstruksie/"}}},{node:{frontmatter:{tag:"Sekuriteit",name:"Sekuriteit",icon:["U+1F6A8"]},fields:{slug:"/categories/sekuriteit/"}}},{node:{frontmatter:{tag:"Skoonmaakmiddels",name:"Skoonmaakmiddels",icon:["U+1F31F"]},fields:{slug:"/categories/skoonmaakmiddel/"}}},{node:{frontmatter:{tag:"Sweis",name:"Sweis",icon:["U+1F386"]},fields:{slug:"/categories/sweis/"}}},{node:{frontmatter:{tag:"Koffiewinkel",name:"Koffiewinkel",icon:["U+2615"]},fields:{slug:"/categories/koffie-winkel/"}}},{node:{frontmatter:{tag:"Tuisnywerheid",name:"Tuisnywerheid",icon:["U+1F382"]},fields:{slug:"/categories/tuisnywerheid/"}}},{node:{frontmatter:{tag:"TV Kanale",name:"TV Kanale",icon:["U+1F4FA"]},fields:{slug:"/categories/tv-kanale/"}}},{node:{frontmatter:{tag:"Klerewinkel",name:"Klerewinkel",icon:["U+1F45A"]},fields:{slug:"/categories/klerewinkel/"}}},{node:{frontmatter:{tag:"Landbou",name:"Landbou",icon:["U+1F331"]},fields:{slug:"/categories/landbou/"}}},{node:{frontmatter:{tag:"Finansies",name:"Finansies",icon:["U+1F4B0"]},fields:{slug:"/categories/finansies/"}}},{node:{frontmatter:{tag:"Stencils",name:"Stencils",icon:["U+1F468","U+200D","U+1F3A8"]},fields:{slug:"/categories/stencils/"}}},{node:{frontmatter:{tag:"Meubels",name:"Meubels",icon:["U+1F6CF"]},fields:{slug:"/categories/meubels/"}}},{node:{frontmatter:{tag:"Blindings",name:"Blindings",icon:["U+1F3E0"]},fields:{slug:"/categories/blindings/"}}},{node:{frontmatter:{tag:"Binne-huis versiering",name:"Binne-huis versiering",icon:["U+1F3EE"]},fields:{slug:"/categories/binnehuis-versiering/"}}},{node:{frontmatter:{tag:"Kos",name:"Kos",icon:["U+1F372"]},fields:{slug:"/categories/kos/"}}},{node:{frontmatter:{tag:"Reg",name:"Reg",icon:["U+2696"]},fields:{slug:"/categories/reg/"}}},{node:{frontmatter:{tag:"Eiendom",name:"Eiendom",icon:["U+1F3E1"]},fields:{slug:"/categories/eiendom/"}}},{node:{frontmatter:{tag:"Handyman",name:"Handyman",icon:["U+1F6E0"]},fields:{slug:"/categories/handyman/"}}},{node:{frontmatter:{tag:"Internet",name:"Internet",icon:["U+1F5B1"]},fields:{slug:"/categories/internet/"}}},{node:{frontmatter:{tag:"Stoffering",name:"Stoffering",icon:["U+1F6CB"]},fields:{slug:"/categories/stoffering/"}}},{node:{frontmatter:{tag:"Akkommodasie",name:"Akkommodasie",icon:["U+1F4E3"]},fields:{slug:"/categories/akkommodasie/"}}},{node:{frontmatter:{tag:"Bemarking",name:"Bemarking",icon:["U+1F4BB"]},fields:{slug:"/categories/bemarking/"}}},{node:{frontmatter:{tag:"Fietswinkel",name:"Fietswinkel",icon:["U+1F6B2"]},fields:{slug:"/categories/fietswinkel/"}}},{node:{frontmatter:{tag:"Hotel",name:"Hotel",icon:["U+1F3E8"]},fields:{slug:"/categories/hotel/"}}},{node:{frontmatter:{tag:"Kroeg",name:"Kroeg",icon:["U+1F37B"]},fields:{slug:"/categories/kroeg/"}}},{node:{frontmatter:{tag:"Kunstenaar",name:"Kunstenaar",icon:["U+1F399"]},fields:{slug:"/categories/kustenaar/"}}},{node:{frontmatter:{tag:"Musiek",name:"Musiek",icon:["U+1F3BC"]},fields:{slug:"/categories/musiek/"}}},{node:{frontmatter:{tag:"Netwerk-Installasie",name:"Netwek-Installasie",icon:["U+1F4F2"]},fields:{slug:"/categories/netwerk-installasies/"}}},{node:{frontmatter:{tag:"Motorverhuring",name:"Motorverhuring",icon:["U+1F697"]},fields:{slug:"/categories/motorverhuring/"}}},{node:{frontmatter:{tag:"Skryfbehoeftes",name:"Skryfbehoeftes",icon:["U+270D"]},fields:{slug:"/categories/skryfbehoeftes/"}}},{node:{frontmatter:{tag:"Kinders",name:"Kinders",icon:["U+1F467"]},fields:{slug:"/categories/kinders/"}}},{node:{frontmatter:{tag:"Omgewingsprodukte",name:"Omgewingsprodukte",icon:["U+1F30D"]},fields:{slug:"/categories/omgewingsprodukte/"}}},{node:{frontmatter:{tag:"Opleiding",name:"Opleiding",icon:["U+1F393"]},fields:{slug:"/categories/opleiding/"}}}]},picks:{edges:[{node:{fields:{slug:"/rsa/gauteng/1272-elardi-relief-initiative/"},frontmatter:{title:"Elardi Relief Initiative",description:"Online shop vir lokale voedsel verkope",image:"https://source.unsplash.com/qvWnGmoTbik/1600x400",tags:["Pretoria","Gauteng","Bakkery","Tuisnywerheid","Online"]},html:"<p>Online shop vir lokale voedsel verkope</p>"}},{node:{fields:{slug:"/rsa/wes-kaap/1271-cycle-addict/"},frontmatter:{title:"Cycle Addict",description:"Verkope van nuwe fietse, parte, fietsryklere, indoor trainers, en als fietsryverwant.",image:"https://source.unsplash.com/tG36rvCeqng/1600x400",tags:["Wes-Kaap","Oudtshoorn","Fietswinkel"]},html:"<p>Verkope van nuwe fietse, parte, fietsryklere, indoor trainers, en als fietsryverwant.</p>"}},{node:{fields:{slug:"/rsa/gauteng/1273-designworx-studio/"},frontmatter:{title:"Designworx Studio",description:"Domeinregistrasie en hosting. Webwerf ontwerp. Sosiale media inhoud (blogs, Facebook posts), geoutomatiseerde digitale bemarkingsveldtogte.",image:"https://source.unsplash.com/hGV2TfOh0ns/1600x400",tags:["Pretoria","Gauteng","Bemarking","Online","Internet"]},html:"<p>Domeinregistrasie en hosting. Webwerf ontwerp. Sosiale media inhoud (blogs, Facebook posts), geoutomatiseerde digitale bemarkingsveldtogte.</p>"}},{node:{fields:{slug:"/rsa/gauteng/1274-sennin-consulting/"},frontmatter:{title:"Sennin Consulting",description:"Besigheidskonsultasie & ondersteuning. Evalueer en ontwerp besigheidsprosesse. Verskaf ondersteuning en opleiding om die sukses en voortbestaan van klein besighede te verseker.",image:"https://source.unsplash.com/5fNmWej4tAA/1600x400",tags:["Pretoria","Gauteng","Bemarking","Online","Internet","Opleiding"]},html:"<p>Besigheidskonsultasie &#x26; ondersteuning. Evalueer en ontwerp besigheidsprosesse. Verskaf ondersteuning en opleiding om die sukses en voortbestaan van klein besighede te verseker.</p>"}},{node:{fields:{slug:"/rsa/gauteng/1275-interacc-online/"},frontmatter:{title:"InterAcc Online",description:"Ons verkoop Sage Business Cloud, Sage Pastel Partner & Xpress en Sage Pastel Payroll sagteware. Ons na-verkope diens sluit in installasie & implementasie, opleiding en tegniese ondersteuning.",image:"https://source.unsplash.com/M98NRBuzbpc/1600x400",tags:["Pretoria","Gauteng","Finansies","Online","Internet","Opleiding"]},html:"<p>Ons verkoop Sage Business Cloud, Sage Pastel Partner &#x26; Xpress en Sage Pastel Payroll sagteware. Ons na-verkope diens sluit in installasie &#x26; implementasie, opleiding en tegniese ondersteuning.</p>"}},{node:{fields:{slug:"/rsa/gauteng/1276-mobilezoo-pretoria/"},frontmatter:{title:"Mobilezoo Pretoria",description:"Ons leer kinders oor verskillende eksotiese diertjies, wat mens tans in troeteldier winkels kan koop. Ons besoek jou huis, skool en besigheid. Ons bring al ons diertjies na jou huis of skool en die kinders kan selfs aan die diere vat en vashou.",image:"https://source.unsplash.com/CIMk0FSOrAE/1600x400",tags:["Pretoria","Gauteng","Kinders"]},html:"<p>Ons leer kinders oor verskillende eksotiese diertjies, wat mens tans in troeteldier winkels kan koop. Ons besoek jou huis, skool en besigheid. Ons bring al ons diertjies na jou huis of skool en die kinders kan selfs aan die diere vat en vashou.</p>"}},{node:{fields:{slug:"/rsa/limpopo/1277-burika-communications/"},frontmatter:{title:"Burika Communications",description:"Alle IT, VoIP, hardeware en sagteware benodighede, asook virtual hosted services.",image:"https://source.unsplash.com/M98NRBuzbpc/1600x400",tags:["Polokwane","Limpopo","Online","Internet","Nerwerk Installasies"]},html:"<p>Alle IT, VoIP, hardeware en sagteware benodighede, asook virtual hosted services.</p>"}},{node:{fields:{slug:"/rsa/noord-kaap/1279-schroderhuis-gastehuis/"},frontmatter:{title:"Schroderhuis Gastehuis",description:"Akkomodasie / Gastehuis, hou ooievaars en kitchen teas ook",image:"https://source.unsplash.com/WMcitUcSgEg/1600x400",tags:["Noord-Kaap","Hotel","Upington","Akkommodasie"]},html:"<p>Akkomodasie / Gastehuis, hou ooievaars en kitchen teas ook</p>"}},{node:{fields:{slug:"/rsa/oos-kaap/1281-garage-door-king/"},frontmatter:{title:"Garage Door King",description:"Installasies van garage deure. Aluminium, Alu-zinc, Hout en Roll up. Diens van garage deure en garage deur motors. Custom grote garage deure",image:"https://source.unsplash.com/oxjo1IQBK7M/1600x400",tags:["Gauteng","Alberton","Online","Sekuriteit","Konstruksie"]},html:'<p>Installasies van garage deure. Aluminium, Alu-zinc, Hout en Roll up. Diens van garage deure en garage deur motors. "Custom" grote garage deure</p>'}},{node:{fields:{slug:"/rsa/oos-kaap/1280-enviro-distributors/"},frontmatter:{title:"Enviro Distributors",description:"Ons verskaf ontsmetmiddels met 80% alkohol landswyd vanaf Pretoria tot Port Elizabeth",image:"https://source.unsplash.com/WIYtZU3PxsI/1600x400",tags:["Oos-Kaap","Port Elizabeth","Online","Omgewingsprodukte"]},html:"<p>Ons verskaf ontsmetmiddels met 80% alkohol landswyd vanaf Pretoria tot Port Elizabeth </p>"}},{node:{fields:{slug:"/rsa/gauteng/1284-toeka-geriefskos/"},frontmatter:{title:"Toeka Geriefskos",description:"Ons maak en lewer vooraf gevriesde etes na die groter dele van Pretoria",image:"https://source.unsplash.com/6rtm6a_aVyE/1600x400",tags:["Gauteng","Pretoria","Tuisnywerheid","Bakkery"]},html:"<p>Ons maak en lewer vooraf gevriesde etes na die groter dele van Pretoria</p>"}},{node:{fields:{slug:"/rsa/gauteng/1283-solo-design/"},frontmatter:{title:"Solo Design",description:"Grafiese ontwerp en digitale advertensies",image:"https://source.unsplash.com/g-YiX8ynmnY/1600x400",tags:["Gauteng","Bemarking","Internet","Roodepoort","Johannesburg"]},html:"<p>Grafiese ontwerp en digitale advertensies</p>"}},{node:{fields:{slug:"/rsa/oos-kaap/1285-kidz@home/"},frontmatter:{title:"Kidz@home",description:"Kleuterskool. Opvoeding van voorskoolse kinders",image:"https://source.unsplash.com/OVDtgUhUPBY/1600x400",tags:["Oos-Kaap","Jeffreysbaai","Kleuterskool","Kinders"]},html:"<p>Kleuterskool. Opvoeding van voorskoolse kinders</p>"}},{node:{fields:{slug:"/rsa/limpopo/1286-spoon-2-fork/"},frontmatter:{title:"Spoon 2 Fork",description:"Ons deel in tweede deal items., meubels klere ens.Alles soos die naaman se van lapel tot n vurk",image:"https://source.unsplash.com/yziPJ28P_D4/1600x400",tags:["Phalaborwa","Limpopo","Afslaer","Meubels"]},html:"<p>Ons deel in tweede deal items., meubels klere ens.Alles soos die naaman se van lapel tot n vurk</p>"}},{node:{fields:{slug:"/rsa/gauteng/1278-jou-ma-se-kos/"},frontmatter:{title:"Jou Ma Se Kos",description:"Ons het n koswaentjie in Valhalla in Centurion, wat die beste, smullendste en lekkerste burgers maak.",image:"https://source.unsplash.com/sc5sTPMrVfk/1600x400",tags:["Pretoria","Gauteng","Kos"]},html:"<p>Ons het n koswaentjie in Valhalla in Centurion, wat die beste, smullendste en lekkerste burgers maak.</p>"}},{node:{fields:{slug:"/rsa/noord-kaap/1287-starsat/"},frontmatter:{title:"Starsat",description:"Installasie van nuwe Starsat packages. R599.00 FULL INSTALLATION 60channels R109pm 79channels R209pm",image:"https://source.unsplash.com/EOQhsfFBhRk/1600x400",tags:["Online","Kimberley","Noord-Kaap","TV Kanale"]},html:"<p>Installasie van nuwe Starsat packages. R599.00 FULL INSTALLATION 60channels R109pm 79channels R209pm</p>"}},{node:{fields:{slug:"/rsa/namibie/1289-sefco-properties/"},frontmatter:{title:"Sefco Properties",description:"Property Management, Sales & Rentals van Residential, Commercial & Industrial Properties onder andere Houses, Flats, Warehouses, Workshops, Offices. Property Consultants.",image:"https://source.unsplash.com/rgJ1J8SDEAY/1600x400",tags:["Walvis Bay","Namibië","Eiendom"]},html:"<p>Property Management, Sales &#x26; Rentals van Residential, Commercial &#x26; Industrial Properties onder andere\nHouses/Flats/Warehouses/Workshops/Offices. Property Consultants.</p>\n<p>(Ons bied ook Property classes aan vr studente wat die NEAB eksamen wil skryf)</p>\n<p>Ons verleen ons hand van hulp in hierdie tye om iemand wat vrae het oor eiendom hetsy koper of verkoper, huurder of verhuurder by te staan en te adviseer.</p>"}},{node:{fields:{slug:"/rsa/limpopo/1282-breakaway-trading/"},frontmatter:{title:"Breakaway Trading Steel and Pipe",description:"Breakaway Trading verkoop Nuwe staal en Hardeware aan enige iemand van groot konstruksie maatskappye tot Jan Alleman wat sy stokperdjie bedryf. Ons koop en verkoop skroot metaal en is agent vir Afrox gas. Verder verkoop ons sekuriteits benodighede vir elektriese heinings en hekmotors ook. Ons kan ook benodighede vir die bou en herstel van sleepwaens kry.",image:"https://source.unsplash.com/ib7jwp7m0iA/1600x400",tags:["Nylstroom","Limpopo","Konstruksie"]},html:"<p>Breakaway Trading verkoop Nuwe staal en Hardeware aan enige iemand van groot konstruksie maatskappye tot Jan Alleman wat sy stokperdjie bedryf. Ons koop en verkoop skroot metaal en is agent vir Afrox gas. Verder verkoop ons sekuriteits benodighede vir elektriese heinings en hekmotors ook. Ons kan ook benodighede vir die bou en herstel van sleepwaens kry.</p>"}},{node:{fields:{slug:"/rsa/limpopo/1290-shack-it/"},frontmatter:{title:"Shack-it",description:"Ons bou shacks, sheds, long drops, buite storte alles gemaak van corrugated sheets. Ons verkoop ook corrugated sheets en IBR sheets",image:"https://source.unsplash.com/_WIr3Xigr1s/1600x400",tags:["Vaalwater","Limpopo","Konstruksie","Staalwerke"]},html:"<p>Ons bou shacks, sheds, long drops, buite storte alles gemaak van corrugated sheets. Ons verkoop ook corrugated sheets en IBR sheets</p>"}},{node:{fields:{slug:"/rsa/limpopo/1288-thundu-land/"},frontmatter:{title:"Thundu Land Auctioneers",description:"Koop en verkoop van goedere",image:"https://source.unsplash.com/7T8vSHYXq4U/1600x400",tags:["Louis Trichardt","Limpopo","Afslaer","Meubels"]},html:"<p>Veilingsnuus deur sms en op facebook. Ons verkoop nuwe en tweedehandse huisware</p>"}}]}}}},577:function(e){e.exports={data:{bloglist:{edges:[{node:{fields:{slug:"/blog/2019-02-19-a-few-essential-spanish-phrases/"},excerpt:"There’s nothing that can make you feel quite as stupid as not knowing a language– even when you are simply using a toilet.\nYes, in a lot of…",frontmatter:{title:"A few essential Spanish phrases to help you survive the first few months of moving to Spain",image:"https://source.unsplash.com/ASKeuOZqhYU/3900x2600",date:"2019-02-19T19:12:28.000Z",author:"Mariska Grobler"}}},{node:{fields:{slug:"/blog/2019-02-08-which-school-do-i-choose-for-my-kids-when-moving-to-spain/"},excerpt:"When we moved to Spain, our daughters were 14 and 11 years old and just completed Year 9 and Year 6 in the UK. The \nyoungest was due to…",frontmatter:{title:"Which school do I choose for my kids when moving to Spain?",image:"https://images.expatty.com/blog/schools-in-spain.jpg",date:"2019-02-08T21:04:13.000Z",author:"Mariska Grobler"}}},{node:{fields:{slug:"/blog/2019-01-04-stray-cat-colonies-of-andalusia/"},excerpt:"A couple of months after moving into a finca in the campo, I felt sorry for a pregnant mother cat and her four kittens\nwho eventually…",frontmatter:{title:"The stray cat colonies of Andalusia",image:"https://images.expatty.com/blog/stray-cats.jpg",date:"2019-01-04T22:16:14.000Z",author:"Mariska Grobler"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f103ab4f29dbe52c327f.js.map