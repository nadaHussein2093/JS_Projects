// 1st solution with switch statement and do while loop



var randomNumber,quote,author,lastRandomNumber = 0;

function generateRandomQuote() {

    // Generate random number between 0 and 6
    randomNumber = Math.floor(Math.random() * 7);
    
    // code to avoid repeating same random

    do {
        randomNumber = Math.floor(Math.random() * 7);
    } while (randomNumber === lastRandomNumber);
    
    
    // Switch statement to select a quote based on the random number
    switch (randomNumber) {
        case 1:
            quote = '\"Life isn\'t about finding yourself. Life is about creating yourself.\"';
            author = '-- George Bernard Shaw';
            break;
        case 2:
            quote = '\"If you can\'t explain it to a six year old, you don\'t understand it yourself.\"';
            author = '-- Albert Einstein';
            break;
        case 3:
            quote = '\"If you judge people, you have no time to love them.\"';
            author = '-- Mother Teresa';
            break;
        case 4:
            quote = '\"Be yourself; everyone else is already taken.\"';
            author = '-- Oscar Wilde';
            break;
        case 5:
            quote = '\"Be the change that you wish to see in the world.\"';
            author = '-- Mahatma Gandhi';
            break;
        case 6:
            quote = '\"We don\'t see things as they are, we see them as we are.\"';
            author = '-- Anais Nin';
            break;
        default:
            quote = "\"Keep going, you're doing great!\"";
            author = '-- Nada Hussein :D';
            break;
    }

    // Display the chosen quote and author
    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = author;
    lastRandomNumber = randomNumber;
}

// Add event listener to the button
document.getElementById("quoteButton").addEventListener("click", generateRandomQuote);


// 2nd solution using arrays and if condition

/*

var randomNumber,lastRandomNumber = 0;

var quotes = [
    "\"The only limit to our realization of tomorrow is our doubts of today.\"",
    "\"Success is not the key to happiness. Happiness is the key to success.\"",
    "\"Believe you can and you're halfway there.\"",
    "\"You are never too old to set another goal or to dream a new dream.\"",
    "\"Act as if what you do makes a difference. It does.\"",
    "\"Success usually comes to those who are too busy to be looking for it.\""
];

var authors = [
    "-- Franklin D. Roosevelt",
    "-- Albert Schweitzer",
    "-- Theodore Roosevelt",
    "-- C.S. Lewis",
    "-- William James",
    "-- Henry David Thoreau"
];

function generateRandomQuote() {

    // Generate random number between 0 and 6
    randomNumber = Math.floor(Math.random() * quotes.length);
    
    // code to avoid repeating same random

    if (randomNumber === lastRandomNumber) {
        // If it is, generate a new index until it's different
        randomNumber = (randomNumber + 1) % quotes.length;
    }

    // Display the chosen quote and author
    document.getElementById("quote").textContent = quotes[randomNumber];
    document.getElementById("author").textContent = authors[randomNumber];
    lastRandomNumber = randomNumber;
}

// Add event listener to the button
document.getElementById("quoteButton").addEventListener("click", generateRandomQuote);

*/





















// 1. Write a program that allow to user enter number then printit


// var x = window.prompt('Please enter number')

// console.log(x)

// document.getElementsByClassName('number')[0].innerHTML = x;



// 2. Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

/*
var x = window.prompt('Please enter number')

if( x % 3 == 0 && x % 4 == 0 ){

    console.log('yes')

}else{
    console.log('no')
}

*/

// 3. Write a program that allows the user to insert 2 integers then print the max

/*
var x = window.prompt('Please enter 1st number')
var y = window.prompt('Please enter 2nd number')

if( x > y ){

    console.log('The max. number is = ' + x);

}else if ( x < y ) {
    
    console.log('The max. number is = ' + y);
}

*/

// 4. Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

/*

var x = window.prompt('Please enter number')

if( x < 0 ){

    console.log('negative')

}else{
    console.log('positive')
}

*/

// 5. Write a program that take 3 integers from user then print the max element and the min element.

/*

var x = Number(window.prompt('Please enter 1st number'));
var y = Number(window.prompt('Please enter 2nd number'));
var z = Number(window.prompt('Please enter 3nd number'));

var max, min;

if( x > y && x > z ){

    console.log('The max. number is = ' + x);

}else if ( y > x && y > z ) {
    
    console.log('The max. number is = ' + y);

}else if ( z > x && z > y ) {
    
    console.log('The max. number is = ' + z);
}

if( x < y && x < z ){

    console.log('The min. number is = ' + x);

}else if ( y < x && y < z ) {
    
    console.log('The min. number is = ' + y);
    
}else if ( z < x && z < y ) {
    
    console.log('The min. number is = ' + z);
}

*/

// 6. Write a program that allows the user to insert integer number then check If a number is oven or odd

/* 

var x = window.prompt('Please enter number')

if( x % 2 == 0 ){

    console.log('even')

}else if ( x % 2 != 0 ){
    console.log('odd')
}

*/

// 7. Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

/*

var x = window.prompt('Please enter character')

if( x == 'a' || x == 'e' || x == 'I' || x == 'o' || x == 'u'  ){

    console.log('vowel')

}else{
    console.log('consonant')
}

*/

