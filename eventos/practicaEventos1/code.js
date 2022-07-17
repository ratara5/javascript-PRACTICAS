const namef=document.getElementById("namef");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const button=document.getElementById("btn-request");
const result=document.querySelector(".result");

const validateFields=()=>{
    let error=[];
    if (namef.value.length<5 || namef.value.length>40){
        error[0]=true;
        error[1]="Invalid name";
        return error;
    }else if(email.value.length<5 || email.value.length>40 || email.value.indexOf("@")==-1|| email.value.indexOf(".")==-1){ //el email ya se valida con el type (required?), lo mismo el name;pero, se podría evadir si no se hace lo siguiente!!!
        error[0]=true;
        error[1]="Invalid e-mail";
        return error;
    }else if(subject.value.length<4 || subject.value.length>40){
        error[0]=true;
        error[1]="Invalid subject";
        return error;
    }
    error[0]=false;
    return error;
}


button.addEventListener("click",(e)=>{
    e.preventDefault()//prevent reload page after submit click(?)
    let error =validateFields();
    if(error[0]){
        result.innerHTML=error[1];
        result.classList.add("red");

    }else{
        result.innerHTML=`Request send OK`;
        result.classList.add("green");
        result.classList.remove("red");
    }
});

