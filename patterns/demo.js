function pattern(num){
    for(let i=0; i<num; i++){
   for(let j=0; j<num; j++){
    document.write(" * ")
   }
   document.write("<br>")
  }
}
pattern(6)



function pattern1(num){
    for( i=0; i<num; i++){
   for( j=0; j<i; j++){
    document.write(i)
   }
   document.write("<br>");
  }
}
pattern1(6);



function pattern2(num){
   for( i=0; i<num; i++){
  for( j=0; j<i; j++){
   document.write(j);
  }
  document.write("<br>");
 }
}
pattern2(6);



function pattern3(num){
   for( i=0; i<num; i++){
  for( j=0; j<i; j++){
   document.write(" ");
  }
  for(let k=0; k < num-i; k++){
  document.write("* ");
 }
 document.write("<br>");
}
}
pattern3(4);
document.write("<br>");
document.write("<br>");

function topRightTriangle(num){
   for(let i=1; i<num; i++){
      for(let j=1; j <= i; j++){
         document.write("* ");
      }
      document.write("<br>");
   }
}
topRightTriangle(5)
document.write("<br>");
document.write("<br>");
   


function bottomRightTriangle(num){
   for(let i=num-1; i>=1; i--){
      for(let j=1; j<= i; j++){
         document.write("* ");
      }
      document.write("<br>");
   }
}
bottomRightTriangle(5)
document.write("<br>");
document.write("<br>");



function printpattern(num){
   topRightTriangle(num);
   bottomRightTriangle(num);
}
printpattern(5);
document.write("<br>");
document.write("<br>");




function fullRightTriangle(num)
{
   for(let i = 0;i < num;i++)
   {
      for(let j = i;j < num;j++){
           document.write("&nbsp&nbsp&nbsp");
      }
      for(let k = 0; k < i;k++)
      {
         document.write("* ")
      }
      document.write("<br>");   
   }
   for(let i = 0; i<num; i++)
   {
      for(let i = 0; j<i;j++){
         document.write("&nbsp&nbsp&nbsp");
      }
          for(let k= 0; k < num - i; k++)
          {
              document.write("* ")
          }
          document.write("<br>");
   }
}
fullRightTriangle(5)