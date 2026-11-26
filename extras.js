"use strict";
(function(){
  const menu=document.querySelector(".translate-menu");
  if(!menu)return;
  const page=location.href.split("#")[0].split("?")[0];
  const local=/^(file:|http:\/\/(localhost|127\.0\.0\.1))/.test(page);
  menu.querySelectorAll("[data-translate]").forEach(a=>{
    a.href="https://translate.google.com/translate?sl=en&tl="+a.dataset.translate+"&u="+encodeURIComponent(page+"?lang=en");
    if(local)a.title="Disponibile dopo la pubblicazione / Available once published";
  });
  document.addEventListener("click",e=>{if(menu.open&&!e.target.closest(".translate-menu"))menu.open=false;});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")menu.open=false;});
})();
