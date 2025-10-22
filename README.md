# Bonezegei_Scripting_Language
Author: Jofel A. Batutay

The Bonezegei Scripting Language (BSL) is a newly developed, dynamically typed programming language implemented through a custom interpreter written in the C language. It is designed primarily for rapid prototyping and the integration of embeddable logic within software systems. BSL features a simplified and intuitive syntax influenced by JavaScript and the C family of languages, promoting ease of adoption and efficient development. Despite its lightweight design, BSL is a fully Turing-complete language that supports essential modern programming constructs, including conditional and iterative control flows, user-defined functions, and object-oriented programming through class declarations, constructors, and methods. Source code is encapsulated within files using the unique .bzg extension, emphasizing the language’s self-contained architecture.

# Download

### Latest Version 1.1
* [Windows x64](https://github.com/bonezegei/Bonezegei_Scripting_Language/raw/refs/heads/main/Release/Version1.1/windows_x86/BonezegeiInstallerVersion1_1.msi)
* [Linux x86](https://github.com/bonezegei/Bonezegei_Scripting_Language/raw/refs/heads/main/Release/Version1.1/linux_x86/bonezegei)


# Version 1.0
## Running the sample

A sample program is included under `Release/Version1.0/sample.bzg`. To run the sample with the interpreter, from the repository root (or the directory containing the interpreter binary) execute:

```
./bonezegei sample.bzg
```

This will invoke the Bonezegei interpreter and execute the `sample.bzg` program.

## About the sample

The included `sample.bzg` demonstrates several core features of the Bonezegei interpreter and the BSL language, including:

- Basic syntax and data types (numbers, strings, booleans)
- Variables and simple expressions
- Conditional statements (if/else)
- Loops (for/while)
- Function definitions and calls
- Basic object-oriented features such as class declarations, constructors, and method invocation

The interpreter is capable of:

- Parsing and executing `.bzg` source files
- Evaluating expressions and managing scope for variables and functions
- Controlling program flow with conditionals and loops
- Creating and invoking user-defined functions and class methods
- Handling runtime errors with informative messages

Use the sample as a starting point for learning the language and testing the interpreter. Modify `sample.bzg` and re-run the command to experiment with new constructs.
## Sample Code (sample.bzg)
```js
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

//conditional statement
if (x > y) {
    print("x is greater than y");
} else {
    print("x is not greater than y");
}

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

  //function inside class
  function greet() {
    print("Hello, my name is " + this.name + " and I am " + this.age + " years old." + " I live at " + this.address + ".");
  }

  //function with parameter
  function setAddress(addr) {
    this.address = addr;
  }

  //function with parameters and return value
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
var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 

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
```

