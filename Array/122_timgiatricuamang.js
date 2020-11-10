function mang(mang122)
{
    
    var max=mang[0];
    
    for(let i=1;i < mang.length;i++)
    {
        if(max<mang[i])
        {
            max=mang[i];
        }
      
    }
    return max;
}
console.log("Kết quả là ",mang([1,2,3,9,7,6,8]));

