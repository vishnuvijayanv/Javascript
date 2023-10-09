exp="$10*2+5"
console.log("Exception handling");
try{
    const result = eval(exp)
    console.log(`${exp}=${result}`);
}
catch{
    console.log("error occured at line no 4");
}
console.log("task completed");