//Object Inheritance

baleno={
    model:"hatchback",
    varient:["auto","manuel"],
    manufacturer:'maruti'

}

glanza={
    manufacturer:'toyota'
}

glanza.__proto__=baleno

console.log(glanza.model);