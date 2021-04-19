/*! For license information please see main.4c722f6e.chunk.js.LICENSE.txt */
(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(6),c=n.n(i),s=(n(11),n(3)),o=n(2),u=n(4);var d=n(0);var b=function(e){var t=e.decrement,n=e.increment,a=e.displayDuration,r=e.focusDuration,i=e.currentMode;return Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"input-group input-group-lg mb-2",children:[Object(d.jsxs)("span",{className:"input-group-text","data-testid":"duration-focus",children:["Focus Duration: ",a(r)]}),Object(d.jsxs)("div",{className:"input-group-append",children:[Object(d.jsx)("button",{onClick:function(){return t("focusDuration",-300)},type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",disabled:i,children:Object(d.jsx)("span",{className:"oi oi-minus"})}),Object(d.jsx)("button",{onClick:function(){return n("focusDuration",300)},type:"button",className:"btn btn-secondary","data-testid":"increase-focus",disabled:i,children:Object(d.jsx)("span",{className:"oi oi-plus"})})]})]})})};var l=function(e){var t=e.decrement,n=e.increment,a=e.displayDuration,r=e.breakDuration,i=e.currentMode;return Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"float-right",children:Object(d.jsxs)("div",{className:"input-group input-group-lg mb-2",children:[Object(d.jsxs)("span",{className:"input-group-text","data-testid":"duration-break",children:["Break Duration: ",a(r)]}),Object(d.jsxs)("div",{className:"input-group-append",children:[Object(d.jsx)("button",{onClick:function(){return t("breakDuration",-60)},type:"button",className:"btn btn-secondary","data-testid":"decrease-break",disabled:i,children:Object(d.jsx)("span",{className:"oi oi-minus"})}),Object(d.jsx)("button",{onClick:function(){return n("breakDuration",60)},type:"button",className:"btn btn-secondary","data-testid":"increase-break",disabled:i,children:Object(d.jsx)("span",{className:"oi oi-plus"})})]})]})})})};var j=function(e){var t=e.demoSettings;return Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"mb-4",children:Object(d.jsxs)("button",{type:"button",className:"btn btn-outline-warning",title:"Start Demo Mode",onClick:function(){return t()},children:[Object(d.jsx)("span",{children:"demo mode:"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"(lower duration limits)"})]})})})};var m=function(e){var t=e.decrement,n=e.increment,a=e.displayDuration,r=e.breakDuration,i=e.focusDuration,c=e.currentMode,s=e.demoSettings;return e.isTimerRunning,Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(b,{decrement:t,increment:n,displayDuration:a,currentMode:c,focusDuration:i}),Object(d.jsx)(j,{demoSettings:s}),Object(d.jsx)(l,{decrement:t,increment:n,displayDuration:a,currentMode:c,breakDuration:r})]})};var p=function(e){var t,n=e.playPause,a=e.isTimerRunning,r=e.stopTimer,i=e.currentMode;return Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:n,children:Object(d.jsx)("span",{className:(t={oi:!0,"oi-media-play":!a,"oi-media-pause":a},Object.entries(t).reduce((function(e,t){var n=Object(u.a)(t,2),a=n[0],r=n[1];return e.concat(r?a:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})}),Object(d.jsx)("button",{type:"button",className:"btn btn-secondary","data-testid":"stop",title:"Stop the session",disabled:!i,onClick:r,children:Object(d.jsx)("span",{className:"oi oi-media-stop"})})]})})})};var O=function(e){var t=e.isTimerRunning,n=e.displayDuration,a=e.remainingTime,r=e.currentMode,i=e.focusDuration,c=e.breakDuration,s="focusing"===r?"Focusing":"On Break",o="focusing"===r?i:c,u=n(a),b=t?"~~>":"Paused",l=100*(1-a/o);return r&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsxs)("div",{className:"col",children:[Object(d.jsxs)("h2",{"data-testid":"session-title",children:[s," for ",n(o)," minutes"]}),Object(d.jsxs)("p",{className:"lead","data-testid":"session-sub-title",children:[u," remaining"]}),Object(d.jsx)("h2",{children:b})]})}),Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("div",{className:"progress",style:{height:"20px"},children:Object(d.jsx)("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":l,style:{width:"".concat(l,"%")}})})})})]})};var f=function(){var e=Object(a.useState)({focusDuration:{set:1500,min:300,max:3600},breakDuration:{set:300,min:60,max:900},currentMode:!1,remainingTime:null}),t=Object(u.a)(e,2),n=t[0],r=t[1],i=n.remainingTime,c=n.currentMode,b=n.focusDuration.set,l=n.breakDuration.set,j=Object(a.useState)(!1),f=Object(u.a)(j,2),x=f[0],v=f[1];function h(e,t,n){return e<t?t:e>n?n:e}function g(e,t){var a=n[e].set+t;r(Object(o.a)(Object(o.a)({},n),{},Object(s.a)({},e,Object(o.a)(Object(o.a)({},n[e]),{},{set:h(a,n[e].min,n[e].max)}))))}function N(e){return e>=3600?function(e){var t=Math.floor(e).toString().padStart(2,"0");return"".concat(t,":00")}(e/60):function(e){var t=Math.floor(e%3600/60).toString().padStart(2,"0"),n=Math.round(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(n)}(e)}return function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){if(i>0&&r(Object(o.a)(Object(o.a)({},n),{},Object(s.a)({},"remainingTime",i-1))),0===i){var e;new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();var t=(d="breaking",c==(u="focusing")&&d||u),a="focusing"==t?b:l;r(Object(o.a)(Object(o.a)({},n),{},(e={},Object(s.a)(e,"currentMode",t),Object(s.a)(e,"remainingTime",a),e)))}var u,d}),x?1e3:null),Object(d.jsxs)("div",{className:"pomodoro",children:[Object(d.jsx)(m,{decrement:g,increment:g,displayDuration:N,focusDuration:b,breakDuration:l,currentMode:c,demoSettings:function(){console.log("success"),r(Object(o.a)(Object(o.a)({},n),{},{focusDuration:{set:5,min:3,max:10},breakDuration:{set:3,min:2,max:5}}))},isTimerRunning:x}),Object(d.jsx)(p,{isTimerRunning:x,playPause:function(){var e;c||(v((function(e){return!e})),r(Object(o.a)(Object(o.a)({},n),{},(e={},Object(s.a)(e,"currentMode","focusing"),Object(s.a)(e,"remainingTime",b),e)))),c&&v((function(e){return!e}))},currentMode:c,stopTimer:function(){v(!1),r(Object(o.a)(Object(o.a)({},n),{},Object(s.a)({},"currentMode",!1)))}}),Object(d.jsx)(O,{isTimerRunning:x,displayDuration:N,remainingTime:i,currentMode:c,focusDuration:b,breakDuration:l})]})};var x=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header container",children:Object(d.jsx)("h1",{children:"Pomodoro Timer"})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(f,{})})]})};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4c722f6e.chunk.js.map