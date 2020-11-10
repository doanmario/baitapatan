var mang=[3,2,4,1,5]
var min=mang[0];
var vitri;
for(let i=1;i<mang.length;i++)
{
    if(mang[i]<min)
    {
        min=mang[i];
        vitri=i;
    }
}
console.log("Vị trí nhỉ nhât là ", vitri)