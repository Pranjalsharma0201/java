const accountId = 144553 //here const is used to declare a constant variable named accountId and assign it the value of 144553. This means that the value of accountId cannot be changed throughout the program.
let accountemail = "pranjal@google.com" //here let is used to declare a variable named accountemail and assign it the value of "pranjal@google.com"
var accountPassword = "12345" //here var is used to declare a variable named accountPassword and assign it the value of "12345" 


accountcity = "Ajmer"

//accountId =2 //not allowed because accountId is a constant variable and its value cannot be changed after it has been assigned.   
 console.log(accountId);
 
 
 //other method of printing using console table for mutiple variables
 accountemail="papa@gmail.com"
 accountPassword="54321"
 accountcity="rajasthan"
 let accountname
 console.table([accountId,accountemail,accountPassword,accountcity,accountname]);

 //means i can assing values through
 //1-let
 //2-var
    //3-const (but only once)
// wihtout using any of these keywords we can assign the value
/*
prefer not to use var and without name cause of scope of it it can be accessed anywhere in the program and can lead to unexpected behavior and bugs.
instead use let and const to declare variables as they have block scope and can help prevent bugs and make the code more maintainable.
*/