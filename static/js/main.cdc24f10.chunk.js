(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{30:function(t,e,n){t.exports=n(43)},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(25),c=n.n(o),i=n(8),u=n(29),s=n(5),l=n.n(s),d=n(14),p=n(10),f=n(11),h=n(13),m=n(12),b=n(3),v=n(4),x=n(15);function g(){var t=Object(b.a)(["\n    text-decoration: none;\n    color: black;\n    border: 1px solid grey;\n    margin-left: 10px;\n    padding: 0 10px;\n    transition: 0.5s linear color;\n    &:hover {\n        color: red;\n    }\n"]);return g=function(){return t},t}function k(){var t=Object(b.a)(["\n    cursor: pointer;\n    padding: 5px;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n\n    font-weight: 500;\n\n    display: flex;\n    justify-content: space-between;\n\n    color: ",";\n    text-decoration: ",";\n\n    @media screen and (max-width: ","px) {\n        flex-direction: column;\n    }\n"]);return k=function(){return t},t}var E=v.a.div(k(),(function(t){return t.done?"#c0392b":"auto"}),(function(t){return t.done?"line-through":"auto"}),400),y=Object(v.a)(x.b)(g()),j=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={done:t.props.done},t.deleteTask=function(){return t.props.onDeleteTask(t.props.id)},t.toggleDone=function(){return t.props.onToggleDone(t.props.id)},t}return Object(f.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.done;return a.a.createElement("div",null,a.a.createElement(E,{done:n,onClick:this.toggleDone},a.a.createElement("div",null,this.props.text),a.a.createElement("div",null,this.props.date)),a.a.createElement("button",{onClick:this.deleteTask,style:{padding:"0 10px"}},"DEL"),a.a.createElement(y,{to:"edit/".concat(e)},"Edit"))}}]),n}(r.Component);j.defaultProps={done:!1};var O=j;function w(){var t=Object(b.a)(["\n    padding: 5px 20px 5px 5px;\n    font-size: 18px;\n    border-radius: 5px;\n    outline: none;\n    border: 1px solid grey;\n    @media screen and (max-width: ","px) {\n        width: 100%;\n    }    \n"]);return w=function(){return t},t}function D(){var t=Object(b.a)(["\n    padding: 5px;\n    font-size: 18px;\n    margin-left: 5px;\n    min-width: 120px;\n    border-radius: 5px;\n    outline: none;\n    border: 1px solid grey;\n    color: yellow;\n    background-color: #666;\n    cursor:pointer;\n    transition: 0.5s linear;\n    transition-property: color, background-color; \n    &:hover {\n        color: white;\n        background-color: #333;\n    }\n    @media screen and (max-width: ","px) {\n        margin: 5px 0 0 0;\n        width: 100%;\n    }\n"]);return D=function(){return t},t}function I(){var t=Object(b.a)(["\n    margin-top: 5px;\n    position: relative;\n"]);return I=function(){return t},t}var S=v.a.form(I()),T=v.a.button(D(),400),C=v.a.input(w(),400),L=function(t){var e=t.onHandleInput,n=t.onAddTask,r=t.taskValue,o=t.chars;return a.a.createElement(S,{onSubmit:n},a.a.createElement(C,{type:"text",value:r,onChange:e,className:"input",placeholder:"type task..."}),a.a.createElement(T,{type:"submit"},"Add"),a.a.createElement("div",{style:{color:"#888",position:"absolute",fontSize:14,left:230,bottom:8}},o))};function P(){var t=Object(b.a)(["\n  font-weight: 400;\n  color: red;\n  height: 20px;\n"]);return P=function(){return t},t}function A(){var t=Object(b.a)(["\n  border: 1px dotted grey;\n  max-width: 500px;\n"]);return A=function(){return t},t}function M(){var t=Object(b.a)(["\n  margin-bottom: 10px;\n"]);return M=function(){return t},t}var z=v.a.h2(M()),B=v.a.div(A()),J=v.a.div(P()),N="http://localhost:3004/transactions",R=function(t){return t?"".concat(N,"/").concat(t):"".concat(N)},U=function(t){return new Promise((function(e,n){fetch(t).then((function(t){return t.json()})).then((function(t){return e(t)}))}))},F=function(t,e,n,r,a){return fetch(t,{method:e,headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(t){t.ok?t.json().then((function(t){return r(t)})):a(t)}))},H=function(){return U(R())},V=function(t){return U(R(t))},q=function(t){return e=R(),n=Object(i.a)({},t),new Promise((function(t,r){return F(e,"POST",n,t,r)}));var e,n},G=function(t){return e=R(t),new Promise((function(t,n){fetch(e,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){e.ok?t(e):n(e)}))}));var e},W=function(t,e){return n=R(t),r=Object(i.a)({},e),new Promise((function(t,e){return F(n,"PUT",r,t,e)}));var n,r},K=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={tasks:[],task:"",chars:""},t.getData=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:n=e.sent,t.setState({tasks:n});case 4:case"end":return e.stop()}}),e)}))),t.refError=Object(r.createRef)(),t.handleInput=function(e){t.setState({chars:e.target.value.length}),t.refError.current.textContent="",25!==e.target.value.length?t.setState({task:e.target.value}):t.refError.current.textContent="Max 25 znak\xf3w"},t.addTask=function(){var e=Object(d.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),0!==t.state.task.length){e.next=6;break}return t.refError.current.textContent="*** Input empty ***",e.abrupt("return");case 6:t.refError.current.textContent="";case 7:return e.next=9,q({text:t.state.task,date:(new Date).toLocaleString(),done:!1});case 9:r=e.sent,t.setState({tasks:[].concat(Object(u.a)(t.state.tasks),[r]),task:"",chars:""});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.findById=function(t,e){var n=e.findIndex((function(e){return e.id===t}));return{index:n,task:e[n]}},t.deleteTask=function(){var e=Object(d.a)(l.a.mark((function e(n){var r,a,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state.tasks,e.next=3,G(n);case 3:a=t.findById(n,r),o=a.index,c=r.filter((function(t,e){return e!==o})),t.setState({tasks:c});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.toggleDone=function(){var e=Object(d.a)(l.a.mark((function e(n){var r,a,o,c,u,s,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onToggleDone"),r=t.state.tasks,a=t.findById(n,r),o=a.index,c=a.task,u=c.date,s=c.text,e.next=6,W(n,{done:!c.done,text:s,date:u});case 6:e.sent,d=r.map((function(t,e){return e===o?Object(i.a)(Object(i.a)({},t),{},{done:!t.done}):t})),t.setState({tasks:d});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement(z,null,"ToDo List"),a.a.createElement(B,null,this.state.tasks.map((function(e){return a.a.createElement(O,{key:e.id,id:e.id,text:e.text,done:e.done,date:e.date,onGetData:t.getData,onDeleteTask:t.deleteTask,onToggleDone:t.toggleDone})}))),a.a.createElement(J,{ref:this.refError,style:{marginTop:"10px"}}),a.a.createElement(L,{onHandleInput:this.handleInput,taskValue:this.state.task,onAddTask:this.addTask,chars:this.state.chars}))}}]),n}(r.Component),Q=n(1);function X(){var t=Object(b.a)(["\n    text-decoration: none;\n    color: black;\n    border: 1px solid grey;\n    margin-left: 10px;\n    padding: 0 10px;\n    transition: 0.5s linear color;\n    &:hover {\n        color: red;\n    }\n"]);return X=function(){return t},t}var Y=Object(v.a)(x.b)(X()),Z=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={taskItem:null,fetched:!1,errors:""},t.getId=function(){return t.props.match.params.id},t.componentDidMount=Object(d.a)(l.a.mark((function e(){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getId(),e.next=3,V(n);case 3:r=e.sent,t.setState({taskItem:r,fetched:!0});case 5:case"end":return e.stop()}}),e)}))),t.InputEdit=function(e){t.setState({taskItem:Object(i.a)(Object(i.a)({},t.state.taskItem),{},{text:e.target.value,date:(new Date).toLocaleString()}),errors:""})},t.CheckboxEdit=function(e){console.log(e.target.checked),t.setState({taskItem:Object(i.a)(Object(i.a)({},t.state.taskItem),{},{done:e.target.checked}),errors:""})},t.SubmitData=function(){var e=Object(d.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state.taskItem.text){e.next=7;break}return t.setState({errors:"Required"}),e.abrupt("return");case 7:if(!(r.length<=3)){e.next=10;break}return t.setState({errors:"Too short, min 3 chars"}),e.abrupt("return");case 10:t.state.taskItem,W(t.getId(),Object(i.a)({},t.state.taskItem)).then((function(){t.props.history.push("/")})).catch((function(t){return console.log("PUT failure",t)}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,[{key:"render",value:function(){this.getId();return a.a.createElement("div",null,a.a.createElement("h2",null,"FormEdit"),this.state.fetched?a.a.createElement("div",null,a.a.createElement("h4",null,"Data fetched loaded"),a.a.createElement("div",{style:{color:"red"}},this.state.errors),a.a.createElement(S,{onSubmit:this.SubmitData},a.a.createElement(C,{type:"text",value:this.state.taskItem.text,onChange:this.InputEdit,placeholder:"type task"}),a.a.createElement("label",{style:{marginLeft:10}},"done",a.a.createElement("input",{type:"checkbox",checked:this.state.taskItem.done,onChange:this.CheckboxEdit,style:{marginLeft:5,marginTop:10}})),a.a.createElement(T,null,"Save"))):a.a.createElement("div",null,a.a.createElement("h4",null,"Loading...")),a.a.createElement("br",null),a.a.createElement(Y,{to:"/"},"ToDo List"))}}]),n}(r.Component),$=function(t){Object(h.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={counter:10,interval:null},t.countDown=function(){console.log(t.state.counter),t.setState({counter:t.state.counter-1})},t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=setInterval(this.countDown,1e3);this.setState({interval:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Page - Not Found"),a.a.createElement("h4",null,"Route match not found - ",this.props.location.pathname," "),a.a.createElement("h4",null,"Countdown to redirection: ",this.state.counter," seconds"),this.state.counter<0&&a.a.createElement(Q.a,{to:"/"}))}}]),n}(r.Component);function _(){var t=Object(b.a)(["\n    text-align: left;\n    padding: 10px;\n    border: 1px blue dotted;\n    background-color: #ddd;\n\n    max-width: 600px;\n    margin: 10px auto 10px;\n    max-width: 500px;\n    background-color: #eee;\n    border-radius: 10px; \n"]);return _=function(){return t},t}var tt=v.a.div(_()),et=function(){return a.a.createElement(x.a,null,a.a.createElement(tt,null,a.a.createElement(Q.d,null,a.a.createElement(Q.b,{exact:!0,path:"/",component:K}),a.a.createElement(Q.b,{path:"/edit/:id",component:Z}),a.a.createElement(Q.b,{component:$}))))},nt=(n(42),document.getElementById("root"));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(et,null)),nt)}},[[30,1,2]]]);
//# sourceMappingURL=main.cdc24f10.chunk.js.map