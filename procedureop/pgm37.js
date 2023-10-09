//nested array

a=[
    [10,23],
    [34,56],
    [2,4],
    [57,89],
    [7,9]
]


//w.a.p to print all numbers less than 10



for (let num of a) {
   for(let num1 of num){
    if(num1<10){
        console.log(num1);
    }
   }

   
}