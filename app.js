// Js Assignment 3

// CHAPTER 9-11 USER INPUT & CONDITIONAL STATEMENT

//Question 1
// Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

//Answer: 

// let cityName = "karachi";
// let city = prompt("Enter your city");


// if (city === cityName) {
//     alert("Welcome to city of lights")
// }
// else{
//     alert("Welcome Dear")
// }

//Question 2
//Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

//Answer:
// let gender = prompt("enter your gender");
// let gender1 = "male";
// if(gender1 == gender){
//     alert("Good morning sir");
// }
// else{
//     alert("Good morning ma'am")
// }


//Queation 3
// Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

//Answer:
// let trafficSignal = prompt("enter the color");
// let color1 = "red";
// let color2 = "green";
// if (trafficSignal != color2) {
//     if (color1 == trafficSignal) {
//         alert("must stop");
//     }
//     else {
//         alert("ready to move");
//     }
// }
// else {
//     alert("Move now")
// }

// Question 4
// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// answer: 
// let currentFuel = "0.25liters"
// let userFuel = prompt("Enter your remaining fuel in liters");

// if(userFuel!=currentFuel){
//     alert("please refill the fuel in a car")
// }
// else{
//     alert("go freely")
// }

// Question 5

// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// answer: Variable is created then assign the value 4 in it now we check
//  the condition (++a ==== 5) (++a)Pre increament means increasre the value of a 
// by 1 first, then use its new value its become 5 after ++a Now, the condition check 
// "Is 5 equal to 5?" → Yes, this is true.

// b. var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// answer: Variable is created then assign the value 82 in it now we check
//  the condition (b++ ==== 83) (b++)Post-increament means the current value of 
//  b (which is 82) is used in the comparison then after comparison b increases to 83 
// the condition check "Is 82 equal to 83?" → No, this is false.

// c. var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
//answer: c++ is a post-increment operator, which means the current value of c is 12. Then, after
//  checking it c value increase by 1 the condition (c++ === 13) which is false After the check, 
// c becomes 13, but it is too late for the condition.Since 12 is not 13, the condition fails, 
// and the alert does not appear.

// if (c === 13) {
//     alert("condition 2 is true");
// }
//answer:After increament in c value c becomes 13. the condition is true 

// if (++c < 14) {
//     alert("condition 3 is true");
// }
//answer:After pre-increament c value becomes 14. Condition checked: (++c < 14) 14
//  is not greater than 14 the condition is false and the alert does not appear

// if (c === 14) {
//     alert("condition 4 is true");
// }
//answer:After increament c value becomes 14 as we see in the above condition, The condition (c ==== 14) is true
// alert appears

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
//answer:Declare a variable "materialCost" assign the value "20000" in it, Do the same for second variable 
// name "laborCost" value "2000" declare 3rd variable name "totalCost" equals to laborCost + MaterialCost. Last we check the 
// condition if totalCost which is a variable equals to laborCost + materialCost The condition is true they both are equal 
// alert appears ("the cost equals").

// e.if(true){
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// f.if("car" < "cat") {
//     alert("car is smaller than cat");
// }
//answer:Condition is: The cat is greater than car if we look for Ascii codes which is same for "c" and "a" 
// in this condition and different for "r" and "t" the ascii code of t is greater than r According to the code cat is greater than car
// at this basis condition is true

// Question 6
// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// answer:
// document.write("<h1> Marks Sheet </h1>")
// var subject1 = prompt("enter the 1st subject marks");
// var subject2 = prompt("enter the 2nd subject marks");
// var subject3 = prompt("enter the 3rd subject marks");

// var totalmarkseach = 100;
// var totalmarks = totalmarkseach*3;

// var percentage = (subject1+subject2+subject3)*100 /totalmarks;

// document.write("Total marks"+ totalmarks )
// document.write("<br />" )
// document.write("Marks Obtained :"+ subject1+subject2+subject3)
// document.write("<br />")
// document.write("Percentage"+ percentage)
// document.write("<br />" )

// if(percentage>=80){
//     document.write(" Grade: A-one");
//     document.write("<br />")
//     document.write("Remarks: Excellent")
// }
//  else if(percentage>=70){
//     document.write( " Grade : A");
//     document.write("<br />")
//     document.write("Remarks: Good")
// }
// else if(percentage>=60){
//     document.write("  Grade: B" );
//     document.write("<br />")
//     document.write("Remarks: You need to improve")
// }
// else{
//     document.write("  Grade: fail")
//     document.write("<br />")
//     document.write(" Remarks: Sorry")
// }

// Question 7
// Guess game:
// Store a secret number(ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a.If user guesses the same number, show “Bingo! Correct
// answer”.
// b.If the guessed number + 1 is the secret number, show
// “Close enough to the correct answer”.

// answer:
// let guessNum = +prompt("guess a number from 1 to 10");
// let realNum = 7;
// if(guessNum === realNum){
//     document.write("Bingo! Correct answer")
// }
// else{
//     if(guessNum === ++realNum){
//         document.write("Close enough to the correct answer")
//     }
//     else{
//         document.write("wrong answer! try again")
//     }
// }

