let students=[{
    namef:"Lucas Tañeda",
    email:"luta@mail.com",
    subject:"Physics 3"
},{
    namef:"Chaparro Bonapar",
    email:"chabo@mail.com",
    subject:"Chemistry 2"
},{
    namef:"Elsa Polindo",
    email:"elpo@mail.com",
    subject:"Physics 2"
},{
    namef:"Pablo Queado",
    email:"paque@mail.com",
    subject:"Math basics"
},{
    namef:"Aquiles Baesa",
    email:"aquiba@mail.com",
    subject:"Calculus 1"
}
]

console.log("esta es la consola")

const container=document.querySelector(".grid-container");
const button=document.querySelector(".btn-confirm");

let htmlCode="";
for(student in students){
    let data=students[student];
    let namef=data["namef"];
    let email=data["email"];
    let subject=data["subject"];
    htmlCode+=`
    <div class="grid-item namef">${namef}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item subject">${subject}</div>
    <div class="grid-item week">
        <select class="selected-week">
            <option value="1">Week 1</option>
            <option value="2">Week 2</option>
        </select>
    </div>
    `;
    
}
container.innerHTML=htmlCode;

button.addEventListener("click",()=>{ //listeners should be add in code start
    let confirmar=confirm("Do you really want confirm?")
    if(confirm){
        document.body.removeChild(button)
        let elements=document.querySelectorAll(".week");
        let selectedWeeks=document.querySelectorAll(".selected-week")
        for(element in elements){
            week=elements[element];
            week.innerHTML=selectedWeeks[element].value
        }
    }    
})