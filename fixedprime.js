// for checking the number is prime or not..

let num=86;
let count=0;
for (let i=1;i<=num;i++)
  {
    if ((num%i)==0)
    {
      count++;
    }
  } if (count==2)
{
  console.log("Yes");
}  else 
{
  console.log("No");
} 