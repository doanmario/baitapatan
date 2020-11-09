var mang=[5,2,3,4,1,6,6]
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
console.log("Vị trí nhỏ nhất là ", vitri);