function lietke(mangchan)
{
    
    var mangmoi=[];
    for (let i=0;i<=mangchan.length;i++)
    {
        if(mangchan[i]%2==0)
        {
            mangmoi.push(mangchan[i]);
        }
    }
    return mangmoi;
}
console.log("Kết quả là",lietke([2,3,4,5,6,7,8,9]));
