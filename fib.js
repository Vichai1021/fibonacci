var num1 = 1;
var num2 = 1;

for (var i=1; i<10; i++){
  console.log(num1);
  console.log(num2);
  num1 = num1 + num2;
  num2 = num2 + num1;
}
