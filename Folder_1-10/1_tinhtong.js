//tính tổng 
function tinhtong(n){
  var tong=0;
  for(var i=1;i<=n;i++)
  {
    tong=tong+1/i;
  }
  return tong;
}
console.log("Kết quả của tổng là:"+tinhtong(2));