//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 

// for(let name of employee){
//         console.log(name[1]);
// }


employee.map(emp=>emp[1]).forEach(employe => {console.log(employe);});
console.log('----------------------------------');
// //print total numbers of employee
// sum=employee.length
// console.log(sum);
// console.log('----------------------------------');

// //print developer employee details

// for(let name of employee){
//    if (name[2]=='developer') {
//     console.log(name);
    
//    }
// }

dev=employee.filter(num=>num[2]=='developer')
console.log(dev);
// console.log('------------------------------------------');
// //print employee whose salary > 30000
// for(let name of employee){
//     if (name[4]<30000) {
//      console.log(name);
     
//     }
//  }

employee.filter(num=>num[4]>30000).forEach(employe => {console.log(employe);});

console.log('-------------------------------------');
// // print details of employee Laisha
// for(let name of employee){
//     if (name[1]=='Laisha') {
//      console.log(name);
     
//     }
//  }
nms=employee.find(n=>n[1]=='Laisha')
console.log(nms);
//  console.log('------------------------------------');

// //sort employee based on their salary in descending order

// employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employee);
//  console.log('-----------------------------------');

// //sort employee based on their experience in ascending order

// employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employee);
//  console.log('-----------------------------------');

// // print the employ name whose have the higest salary
// employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employee[0][1]);
 console.log('-----------------------------------');

high=employee.reduce((n,m)=>n[4]>m[4]?n:m)
console.log(high);

// print the employ name whose have the least salary

console.log('-----------------------------------');

high=employee.reduce((n,m)=>n[4]<m[4]?n:m)
console.log(high);
//print the total salary

console.log('-----------------------------------');
s=employee.map(e=>e[4])
total=s.reduce((n1,m1)=>n1+m1)
console.log(total);