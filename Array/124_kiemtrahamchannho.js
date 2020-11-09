var Array=[2003,2002,2005,2006,2007,2001];
var checkNumber=false;
    for( let i=0; i< Array.length;i++)
    {
        if(Array[i]%2==0 && Array[i]<2004)
        {
            checkNumber=true; // Đúng 
            break;
        }
    }
console.log("Kết quả là:",checkNumber);