// Question 8
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

//answer:
// let num = +prompt("enter a number divisible by 3");
// if (num % 3 === 0){
//     document.write("correct! your number is divisible by 3")
// }
// else{
//     document.write("wrong answer! try again")
// }

//Question 9
// Write a program that checks whether the given input is an
// even number or an odd number.

//answer:
// let num = +prompt("enter a number");
// if (num % 2 === 0){
//     document.write("the number you gave is even number")
// }
// else{
//     document.write("the number you gave is odd number")
// }

//Question 10
// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//answer:
// let temperature = +prompt("how's the temperature");
// let result;
// if (temperature > 40) {
//     result = "It is too hot outside."
// }
// else if (temperature > 30) {
//     result = "The wheater today is normal."
// }
// else if (temperature > 20) {
//     result = "Today's Wheater is cool"
// }
// else if (temperature > 10) {
//     result = "OMG! Today's Wheater is so cool"
// }

// document.write(result);

//Question 11
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//answer:

// let num1 = +prompt("enter a number");
// let num2 = +prompt("enter another number");
// let operation = +prompt("enter an operation");
// let Answer;

// if (operation === "+") {
//     Answer = num1 + num2;
// }
// else {
//     if (operation === "-") {
//         Answer = num1 - num2;
//     }
//     if (operation === "*") {
//         Answer = num1 * num2;
//     }
//     if (operation === "/") {
//         Answer = num1 / num2;
//     }
//     if (operation === "%") {
//         Answer = num1 % num2;
//     }
//     else {
//         document.write("enter any operation please!");
//     }
// }
// document.write(Answer);

// Chapter 12-13 - IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 

// Question 1 
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// answer:
// let userInput = prompt("enter a character");
// let msg;
// if(!isNaN(userInput)){
//     msg = "The input is a number."
// }
// else if(userInput.charCodeAt() >= 65 && userInput.charCodeAt() <=90){
//     msg = "The input is an uppercase letter."
// }
// else if(userInput.charCodeAt() >=97 && userInput.charCodeAt() <=122){
//     msg = "The input is an lowercase letter."
// }
// else{
//     msg = "The input is neither a number nor a letter."
// }
// document.write(msg);

// Question 2 
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// answer: 
// let integer1 = +prompt("enter first integer");
// let integer2 = +prompt("enter another integer");
// let result;
// if (integer1 > integer2) {
//     result = "the larger integer is " + integer1;
// }
// else {
//     if (integer1 < integer2){
//         result = "the larger integer is " + integer2;
//     }
//     else{
//         result = "both are equal"
//     }
// }
// document.write(result);

// Question 3 
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// answer:
// let num = +prompt("enter a number");
// let result;
// if (num !== 0) {
//     if (num === +num) {
//         result = "the number is positive"
//     }
//     if (num === -num) {
//         result = "the number is negative"
//     }
// }
// else {
//     result = "the result is also zero"
// }
// document.write(result);

// Question 4
// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

//answer:
// let character = prompt("enter the character");
// let result;

// if (character == "a" || character == "A" || character == "e" || character == "E" || character == "i" || character == "I" || character == "o"
//     || character == "O" || character == "u" || character == "U") {
//     result = character + " is vowel"
// }
// else {
//     result = character + " is not vowel"
// }

// alert(result);

// Question 5
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

//answer:
// let password = "sahar123"

// let userpassword = prompt("Enter the password");
// let result
// if(userpassword == ""){
//     result = "Please enter the password"
// }
// else if (userpassword == password){
//       result = "Correct! The password you entered matches the original password"
// }
// else{
//     result = "Incorrect password"
// }
// document.write(result);

//Question 6
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// answer:
// let greeting
// let hour = 13;

// if(hour<18){
//     greeting = "Good day"
// }
// else{
//     greeting = "Good evening"
// }
// alert(greeting);

//Question 7
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

//answer:
// let time = prompt("Enter the time in 24 hours \n clock format like: 1900 = 7pm")
// let result;

// if(time>=700 && time<1200){
//     result = "Good morning"
// }
// else if(time>=1200 && time<1700){
//     result = "Good Afternoon"
// }
// else if(time>=1700 && time<2100){
//     result = "Good evening"
// }
// else if(time>=2100 && time<2359){
//     result = "Good night"
// }
// else{
//     result = "Invalid input"
// }
// document.write(result)

//  CHAPTER 14-16 Arrays

//Question 1
// Declare an empty array using JS literal notation to store
// student names in future.

//answer:
// let students = [];

//Question 2
// Declare an empty array using JS object notation to store
// student names in future.

//answer:
// let students = array();

// Question 3
// Declare and initialize a strings array.

// answer:
// let books = ["peer-e-kamil", "rab se jurne ka safar", "Mushaf", "jannat k patay"]
// document.write["string array: " + books + "br />" + "br />" + "br />"];


