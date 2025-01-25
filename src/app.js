"use strict";
document.body.insertAdjacentHTML("beforeend", site.page);
const style = document.createElement("style");
style.textContent = site.css;
document.head.appendChild(style);
refresh();
console.log(site)
function refresh() {
  const hash = decodeURI(globalThis.location.hash.substring(1)) || "home";
  const a=hash.split('🔸')
  hash=='legal' ? document.getElementById('main_content').innerHTML=site.legal 
  : a.length!=2 ? document.getElementById('main_content').innerHTML=site.home 
  : a[0]=='👖' ? document.getElementById('main_content').innerHTML=site[`full-${a[1]}`] 
  : a[0]=='🏗️' ? document.getElementById('main_content').innerHTML=site[`page-${a[1]}`]
  : document.getElementById('main_content').innerHTML=site.home
}
globalThis.addEventListener("hashchange", () => {
  refresh();
});
document.getElementById("sean_button").addEventListener("click", () => {
  document.getElementById("sites").scrollIntoView();
});