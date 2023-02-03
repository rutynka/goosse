"use strict";(()=>{var i=class{constructor(){this.css=this.validateCss(allTheFish.css),this.json=this.validateJson(allTheFish.json),this.js=this.validateJs(allTheFish.js),this.twig=this.validateTwig(allTheFish.twig)}validateCss(e){return e}validateJson(e){return e}validateJs(e){return e}validateTwig(e){return e}getJsonData(){return this.json}},p=i;var a=class{constructor(){this.$jsonForm=document.getElementsByName("json-content")[0]}updateJsonForm(){let e=new p;this.$jsonForm.value=JSON.stringify(e.getJsonData(),null,2)}},v=a;var c=class{constructor(e){this.storage_key_name="hidden_"+decodeURI(window.location.href);let t=this.find_all_li_or_figure();this.DOM=e,t.length<150&&(e.$fastRemove.addEventListener("click",r=>this.store_all_li_when_click_delete(r)),this.hide_if_in_localstorage())}find_all_li_or_figure(){let e=[...document.querySelectorAll("li")];return e.length===0&&(e=[...document.querySelectorAll("figure")]),e}get_storage(){return localStorage.getItem(this.storage_key_name)?JSON.parse(localStorage.getItem(this.storage_key_name)):{}}hide_if_in_localstorage(){let e=this.get_storage();if(!Object.keys(e).length)return!1;let t=this.find_all_li_or_figure(),r=!1;for(let s=0;s<t.length;s++){let o=decodeURI(t[s].querySelector("a").href);e[o]&&(t[s].classList.add("storage__hidden__js"),r=!0)}r&&document.getElementById("forkSubmit").classList.add("js--new-selected-storage")}store_all_li_when_click_delete(e){let t=[...document.querySelectorAll(".for__remove__js a")];if(t.length===0)return document.querySelector(".select__enabled__js")&&(console.log("nothing to hide - storage deleted + need F5"),localStorage.removeItem(this.storage_key_name),document.getElementById("forkSubmit").classList.remove("js--new-selected-storage")),!1;this.add_selected_to_local_storage(t)}add_selected_to_local_storage(e){let t=this.get_storage(),r=!1;for(let s=0;s<e.length;s++){if(e[s].href=="undefined")continue;let o=decodeURI(e[s].href);t[o]||(t[o]=1,r=!0)}r&&(localStorage.setItem(this.storage_key_name,JSON.stringify(t)),document.getElementById("forkSubmit").classList.add("js--new-selected-storage"))}},y=c;var d=class{constructor(e){this.fm=new v,this.dom_el=e,this.init()}init(){this.isSelectable()}isSelectable(){document.querySelectorAll("[data-select]").length>0&&(document.getElementById("selectButton").classList.remove("hidden"),document.getElementById("inverseButton").classList.remove("hidden"),this.addStyle(),new y(this.dom_el),this.dom_el.$fastRemove.addEventListener("click",t=>this.selectButtonActivateToggleEvent(t)),this.dom_el.$inverseButton.addEventListener("click",t=>this.toggleInverseOnElementsEvent(t)),this.dom_el.$userContent.addEventListener("click",t=>this.removeEvent(t),{capture:!0}))}removeEvent(e){if(!document.querySelector(".select__enabled__js")||e.target.parentElement.tagName=="MAIN")return!1;let t=e.target.parentNode.classList.contains("hover__select__js"),r=e.target.classList.contains("hover__select__js"),s=e.target.closest(this.dom_el.click_parent).classList.contains("hover__select__js");if(t)return e.preventDefault(),e.stopPropagation(),e.target.parentNode.classList.toggle("for__remove__js"),!0;if(r)return e.preventDefault(),e.stopPropagation(),e.target.classList.toggle("for__remove__js"),!0;if(s)return e.preventDefault(),e.stopPropagation(),e.target.closest("li").classList.toggle("for__remove__js"),!0}removeDataActionMainLoop(){let e=document.querySelectorAll(".for__remove__js");e&&(e.forEach((t,r)=>{let s=this.removeDataAction(t);s!==-1&&(t.remove(),this.removeOrHide(s))}),this.fm.updateJsonForm())}removeDataAction(e){let t=this.findDataOnFront(e);if(t!==-1){if(typeof t=="number")return t;let r=this.findDataIndex(t);if(r!==-1)return r}return-1}findDataOnFront(e){let t=e.querySelector("[data-select]");return t===null||t.length===0?-1:"select"in t.dataset&&t.dataset.select.length>0&&parseInt(t.dataset.select)==t.dataset.select?parseInt(t.dataset.select):t&&t.innerText.length>1?t.innerText:e.getElementsByTagName("IMG").length===1?e.getElementsByTagName("IMG")[0].getAttribute("src"):-1}removeOrHide(e){document.getElementById("forkSubmit").classList.add("js--new-selected-storage"),allTheFish.json.itemListElement.splice(e,1)}toggleInverseOnElementsEvent(){this.dom_el.$allElements&&this.dom_el.$allElements.forEach((e,t)=>{e.classList.toggle("for__remove__js")})}selectButtonActivateToggleEvent(e){this.setActivateName(e);let t=document.querySelectorAll(".content "+this.dom_el.click_parent);t&&t.forEach(function(r,s){r.classList.toggle("hover__select__js")})}setActivateName(e){e.target.parentNode.classList.toggle("select__enabled__js"),this.dom_el.$inverseButton.classList.toggle("inverse__none__js"),e.target.parentNode.classList.contains("select__enabled__js")?e.target.innerText=allTheFish.api.btnDelete:(this.removeDataActionMainLoop(),e.target.innerText=allTheFish.api.btnSelect)}findDataIndex(e){let t=-1,r=!1;for(let s in allTheFish.json.itemListElement)if(r=this.findInNestedJSONObject(allTheFish.json.itemListElement[s],e),r===!0){t=parseInt(s);break}return t}findInNestedJSONObject(e,t){let r=null;if(e instanceof Array)for(let s=0;s<e.length;s++)r=this.findInNestedJSONObject(e[s],t);else for(let s in e){if(e[s]===t||typeof e[s]=="string"&&e[s].replace(/\s+/g," ")===t){r=!0;break}(e[s]instanceof Object||e[s]instanceof Array)&&r!==!0&&(r=this.findInNestedJSONObject(e[s],t))}return r}addStyle(){let e=document.createElement("style");e.innerHTML=`
.btn .inverse__none__js {
    transition:3s;
    left: 70px;
    position: relative;
    z-index: -1;
}
.btn__inverse:hover {
    background-color: hsla(var(--red-hue), 55%, 55%,1);
    color:white;
}
.btn__select--color {
    background-color: hsla(var(--violet-hue), 30%, 42%,1);color:#fff;
}
.btn__select:hover {
    background-color: hsla(var(--violet-hue), 55%, 65%,1);
    border-color: hsla(var(--violet-hue), 55%, 45%,1);
}
.hover__select__js:hover {background-color: hsla(var(--red-hue), 55%, 55%,0.9);}
.for__remove__js {
    filter: blur(2px) opacity(35%);
}
.for__remove__js {
    background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23000' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg>");
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    z-index:1;
    left:0;
    right:0;
}
.inverse__none__js, .storage__hidden__js, .js--hidden-btn-select {
    display:none;
}
.btn__select--prop {
    border: 1px #4f4f4f solid;
    border-radius: 3px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor:pointer;
    padding: 5px 15px;
    font-size:16px;
    margin-right:10px;
}

.btn__small--prop {
    font-size: 10px;
    padding: 3px 10px;
    line-height: normal;
    vertical-align: bottom;
    background-color: white;
    margin: 0 2px 0 0;

}
.btn__inverse--color {
    color: hsla(var(--red-hue), 55%, 55%, 1);
}
.btn__inverse--trans {
    left: 0;
}
.js--new-selected-storage { fill: green; }
`,document.head.appendChild(e)}},b=d;var u=class{constructor(){this.bindEvents(),this.addStyle()}bindEvents(){document.addEventListener("keyup",this.helperElement.bind(this)),document.addEventListener("show_answer",this.showAnswer.bind(this)),console.log("Press h key for help action")}mobileGestureBind(){}helperElement(e){if(e.key!=="h")return!1;this.showAnswer()}addStyle(){let e=document.createElement("style");e.innerHTML=`
.js--helpKey {
    background-color:hsla(var(--blue-hue),77%,45%,1);
}
.js--helpKey .desc{
    visibility: visible !important;
}`,document.head.appendChild(e)}showAnswer(){if(typeof bb>"u")return!1;let e=this,t=bb.question?bb.question:bb.get(),r=document.querySelectorAll("[data-answer]");t&&r.forEach(s=>{s.getAttribute("data-answer")===t&&(console.log("helper match: "+t),s.parentElement.classList.add("js--helpKey"),setTimeout(()=>{s.parentElement.classList.remove("js--helpKey")},1e4),e.helpUsedTime++)})}},E=u;var m=class{constructor(){document.getElementById("forkSubmit").addEventListener("click",e=>this.submitAction(e))}init(){}submitAction(e){e.preventDefault(),document.dispatchEvent(new CustomEvent("forkCloneSubmit")),document.querySelectorAll('[name="json-content"]')[0].value=JSON.stringify(allTheFish.json),document.querySelectorAll('[name="referer"]').length&&(document.querySelectorAll('[name="referer"]')[0].value=window.location.href);let t=document.getElementById("clonedBread");t&&(document.querySelectorAll('[name="cloned_bread"]')[0].value=t.getAttribute("href")),e.target.id==="local"&&document.getElementById("dataForm").setAttribute("action","http://localhost:9669"),document.getElementById("dataForm").submit()}},w=m;var h=class{constructor(){this.click_parent=this.findClickParent(),this.$allElements=document.querySelectorAll(".content "+this.click_parent),this.$fastRemove=document.getElementById("selectButton"),this.$inverseButton=document.getElementById("inverseButton"),this.$userContent=document.getElementById("userContent")}findClickParent(){return document.querySelector("[data-search]")?document.querySelector("[data-search]").parentElement.nodeName.toLowerCase():"li"}get(e){}},L=h;var g=class{constructor(){document.body.addEventListener("click",e=>this.clickAction(e)),this.addStyle()}init(){}addStyle(){let e=document.createElement("style");e.innerHTML=`
.js--correct_answer{background-color:hsla(var(--green-hue),77%,45%,1);}
`,document.head.appendChild(e)}clickAction(e){if(!(e.target.id==="wrongCounter"||e.target.id==="correctCounter")&&!(e.target.classList.contains("wrong-counter")||e.target.classList.contains("correct-counter")))return!1;let t=document.querySelectorAll("[data-answer]");if(e.target.id==="wrongCounter"||e.target.classList.contains("wrong-counter")){let r=wrong_answer;r&&t.forEach(s=>{r.forEach(o=>{let l=o[1];s.dataset.answer===l&&(s.parentElement.classList.add("js--wrong_answer"),setTimeout(()=>{s.parentElement.classList.remove("js--wrong_answer")},1e4))})})}else{let r=correct_answer;r&&t.forEach(s=>{r.forEach(o=>{let l=o[1];s.dataset.answer===l&&(s.parentElement.classList.add("js--correct_answer"),setTimeout(()=>{s.parentElement.classList.remove("js--correct_answer")},1e4))})})}}},k=g;var _=class{constructor(){document.getElementById("run").addEventListener("click",e=>this.runAction(e))}init(){}runAction(){if(document.body.classList.contains("running"))return!1;document.body.classList.add("running")}},j=_;var f=class{constructor(){}bindEvents(){}initSearch(){}init(){try{this.DOM=new L}catch{console.log("DOM Elements Error or hide")}try{globalThis.api||={},globalThis.api.select||=new b(this.DOM)}catch{console.log("Error Finder or Select")}try{new E,new k}catch{console.log("Error Helper Vim or Keyboard")}new w,new j}},S=new f;S.init();})();
