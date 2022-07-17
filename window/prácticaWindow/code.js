let height=window.screen.availHeight; //el avail es la que puede tener el browser si está maximizada, incluida las barras del browser mientras que heigt es el alto total de la pantalla
let width=window.screen.availWidth;
let comprar=confirm(`El alto es ${height} y el ancho es ${width}`)

if(comprar){
    alert("compra realizada exitosamente")
}else{
    alert("compra cancelada")
}

let href=window.location.href
let patname=window.location.pathname
let hostname=window.location.hostname
let protocol=window.location.protocol

let html=`Protocol: <b>${protocol}</b><br>`;
html+=`Pathname: <b>${patname}</b><br>`;
html+=`Href: <b>${href}</b><br>`;
html+=`URL Completa: <b>${hostname}</b><br>`;

document.write(html)