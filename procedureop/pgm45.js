//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]

]


//1.display all products

a=products.map(e=>e[1]).forEach(p => {console.log(p);});
console.log('-----------------------------------------');

//2.display products whose price<rs.50

rs=products.filter(rs=>rs[2]<50).forEach(rs=> {console.log(rs[1]);});

console.log('------------------------------------------');


//3.print price of oreo

oreo=products.find(nm => nm[1]=='oreo')
console.log(oreo[2]);
console.log('------------------------------------------');


//4.print  costly  product name 

high=products.reduce((s1,s2)=>s1[2]>s2[2]?s1:s2)
console.log(high[1]);
console.log('------------------------------------------');


//5.display out of stock products
// stock=products.reduce((st1,st2)=>st1[3]<st2[3]?st1[1]:st2[1])
// console.log(stock);

stock=products.filter(pro=>pro[3]==0).forEach(pro=> {console.log(pro[1]);});
console.log('----------------------------------');
//6.sort products based on stock in descending order

products.sort((stc1,stc2)=>stc2[3]-stc1[3])
console.log(products);
console.log('-------------------------------------');
//7.print product having maximum available stock

stk=products.reduce((sk1,sk2)=>sk1[3]>sk2[3]?sk1:sk2)
console.log(stk[1]);

console.log('-------------------------------------');

//8. is there any products can be purchased by rs.10
pr=products.some(n=>n[2]<=10)
console.log(pr?'yes':'no');
console.log('-------------------------------------');


//9.is there any products in the range 10 to 30
pr1=products.some(n=>n[2]>= 10 && n[2]<=30)
console.log(pr1?'yes':'no');
console.log('-------------------------------------');
//10.print all products in the range of 10-30

pr2=products.filter(n=>n[2]>=10&&n[2]<=30).forEach(n=> {console.log(n[1]);});
