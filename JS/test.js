// const verifiedUser=false

// if(verifiedUser === true){
//     console.log("user is verified");
    
// }else{
//     console.log("user is not verified");
    
// }

// console.log(`${verifiedUser === true ? "" :}`);

function getTimeString (time){
    const hour=parseInt(time/3600)
    let remainingSeconds=time % 3600
    const minute=parseInt(remainingSeconds/60)
    remainingSeconds=remainingSeconds % 60
    return `${hour} hour ${minute} minute ${remainingSeconds} second ago;`
}

console.log(getTimeString(4395));

