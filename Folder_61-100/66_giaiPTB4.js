function tinhPT(a,b,c,x1,x2){
 
var delta = b*b-4*a*c;

if(a==0)
{
    if(b!=0 )
    {
    console.log("Phương trình có nghiệm x="+Math.sqrt(-c/b),+-Math.sqrt(-c/b));
    }
    else
    {
        if(c==0)
        {
            console.log("Phương trình vô số nghiệm ");
        }
        else
        {
            console.log("Phương trình vô nghiệm ");
        }
    }
}
else
{
    if(delta<0)
    {
        console.log("Phương trình vô nghiệm ");
    }
    else if(delta ==0)
    {
        console.log("Phương trình có nghiệm kép"+Math.sqrt(-b/2*a),+-Math.sqrt(-b/2*a));
    }else
    {
       x1=(-b+Math.sqrt(delta))/(2*a);
       x2=(-b-Math.sqrt(delta))/(2*a)
        console.log("Phương trình có 2 nghiệm phân biệt x1 và x2 "+x1,+x2);
    }
}
if(x1<0)
{
    console.log("Phương trình vô nghiệm ");
}
else if(x1==0)
{
    console.log("Phương trình có nghiệm x= 0")
}
else{
    console.log("Phương trình có 2 nghiệm ");
    console.log("X1",+sqrt(x1));
    console.log("X2",+-sqrt(x2));
}
   if(x1<0)
    {
        if(x2<0)
        {
            console.log("Phương trình vô nghiệm ");
        }
        else if(x2==0)
        {
            console.log("Phương trình có 1 nghiệm x=0");
        }
        else
        {
            console.log("Phương trình có 2 nghiệm ");
            console.log("x1"+sqrt(x2));
            console.log("x2"+-sqrt(x2));
        }
    }
else if( x1==0)
{
    if(x2<0)
    {
        console.log("Phương trình có một nghiệm x:0");
    }
    else
    {
        console.log("Phương trình có ba nghiệm ");
        console.log("x1"+sqrt(x2));
        console.log("x2"+-sqrt(x2));
        console.log("x3=0");

    }
}
else
{
    if(x2<0)
    {
        console.log("Phuong trình có hai nghiệm ");
        console.log("x1="+sqrt(x1));
        console.log("x2="+-sqrt(x1));
    }
    else if(x2==0)
    {
        console.log("Phuong trình có ba nghiem");
        console.log("x1:"+sqrt(x1));
        console.log("x2"+-sqrt(x1));
        console.log("x3 =0")
    }
    else
    {
        console.log("Phương trình có 4 nghiệm ");
        console.log("x1",+sqrt(x1));
        console.log("x2",+-sqrt(x1));
        console.log("x3",+sqrt(x2));
        console.log("x1",+sqrt(x3));
    }
}
}

tinhPT(1,2,-3,4);
