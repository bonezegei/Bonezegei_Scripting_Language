// line comment

/* 
  This is a block comment
*/

// simple print statement
print("Starting JS-like demo!");

//variable declarations and arithmetic
var x = 5;
var y = 2;
print("x + y = " + (x + y));
print(x);
print(y);

//dynamic typing
x = "string now";
print(x);

//complex expression
var complexNum = (3.5 *12.0 - 4.2 / 2.1)/4;
print("complexNum = " + complexNum);


// class definition
class Person {
  //variables inside class
  var name;
  var age;
  var address;

  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //fu
  function greet() {
    print("Hello, my name is " + this.name + " and I am " + this.age + " years old." + " I live at " + this.address + ".");
  }

  function setAddress(addr) {
    this.address = addr;
  }

  function add(a, b) {
        return a + b;
    }
}
//Creating a Person object...
var p = new Person("Alice", 30);

//accessing and modifying object properties
p.age = 30;

//printing object properties
print("name: " + p.name);
print("address: " + p.address);

//setting address using method
p.setAddress("123 Main St");

//printing updated address
print("Updated Person address: " + p.address);

//calling greet method
p.greet();

//calling add method with parameters and return value
print("2 + 3 = " + p.add(2, 3));


//while loop demonstration
var x = 3;
while (x > 0) {
    print("x is now: " + x);
    x = x - 1;
}

//array demonstration
var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //new Array(22);

arr[0]=10;
arr[1]=20;
arr[2]=30;
arr[3]=40;
arr[4]=50;

//printing sizes
print("size of arr = " + sizeof(arr));
print("size of Person = " + sizeof(p));

//iterating through array
var i = 0;
while (i < 5) {
    print("arr[" + i + "] = " + arr[i]);
    i = i + 1;
}

//Functions and Calls
function fn1(){
    print("In function fn1");
}

function fn2(){
    print("In function fn2");
    fn1();
}

//nested function calls
function fn3(){
    print("In function fn3");
    fn2();
}

fn3();



//syntax for a working for loop ! do not add var on the iterator
//for loop demonstration
for (x = 0; x < 5; x++) {
    print("x = " + x);
}


