(this["webpackJsonprmw-template"]=this["webpackJsonprmw-template"]||[]).push([[26],{1099:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(431),o=a(774),i=a.n(o),c=a(762),l=a(211);class p extends s.Component{constructor(...e){super(...e),this.state={}}componentDidMount(){try{this.setState({companies:JSON.parse(localStorage.getItem("users"))||[]})}catch(e){}try{i.a.get("https://www.react-most-wanted.com/api/users?limit=5").then(({data:e,status:t})=>{200===t&&(this.setState({users:e.users.reverse()}),localStorage.setItem("users",JSON.stringify(e.users)))})}catch(e){console.log("error",e)}}render(){const e=this.state.users,t=void 0===e?[]:e;return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",flexDirection:"row",width:"100%",marginTop:30,flexWrap:"wrap"}},t&&t.map(e=>r.a.createElement(l.a,{key:e.uid,style:{textAlign:"center",paddingTop:"10px",marginTop:"10px",padding:18,minWidth:280}},r.a.createElement(c.a,{id:e.uid,name:e.displayName,label:e.levelName,src:e.photoURL}),r.a.createElement("br",null),r.a.createElement(n.a,{variant:"h4",component:"div",color:"secondary"},e.points))))}}t.default=p}}]);