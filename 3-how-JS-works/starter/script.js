///////////////////////////////////////
// Lecture: Hoisting


// function decloration hoising works
// calcAge(1965)

// function calcAge(year){
//     console.log(2019 - year);
// }


// // function expression.. hoising does not work


// var retirement = function(year) {
//     console.log(65 - (2019 - year));
// }
// retirement(1987)



// //variables


// var age = 32
// console.log(age)   //undefined, knows there will be a variable


// function foo() {
//     var age = 65
//     console.log(age)
// }
// foo();
// console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + d);
// }




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
// calculateAge(1987)

// function calculateAge(year) {
//     console.log(2019-year);
//     console.log(this)
// }

var john = {
    name: 'john',
    yearOfBirth: 1987,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
 
    }
}
 john.calculateAge();


var mike = {
    name: 'mike',
    yearOfBirth: 1984

}

// method borrowing is awesome
mike.calculateAge = john.calculateAge;

mike.calculateAge();
