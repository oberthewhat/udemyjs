//************************************************ */
//lecture about Variables and data types
//************************************************* */

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Obertubbesing'
// var age = 32;
// var fullAge = true;
// console.log(fullAge);

// var job
// console.log(job);
// job = 'Manager';
// console.log(job); 

//************************************************* */
// variable mutation and type coercion
//************************************************* */

// var firstName = 'John';
// var age = 28;


// //Type Coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = true;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried)

// //Variable Mutation
// age = 'thirty two';
// job = 'Hockey Player';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried)


// var lastName = prompt('What is his last name?');
// console.log(firstName + lastName);


//*********************************************************** */
// Basic Operators 
//*********************************************************** */

// var now = 2018;
// var ageJohn = 32;
// var ageMark = 45;

// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// // Math Operators

// console.log(yearJohn);
// console.log(now + 2);

// // Logical operators 

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// //typeof operator 

// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than john')
// console.log(typeof x);

//********************************************************* */
// Operator Precedence
//********************************************************* */

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // multiple operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge)

// // grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple Variables
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More Operators

// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

// //*********************************** */
// // Coding Challenge 1
// //*********************************** */

// var johnWeight = 82;
// var markWeight = 104;
// var johnHeight = 1.82;
// var markHeight = 1.75;

// var johnBmi = johnWeight / (Math.pow(johnHeight, 2));
// var markBmi = markWeight / (Math.pow(markHeight, 2));
// console.log("mark BMI = " + markBmi, "John BMI = " + johnBmi)

// var answer = markBmi >= johnBmi

// console.log("Is Mark's BMI greater than John's BMI? " + answer);


//*************************************************** */
// If else statements
//*************************************************** */

// var firstName = 'John';
// var civilStatus = 'Married';

// if (civilStatus = 'married') {
//     console.log(firstName + ' Is Married!')
// } else {
//     console.log(firstName + ' Is single!')
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' Is Married!')
// } else {
//     console.log(firstName + ' Is single!')
// }

// if (markBmi > johnBmi) {
// 	console.log("Mark's BMI is higher than John's")
// }

//*************************************************** */
//Boolean Logic
//*************************************************** */

// var firstName = 'John';
// var age = 32;

// if (age < 13) {
//     console.log(firstName + ' Is a boy')
// } else if (age >= 13 && age < 18) {
//     console.log(firstName + ' Is a teenager')
// } else {
//     console.log(firstName + ' Is a man')
// }

//***************************************************** */
// The Ternary Operator and Switch Statements
//***************************************************** */

// var firstName = 'John';
// var age = 26;

// age >= 18 ? console.log(firstName + ' Drinks beer') :
//     console.log(firstName + ' Drinks Juice');


// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink)

// //same as this

// if (age >= 18) {
//     var drink = 'beer'
// } else {
//     var drink = 'juice'
// }

//******************************************************** */
// Switch Statements
//******************************************************** */
// var firstName = prompt('What is your Name?')
// var job = prompt('What is your profession');

// switch (firstName) {
//     case 'bruce':
//     case 'Bruce':
//         console.log('I see you there, ya Adidas wearin little bitch')
//         break;
//     default:

//         switch (job) {
//             case 'teacher':
//                 console.log(firstName + ' Teaches kids how to code');
//                 break;
//             case 'driver':
//                 console.log(firstName + ' Drives an uber')
//                 break;
//             case 'designer':
//                 console.log(firstName + ' designs furniture')
//                 break;
//             case 'thundercloud':
//                 console.log(firstName + ' Makes delicious sandwiches')
//                 break;
//             default:
//                 console.log(firstName + ' Does something else.')

//         }
// }

//************************************************* */
// Truthy and Falsy values and equality operators
//************************************************* */

// Falsy vaulues : Undefined, null ,  0, '', NaN

// Truthy values : all values considered true in an if else statement

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('variable is defined')
// } else {
//     console.log('variable has not been defined')
// }

// //equality operatoors

// if (height == '23') {
//     console.log('the == operator does type coercion')
// }

//23 == '23'
//true
//23 === '23'
//false

//********************************************************** */
// Coding Challenge 2
//********************************************************** */

// var johnsTeam = (89 + 120 + 103) / 3;
// var mikesTeam = (116 + 94 + 123) / 3;
// var marysTeam = (97 + 10 + 140) / 3;
// console.log('johns team: ' + johnsTeam);
// console.log('Mikes Team: ' + mikesTeam);
// console.log('Marys Team: ' + marysTeam);

// if (johnsTeam > mikesTeam && johnsTeam > marysTeam) {
//     console.log('Johns team wins in average score with: ' + johnsTeam)
// } else if (mikesTeam > johnsTeam && mikesTeam > marysTeam) {
//     console.log('Mikes team wins in average score with: ' + mikesTeam)
// } else if (marysTeam > mikesTeam && marysTeam > johnsTeam) {
//     console.log('Marys team wins in average score with: ' + marysTeam)
// } else {
//     console.log('There is a draw')
// }

//*********************************************************** */
// Functions - Basics
//*********************************************************** */

// function calculateAge(birthYear) {
//     return 2019 - birthYear;
// }

// var ageJohn = calculateAge(1987);
// var ageMike = calculateAge(1970);
// var ageJim  = calculateAge(1956);
// console.log(ageJohn, ageJim, ageMike)

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.')
//     } else 
//     console.log(firstName + ' is already retired.')
// }  
// yearsUntilRetirement(1987 , 'John') 
// yearsUntilRetirement(1956, 'Mike');
// yearsUntilRetirement(1940, 'Bob');



//************************************************************ */
//  Function Statements and Expressions
//************************************************************ */


