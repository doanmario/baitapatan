function kiemtrasonguyento(n) 
{
    if(n<2)
    {
        return false;
    }
    else
    {
        for(var i=2;i<n;i++)
        {
            if(n%i==0)
            {
                return false;
            }
        }
        return true;
    }
}
function main(arr)
{
   
    var count=0;
     for( var i=0;i<100;i++)
        {
                if(kiemtrasonguyento(arr[i])==true && arr[i]<100)
                {
                    count ++;
                }
              
        }
        return count; 
}
console.log("kết quả là", main([2,3,5,8,11,13,22,25,26,27]));
