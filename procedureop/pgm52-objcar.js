var car={
    name:"baleno",
    model:"hatch back",
    manufacturer:"maruti",
    price:"10 lakh"
}

//display car name and manufacturer name
console.log(car.name,"\n",car.manufacturer);
console.log('--------------------------------------------------');
//check model key is available ,if yes then display the value
"model" in car?console.log(car.model):console.log('not available');;
console.log('--------------------------------------------------');

//add "varient" key to car with value as "manual"
car.varient=["manual"]
console.log(car);
console.log('--------------------------------------------------');


//insert another value "automatic" to the "varient" key
car.varient.push("automatic")
console.log(car);
console.log('--------------------------------------------------');

//add "colour" key to the car with values "red","blue","white"
car.colur=["red,blue,white"]
console.log(car);
console.log('--------------------------------------------------');

