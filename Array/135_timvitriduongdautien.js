function mang(mangduong){
    

    for(let i=0;i < mangduong.length;i++)
   {
   
       if(mangduong[i]>0)
       {
       return i;
       }
   } 
   return -1;
}
console.log("vị trí ",mang([2,-3,-4,-5,-6,-7,-8,-9]));





 


