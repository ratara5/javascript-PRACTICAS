const button1=document.querySelector(".button1")
const button2=document.querySelector(".button2")
const button3=document.querySelector(".button3")

const h2=document.querySelector(".h2")
const container=document.querySelector(".container")

// button.onclick=()=>{
//     alert("Hi earthlings!") //no serviría si el usuario cancelará el JS. Por eso ya no se usa así
// }

button1.addEventListener("dblclick", saludar);

function saludar(){
    alert("hola");
    button1.removeEventListener("dblclick",saludar)
}

h2.addEventListener("mouseover", aviso);

function aviso(){
    alert("pusiste el cursor sobre...");
}

// container.addEventListener("mouseover", aviso);
// function aviso(){
//     alert("pusiste el cursor sobre...");
// } //el aviso solo aparece cuando se pasa de un elemento a otro 

// container.addEventListener("mouseout", aviso);
// function aviso(){
//     alert("pusiste el cursor afuera de...");
// } //el aviso solo aparece cuando se abandona un elemento

button2.addEventListener("contextmenu",()=>{
    alert("mostrar contextmenu")
})

button3.addEventListener("mousedown",()=>{
    alert("solo presionaste el botón derecho mouse, no tuviste necesidad de soltarlo")
}) //mouseup es similar, funciona soltando dentro de un elemento

//mouseenter
//mouseleave
