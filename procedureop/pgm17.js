//w.a.p to display numbers whose exponential is in the range 8 to 36
//user can input the power to find exponential for a particular number


power=2
num=1
exp=0
while (num<=36) {
    exp=num**power
    if (exp>=8 && exp<=36) {
        console.log(num);
        
    }
    if (exp==36) {
        break
        
    }
    num++
    
}

