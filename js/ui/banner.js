import"../chunk-3EC4DL6A.js";function u(t,a){return Math.random()*(a-t)+t}function y(t){let a=0,r=document.querySelector(".vertical-line-top"),o=document.querySelector(".vertical-line-bottom"),s=document.querySelector(".banner-char-container");s.innerHTML="";for(let n=0;n<t.length;n++){let m=t[n],e=document.createElement("div"),c=u(1.5,3.5);e.innerHTML=`<span class='char'>${m}</span>`;let d=`${c}rem`;e.classList.add("char-box"),s.appendChild(e),n%2===0?(e.classList.add("char-left"),e.style.animationName="char-move-left"):(e.classList.add("char-right"),e.style.animationName="char-move-right"),e.style.setProperty("--banner-char-size",d);let h=window.getComputedStyle(document.getElementsByClassName("char-box")[n]).getPropertyValue("width");e.style.setProperty("--banner-empty-border-size",h),a+=c}let i=`calc(50vh - ${a/2}rem)`;r.style.setProperty("--banner-line-height",i),o.style.setProperty("--banner-line-height",i),r.style.animationName="extend-line",o.style.animationName="extend-line"}function l(){document.getElementById("banner")&&setTimeout(()=>{y(window.CONFIG.title)},50)}document.addEventListener("DOMContentLoaded",l);document.addEventListener("pjax:success",l);export{u as random};
