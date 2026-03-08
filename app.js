alert("Welcome to Python Pizza Deliveries!");

let size = prompt("What size pizza do you want? S, M, or L:");
let pepperoni = prompt("Do you want pepperoni? Y or N:");
let cheese = prompt("Do you want extra cheese? Y or N:");

let bill = 0;

// Pizza size price
if (size === "S") {
    bill += 15;
} else if (size === "M") {
    bill += 20;
} else if (size === "L") {
    bill += 25;
} else {
    alert("Invalid size selected!");
}

// Pepperoni price
if (pepperoni === "Y") {
    if (size === "S") {
        bill += 2;
    } else {
        bill += 3;
    }
}

// Extra cheese price
if (cheese === "Y") {
    bill += 1;
}

// Final bill
alert("Thank you for choosing Python Pizza Deliveries! Your final bill is: $" + bill);