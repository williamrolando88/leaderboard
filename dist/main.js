(()=>{"use strict";const e=new class{constructor(){this.array=[]}add(e,t){const n={name:e,score:t};this.array.push(n),this.set()}set(){localStorage.setItem("scoresTable",JSON.stringify(this.array))}};document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelector("#name"),r=document.querySelector("#score");e.add(n.value,r.value),n.value="",r.value="",n.focus(),function(e){const t=document.querySelector("#table-content");for(;t.firstChild;)t.removeChild(t.firstChild);e.forEach(((e,n)=>{const r=(e=>{const t=document.createElement("tr"),n=document.createElement("td");n.textContent=e.name,t.appendChild(n);const r=document.createElement("td");return r.textContent=e.score,t.appendChild(r),t})(e);n%2!=0&&r.classList.add("bg-stone-200"),t.appendChild(r)}))}(e.array)}))})();
//# sourceMappingURL=main.js.map