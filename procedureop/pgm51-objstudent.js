//create an object for student

student={
    srollno:30,
    sname:"sree",
    sbatch:"mearn",
    sage:20,


}
"sphone" in student?console.log('available'):student["sphone"]=6366381318
console.log(student);;

console.log('----------------------------------------------------');
Object.assign(student,{gender:"male"})
console.log(student);
console.log('----------------------------------------------------');

student.sname="sreehari"
student.srollno+=3
console.log(student);
console.log('-----------------------------------------------------');
console.log(delete student.sphone);
console.log(student);