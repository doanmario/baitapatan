function timgiatringuyenduong(arr)
{
    min=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if( arr[i] < min && arr[i]>0)
        {
            return min= arr[i];
        }
        
    }
    return -1;
}

console.log("Kết quả là ",timgiatringuyenduong([-3,-4,-2,-6,-7,-8]));
