// try{
//     jkjkjhlkj;
// }
// catch(error){
//     console.log(error);
//     console.log(typeof error); //the errors are objects
//     //||
//     console.log("Sorry, Reference Error has ocurred");
// } //show the error as a console out, doen't as error (red)
// //'try' must be accompanied by 'catch' or 'finally'

// //if there is not error INTO 'try' (ie, no error in internal syntaxis)
// try{
//     console.log("No Error");
// }
// catch(error){
//     console.log(error);
//     console.log(typeof error); //the errors are objects
//     //||
//     console.log("Sorry, Reference Error has ocurred");
// } 

// //if there is error IN 'try' 
// try{
//     console.log("No Error") DFAFDDAS;
// }
// catch(error){
//     console.log(error);
//     console.log(typeof error); //the errors are objects
//     //||
//     console.log("Sorry, Reference Error has ocurred");
// } 

// //There are conditional catch (they have 'if'-'else if'-'else') and unconditional catch

//'finally' use, always show return
try{
    aarrrrrrrrr;
}
catch(error){
    console.log(error);
} 
finally{
    console.log("Always show myself")
}

//
const tryTest=()=>{
    try{
        return 1;
    }
    catch(e){
        return 2; //or 'return (e)'
    }
    finally{
        return 3;
    }
}

console.log(tryTest()) //'finally' override anything 'return'. 'finally' is mandatory.

//'trhow'
try{
    throw{ //'throw' show an error of anything type 
        errorName:"name-error",
        infoName:"info-error"
    }
}
catch(e){
    console.log(e.errorName)
}
finally{
}