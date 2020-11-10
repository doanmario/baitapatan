function mang(mang123)
{
    var min=mang[0];
    var vitri;
    for( let i=1;i<mang.length;i++)
    {
        if(mang[i]<min)
        {
            min=mang[i];
            vitri=i;
        }
        
    }  
    return vitri;
}
console.log("Kết quả là ",mang([5,2,3,4,1,6,6]));