//function declaration
// function whatDoYouDo(job, firstName){}


//function expression
// var whatDoYouDo = function(job, firstName) {
// switch(job){
//     case 'teacher':
//         return firstName + " Teaches kids how to code.";
//     case 'driver':
//         return firstName + " drives for uber in Austin."
//     case 'designer':
//         return firstName + " designs furniture in their garage."
//     default:
//         return firstName + ' does something else'
// }  
// }

// console.log(whatDoYouDo('designer', 'John'));
// console.log(whatDoYouDo('teacher', 'dihn'));
// console.log(whatDoYouDo('driver', 'Vincent'));

//************************************************************* */
// Arrays
//************************************************************* */


// Initialize new Array
// var names = ['John', 'David', 'Mark'];
// var years = [1987, 1985, 1991];
// console.log(names);

// // Changed array data
// names[1] = 'Ben'; // Changed david to ben
// console.log(names)
// names[names.length] = 'Mary' //added Mary to the last position
// console.log(names); 

//different data types

// var john = ['john', 'obertubbesing', 1987, 'designer', true];

// john.push('blue'); //Adds to the end of the array
// john.unshift('mr.')  //Adds to the beginning of the array

// console.log(john)

// john.pop(); // removes from the end of the array
// john.shift(); // removes from the beginning of the array
// console.log(john)

// console.log(john.indexOf(1987));  // indexOf finds the index of the value passed in

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : ' John is a designer';

// console.log(isDesigner)

 
//************************************************************ */
// CODING CHALLENGE 3
//************************************************************ */





// let billTotal = prompt('What is the bill total?');



// function calc(billTotal){

// if(billTotal < 50){
// 	console.log(billTotal * 1.2)
// } else if(billTotal >= 50 && billTotal <= 200){
// 	console.log(billTotal * 1.15)
// } else(billTotal > 200) 
// 	console.log(billTotal * 1.1)

// }


// calc(billTotal)


//************************************************************ */
// Objects and Properties
//************************************************************ */


// //object literal
// var john = {
// 		firstName: 'John',
// 		lastName: 'Obertubbesing',
// 		birthYear: 1987,
// 		family: ['Mallory', 'Millie', 'Jane'],
// 		job: 'coder',
// 		isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']); 

// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;

// console.log(john)


// //new object syntax
// var jane = new Object();
// jane.firstname = 'jane';
// jane.birthYear = 1960;
// jane.lastName = 'Obertubbesing';
// console.log(jane); 

//************************************************************ */
// Objects and Methods 
//************************************************************ */


// var john = {
// 		firstName: 'John',
// 		lastName: 'Obertubbesing',
// 		birthYear: 1987,
// 		family: ['Mallory', 'Millie', 'Jane'],
// 		job: 'coder',
// 		isMarried: false,
// 		calcAge: function(birthYear) {
// 			this.age = 2019 - this.birthYear;
// 		}
// }; 
// john.calcAge();
// console.log(john)


//************************************************************ */
// Coding Challenge 4
//************************************************************ */



// let john = {
//  fullName: 'John Obertubbesing',
//  height: 1.82,
//  weight: 82,
//  calc: function(height, weight){
// 	 this.bmi = this.weight / (this.height * this.height)
// 	 return this.bmi
//  }

// }

// let mark = {
// 	fullName: 'Mark Markiemark',
// 	height: 1.65,
// 	weight: 82,
// 	calc: function(height, weight){
// 		this.bmi = this.weight / (this.height * this.height);
// 		return this.bmi;
// 	}
// }
 
// mark.calc();
// john.calc();
// console.log(john, mark);


// if (mark.bmi > john.bmi) {
// 	console.log(`${mark.fullName} has a BMI of ${mark.bmi}, which is greater than ${john.fullName} which is ${john.bmi}.`)
// } else {
// 	console.log(`${john.fullName} has a BMI of ${john.bmi}, which is greater than ${mark.fullName} which is ${mark.bmi}.`)
// }

//************************************************************ */
// Loops and Iteration
//************************************************************ */


// for(let i = 0; i < 10; i++){
// 	console.log(i);
// }

// var john = ['john', 'obertubbesing', 1987, 'designer', true];

// // for(let i = 0; i < john.length; i++){
// // 	console.log(john[i]);
// // }

// //while loop

// var i = 0;
// while(i < john.length) {
// 	console.log(john[i]);
// 	i++;
// }

//continue and break statements

// var john = ['john', 'obertubbesing', 1987, 'designer', true];
// for(let i = 0; i < john.length; i++){
// 	if (typeof john[i] !== 'string') continue; //continues the loop avoiding things that are not strings
// 	console.log(john[i]);
// }

// for(let i = 0; i < john.length; i++){
// 	if (typeof john[i] !== 'string') break; //breaks out of the loop at first non string
// 	console.log(john[i]);
// }

// //looping backwards 

// for(let i = john.length - 1; i >= 0; i--){
// 	console.log(john[i])
// }

//************************************************************ */
// Coding Chellenge 5
//************************************************************ */

// let john = {
// 	bills: [124, 48, 268, 180, 42],
// 	calcTips: function() {
// 		this.tips = [];
// 		this.total = [];
	
// for(i = 0; i < this.bills.length; i++)
// 	{
// 	 	let percentage;
// 		var bill = this.bills[i];

// 	if (bill < 50) {
// 		percentage = .2 
// 	} else if (bill >= 50 && bill <= 200){
// 		percentage = .15
// 	} else { 
// 		percentage = .1
// 	}

// 	this.tips[i] = bill * percentage;
// 	this.total[i] = bill + bill * percentage;
// 	}
		
	
// 	}

// }

// john.calcTips();
// console.log(john)
