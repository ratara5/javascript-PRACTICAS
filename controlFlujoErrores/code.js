// let greeting="Hi"

// if(3>3){ //This instruction interruptes program execution without errors. We are controlling flow
//     alert(greeting);
// }

// //block sentence
// {
//     let namef="Peter";
//     alert(namef);
// }

// //
// let namef="George";
// {
//     let namef="Peter"; //into block it's created a new variable scope**
//     alert(namef);
// }
// alert(namef); //first alert="Peter" (into block), second alert="George" (out of block)

// //
// let namef="George";

//     let namef="Peter";
//     alert(namef); //**without brackets->error, because 'let' is repeated

// alert(namef);

// //
// let namef="George";
// {
//     alert(namef); //alert="George"
// }


//block into block 
let namef="George";
{
    let namef="Peter";
    alert(namef);
    {
        let namef="Jhon";
        alert(namef)
    } // in close bracket, the variable disappear (?)
}
alert(namef)//first alert="Peter", second alert="Jhon", third alert="George". Flow is not in order from inside to outside

// //block into block 
// let namef="George";
// {
//     let namef="Peter";   
//     {
//         let namef="Jhon";
//         alert(namef)
//     }
//     alert(namef);
// }
// alert(namef)//first alert="Jhon", second alert="Peter", third alert="George". Flow is in order from inside to outside

//switch sentence
expr="Banana";
switch(expr){
    case "Banana":
        console.log("This fruit is yellow")
        break; //'break' is necessary for interruptes the execution flow
    case "Pear":
        console.log("This fruit is green")
        break;
    case "Apple":
        console.log("This fruit is red")
        break;
    default:
        console.log("Nothing")//replace a 'else'

} //a conditional 'if' and 'else  if' and 'else' doesn't need 'break'. 'If' is more efficient than 'swith'; but 'switch' is more readable. The last condition in 'if'-'else if'-'else' doesn't math to last 'case' (probably).