//Question 4
// Declare and initialize a numbers array.

//answer:
// let num = ["200","500","700","600","100","400"]
// document.write("Numbers array:" + num + "br />" + "br />" + "br />");

//Question 5
// Declare and initialize a boolean array.

//answer:
// let boolean = ["true", "false"]
// document.write("Boolean array:" + boolean + "br/>" + "br/>");


//Question 6
// Declare and initialize a mixed array.

//answer:
// let info = ["sahar123","21","2004","programmer"];
// document.write("Mixed array: " + info + "br/>"+ "br/>" + "br/>");

//Question 7
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

//answer:
// let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "M.Phil.", "PhD"];
// var count = 0;
// var i = 0;

// document.write("Qualification:" + "<br/>" + "<br/>");
// document.write(++count + ") "+  qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");
// document.write(++count + ") " + qualification[i++] + "<br/>");

//Question 8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

//answer:
// var studentNames = ["Sahar", "Insha", "Ifra"];
// var studentScores = ["350", "360", "470"];
// var totalMarks = ["500"];
// var percentage1 = (studentScores[0] / totalMarks) * 100;
// var percentage2 = (studentScores[1] / totalMarks) * 100;
// var percentage3 = (studentScores[2] / totalMarks) * 100;

// document.write("Score of Sahar " + studentScores[0] + ". Percentage " + percentage1 + " % " + "<br/>");
// document.write("Score of Insha " + studentScores[1] + ". Percentage " + percentage2 + " % " + "<br/>");
// document.write("Score of Ifra " + studentScores[2] + ". Percentage " + percentage3 + " % " + "<br/>");

//Question 9
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

//answer:
// let colors = ["red", "blue", "green", "purple"]
// document.write("Array" + "<br />" + colors)

//(part a)
//  var userColor = prompt("Enter your desire color to be added at the beginning of the array");
//  colors.unshift(userColor);
//  document.write("Array :"+ colors +"<br />")

//(part b)
// var userColor = prompt("Enter your desire color to be added at the end of the array");
// colors.push(userColor);
// document.write("Array :" + userColor + "<br />")

//(part c)
// var Color1=prompt("Add first color to the beginning of the array");
// var Color2=prompt("Add second color to the beginning of the array");
// colors.unshift(Color1,Color2);
// document.write("Array: " + colors + "<br/>");

//(part d)
//  colors.shift();
//  document.write("Array :"+ colors +"<br />")

//(part e)
//  colors.pop();
//  document.write("Array :"+ colors +"<br />")

//(part f)
// let userIndexNum = +prompt("At which index no you want to add color")
// let colorName = prompt("Which color ?")
// colors.splice(userIndexNum,0,colorName);
// document.write("Array:" + colors + "<br />")

//(part g)
// let userIndexNum = +prompt("At which index you want to delete color")
// let deletedColors = +prompt("How many colors you want to delete ?")
// colors.pop(userIndexNum,deletedColors);
// document.write("Array:" + colors + "<br />")

//Question 10
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

//answer:
// var studentScores = ["546","520","600"];

// document.write("Scores of Students:" + studentScores + "<br/>");
// document.write("Ordered Scores of Students: " + studentScores.sort() + "<br/>");

//Question 11
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

//answer:
// var citiesNames = ["Lahore","Peshawar","Karachi","Islamabad"];
// document.write("Cities list;" + "<br/>" + citiesNames + "<br />"+ "<br />")
// var selectedCities = citiesNames.slice(1,3);
// document.write("Selected cities list;" + "<br/>" + selectedCities)

//Question 12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

//answer:
// var sentence = ["This", "is", "my", "cat"];
// document.write("Array:" + "<br />" + "This,is,my,cat" + "<br />")
// var string = sentence.join(" ")
// document.write("String:" + "<br />" + string + "<br />")

//Question 13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//answer:
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var FirstOut;

// document.write("Device :" + devices + "<br />")
// FirstOut = devices.shift();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")
// FirstOut = devices.shift();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")
// FirstOut = devices.shift();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")
// FirstOut = devices.shift();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")

//Question 14
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

//answer:
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// var FirstOut;

// document.write("Device :" + devices + "<br />")
// FirstOut = devices.pop();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")
// FirstOut = devices.pop();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")
// FirstOut = devices.pop();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")
// FirstOut = devices.pop();
// document.write("Out:" + "<br /> " + FirstOut + "<br />")

//Question 15
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

//answer:
// let phone = ["Samsung", "Motorolla", "Nokia", "Sony", "Haier"]

// document.write("<select>")
// document.write("<option>" + phone[0] + "</option>)")
// document.write("<option>" + phone[1] + "</option>)")
// document.write("<option>" + phone[2] + "</option>)")
// document.write("<option>" + phone[3] + "</option>)")
// document.write("<option>" + phone[4] + "</option>)")
// document.write("</select>")











































































































































































