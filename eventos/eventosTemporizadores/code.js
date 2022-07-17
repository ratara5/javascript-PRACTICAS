const container=document.querySelector(".container")
const temporizador=setTimeout(()=>{
    container.innerHTML=`hola<br><br>`
},2000)//temporizador al trabajo desde que se envía solicitud de inicializar sitio

clearTimeout(temporizador) //el temporizador no se ejecuta con esta instrucción

const intervalo=setInterval(()=>{
    container.innerHTML=`<br><br>gente<br><br>` //no se muestra!!
    console.log("gente")
},2000)//temporizador al trabajo cíclico desde que se envía solicitud de inicializar sitio

//clearInterval(intervalo) //el temporizador intervalo no se ejecuta con esta instrucción, ni siquiera empieza

setTimeout(()=>{
    clearInterval(intervalo);
},5000) //el temporizador intervalo, se detiene a los 5000ms con esta instrucción, solo se ejecutará 2 veces en 4000ms, no podrá llegar a los 6000ms