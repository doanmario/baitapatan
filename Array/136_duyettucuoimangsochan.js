function duyettucuoimang(arr)
{
for(let i = arr.length;i>0;i--)
{
    if(arr[i]%2==0)
    {
        return i;
    }
}
return -1;
}
console.log("Kết quả:",duyettucuoimang([-1,-3,-7,-5,-1]));