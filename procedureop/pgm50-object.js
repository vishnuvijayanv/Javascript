empobj={
empid:1000,
empname:'neel',
empdesign:"developer",
emplocation:"kochi",
empsalary:25000,
empexperience:3
}
console.log(empobj);
console.log("-----------------------------------------------------");
console.log(empobj.empname);
console.log(empobj["emplocation"]);
console.log('-----------------------------------------------------');



//w.a.p to print all keys in the given object
for(let key in empobj){
    console.log(key);
}
console.log('---------------------------------------------------');

//w.a.p to print all value in the given object

for(let key in empobj){
    console.log(empobj[key]);
}
console.log('----------------------------------------------------');
//w.a.p  to print key value pairs
for(let key in empobj){
    console.log(key,":",empobj[key]);
}
console.log('-----------------------------------------------------');
//w.a.p to check wheather employee location is present or not if yes print available else print not available
ispresent=false
for(let key in empobj){
    if (key=='emplocation') {
        ispresent=true
        
    }

}
console.log(ispresent?'available':'not available');


"emplocation" in empobj?console.log('available'):console.log('not available');;

// add new item gender to the object 

empobj["empgender"]="male"
console.log(empobj);


console.log('------------------------------------------------');

// for(let key in empobj){
//     if (key=='emplocation') {
//         ispresent=true
        
//     }
 

// }
// console.log(ispresent?'available':empobj["empgender"]="male"
// console.log(empobj););



"emplocation" in empobj?console.log('available'):empobj["empgender"]="male"
console.log(empobj);;