// 8. Write a program that allows user to insert integer then print all numbers between 1 to that’s number

/*

var x = window.prompt('Please enter number')

for(var i = 1 ; i <= x; i++){

    console.log(i)

}

*/

// 9. Write a program that allows user to insert integer then print a multiplication table up to 12.

/*
var x = window.prompt('Please enter number')

for(var i = 0 ; i <= 12; i++){

    console.log(i*x)

}

*/

// 10. Write a program that allows to user to insert number then print all even numbers between 1 to this number

/*

var x = window.prompt('Please enter number')

for(var i = 1 ; i <= x; i++){

    if( i%2 == 0){
        console.log(i);
    }
}
   
*/

// 11. Write a program that take two integers then print the power

/*

var x = window.prompt('Please enter 1st number')
var y = window.prompt('Please enter 2nd number')

    console.log(x**y);

*/

// 12. Write a program to enter marks of five subjects and calculate total, average and percentage.

/*

var total = 0;

for(var i = 1 ; i <= 5; i++){

    total += Number(window.prompt('Please enter marks of subject number' + i));
   
}

console.log(total);

console.log(total / 5);

console.log((total / 500) * 100 + ' %');

*/

// 13. Write a program to input month number and print number of days in that month.

/*

var month = Number(window.prompt("Enter month number (1-12):"));
var year = Number(window.prompt("Enter year:"));
var days;
 
    if (month == 2) {
        if(year % 4 == 0){
            days = 29;
        }else{
            days = 28;
        }
    }

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ) {
        days = 31;
    }

    if (month == 4 || month == 6 || month == 9 || month == 11) {
        days = 30;
    }

console.log("Number of days in month " + month + " of year " + year + ": " + days);

*/


// 14. Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

/*

var Physics = Number(window.prompt("Enter Physics marks:"));
var Chemistry = Number(window.prompt("Enter Chemistry marks:"));
var Biology = Number(window.prompt("Enter Biology marks:"));
var Mathematics = Number(window.prompt("Enter Mathematics marks:"));
var Computer = Number(window.prompt("Enter Computer marks:"));

var Percentage = ((Physics + Chemistry + Biology + Mathematics + Computer)/250)*100 ;
var grade;

switch (true) {
    case (Percentage >= 90): 
        grade = "A";
        break; 
    case (Percentage >= 80): 
        grade = "B";
        break; 
    case (Percentage >= 70): 
        grade = "C";
        break; 
    case (Percentage >= 60):
        grade = "D";
        break;  
    case (Percentage >= 50): 
        grade = "E";
        break;
    case (Percentage >= 40):
        grade = "F";
        break;
  }

  console.log(Percentage + "%");
  console.log("Grade: " + grade);

  */


  // 15- Write a program to print total number of days in month

  /*

var month = Number(window.prompt("Enter the month number (1-12):"));
var days;

switch (month) {
    case 1:  // January
    case 3:  // March
    case 5:  // May
    case 7:  // July
    case 8:  // August
    case 10: // October
    case 12: // December
        days = 31;
        break;
    case 4:  // April
    case 6:  // June
    case 9:  // September
    case 11: // November
        days = 30;
        break;
    case 2:  // February
        var year = parseInt(window.prompt("Enter the year:"));
        // Check for leap year
        if ((year % 4 === 0 ) ) {
            days = 29; // Leap year
        } else {
            days = 28; // Non-leap year
        }
        break;
  }

  //  truthy value for days and print it

  if (days) {
    console.log("Days in Month: " + days);
}

*/

// 16- Write a program to check whether an alphabet is vowel or consonant

/*

var x = window.prompt('Please enter character')

switch (x) {
    case 'a':
    case 'e':
    case 'I':
    case 'o':
    case 'u':
        console.log(x + " is a vowel.");
        break;
    default:
        console.log(x + " is a consonant.");
} 

*/

// 17- Write a program to find maximum between two numbers

/*

var x = window.prompt('Please enter 1st number')
var y = window.prompt('Please enter 2nd number')

switch (true) {

    case(x > y):
    console.log('The max. number is = ' + x);
    break;

    case(x < y):
    console.log('The max. number is = ' + y);
    break;
}

*/

// 18- Write a program to check whether a number is even or odd

/*

var x = window.prompt('Please enter 2nd number')

switch (true) {

    case(x % 2 == 0):
        console.log('The number is even');
        break;

    default:
        console.log('The number is odd');
}

*/

// 19- Write a program to check whether a number is positive or negative or zero


/*

var x = window.prompt('Please enter 2nd number')

switch (true) {

    case(x > 0):
        console.log('The number is positive');
        break;

    case(x < 0):
        console.log('The number is negative');
        break;

    default:
        console.log('The number is zero');
}

*/

// 20- Write a program to create Simple Calculator


/*

var x = Number(window.prompt('Please enter 1st number'));
var sign = window.prompt('Please enter the operation');
var y = Number(window.prompt('Please enter 2nd number'));

switch(sign) {

    case '+':
        console.log(x + y);
        break;

    case '-':
        console.log(x - y);
        break;

    case '*':
        console.log(x * y);
        break;

    case '/':
        console.log(x / y);
        break;

    default:
        console.log('Please enter a valid operation ؛)');

}

*/