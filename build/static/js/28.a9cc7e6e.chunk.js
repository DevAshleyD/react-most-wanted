(this["webpackJsonprmw-template"]=this["webpackJsonprmw-template"]||[]).push([[28],{1101:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var r=a(425),o=a(940),n=a.n(o),i=a(69),s=a.n(i),l=a(0),c=a.n(l),d=a(181),p=a(510),m=a(943),u=a(19),h=a(30),f=a(249),y=a(217),b=a(481),g=a.n(b);const v=(new Date).getFullYear(),C="/user_registrations_per_day/".concat(v,"/").concat((new Date).toISOString().slice(5,7)),w="/user_registrations_per_month/".concat(v);class k extends l.Component{componentDidMount(){const e=this.props.watchPath;e(C),e(w),e("/provider_count"),e("users_count")}render(){const e=this.props,t=e.theme,a=e.intl,o=e.days,i=e.months,l=e.providers,u=e.usersCount;let h=[],f=[];o&&Object.keys(o).sort().map(e=>(h.push(e),f.push(o[e]),e));const y={labels:h,datasets:[{label:a.formatDate(Date.now(),{month:"long"}),fill:!1,lineTension:.1,backgroundColor:t.palette.primary.main,borderColor:t.palette.primary.main,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:t.palette.secondary.main,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:t.palette.primary.main,pointHoverBorderColor:t.palette.secondary.main,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:f}]};let b=[],C=[];i&&Object.keys(i).sort().map(e=>{let t=new Date("".concat(v,"-").concat(e,"-1"));return b.push(a.formatDate(t,{month:"long"})),C.push(i[e]),e});const w={labels:b,datasets:[{label:a.formatMessage({id:"user_registrationg_graph_label"}),fill:!1,maintainAspectRatio:!0,lineTension:.1,backgroundColor:t.palette.primary.main,borderColor:t.palette.primary.main,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:t.palette.secondary.main,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:t.palette.primary.main,pointHoverBorderColor:t.palette.secondary.main,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:C}]};let k=[],x=[],E=[];l&&Object.keys(l).sort().map(e=>(x.push(a.formatMessage({id:e})),E.push(a.formatMessage({id:"".concat(e,"_color")})),k.push(l[e]),e));const _={labels:x,datasets:[{data:k,backgroundColor:E,hoverBackgroundColor:E}]};return c.a.createElement(d.a,{iconElementRight:c.a.createElement(r.a,{style:{marginTop:4},href:"https://github.com/TarikHuber/react-most-wanted",target:"_blank",rel:"noopener",secondary:!0,icon:c.a.createElement(p.GitHubIcon,null)}),title:a.formatMessage({id:"dashboard"})},c.a.createElement(g.a,null,c.a.createElement("div",{style:{margin:5,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100%",marginTop:50}},c.a.createElement("div",{style:{flexGrow:1,flexShrink:1,maxWidth:600}},c.a.createElement(m.Line,{options:{maintainAspectRatio:!0},data:w})),c.a.createElement("div",{style:{flexGrow:1,flexShrink:1,maxWidth:600}},c.a.createElement(m.Bar,{options:{maintainAspectRatio:!0},data:y}))),c.a.createElement("br",null),c.a.createElement("div",{style:{margin:5,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100%",marginTop:50}},c.a.createElement("div",{style:{flexGrow:1,flexShrink:1,maxWidth:600,justifyContent:"center"}},c.a.createElement(m.Doughnut,{data:_})),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",margin:30}},c.a.createElement(n.a,{style:{fontSize:100,color:t.palette.primary.main,fontFamily:t.fontFamily},start:0,end:u}),c.a.createElement("div",null,c.a.createElement(s.a,{color:"secondary",className:"material-icons",style:{fontSize:70,marginLeft:16}}))))))}}var x=Object(u.connect)(e=>{const t=e.paths;return{days:t[C],months:t[w],providers:t["/provider_count"],usersCount:t.users_count?t.users_count:0}})(Object(h.c)(Object(y.a)(Object(f.withFirebase)(k))))}}]);