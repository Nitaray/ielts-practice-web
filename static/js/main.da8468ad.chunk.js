(this["webpackJsonpielts-practice-app"]=this["webpackJsonpielts-practice-app"]||[]).push([[0],{194:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),s=(a(194),a(45)),c=a(21),l=a(53),d=a(50),u=a(58),h=a(272),p=a(284),m=a(73),b=a.n(m),j=a(273),g=a(232),f=a(22),x=a.n(f),v=a(267),O=a(268),w=a(178),y=a(286),k=a(3),C=x()((function(e){return{button:{margin:e.spacing(2,0,2)}}}));function N(e){var t=e.value,a=e.onClick,n=C(),i=function(){return a()};return Object(k.jsx)(v.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",className:n.button,onClick:function(){return i()},children:t})}function B(e){var t=e.options,a=e.icon,n=i.a.useState(null),r=Object(u.a)(n,2),o=r[0],s=r[1],l=Object(c.f)();return Object(k.jsxs)("div",{component:g.a,children:[Object(k.jsx)(O.a,{color:"inherit","aria-haspopup":"true",onClick:function(e){return s(e.currentTarget)},children:a}),Object(k.jsx)(g.a,{elevation:0,style:{margin:"0px",border:"1px solid black"}}),Object(k.jsx)(w.a,{keepMounted:!0,elevation:2,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},anchorEl:o,open:Boolean(o),onClose:function(){return s(null)},children:t.map((function(e){return Object(k.jsx)(y.a,{onClick:function(){return t=e.to,l.push(t);var t},children:e.value})}))})]})}var S=a(282);a(283);function P(e){var t=e.label,a=e.name,n=e.value,i=e.onChange,r=function(e){return i(e)};return Object(k.jsx)(S.a,{required:!0,fullWidth:!0,autoFocus:!0,variant:"outlined",margin:"normal",id:a,label:t,name:a,value:n,onChange:function(e){return r(e)}})}function H(e){var t=e.label,a=e.name,n=e.value,i=e.onChange,r=function(e){return i(e)};return Object(k.jsx)(S.a,{required:!0,fullWidth:!0,autoFocus:!0,variant:"outlined",margin:"normal",type:"password",id:a,label:t,name:a,value:n,onChange:function(e){return r(e)}})}var L=a(233),z=a(271);function I(e){var t=e.value,a=e.fontSize;return Object(k.jsx)(L.a,{noWrap:!0,color:"inherit",variant:"inherit",style:{fontWeight:"bold",fontSize:a},children:t})}function T(e){var t=e.value,a=e.align;return Object(k.jsx)(L.a,{align:a,children:t})}function R(e){var t=e.value,a=e.align,n=e.to;return Object(k.jsx)(z.a,{component:s.b,to:n,underline:"none",children:Object(k.jsx)(L.a,{variant:"body2",align:a,children:t})})}var W=x()((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}}));function F(){var e=W(),t=Object(c.f)(),a=Object(n.useState)({email:"",password:""}),i=Object(u.a)(a,2),r=i[0],o=i[1],s=function(e){return function(t){return o(Object(d.a)(Object(d.a)({},r),{},Object(l.a)({},e,t.target.value)))}},m=function(){(function(e){return"123"===e.email&&"123"===e.password||(alert("Please use fake account to grant access:\nEmail: 123\nPassword: 123\n\nAPI needed for authorization."),!1)})(r)&&t.push("/home")};return Object(k.jsxs)(h.a,{container:!0,component:"main",className:e.root,children:[Object(k.jsx)(j.a,{}),Object(k.jsx)(h.a,{item:!0,xs:!1,sm:4,md:8}),Object(k.jsx)(h.a,{item:!0,xs:12,sm:8,md:4,component:g.a,children:Object(k.jsxs)("div",{className:e.paper,children:[Object(k.jsx)(p.a,{className:e.avatar,children:Object(k.jsx)(b.a,{})}),Object(k.jsx)(I,{value:"Sign In",fontSize:"18px"}),Object(k.jsxs)("form",{className:e.form,children:[Object(k.jsx)(P,{label:"Email Address",name:"email",value:r.email,onChange:s("email")}),Object(k.jsx)(H,{label:"Password",name:"password",value:r.password,onChange:s("password")}),Object(k.jsx)(N,{value:"Sign In",onClick:function(){return m()}}),Object(k.jsxs)(h.a,{container:!0,children:[Object(k.jsx)(h.a,{item:!0,xs:!0,children:Object(k.jsx)(R,{value:"Forgot password!",align:"left",to:"/forgot-password"})}),Object(k.jsx)(h.a,{item:!0,xs:!0,children:Object(k.jsx)(R,{value:"Don't have account?",align:"right",to:"/create-account"})})]})]})]})})]})}var q=a(274),E=x()((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)}}}));function A(){var e=E(),t=Object(c.f)(),a=Object(n.useState)({name:"",email:"",password:"",confirmPassword:""}),r=Object(u.a)(a,2),o=r[0],s=r[1],m=function(e){return function(t){return s(Object(d.a)(Object(d.a)({},o),{},Object(l.a)({},e,t.target.value)))}},g=function(){(function(e){if("123"===e.name&&"123"===e.email&&"123"===e.password)return!0;alert("Please use fake account to grant access:\nName: 123\nEmail: 123\nPassword: 123\n\nAPI needed for authorization.")})(o)&&t.push("/")};return Object(k.jsx)(i.a.Fragment,{children:Object(k.jsxs)(q.a,{maxWidth:"xs",children:[Object(k.jsx)(j.a,{}),Object(k.jsxs)("div",{className:e.paper,children:[Object(k.jsx)(p.a,{className:e.avatar,children:Object(k.jsx)(b.a,{})}),Object(k.jsx)(I,{value:"Create Account",fontSize:"18px"}),Object(k.jsxs)("form",{className:e.form,children:[Object(k.jsxs)(h.a,{container:!0,children:[Object(k.jsx)(h.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(P,{label:"Full Name",name:"name",value:o.name,onChange:m("name")})}),Object(k.jsx)(h.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(P,{label:"Email",name:"email",value:o.email,onChange:m("email")})}),Object(k.jsx)(h.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(H,{label:"Password",name:"password",value:o.password,onChange:m("password")})}),Object(k.jsx)(h.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(H,{label:"Confirm password",name:"confirm-password",value:o.confirmPassword,onChange:m("confirmPassword")})}),Object(k.jsx)(h.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(N,{value:"Sign Up",onClick:function(){return g()}})})]}),Object(k.jsx)(h.a,{container:!0,children:Object(k.jsx)(h.a,{item:!0,xs:!0,children:Object(k.jsx)(R,{value:"Oh! I already have account",align:"right",to:"/"})})})]})]})]})})}var D=x()((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)}}}));function Z(){var e,t=D(),a=Object(n.useState)({email:""}),r=Object(u.a)(a,2),o=r[0],s=r[1];return Object(k.jsx)(i.a.Fragment,{children:Object(k.jsxs)(q.a,{maxWidth:"xs",children:[Object(k.jsx)(j.a,{}),Object(k.jsxs)("div",{className:t.paper,children:[Object(k.jsx)(p.a,{className:t.avatar,children:Object(k.jsx)(b.a,{})}),Object(k.jsx)(I,{value:"Recover password",fontSize:"18px"}),Object(k.jsxs)("form",{className:t.form,children:[Object(k.jsxs)(h.a,{container:!0,children:[Object(k.jsx)(h.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(P,{label:"Email",name:"email",value:o.email,onChange:(e="email",function(t){return s(Object(d.a)(Object(d.a)({},o),{},Object(l.a)({},e,t.target.value)))})})}),Object(k.jsx)(h.a,{item:!0,xs:12,sm:12,children:Object(k.jsx)(N,{value:"Recover password",onClick:function(){}})})]}),Object(k.jsx)(h.a,{container:!0,children:Object(k.jsx)(h.a,{item:!0,xs:!0,children:Object(k.jsx)(R,{value:"Back to home",align:"right",to:"/"})})})]})]})]})})}var G=a(276),K=a(275),M=a(172),U=a.n(M),J=x()((function(e){return{toolBar:{backgroundColor:e.palette.common.white,color:e.palette.common.black,justifyContent:"space-between",overflowX:"auto"},appBar:{}}}));function Q(){var e=J();return Object(k.jsx)(K.a,{elevation:2,className:e.appBar,children:Object(k.jsxs)(G.a,{component:"nav",variant:"dense",className:e.toolBar,children:[Object(k.jsx)(I,{value:"IELTS Training",component:"h1"}),Object(k.jsx)(B,{options:[{value:"Home",to:"/home"},{value:"Recover password",to:"/forgot-password"}],icon:Object(k.jsx)(U.a,{})})]})})}var X=a(277),$=a(278),V=a(279),Y=a(281),_=a(280),ee=a(137),te=a.n(ee);function ae(e,t,a,n,i){return{id:e,title:t,type:a,created:n,status:i}}var ne=a(288),ie=a(84),re=a.n(ie),oe=x()((function(e){return{chip:{maxHeight:"18px",fontSize:"11px",fontWeight:"bold"}}}));function se(){var e=oe(),t=re()();return Object(k.jsx)(ne.a,{size:"small",label:"Listening",className:e.chip,style:{backgroundColor:t.palette.chip.listening}})}function ce(){var e=oe(),t=re()();return Object(k.jsx)(ne.a,{size:"small",label:"Reading",className:e.chip,style:{backgroundColor:t.palette.chip.reading}})}var le=a(173),de=a.n(le);function ue(){return Object(k.jsx)(de.a,{fontSize:"small"})}var he=[{id:"id",label:"#",align:"right",width:"5%",compareFn:function(e,t,a){var n=e.id-t.id;return"asc"===a?n:-n}},{id:"title",label:"Title",align:"left",width:"60%",compareFn:function(e,t,a){var n=e.title-t.title;return"asc"===a?n:-n}},{id:"type",label:"Type",align:"left",width:"5%",compareFn:function(e,t,a){var n=e.type>t.type?1:-1;return"asc"===a?n:-n}},{id:"created",label:"Date Created",align:"right",width:"5%",compareFn:function(e,t,a){var n=e.created>t.created?1:-1;return"asc"===a?n:-n}},{id:"status",label:"Status",align:"right",width:"5%",compareFn:function(e,t,a){var n=e.status.toUpperCase()>t.status.toUpperCase()?1:-1;return"asc"===a?n:-n}}],pe=x()((function(e){return{cellWithIcon:{display:"flex",alignItems:"center",flexWrap:"wrap"}}}));function me(){var e=pe(),t=[ae("1","History of Homo Sapiens","Reading","17/08/2021","todo"),ae("2","Evolution of hours","Listening","17/08/2021","done"),ae("3","How to build a house?","Reading","17/08/2021","done"),ae("4","How to raise child?","Listening","17/08/2021","todo"),ae("5","History of Homo Sapiens","Reading","17/08/2021","done"),ae("6","Evolution of hours","Reading","17/08/2021","done"),ae("7","How to build a house?","Reading","17/08/2021","done"),ae("8","How to raise child?","Listening","17/08/2021","todo"),ae("9","History of Homo Sapiens","Reading","17/08/2021","done"),ae("10","Evolution of hours","Listening","17/08/2021","done"),ae("11","How to build a house?","Listening","17/08/2021","done"),ae("12","How to raise child?","Reading","17/08/2021","todo"),ae("13","History of Homo Sapiens","Listening","17/08/2021","done"),ae("14","Evolution of hours","Reading","17/08/2021","todo"),ae("15","How to build a house?","Listening","17/08/2021","done"),ae("16","How to raise child?","Reading","17/08/2021","todo")];return Object(k.jsxs)(X.a,{size:"small",stickyHeader:!0,children:[Object(k.jsx)($.a,{children:Object(k.jsx)(V.a,{children:he.map((function(e){return Object(k.jsx)(be,{align:e.align,children:Object(k.jsx)(I,{value:e.label})})}))})}),Object(k.jsx)(_.a,{children:t.map((function(t){return Object(k.jsxs)(je,{hover:!0,children:[Object(k.jsx)(be,{align:"right",children:t.id}),Object(k.jsx)(be,{align:"left",style:{width:"60%"},children:Object(k.jsx)(R,{value:t.title,to:"/test/".concat(t.id)})}),Object(k.jsx)(be,{align:"left",children:"listening"===t.type.toLowerCase()?Object(k.jsx)(se,{}):Object(k.jsx)(ce,{})}),Object(k.jsx)(be,{align:"right",children:t.created}),Object(k.jsx)(be,{align:"right",className:e.cellWithIcon,children:"done"===t.status.toLowerCase()&&Object(k.jsx)(ue,{})})]},t.id)}))})]})}var be=te()((function(e){return{root:{height:25,borderBottom:"none"},head:{backgroundColor:e.palette.table.head,color:e.palette.table.text},body:{fontSize:14}}}))(Y.a),je=te()((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.table.odd}}}}))(V.a),ge=x()((function(e){return{root:{display:"flex"},content:{flexGrow:1,overflow:"auto"},appBarSpacer:e.mixins.toolbar,container:{paddingTop:e.spacing(4),paddingLeft:e.spacing(8),paddingBottom:e.spacing(4),paddingRight:e.spacing(8)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",height:"auto"},tableHead:{backgroundColor:e.palette.common.black,color:e.palette.common.white,fontWeight:"bold"}}}));function fe(){var e=ge();return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)(Q,{}),Object(k.jsxs)("div",{className:e.content,children:[Object(k.jsx)("div",{className:e.appBarSpacer}),Object(k.jsx)(q.a,{className:e.container,children:Object(k.jsxs)(h.a,{container:!0,spacing:3,children:[Object(k.jsx)(h.a,{item:!0,xs:8,children:Object(k.jsx)(g.a,{elevation:0,children:Object(k.jsx)(me,{})})}),Object(k.jsx)(h.a,{item:!0,xs:4,children:Object(k.jsx)(g.a,{className:e.paper})})]})})]})]})}var xe=a(266),ve=a(131),Oe=a.n(ve),we=a(285),ye=x()((function(e){return{section:{margin:e.spacing(2),padding:e.spacing(2)},title:{marginBottom:e.spacing(2)},question:{margin:e.spacing(2),padding:e.spacing(1)}}}));function ke(e){var t=e.section,a=e.passage,n=ye();return Object(k.jsxs)(we.a,{border:1.5,className:n.section,children:[Object(k.jsx)("div",{className:n.title,children:Object(k.jsx)(I,{value:"Section ".concat(t),fontSize:"18px"})}),Object(k.jsx)(T,{value:a})]})}function Ce(e){var t=e.question,a=e.statement,n=ye();return Object(k.jsxs)(we.a,{border:0,className:n.question,children:[Object(k.jsx)(L.a,{display:"inline",style:{marginRight:"25px",fontWeight:"bold"},children:t}),Object(k.jsx)(L.a,{display:"inline",children:a})]})}function Ne(e){var t=e.question,a=re()();return Object(k.jsx)(S.a,{select:!0,size:"small",variant:"outlined",id:t,label:"Question ".concat(t),value:" ",style:{margin:a.spacing(1)},children:["True","False","Not Given"].map((function(e){return Object(k.jsx)(y.a,{value:e,children:e},e)}))})}var Be=x()((function(e){return{root:{display:"flex"},content:{flexGrow:1,overflow:"auto"},appBarSpacer:e.mixins.toolbar,container:{paddingTop:e.spacing(4),paddingLeft:e.spacing(8),paddingBottom:e.spacing(4),paddingRight:e.spacing(8)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",height:"auto"},tableHead:{backgroundColor:e.palette.common.black,color:e.palette.common.white,fontWeight:"bold"},readingPassage:{padding:e.spacing(2)}}}));function Se(){var e=Be(),t=(Object(c.g)().id,[{section:"1",type:"true-false",passage:"Prof Zeman tells the BBC: \"People who have contacted us say they are really delighted that this has been recognised and has been given a name, because they have been trying to explain to people for years that there is this oddity that they find hard to convey to others.\" How we imagine is clearly very subjective - one person's vivid scene could be another's grainy picture. But Prof Zeman is certain that aphantasia is real. People often report being able to dream in pictures, and there have been reported cases of people losing the ability to think in images after a brain injury.",question:{group:"1",list:[{number:"1",statement:"Aphantasia is a condition, which describes people, for whom it is hard to visualise mental images.",answer:""},{number:"2",statement:"Niel Kenmuir was unable to count sheep in his head.",answer:""},{number:"3",statement:"People with aphantasia struggle to remember personal traits and clothes of different people.",answer:""},{number:"4",statement:"Niel regrets that he cannot portray an image of his fiancee in his mind.",answer:""},{number:"5",statement:"Inability to picture things in someone's head is often a cause of distress for a person.",answer:""},{number:"6",statement:"All people with aphantasia start to feel 'isolated' or 'alone' at some point of their lives.",answer:""},{number:"7",statement:"Lauren Beard's career depends on her imagination.",answer:""},{number:"8",statement:"The author met Lauren Beard when she was working on a comedy scene in her next book.",answer:""}]}},{section:"2",type:"true-false-ng",passage:"Prof Zeman tells the BBC: \"People who have contacted us say they are really delighted that this has been recognised and has been given a name, because they have been trying to explain to people for years that there is this oddity that they find hard to convey to others.\" How we imagine is clearly very subjective - one person's vivid scene could be another's grainy picture. But Prof Zeman is certain that aphantasia is real. People often report being able to dream in pictures, and there have been reported cases of people losing the ability to think in images after a brain injury.",question:{group:"1",list:[{number:"1",statement:"Aphantasia is a condition, which describes people, for whom it is hard to visualise mental images.",answer:""},{number:"2",statement:"Niel Kenmuir was unable to count sheep in his head.",answer:""},{number:"3",statement:"People with aphantasia struggle to remember personal traits and clothes of different people.",answer:""},{number:"4",statement:"Niel regrets that he cannot portray an image of his fiancee in his mind.",answer:""},{number:"5",statement:"Inability to picture things in someone's head is often a cause of distress for a person.",answer:""},{number:"6",statement:"All people with aphantasia start to feel 'isolated' or 'alone' at some point of their lives.",answer:""},{number:"7",statement:"Lauren Beard's career depends on her imagination.",answer:""},{number:"8",statement:"The author met Lauren Beard when she was working on a comedy scene in her next book.",answer:""}]}},{section:"3",type:"true-false-ng",passage:"Prof Zeman tells the BBC: \"People who have contacted us say they are really delighted that this has been recognised and has been given a name, because they have been trying to explain to people for years that there is this oddity that they find hard to convey to others.\" How we imagine is clearly very subjective - one person's vivid scene could be another's grainy picture. But Prof Zeman is certain that aphantasia is real. People often report being able to dream in pictures, and there have been reported cases of people losing the ability to think in images after a brain injury.",question:{group:"1",list:[{number:"1",statement:"Aphantasia is a condition, which describes people, for whom it is hard to visualise mental images.",answer:""},{number:"2",statement:"Niel Kenmuir was unable to count sheep in his head.",answer:""},{number:"3",statement:"People with aphantasia struggle to remember personal traits and clothes of different people.",answer:""},{number:"4",statement:"Niel regrets that he cannot portray an image of his fiancee in his mind.",answer:""},{number:"5",statement:"Inability to picture things in someone's head is often a cause of distress for a person.",answer:""},{number:"6",statement:"All people with aphantasia start to feel 'isolated' or 'alone' at some point of their lives.",answer:""},{number:"7",statement:"Lauren Beard's career depends on her imagination.",answer:""},{number:"8",statement:"The author met Lauren Beard when she was working on a comedy scene in her next book.",answer:""}]}}]);return Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsx)(Q,{}),Object(k.jsxs)("div",{className:e.content,children:[Object(k.jsx)("div",{className:e.appBarSpacer}),Object(k.jsx)(q.a,{className:e.container,children:Object(k.jsxs)(h.a,{container:!0,spacing:3,children:[Object(k.jsx)(h.a,{item:!0,xs:9,children:Object(k.jsx)(g.a,{variant:"outlined",className:e.paper,children:t.map((function(e){return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(ke,{section:e.section,passage:e.passage}),"true-false"===e.type&&e.question.list.map((function(e){return Object(k.jsx)(Ce,{question:e.number,statement:e.statement})}))]})}))})}),Object(k.jsx)(h.a,{item:!0,xs:3,children:Object(k.jsx)(g.a,{variant:"outlined",className:e.paper,children:t.map((function(e){return Object(k.jsx)(i.a.Fragment,{children:"true-false"===e.type&&e.question.list.map((function(e){return Object(k.jsx)(Ne,{question:e.number})}))})}))})})]})})]})]})}var Pe=Oe()({palette:{primary:{light:"#8c332d",main:"#590004",dark:"#350000",contrastText:"#ffffff"},secondary:{light:"#ffec4e",main:"#fcba04",dark:"#c48a00",contrastText:"#000000"},chip:{listening:"#ff7077",reading:"#fede86"},table:{head:"#ffffff",text:"#000000",even:"#ffffff",odd:"#f5f5f5"},action:{hover:"#cccccc"}}});function He(){return Object(k.jsx)(xe.a,{theme:Pe,children:Object(k.jsx)(s.a,{basename:"/ielts-practice-web",children:Object(k.jsxs)(c.c,{children:[Object(k.jsx)(c.a,{exact:!0,path:"/",component:F}),Object(k.jsx)(c.a,{exact:!0,path:"/landing",component:F}),Object(k.jsx)(c.a,{exact:!0,path:"/create-account",component:A}),Object(k.jsx)(c.a,{exact:!0,path:"/forgot-password",component:Z}),Object(k.jsx)(c.a,{exact:!0,path:"/home",component:fe}),Object(k.jsx)(c.a,{exact:!0,path:"/test/:id",children:Object(k.jsx)(Se,{})})]})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=a(113),ze=Object(Le.createHttpLink)({uri:"http://localhost:4000"});new Le.ApolloClient({link:ze,cache:new Le.InMemoryCache});o.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(He,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.da8468ad.chunk.js.map