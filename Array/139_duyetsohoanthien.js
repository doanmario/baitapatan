function duyetsohoanthien(n)
{
    var tong=0;
    for (var i=1;i<=(n-1);i++)
    {
        if(n%i==0)
        {
            tong=tong+i;
        }
    }
    if(tong==n)
    {
        return true;//Là số hoàn thiện 
    }
    return false;//Không là số hàan thiện 
}
function main(arr)
{
    var giatri;
    for(let i=0;i<arr.length;i++)
    {
        if (duyetsohoanthien(arr[i]) ==true)
        {
            return arr[i];
        }
    }
    return -1;
}
console.log("Kết quả là ",main([-1,-2,-3,-4,6,7,8]))