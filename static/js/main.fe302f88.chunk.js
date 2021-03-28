(this["webpackJsonpreact-development-test"]=this["webpackJsonpreact-development-test"]||[]).push([[0],{274:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(226),i=a.n(r),o=a(10),c=a(317),s=a(239),l=a(21),d=Object(s.a)({palette:{background:{dark:"#F4F6F8",default:l.a.common.white,paper:l.a.common.white},primary:{main:l.a.common.white},secondary:{main:l.a.grey[600]},text:{primary:l.a.blueGrey[900],secondary:l.a.blueGrey[600]}}}),u=a(295),j=a(31),h=a(37),b=a(303),f=a(305),m=a(2),p=Object(u.a)((function(){return{logo:{height:"60px",width:"auto",position:"absolute",top:"50%",transform:"translateY(-50%)"}}})),x=function(e){var t=p();return Object(m.jsx)("img",Object(j.a)({alt:"Logo",src:"static/images/logo.jpg",className:t.logo},e))},O=function(e){return Object(m.jsx)(b.a,Object(j.a)(Object(j.a)({elevation:3},e),{},{children:Object(m.jsx)(f.a,{sx:{height:64},children:Object(m.jsx)(h.b,{to:"/",children:Object(m.jsx)(x,{})})})}))},g=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,display:"flex",height:"100%",overflow:"hidden",width:"100%"},wrapper:{display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:94,paddingBottom:30,paddingLeft:30,paddingRight:30}}})),v=function(){var e=g();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(O,{}),Object(m.jsx)("div",{className:e.wrapper,children:Object(m.jsx)(o.a,{})})]})},y=a(230),k=a(231),w=a(241),M=a(240),P=a(306),S=a(307),L=a(297),I=a(308),N=a(309),A=a(310),T=a(302),D=a(312),F=a(313),C=a(315),E=a(316),W=a(232),K=a.n(W),z=[{value:"All States",key:"00"},{value:"Johor",key:"01"},{value:"Kedah",key:"02"},{value:"Kelantan",key:"03"},{value:"Melaka",key:"04"},{value:"Negeri Sembilan",key:"05"},{value:"Pahang",key:"06"},{value:"Perak",key:"08"},{value:"Perlis",key:"09"},{value:"Pulau Pinang",key:"07"},{value:"Sabah",key:"12"},{value:"Sarawak",key:"13"},{value:"Selangor",key:"10"},{value:"Terengganu",key:"11"},{value:"W.Persekutuan (Kuala Lumpur)",key:"14"},{value:"W.Persekutuan (Labuan)",key:"16"},{value:"W.Persekutuan (Putrajaya)",key:"16"}],B=function(e,t,a){var n=t.lat,r=void 0===n?"":n,i=t.long,o=void 0===i?"":i,c=[],s=1;e.map((function(e){var t=z.filter((function(t){return t.key===e.ste}));if(e.state=t.length>0?t[0].value:"-",e.no=s,e.distance="-",""!==r&&""!==o){var a=function(e,t,a,n){if(e===a&&t===n)return 0;var r=Math.PI*e/180,i=Math.PI*a/180,o=t-n,c=Math.PI*o/180,s=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(c);return s>1&&(s=1),60*(s=180*(s=Math.acos(s))/Math.PI)*1.1515*1.609344}(r,o,e.lat,e.lon);e.distance=a>=1?a.toFixed(2)+" KM":(a/1e3).toFixed(2)+" Meter"}c.push(e),s++})),a(c)},J={getOfficeDetails:function(e){K.a.post("https://secure.kwsp.gov.my/m2/postBranchLocation",{ios:"100",lan:"EN",ver:"100"},{headers:{"Access-Control-Allow-Origin":"*",mode:"no-cors"}}).then((function(t){!function(e,t){if(!navigator.geolocation)return B(e,{lat:"",long:""},t);navigator.geolocation.getCurrentPosition((function(a){var n=a.coords.latitude,r=a.coords.longitude;return B(e,{lat:n,long:r},t)}),(function(){return B(e,{lat:"",long:""},t)}))}(t.data.lis,e)})).catch((function(e){alert("API Error")}))}},G=a(233),R=a.n(G),Y=a(238),q=a.n(Y),H=a(237),Q=a.n(H),U=a(300),V=Object(P.a)((function(){return{mainTitle:{color:"#2f3291",fontSize:"27px !important",fontWeight:"bold !important"},subTitle:{color:"#7f7f83",fontSize:"18px !important"},tableCard:{width:"100%"}}})),X=[{name:"NO.",selector:"no",sortable:!1},{name:"STATE",selector:"state",sortable:!0},{name:"NAME",selector:"nam",sortable:!0},{name:"ADDRESS",selector:"ads",sortable:!1,width:"700px"},{name:"DISTANCE",selector:"distance",sortable:!0,width:"250px"}],Z=function(e){Object(w.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,officeList:[]},n}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;J.getOfficeDetails((function(t){e.setState(Object(j.a)(Object(j.a)({},e.state),{},{officeList:t,isLoading:!1}))}))}},{key:"render",value:function(){var e=this.props.classes;return!this.state.isLoading&&Object(m.jsxs)(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(m.jsx)(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center",md:6,xs:12,children:Object(m.jsxs)(L.a,{display:"flex",flex:"1",flexDirection:"column",children:[Object(m.jsx)(L.a,{display:"flex",children:Object(m.jsx)(I.a,{className:e.mainTitle,children:"Locator"})}),Object(m.jsx)(L.a,{display:"flex",children:Object(m.jsx)(I.a,{className:e.subTitle,children:"List of Offices"})})]})}),Object(m.jsx)(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center",md:6,xs:12,children:Object(m.jsxs)(L.a,{display:"flex",flex:"1",flexDirection:"row",children:[Object(m.jsxs)(N.a,{variant:"outlined",color:"secondary",size:"small",margin:"normal",fullWidth:!0,children:[Object(m.jsx)(A.a,{htmlFor:"outlined-adornment",children:"Search..."}),Object(m.jsx)(T.a,{id:"outlined-adornment",endAdornment:Object(m.jsx)(D.a,{position:"end",children:Object(m.jsx)(F.a,{edge:"end",children:Object(m.jsx)(Q.a,{})})}),labelWidth:63})]}),Object(m.jsx)(F.a,{children:Object(m.jsx)(U.a,{color:"#2f3291"})})]})}),Object(m.jsx)(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center",md:12,xs:12,children:Object(m.jsx)(C.a,{className:e.tableCard,children:Object(m.jsx)(R.a,{columns:X,data:this.state.officeList,defaultSortField:"State",sortIcon:Object(m.jsx)(q.a,{}),pagination:!0})})})]})}}]),a}(n.Component),$=Object(E.a)(V)(Z),_=[{path:"/",element:Object(m.jsx)(v,{}),children:[{path:"/",element:Object(m.jsx)($,{})}]}];a(274);var ee=function(){var e=Object(o.h)(_);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(c.a,{theme:d,children:e})})};i.a.render(Object(m.jsx)(h.a,{basename:"/epf-app-demo",children:Object(m.jsx)(ee,{})}),document.getElementById("root"))}},[[275,1,2]]]);
//# sourceMappingURL=main.fe302f88.chunk.js.map