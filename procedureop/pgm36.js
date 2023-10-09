var q=[10,11,12,3,2,4]
q.sort((num1,num2)=>num1-num2)
console.log(q);




while(low<=high){
    mid=Math.floor((low+high)/2)
if(q[mid]==p[i]){
    ispresent=true
    break
}
else if(q[mid]<p[i]){
    low=mid+1
}
else if(q[mid]>p[i]){
    high=mid-1   
}

}
console.log(ispresent?'present':'not present');
