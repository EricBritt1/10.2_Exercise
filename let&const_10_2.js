/* ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!
*/
const PI = 3.14;

/* ES2015 Global Constants 
Write an ES2015 Vesion
*/
let greeting = 'Hello'
const newVariables = 'let & const'

/*
What is the difference between var and let?
Var is function scope. Let is block scope. Each var variable is added to the window. Let declaration is not added to the window. Var can be redeclared let cannot be redeclared.

What is the difference between var and const?
Var can be reassigned and redeclared. Const cannot be reassigned or redeclared. Const is block scope while var is function scope. Var variable declarations are added to the window while const is not.

What is the difference between let and const?
let can be reassigned but const cannot be reassigned. 

What is hoisting?
hoisting is when you call on a variable before it has been declared. 

Solution:
It’s the way that we explain how the JS compiler works. Variables are lifting or “hoisted” to the top of the scope they are declared in. When using ***var***, you can access the variable name and it’s undefined value before it is used later on.

Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.


*/