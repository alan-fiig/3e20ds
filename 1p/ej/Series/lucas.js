console.log("Serie de Lucas");

var f1=2,f2=1,r,s=1;

console.log(f1);
console.log(f2);

for(i=3; i<=10; i++)
{
    r=f1+f2;
    console.log(r);
    s=s+r;
    f1=f2;
    f2=r;
}