//for ckecking number is pallindrome or not...

let num=1551
let flag = true;
let n = num;
let rev = 0;
while (n > 0) {
  rev = rev * 10 + n % 10;
  n = Math.floor(n / 10);
}

if (num !== rev) {
  flag = false;
}
if(flag===true){
    console.log("Yes");
}
else console.log("No");