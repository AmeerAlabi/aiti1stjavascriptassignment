// question 1
function calculateArea(l,w){
  return l*w;
}
console.log( calculateArea(8,5))


// question 2

function greetUser(username = ""){
  console.log((`Hello ${username}`));
}

console.log(greetUser(""));



// question 3

function calculateCost(price,quantity,taxRate=0.1){
  return price * quantity * taxRate;
}

console.log(calculateCost(25,3));



// question 4

//  to calcualate square
function square(num){
  return num **2;
}
// doubleSquaring
function doubleSquare (num) {
  let squared = square(num);
  return squared **2;
}

     
console.log(doubleSquare(10));


// real world application 
function tax (price,quantity){
  if (price*quantity >=100){
    return (price*quantity)-20;
  }

}

console.log(tax(10,10));