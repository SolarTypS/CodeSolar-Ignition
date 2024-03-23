(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const y of i.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&p(y)}).observe(document,{childList:!0,subtree:!0});function k(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function p(t){if(t.ep)return;t.ep=!0;const i=k(t);fetch(t.href,i)}})();const v=document.querySelector(".play-board"),S=document.querySelector(".score"),h=document.querySelector(".high-score"),w=document.querySelectorAll(".controls i");let m=!1,f,u,s=5,a=5,n=0,l=0,r=[],g,d=0,c=localStorage.getItem("high-score")||0;h&&(h.innerText=`High Score: ${c}`);const O=()=>{f=Math.floor(Math.random()*30)+1,u=Math.floor(Math.random()*30)+1},E=()=>{g&&clearInterval(g),alert("Game Over! Press OK to replay..."),location.reload()},L=o=>{o.key==="ArrowUp"&&l!==1?(n=0,l=-1):o.key==="ArrowDown"&&l!==-1?(n=0,l=1):o.key==="ArrowLeft"&&n!==1?(n=-1,l=0):o.key==="ArrowRight"&&n!==-1&&(n=1,l=0)};w.forEach(o=>o.addEventListener("click",()=>L(new KeyboardEvent("keyup",{key:o.dataset.key||""}))));const I=()=>{if(m)return E();let o=`<div class="food" style="grid-area: ${u} / ${f}"></div>`;s===f&&a===u&&(O(),r.push([u,f]),d++,c=d>=+c?d:+c,localStorage.setItem("high-score",c.toString()),S&&(S.innerText=`Score: ${d}`),h&&(h.innerText=`High Score: ${c}`)),s+=n,a+=l;for(let e=r.length-1;e>0;e--)r[e]=r[e-1];if(r[0]=[s,a],s<=0||s>30||a<=0||a>30){m=!0;return}for(let e=0;e<r.length;e++)o+=`<div class="head" style="grid-area: ${r[e][1]} / ${r[e][0]}"></div>`,e!==0&&r[0][1]===r[e][1]&&r[0][0]===r[e][0]&&(m=!0);v&&(v.innerHTML=o)};O();g=setInterval(I,100);document.addEventListener("keyup",L);