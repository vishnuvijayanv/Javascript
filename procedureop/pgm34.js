//w.a.p to print pairs whose sum is 6

a=[2,3,4,5]
ispresent=false
// for (i=0;i<a.length;i++) {
//     for(j=i+1;j<a.length;j++){
//         if(a[i]+a[j]==6) {
//             ispresent=true
//             console.log(a[i],a[j]);
//         } 
       
//     }
// }


low=0
high=a.length-1
n=10
sum=0
while(low<high){
    sum=a[low]+a[high]
    if(sum==n){
        console.log(a[low],a[high]);
        ispresent=true
        low++
    }
    else if(sum<n){
        low++
    
    }
    else if(sum>n){
        high=high-1
    
    }

}
!ispresent&&console.log('no pairs');
