const nav= document.querySelector(".nav-bar");
const menu=document.querySelector("#menu");
const close=document.querySelector("#close");
console.log(menu);
menu.addEventListener("click",()=>{
    nav.style.right="0";
})

close.addEventListener("click",()=>{
    nav.style.right="-200px";
})