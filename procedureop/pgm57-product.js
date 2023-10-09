products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
// for (const i of products) {
//     console.log(i.pName);
    
// }
console.log('-----------------------------------------');
products.map(data=>data.pName).forEach(num=>console.log(num))
//2. print all mobile details whose display is lcd
// for (const i of products) {
//     if (i.display=="lcd") {
//         console.log(i);
        
//     }
    
// }
console.log('-----------------------------------------');


//3. print 5g mobile phone name
// for (const i of products) {
//     if (i.band=="5g") {
//         console.log(i.pName);
        
//     }
    
// }



//array method

products.filter(data=>data.band=="5g").forEach(items=>console.log(items))
console.log('-----------------------------------------');


// 4. sort mobile based on price
// m=[]
// for (const i of products) {
//         // m.push(i.price)    
//         products.sort((n1,n2)=>n1.price-n2.price)

// } 
// for (const i of products) {
//     console.log(i.pName);
    
// }

products.sort((a,b)=>a.price-b.price).forEach(items=>console.log(items.pName))

   console.log('------------------------------------------'); 




//5. print costly mobile


// for (const i of products) {
//     high=products.reduce((a,b)=>a.price>b.price?a.pName:b.pName)
// } 
// console.log(high);


high=products.reduce((a,b)=>a.price>b.price?a:b)
console.log(high.pName);
console.log('------------------------------------------'); 

//6. print low cost mobile



// for (const i of products) {
//     h=products.reduce((n1,n2)=>n1.price<n2.price?n1:n2)
// } 
// console.log(h.pName);


low=products.reduce((a,b)=>a.price<b.price?a:b)
console.log(low.pName);