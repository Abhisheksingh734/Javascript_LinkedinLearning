/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Human from "./Human";

const Person = new Human("Abhishek",19,10,19);
console.log("Before walk",Person.position.x);
Person.walk(10,10);
console.log("After walk walk",Person.position.y);