function tinhtong(arr)
{
    var tong=0;
    for(let i=0;i<=arr.length;i++)
    {
        if(arr[i]<0)
        {
            tong=tong +arr[i];
        }
    }
    return tong;
}
console.log("Kết quả là ",tinhtong([-1,2,-3,4,-5,6,-7]));
