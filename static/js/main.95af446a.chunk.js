(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(53)},27:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(10),r=a.n(o),i=(a(27),a(3)),l=a(4),s=a(6),m=a(5),u=a(7),p=a(55),f=a(57),d=a(56),g=a(13),h=a(54),E=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={logoActive:!1},a.logoHandleClick=function(){a.state.logoActive||(a.setState({logoActive:!0}),setTimeout(function(){a.setState({logoActive:!1})},1e3))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Landing"},c.a.createElement("div",{className:"landingCentering"},c.a.createElement("img",{className:"landing item logo "+(this.state.logoActive?"active":""),onClick:function(){e.logoHandleClick()},src:"/assets/logo.svg",alt:"msfstef logo"}),c.a.createElement("div",{className:"landingWrapper"},c.a.createElement(h.a,{className:"landing item work",to:"/work"},"Portfolio"),c.a.createElement(h.a,{className:"landing item about",to:"/about"},"About"),c.a.createElement(h.a,{className:"landing item contact",to:"/contact"},"Contact"),c.a.createElement("div",{className:"landing item social"},c.a.createElement("a",{className:"landing item social",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/stefanosmousafeiris/"},c.a.createElement("i",{className:"fa fa-linkedin"})),c.a.createElement("a",{className:"landing item social",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/msfstef"},c.a.createElement("i",{className:"fa fa-github"})),c.a.createElement("a",{className:"landing item social",href:"mailto:msfstef@gmail.com"},c.a.createElement("i",{className:"fa fa-envelope"}))))))}}]),t}(n.Component)),v=(a(40),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"WorkItem"},c.a.createElement("a",{className:this.props.itemName+" worklink",target:"_blank",rel:"noopener noreferrer",href:this.props.link},c.a.createElement("div",{className:"workImageContainer"},c.a.createElement("img",{className:this.props.itemName+" work image landscape",src:"/assets/"+this.props.itemName+"_landscape.PNG",alt:this.props.itemName}),c.a.createElement("img",{className:this.props.itemName+" work image portrait",src:"/assets/"+this.props.itemName+"_portrait.PNG",alt:this.props.itemName})),c.a.createElement("div",{className:"WorkItemText"},c.a.createElement("h2",{className:"WorkItemTitle"},this.props.itemTitle),c.a.createElement("p",{className:"WorkItemDesc"},this.props.itemDesc))))}}]),t}(n.Component)),b=(a(42),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){!function(){function e(e){e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.getElementById("WorkWrapper").scrollLeft-=70*t,e.preventDefault()}document.getElementById("WorkWrapper").addEventListener?(document.getElementById("WorkWrapper").addEventListener("mousewheel",e,!1),document.getElementById("WorkWrapper").addEventListener("DOMMouseScroll",e,!1)):document.getElementById("WorkWrapper").attachEvent("onmousewheel",e)}();var e,t,a=document.getElementById("WorkWrapper"),n=!1;function c(e){e.preventDefault()}a.addEventListener("mousedown",function(c){n=!0,t=a.scrollLeft,n&&(e=c.pageX-a.offsetLeft,a.classList.add("active"))}),a.addEventListener("mouseleave",function(){n=!1,a.classList.remove("active")}),a.addEventListener("mouseup",function(){n=!1,a.classList.remove("active"),setTimeout(function(){return a.removeEventListener("click",c)},10)}),a.addEventListener("mousemove",function(o){if(n){a.addEventListener("click",c),o.preventDefault();var r=2*(o.pageX-a.offsetLeft-e);a.scrollLeft=t-r}})}},{key:"render",value:function(){return c.a.createElement("div",{id:"WorkWrapper",className:"Work wrapper",refresh:Date.now()},c.a.createElement(v,{itemName:"standupper",itemTitle:"Standupper",itemDesc:"React Native mobile productivity tool for stand-up comedians.",link:"https://msfstef.github.io/Standupper"}),c.a.createElement(v,{itemName:"flopornot",itemTitle:"Flop or Not",itemDesc:"A React web and mobile quiz about movie profitability.",link:"https://msfstef.github.io/FlopOrNot"}),c.a.createElement(v,{itemName:"crosspix",itemTitle:"CrossPiX",itemDesc:"Web app to convert pictures to cross-stitch patterns.",link:"https://msfstef.github.io/CrossPiX"}),c.a.createElement(v,{itemName:"headbattle",itemTitle:"Headbattle",itemDesc:"A plain JS 1v1 football inspired game.",link:"https://msfstef.github.io/headbattle"}),c.a.createElement("div",{id:"listdivider"}))}}]),t}(n.Component)),N=(a(44),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={clicked:!1},a.clickPic=function(){a.setState({clicked:!0}),setTimeout(function(){a.setState({clicked:!1})},3e3)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"About"},c.a.createElement("div",{className:"aboutWrapper"},c.a.createElement("div",{className:"aboutPicContainer"},c.a.createElement("img",{className:"aboutPic",src:"/assets/face_square.jpg",alt:"my face"}),c.a.createElement("img",{className:"aboutPicLogo"+(this.state.clicked?" clicked":" "),src:"/assets/logo.svg",alt:"logo",onClick:function(){e.state.clicked||e.clickPic()}})),c.a.createElement("p",{className:"aboutText"},"My name is ",c.a.createElement("b",null,"Stefanos Mousafeiris"),", and I'm a Greek-Italian physicist turned software developer.",c.a.createElement("br",null),c.a.createElement("br",null),"Currently working on my portfolio."),c.a.createElement("div",{className:"aboutSocial"},c.a.createElement("a",{className:"aboutSocialItem",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/stefanosmousafeiris/"},c.a.createElement("i",{className:"fa fa-linkedin"})),c.a.createElement("a",{className:"aboutSocialItem",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/msfstef"},c.a.createElement("i",{className:"fa fa-github"})),c.a.createElement("a",{className:"aboutSocialItem",href:"mailto:msfstef@gmail.com"},c.a.createElement("i",{className:"fa fa-envelope"})))))}}]),t}(n.Component)),k=(a(46),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Contact"},c.a.createElement("div",{className:"contactHeadings"},c.a.createElement("h1",{className:"contactTitle"},"Get in contact!"),c.a.createElement("p",{className:"contactDesc"},"Feel free to contact me for any collaboration or project that you may have in mind.")),c.a.createElement("form",{className:"contactForm",action:"https://formspree.io/msfstef@gmail.com",method:"POST"},c.a.createElement("input",{className:"contactEmail",type:"email",name:"email",placeholder:"Your email.."}),c.a.createElement("textarea",{className:"contactText",name:"message",placeholder:"Your message.. (e.g. hi mr. stefanos, i like \r your stuff make me something please.)"}),c.a.createElement("button",{className:"contactSend",type:"submit"},c.a.createElement("span",null,"SEND"))))}}]),t}(n.Component)),w=(a(48),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={toggle:!1},a.toggleMenu=function(){a.setState({toggle:!a.state.toggle})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Header"+(this.state.toggle?" change":" ")+("#/"===window.location.hash?" hide":""),onClick:function(){e.state.toggle&&e.toggleMenu()}},c.a.createElement(h.a,{className:"landingLink",to:"/"},c.a.createElement("img",{className:"navbar logo",onClick:function(){e.state.toggle&&e.toggleMenu(),document.body.scrollTop=0,document.documentElement.scrollTop=0},src:"/assets/logo.svg",alt:"msfstef logo"})),c.a.createElement("div",{className:"navbar menuicon "+(this.state.toggle?"change":""),onClick:function(){return e.toggleMenu()}},c.a.createElement("div",{className:"bar1"}),c.a.createElement("div",{className:"bar2"}),c.a.createElement("div",{className:"bar3"})),c.a.createElement("div",{className:"navbar menu container "+(this.state.toggle?"change":"")},c.a.createElement(h.a,{className:"menu item work",to:"/work",onClick:function(){e.toggleMenu()}},"Portfolio"),c.a.createElement(h.a,{className:"menu item about",to:"/about",onClick:function(){e.toggleMenu()}},"About"),c.a.createElement(h.a,{className:"menu item contact",to:"/contact",onClick:function(){e.toggleMenu()}},"Contact")))}}]),t}(n.Component)),y=(a(50),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(f.a,{render:function(e){var t=e.location,a=t.pathname;return c.a.createElement(g.TransitionGroup,null,c.a.createElement(g.CSSTransition,{key:a,classNames:"page",timeout:{enter:1e3,exit:500}},c.a.createElement(f.a,{location:t,render:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d.a,{location:t},c.a.createElement(f.a,{exact:!0,path:"/",component:E}),c.a.createElement(f.a,{exact:!0,path:"/work",component:b}),c.a.createElement(f.a,{exact:!0,path:"/about",component:N}),c.a.createElement(f.a,{exact:!0,path:"/contact",component:k})))}})))}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.95af446a.chunk.js.map