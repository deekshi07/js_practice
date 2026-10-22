// higher_order_loops.js - Modern Higher-Order Array Methods (filter, map, reduce)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. FILTER: Returns subset matching predicate
const evenNums = myNums.filter((num) => num % 2 === 0);
console.log("Evens:", evenNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
];

const historyBooks = books.filter((b) => b.genre === 'History');
console.log("History Books:", historyBooks);

// 2. MAP: Transforms every element
const formattedNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

console.log("Chained Map & Filter:", formattedNums);

// 3. REDUCE: Accumulates array into a single value
const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

const totalBill = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log("Total Cart Checkout:", totalBill);
