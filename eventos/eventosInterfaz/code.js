const container=document.querySelector(".container")
const subContainer1=document.querySelector(".sub-container1")
const subContainer2=document.querySelector(".sub-container2")
const img=document.querySelector(".img-test")

img.addEventListener("error",()=>{
    console.log("ha sucedido un error")
}) //muestra error si no se puede obtener o si se interrumpe abruptamente la carga de la imagen

addEventListener("load",()=>{ //método de window(?), pero no necesita llamar window
    console.log("sitio cargado")
}) //muestra que el documento se ha cargado

addEventListener("beforeunload",()=>{ 
    console.log("estás por irte del sitio")
}) //antes de que el documento se vaya a otro lugar

addEventListener("resize",()=>{ 
    console.log("Se ha actualizado la resolución")
}) //al cambiar tamaño de ventana de navegador

addEventListener("scroll",()=>{ 
    console.log("Se ha hecho scroll")
}) //

const input1=document.querySelector(".input1")
const input2=document.querySelector(".input2")

const button1=document.querySelector(".button1")
const button2=document.querySelector(".button2")

input1.addEventListener("select", (e)=>{
    console.log(e) //ver todos los atributos de e
    sstring=input1.value.substring(e.target.selectionStart,e.target.selectionEnd);
    // subContainer.innerHTML=`<br><p>${sstring}</p>`
    subContainer1.innerHTML=sstring
}); //por qué desaparece el elemento input1?


input2.addEventListener("keyup",(e)=>{
    subContainer2.innerHTML=`se ha presionado la tecla <b>${e.key}</b>`
    
}); //por qué desaparece el elemento input2?