const accountId = 144552;
let accountEmail = "sajid@gmail.com";
var password = "afsdasf32rf";
accountCity = "Sylhet";
let accountState;

// accountId = 4 (not allowed)
// try to avoid 'var' because of issue in block scope and fucntional scope
accountEmail = "asif@gmail.com";
password = "sadsgdfew";
accountCity = "Dhaka";

console.log(accountId);
console.table([accountEmail, accountId, password, accountCity, accountState]);