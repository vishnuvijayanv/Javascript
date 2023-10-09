// w.a.p to print common numbers from the given array

p=[10,11,12,20,30]
q=[11,20,25,30,33]
// ispresent=false
// for (i=0;i<p.length;i++) {
//     for(j=0;j<q.length;j++){
//         if(p[i]==q[j]) {
//             ispresent=true
//             console.log(p[i]);
//         } 
       
//     }
// }
// !ispresent&&console.log('no common numbers');

i=0
j=0
ispresent=false
while(i<p.length && j<q.length){
    if (p[i]==q[j]) {
        console.log(p[i]);
        ispresent=true
        i++
        j++
        
    }
    else if(p[i]>q[j]){
        j++


    }
    else if(p[i]<q[j]){
        i++
    }
}
!ispresent&&console.log('no common numbers');
