function kiemTra(array)
{
    var checkNumber=false;
        for( let i=0; i< Array.length;i++)
        {
            if(Array[i]%2==0 && Array[i]<2004)
            {
                checkNumber=true; // Đúng 
                break;
            }
        }
    return checkNumber;
}
console.log("Kết quả là ",kiemTra([2003,2002,2005,2006,2007,2001]));
