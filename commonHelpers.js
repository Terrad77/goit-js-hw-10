import"./assets/modulepreload-polyfill-ec808ebb.js";import{f,i as g}from"./assets/vendor-651d7991.js";const r=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");n.disabled=!0;document.querySelector("[data-days]");document.querySelector("[data-hours]");document.querySelector("[data-minutes]");document.querySelector("[data-seconds]");let u="";const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<new Date?g.error({title:"Error",message:"Please choose a date in the future",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",position:"topRight",closeOnEscape:!0,timeout:5e3}):(n.disabled=!1,u=e[0])}},p=f(r,y);r.addEventListener("focus",()=>{p.config.defaultDate=new Date});n.addEventListener("click",()=>{n.disabled=!0;const e=new Date().getTime(),a=u.getTime()-e,t=s(a),c={days:o(t.days),hours:o(t.hours),minutes:o(t.minutes),seconds:o(t.seconds)};console.log(c),r.value=""});function s(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:h}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));function o(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map