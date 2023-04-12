const readLine = require ('readline-sync');
let myList = [ ];

myList.push(readLine.question('Enter a verb:'));
myList.push(readLine.question("Enter adjective:"));
myList.push(readLine.question("Enter noun (plural):"));
myList.push(readLine.question("Enter adjective:"));
myList.push(readLine.question("Enter verb:"));
myList.push(readLine.question("Enter number:"));
myList.push(readLine.question("Enter adjective:"));
myList.push(readLine.question("Enter noun (plural):"));
myList.push(readLine.question("Enter noun (plural):"));
myList.push(readLine.question("Enter noun (plural):"));
myList.push(readLine.question("Enter relative (plural):"));
myList.push(readLine.question("Enter verb ending in 'ING':"));
myList.push(readLine.question("Enter adjective:"));
myList.push(readLine.question("Enter adjective:"));
myList.push(readLine.question("Enter noun (plural):"));
myList.push(readLine.question("Enter Adjective:"));
myList.push(readLine.question("Enter noun (plural):"));
myList.push(readLine.question("Enter Famous Person:"));
myList.push(readLine.question("Enter Verb:"));
myList.push(readLine.question("Enter Verb:"));
console.log(`Come ${myList[0]} at WALMART, where you'll receive ${myList[1]} discounts on all of your favorite brand name ${myList[2]}.
 Our ${myList[3]} and ${myList[4]} associates are there to ${myList[5]} you ${myList[6]} hours a day. 
 Here you will find ${myList[7]} prices on the ${myList[8]} you need. 
 ${myList[9]} for the moms, ${myList[10]} for the 
 kids and all the latest electronics for the ${myList[11]}. So come on down to your ${myList[12]}  
 ${myList[13]} WALMART where the ${myList[14]} come first. And the ${myList[15]} costumer service will help out with all your ${myList[16]}.  
  Even ${myList[17]} ${myList[18]} at WALMART. So you can also ${myList[19]} at WALMART. `)