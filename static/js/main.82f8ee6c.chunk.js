(this["webpackJsonpICPS-form"]=this["webpackJsonpICPS-form"]||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},19:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(7),o=t.n(c),l=t(3),s=t(4),i=t(5),u=t(2),m=t(8),f=t(9);function b(e){var a=e.columns,t=e.data,r=Object(f.a)({columns:a,data:t}),c=r.getTableProps,o=r.getTableBodyProps,l=r.headerGroups,s=r.rows,i=r.prepareRow;return n.a.createElement("div",{className:"overflow-auto"},n.a.createElement("table",c(),n.a.createElement("thead",null,l.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",Object.assign({},e.getHeaderProps(),{className:"border p-1"}),e.render("Header"))})))}))),n.a.createElement("tbody",o(),s.map((function(e,a){return i(e),n.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return n.a.createElement("td",Object.assign({},e.getCellProps(),{className:"border p-1"}),e.render("Cell"))})))})))))}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){var a=e.cellInfo,t=e.qualificationsData,c=e.setqualificationsData,o=a.row,s=a.column.id,i=a.cell.value,m=Object(r.useState)(i),f=Object(u.a)(m,2),b=f[0],p=f[1];return n.a.createElement("input",{value:b,onChange:function(e){p(e.target.value)},onBlur:function(){c(t.map((function(e,a){return o.index===a?function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(t,!0).forEach((function(a){Object(l.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},e,Object(l.a)({},s,b)):e})))}})}var g=function(e){return[{accessor:"delete",Cell:function(a){var t=a.data,r=a.row.index;return n.a.createElement("button",{onClick:function(){var a=t.filter((function(e,a){return a!==r}));e(a),localStorage.setItem("tableData",JSON.stringify(a))},className:"btn btn-danger"},"Delete")}},{Header:"Reference No",accessor:"referenceNo"},{Header:"Category No",accessor:"categoryNo"},{Header:"Application for",accessor:"applicationFor"},{Header:"SCPS",accessor:"isScps"},{Header:"SARA",accessor:"isSara"},{Header:"DCPU",accessor:"dcpu"},{Header:"JJ B/CWC",accessor:"jjb"},{Header:"CH/OH/POS",accessor:"ch"},{Header:"Name",accessor:"name"},{Header:"Gender",accessor:"gender"},{Header:"D.O.B",accessor:"dob"},{Header:"Age",accessor:"age"},{Header:"Father's Name",accessor:"father"},{Header:"Residence",accessor:"residence"},{Header:"Phone",accessor:"phone"},{Header:"Mobile",accessor:"mobile"},{Header:"Email",accessor:"email"},{Header:"Address",accessor:"address"},{Header:"Qualifications Table",accessor:"qualificationsData",Cell:function(e){var a=e.cell.value;return a?n.a.createElement(b,{columns:[{Header:"Course",accessor:"course"},{Header:"Institution/University",accessor:"institution"},{Header:"Reg.No",accessor:"regNo"},{Header:"Year Of Pass",accessor:"yearOfPass"},{Header:"% of Mark/Grade",accessor:"marks"},{Header:"Remarks",accessor:"remarks"}],data:a}):null}},{Header:"Experience",accessor:"experience"}]},O=function(e,a){return[{Header:"Course",accessor:"course",Cell:function(t){return n.a.createElement(p,{cellInfo:t,qualificationsData:e,setqualificationsData:a})}},{Header:"Institution/University",accessor:"institution",Cell:function(t){return n.a.createElement(p,{cellInfo:t,qualificationsData:e,setqualificationsData:a})}},{Header:"Reg.No",accessor:"regNo",Cell:function(t){return n.a.createElement(p,{cellInfo:t,qualificationsData:e,setqualificationsData:a})}},{Header:"Year Of Pass",accessor:"yearOfPass",Cell:function(t){return n.a.createElement(p,{cellInfo:t,qualificationsData:e,setqualificationsData:a})}},{Header:"% of Mark/Grade",accessor:"marks",Cell:function(t){return n.a.createElement(p,{cellInfo:t,qualificationsData:e,setqualificationsData:a})}},{Header:"Remarks",accessor:"remarks",Cell:function(t){return n.a.createElement(p,{cellInfo:t,qualificationsData:e,setqualificationsData:a})}}]};function v(e){e.longInput;var a=e.label,t=e.onChange,r=e.toUpperCase,c=Object(s.a)(e,["longInput","label","onChange","toUpperCase"]);return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:a},"".concat(a,": ")),n.a.createElement("input",Object.assign({id:a,type:"text",className:"form-control",onChange:function(e){var a=e.target.value;r&&(a=a.toUpperCase()),t(a)}},c)))}function h(e){var a=e.label,t=e.value,r=e.onChange;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:a},a),n.a.createElement("select",{id:a,value:t,onChange:function(e){return r(e.target.value)},className:"custom-select"},n.a.createElement("option",{value:""},"Select District"),n.a.createElement("option",{value:"Alappuzha"},"Alappuzha"),n.a.createElement("option",{value:"Ernakulam"},"Ernakulam"),n.a.createElement("option",{value:"Idukki"},"Idukki"),n.a.createElement("option",{value:"Kannur"},"Kannur"),n.a.createElement("option",{value:"Kasaragod"},"Kasaragod"),n.a.createElement("option",{value:"Kollam"},"Kollam"),n.a.createElement("option",{value:"Kottayam"},"Kottayam"),n.a.createElement("option",{value:"Kozhikode"},"Kozhikode"),n.a.createElement("option",{value:"Malappuram"},"Malappuram"),n.a.createElement("option",{value:"Palakkad"},"Palakkad"),n.a.createElement("option",{value:"Pathanamthitta"},"Pathanamthitta"),n.a.createElement("option",{value:"Thiruvananthapuram"},"Thiruvananthapuram"),n.a.createElement("option",{value:"Thrissur"},"Thrissur"),n.a.createElement("option",{value:"Wayanad"},"Wayanad")))}function E(e){var a=e.label,t=e.checked,r=e.onChange;return n.a.createElement("div",{className:"form-check form-group"},n.a.createElement("input",{id:a,class:"form-check-input",type:"checkbox",checked:t,onChange:function(e){return r(e.target.checked)}}),n.a.createElement("label",{className:"form-check-label",for:a},a))}function j(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?j(t,!0).forEach((function(a){Object(l.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(18);o.a.render(n.a.createElement((function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("tableData"))?JSON.parse(localStorage.getItem("tableData")):[]),a=Object(u.a)(e,2),t=a[0],c=a[1],o=Object(r.useState)(""),f=Object(u.a)(o,2),d=f[0],p=f[1],j=Object(r.useState)(""),y=Object(u.a)(j,2),S=y[0],P=y[1],N=Object(r.useState)(""),k=Object(u.a)(N,2),D=k[0],H=k[1],w=Object(r.useState)(!1),I=Object(u.a)(w,2),q=I[0],A=I[1],R=Object(r.useState)(!1),x=Object(u.a)(R,2),U=x[0],M=x[1],J=Object(r.useState)(""),K=Object(u.a)(J,2),T=K[0],B=K[1],F=Object(r.useState)(""),G=Object(u.a)(F,2),W=G[0],L=G[1],z=Object(r.useState)(""),Y=Object(u.a)(z,2),Q=Y[0],$=Y[1],V=Object(r.useState)(""),X=Object(u.a)(V,2),Z=X[0],_=X[1],ee=Object(r.useState)(""),ae=Object(u.a)(ee,2),te=ae[0],re=ae[1],ne=Object(r.useState)(""),ce=Object(u.a)(ne,2),oe=ce[0],le=ce[1],se=Object(r.useState)(0),ie=Object(u.a)(se,2),ue=ie[0],me=ie[1],fe=Object(r.useState)(""),be=Object(u.a)(fe,2),de=be[0],pe=be[1],ge=Object(r.useState)(""),Oe=Object(u.a)(ge,2),ve=Oe[0],he=Oe[1],Ee=Object(r.useState)(""),je=Object(u.a)(Ee,2),Ce=je[0],ye=je[1],Se=Object(r.useState)(""),Pe=Object(u.a)(Se,2),Ne=Pe[0],ke=Pe[1],De=Object(r.useState)(""),He=Object(u.a)(De,2),we=He[0],Ie=He[1],qe=Object(r.useState)(""),Ae=Object(u.a)(qe,2),Re=Ae[0],xe=Ae[1],Ue=Object(r.useState)(""),Me=Object(u.a)(Ue,2),Je=Me[0],Ke=Me[1],Te=Object(r.useState)([{course:"S.S.L.C",institution:"",regNo:"",yearOfPass:"",marks:"",remarks:""},{course:"Pre-Degree/+2",institution:"",regNo:"",yearOfPass:"",marks:"",remarks:""}]),Be=Object(u.a)(Te,2),Fe=Be[0],Ge=Be[1];return n.a.createElement("div",{className:"bg-light"},n.a.createElement("div",{className:"container p-3"},n.a.createElement("h3",null,"Women And Child Development Department Integrated Child Protection Scheme [ICPS]"),n.a.createElement(v,{label:"Reference No",value:d,onChange:p}),n.a.createElement(v,{label:"Category No",value:S,onChange:P}),n.a.createElement(v,{longInput:!0,label:"Application for the Post of",value:D,onChange:H}),n.a.createElement(E,{label:"SCPS",checked:q,onChange:A}),n.a.createElement(E,{label:"SARA",checked:U,onChange:M}),n.a.createElement(h,{label:"DCPU (Specify Dist)",value:T,onChange:B}),n.a.createElement(h,{label:"JJ B/CWC (Specify Dist)",value:W,onChange:L}),n.a.createElement(h,{label:"CH/OH/POS (Specify Dist)",value:Q,onChange:$}),n.a.createElement(v,{longInput:!0,toUpperCase:!0,label:"1. Name (Use Capital Letters Only)",value:Z,onChange:_}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"gender"},"2. Male/Female/TG (Specify):"),n.a.createElement("select",{id:"gender",className:"custom-select",value:te,onChange:function(e){return re(e.target.value)}},n.a.createElement("option",{value:""},"Select Gender"),n.a.createElement("option",{value:"Male"},"Male"),n.a.createElement("option",{value:"Female"},"Female"),n.a.createElement("option",{value:"TG"},"TG"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"age"},"3. Age & Date of Birth:"),n.a.createElement("input",{id:"age",type:"date",max:"2019-10-01",className:"form-control",value:oe,onChange:function(e){le(e.target.value),me(function(e){var a=new Date(2019,9,1),t=new Date(e),r=a.getFullYear()-t.getFullYear(),n=a.getMonth()-t.getMonth();return(n<0||0===n&&a.getDate()<t.getDate())&&r--,r}(e.target.value))}}),n.a.createElement("label",{for:"age"},"Age: ".concat(ue))),n.a.createElement(v,{longInput:!0,toUpperCase:!0,label:"4. Father's/Husband's Name",value:de,onChange:pe}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"residence"},"5. Place of Residence (Proof to be attached):"),n.a.createElement("textarea",{id:"residence",rows:"3",className:"form-control",value:ve,onChange:function(e){return he(e.target.value)}})),n.a.createElement(v,{type:"tel",label:"6.a Phone / Mobile No",value:Ce,onChange:ye}),n.a.createElement(v,{type:"tel",label:"6.b Phone / Mobile No",value:Ne,onChange:ke}),n.a.createElement(v,{longInput:!0,type:"email",label:"7. e-mail Address",value:we,onChange:Ie}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"address"},"8. Permanent Address (With Pin code):"),n.a.createElement("textarea",{id:"address",rows:"3",className:"form-control",value:Re,onChange:function(e){return xe(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"qualification"},"9. Qualification (Use Additional Sheets if needed):"),n.a.createElement(b,{id:"qualification",columns:O(Fe,Ge),data:Fe}),n.a.createElement("button",{onClick:function(){Ge([].concat(Object(i.a)(Fe),[{course:"",institution:"",regNo:"",yearOfPass:"",marks:"",remarks:""}]))},className:"btn btn-secondary"},"+ Add")),n.a.createElement(v,{longInput:!0,label:"10. Experience",value:Je,onChange:Ke}),n.a.createElement("button",{className:"w-100 btn btn-primary",onClick:function(){var e=[].concat(Object(i.a)(t),[{referenceNo:d,categoryNo:S,applicationFor:D,isScps:q,isSara:U,dcpu:T,jjb:W,ch:Q,name:Z,gender:te,dob:oe,age:ue,father:de,residence:ve,phone:Ce,mobile:Ne,email:we,address:Re,qualificationsData:Fe,experience:Je}]);localStorage.setItem("tableData",JSON.stringify(e)),c(e),p(""),P(""),H(""),A(!1),M(!1),B(""),L(""),$(""),_(""),re(""),le(""),me(0),pe(""),he(""),ye(""),ke(""),Ie(""),xe(""),Ke(""),Ge([{course:"S.S.L.C",institution:"",regNo:"",yearOfPass:"",marks:"",remarks:""},{course:"Pre-Degree/+2",institution:"",regNo:"",yearOfPass:"",marks:"",remarks:""}])}},"Save")),n.a.createElement("div",{className:"container py-5"},n.a.createElement("button",{className:"btn btn-info",onClick:function(){var e=new m.Parser,a=t.map((function(e){var a=e.qualificationsData,t=C({},Object(s.a)(e,["qualificationsData"]));return a.forEach((function(e,a){t=C({},t,{},Object.assign.apply(Object,[{}].concat(Object(i.a)(Object.keys(e).map((function(t){return Object(l.a)({},"".concat(t," ").concat(a+1),e[t])}))))))})),t})),r=e.parse(a),n=new Date+".csv",c=new Blob([r],{type:"text/csv;charset=utf-8;"}),o=window.URL.createObjectURL(c),u=document.createElement("a");u.href=o,u.setAttribute("download",n),u.click()}},"Download"),n.a.createElement(b,{columns:g(c),data:t})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.82f8ee6c.chunk.js.map