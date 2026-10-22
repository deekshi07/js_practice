// 02_scopes_and_arrow.js - Scope, Lexical Environment, 'this', and Arrow Functions

// Global vs Block Scope
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30; // Avoid: var pollutes enclosing function/global scope
}
console.log(a); // 300

// Lexical Scope & Closures
function one() {
    const username = "deekshith";

    function two() {
        const website = "youtube";
        console.log(username); // Child function accesses parent scope
    }
    two();
}
one();

// 'this' in Objects vs Arrow Functions
const profile = {
    username: "deekshith",
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the platform`);
        console.log(this); // Refers to 'profile' object
    }
};

profile.welcomeMessage();

// Arrow Function Implicit Return
const addTwo = (num1, num2) => num1 + num2;
const returnObj = () => ({ username: "deekshith" });

console.log(addTwo(3, 4)); // 7
console.log(returnObj()); // { username: 'deekshith' }

// Immediately Invoked Function Expressions (IIFE)
// Used to prevent pollution of the global scope
(function dbConnect() {
    // Named IIFE
    console.log("DB CONNECTED SUCCESSFULLY");
})();

((name) => {
    // Unnamed IIFE with parameter
    console.log(`DB CONNECTED TWO: ${name}`);
})("PostgreSQL");
