let account="DhruvrajAjani";
const account1 =10002;
var account2 = "123";
account3 = 2;
// account1=1; this is not possible because of constant
console.log(account+1);
console.log(account1+1);
console.log(account2+1);
console.log(account3+1);

console.table([account,account1,account2,account3])
 
// prefer not to use var because of issue in block scope and functional scope

let account4;
console.log(account4)// it will give you undefined