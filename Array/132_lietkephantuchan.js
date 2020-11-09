var mangchan=[2,3,4,5,6,7,8,9]
var mangmoi=[];
for (let i=0;i<=mangchan.length;i++)
{
    if(mangchan[i]%2==0)
    {
        mangmoi.push(mangchan[i]);
    }
}
console.log(mangmoi);