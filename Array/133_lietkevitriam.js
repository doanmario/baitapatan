    var mangam=[-2,3,4,-5,-1,-4];
    var vitri=[];
    for(let i=0;i<mangam.length;i++)
    {
        if(mangam[i]<0)
        {
            vitri.push(i);
        }
    }
    console.log("Các vi trí âm là ",vitri);