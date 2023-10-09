a=[10,20,30,20,30,40,50,60,10]

ispresent=false

for (i=0;i<a.length;i++) {
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]) {
            ispresent=true
            console.log(a[i]);
        } 
       
    }
}
   ispresent&&console.log('not duplication');
