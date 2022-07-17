const sendButton=document.getElementById("btn-send");

sendButton.addEventListener("click",()=>{
    let result, msg;
    try{ //only use for academic purposes here
        prevRes=parseInt(document.getElementById("grade-student").value); //convert in Int the data; if data is text, this show error.
        if(isNaN(prevRes)){
            throw "What? (from throw)";
        }
        console.log(`your grade is ${prevRes}`)
        msg=defineMsg(prevRes);
        result=verificateApprove(6,7,prevRes);
    }catch(e){
        result="What? (from catch)";
        msg="Hack intent";
    }
    openModal(result,msg);
});

const defineMsg=(prevRes)=>{ //only use for academic purposes here
    let msg;
    switch(prevRes){
        case 1: msg="So Bad!, in recuperation test";
        break;
        case 2: msg=":( Bad!, in recuperation test";
        break;
        case 3: msg=":| Bad!, in recuperation test";
        break;
        case 4: msg="XD Bad!, in recuperation test";
        break;
        case 5: msg=":P Bad!, in recuperation test";
        break;
        case 6: msg=":( Bad!, in recuperation test";
        break;
        case 7: msg=":)Good!, in recuperation test";
        break;
        case 8: msg="Yes, Good!, in recuperation test";
        break;
        case 9: msg=":)) Good!, in recuperation test";
        break;
        case 10: msg=":D Good!, in recuperation test";
        break;
        default: msg=null;
        
    }
    return msg
}

const verificateApprove=(g1,g2,prevRes)=>{
    let med=(g1+g2+prevRes)/3
    if(med>=7 && med<=10){
        return "<span class='green'>Approved</span>";
    }else if(med<7){
        return "<span class='red'>Failed</span>";
    }else{
        return null;
    }
}

const openModal=(result, msg)=>{
    const showRes=document.querySelector(".result");
    showRes.innerHTML=result;
    const showMsg=document.querySelector(".message");
    showMsg.innerHTML=msg;
    let modal=document.querySelector(".modal-background");
    modal.style.display="flex";
    modal.style.animation="appears 1s forward";


    // console.log(msg);
    // console.log(result);
    
}