function tinhTong12(n){
    var tich=1;
    var x=2 ;
    tich=tich*x**n;
    return tich;
}
function main(n){
    var tong=0;
   
    for(var i=1;i<=n;i++)
    {
        tong=tong+tinhTong12(i);
    }
    console.log("Kết quả là:"+tong);
}
main(3);