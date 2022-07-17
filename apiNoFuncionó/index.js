// const ref='Motorola%20G6'
// const API_URL="https://api.mercadolibre.com/sites/MCO";

// const HTMLResponse=document.querySelector('#app');
// const tpl;

// fetch(`{$API_URL}/search?q={$ref}`)
//     .then((response) => response.json())
//     .then((jsonResults) =>{
//         const tpl=jsonResults.results.map((result) => `<li>${result.price}</li>`);
//         HTMLResponse.innerHTML=`<ul>${tpl}</ul>`;
//     }); 

const ref=''
const user='';
const API_URL="https://jsonplaceholder.typicode.com";

const HTMLResponse=document.querySelector("#app");


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((json)=>(console.log(json)))
    .then((users) =>{
        const tpl=users?.map((user) => `<li>${user.name} and ${user.email}</li>`);
        HTMLResponse.innerHTML=`<ul>${tpl}</ul>`;
    }); 