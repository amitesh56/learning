const accountId = 125436 ///const is fixed variable and can not be change and use camelcasing for variable name accountId is memory and it store value 125436
let accountEmail = "amitesh@google.com"
var accountPassword = "12345"
accountCity = "Mumbai" // this is also the way to declare variable but do not use this
let accountState; //if we dosen't assign value to the variable it store that value as undefine

// accountId = 2 // not allowed


accountEmail = "am@am.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])