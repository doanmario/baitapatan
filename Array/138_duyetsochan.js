function duyetsochan(arr)
{
    for(let i=0; i< arr.length;i++)
    {
        if (arr[i]%2==0)
        {
            return i;
        }
    }
    return -1;
}
console.log("Kết quả là ", duyetsochan([-1,-3,-5,-7,6,8,9]));