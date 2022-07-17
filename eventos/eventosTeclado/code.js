const button1=document.querySelector(".button1")
const inputTest=document.querySelector(".input-test")


inputTest.addEventListener("keydown",(e)=>{
    console.log("Tecla fue presionada")
});

inputTest.addEventListener("keypress",(e)=>{
    console.log("Una tecla fue presionada y soltada")
});

inputTest.addEventListener("keyup",(e)=>{
    console.log("Una tecla fue soltada")
});