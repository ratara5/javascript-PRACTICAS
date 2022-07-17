const button1=document.querySelector(".button1")

// button.onclick=()=>{
//     alert("Hi earthlings!") //no serviría si el usuario cancelará el JS. Por eso ya no se usa así
// }

button1.addEventListener("click", saludar);

function saludar(){
    alert("hola");
    button1.removeEventListener("click",saludar)
}

const button2=document.querySelector(".button2")

// button2.addEventListener("click", ()=>{
//     console.log(this) //el objeto this es window
// });

button2.addEventListener("click", (e)=>{
    console.log(e) //e hace referencia al objeto  de tipo event
    console.log(e.target)
});

const container=document.querySelector(".container")
const button3=document.querySelector(".button3")


container.addEventListener("click", (e)=>{
    alert("I click in a container")
});


button3.addEventListener("click", (e)=>{
    alert("I click in a button")
    e.stopPropagation()//interrumpe el flujo de eventos
});//el button tendrá prioridad en el alert aunque se agregue de último (el flujo es desde hijos hasta padres). Esto es el flujo de eventos
//si se agrega 'true' como parámetro del addEventListener, el flujo inicia con el que la tenga