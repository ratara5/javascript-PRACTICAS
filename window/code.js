
let youtubeURL="http://www.youtube.com"

let w=window.open(youtubeURL)
w.close() //paste in console

document.write(`La ultima página que se se abrió de ${youtubeURL} está cerrada?:`+w.closed);

w=window.open("https://www.paginalenta.com")
w.stop() //detiene la carga de la página
window.alert("Se detuvo la página desde js. La página donde aparece el alert es index.html")
alert("Se detuvo la página desde js. La página donde aparece el alert es index.html") //o solo alert

print()

prompt("dame un dato") // Siempre devuelve un string
var conf=w.confirm("¿Estás seguro que deseas salir?")
console.log(conf) //si aceptar => true, si no aceptar => false

const screen=window.screen;
console.log(screen);

document.write(screen) //objeto screen
document.write(screen.availHeight) //objeto screen

var sl=window.screenLeft //devuelve la distancia entre el borde izquierdo de la pantalla y el borde izquierdo del navegador. Propiedad solamente de lectura
document.write(sl) //Actualizar para ver cambios 


var st=window.screenTop //devuelve la distancia entre el borde superior de la pantalla y el borde superior del navegador. Propiedad solamente de lectura
document.write(st) //Actualizar para ver cambios


const scrX=window.scrollX //devuelve el número de pixeles que se desplaza horizontalmente respecto a cero a la izquierda (?) (absoluto)
const scrY=window.scrollY //devuelve el número de pixeles que se desplaza verticalmente respecto a cero en el tope (?) (absoluto)
alert(scrX)
alert(scrY) //actualizar para ver cambios

window.scroll(0,100) //muestra página en lugar seleccionado (absoluto, no relativo a una última posición) //scrollBy, scrollByLines y scrollByPages sí son relativos

window.resizeBy() //redimensionar relativo. No permite desde consola por la política same origin, ya que no está desde un server
window.resizeTo() //redimensionar absoluto. No permite desde consola por la política same origin, ya que no está desde un server
window.moveBy() //mueve la ventana en una ubicación relativa, bis. Casi no se usa
window.moveTo() //mueve la ventana en una ubicación absoluta, bis. Casi no se usa

//Objetos varprop casi no se usan
window.locationbar.visible // devuelve true o false
window.menubar.visible // devuelve true o false
window.personalbar.visible // devuelve true o false
window.scrollbars.visible // devuelve true o false
window.statusbar.visible // devuelve true o false
window.toolbar.visible // devuelve true o false

const href=window.location.href; //url completa de la página actual
const domain=window.location.hostname; //nombre del dominio del servidor web de la página actual (no nos mostraría el https)
const pana=window.location.pathname; // donde estamos desde el origen . En file muestra toda la ruta. En internet muestra la parte con relación al dominio
const prot=window.location.protocol // protocolo
window.location.assign() //carga un nuevo documento
