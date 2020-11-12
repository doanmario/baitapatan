function timgiatringuyenduong(arr)
{
    min=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if( arr[i] >0 && arr[i] < min)
        {
            min=arr[i];
        }
        return min;
    }
    return -1;
}

console.log("Kết quả là ",timgiatringuyenduong([3,-2,-1,1,6,7,8]));
ss