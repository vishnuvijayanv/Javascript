numArray=[10,20,30,40,20,50,60,30,60,70,10,40,80]
//find count
wc={}
numArray.forEach(num =>num in wc?wc[num]+=1:wc[num]=1);
console.log(wc);

