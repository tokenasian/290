Introduction:

In this assignment, you'll write some functions that will help you get familiar with JavaScript

You will write a function deepEqual that will help you understand data types supported by JavaScript and make you familiar with some looping and branching constructs.

You will write a couple of reducer functions that will illustrate the use of higher-order functions in JavaScript.

Learning Outcomes:

Explain data types and their declaration in JavaScript (Module 2 MLO 2)

Create and use objects and arrays in JavaScript (Module 2 MLO 3)

Write JavaScript programs with conditional branching and loops (Module 2 MLO 4)

Write programs using the powerful support for functions in JavaScript (Module 2 MLO 5)

Deep Equality:

Consider the following two JavaScript objects

const student1 = { name: 'Harvey', age: 23 };

const student2 = { name: 'Harvey', age: 23 };

Since student1 and student2 refer to different objects, these two values are not strictly equal. But these two objects have the same properties and these properties have the same value in both these objects. So in some sense these objects are equal. We will call this type of equality Deep Equality. The basic idea is that we will compare the properties of objects and if the two objects have the same properties with the same values, then these objects are deep equal. We will give a more complete definition of deep equality in a short while.

What you need to Implement?

Implement a function deepEqual that takes two arguments and returns

true if the arguments are deep equal (as defined below)

false if the arguments are not deep equal.

This function must handle values of the following types:

Numbers

Boolean values

Strings

null values

undefined values

Objects, including arrays

Definition of Deep Equality

Case 1. If two values are primitive and are strictly equal, then they are deep equal.

Case 2: If two values are primitive and are not strictly equal, then they are not deep equal.

Case 3. If one value is an object and the other value is primitive, then they are not deep equal.

Case 4: If two values are both objects and are strictly equal, then they are deep equal.

Case 5: If two values are both objects and are not strictly equal, then we determine deep equality as follows:

5.1 If both values are non-array objects, then they are deep equal if both the objects have exactly the same properties and the values of these properties are deep equal. The order of properties in these non-array objects doesn't matter for deep equality.

5.2 If both values are arrays, then they are deep equal if their elements are deep equal and these elements are in the same order.

5.3 All other pairs of objects are not deep equal.

How to Implement?

We are providing you code that you must use as a starting point for your implementation. 

Create a directory on your machine.

Download the zip file deepEqual.zipDownload deepEqual.zip to this directory and unzip this file.

Open up a terminal (e.g., PowerShell or DOS in Windows, or a shell on Mac, or a terminal in VS Code), and go to the directory where the contents of the zip file have been unzipped.

This directory will contain a directory deepEqual which will have the following 3 files:

deepEqual.js

deepEqual.test.js

package.json

Code the functionality in the function deepEqual in the file deepEqual.js.

How to Test?

Testing Interactively in the Node REPL

You can test your code interactively by starting the Node REPL and loading the file deepEqual.js in the REPL.

You can then use the REPL to call the function deepEqual with different arguments and check the result.

Based on the results, you can update the code in deepEqual.js and then carry out more tests.

Remember if after loading the file deepEqual.js in the REPL you change the code in this file, the changes will only be picked up after you again load the file in the REPL.

Using the Provided Test Suite

We are providing a test suite that you can use to test your implementation of deepEqual.

This test suite is contained in the file deepEqual.test.js

To run this test suite

From the terminal, go to the directory deepEqual and run the command npm install.

Then you can run the test suite as many times you need by running the command npm test (you need to run npm install only once).

You can run the test suite, look at the results to see which tests failed and then enhance your code to fix the failures.

The test suite is written using the JavaScript testing framework JestLinks to an external site..

Although you are welcome to learn more about this framework, this is not required for successfully completing this assignment.

Note that just because a test passes doesn't mean that your implementation is correct.

For example, if deepEqual just has one line of code that returns false, many tests will pass. But this isn't a correct implementation of the functionality and will get a grade of 0.

Note: The file deepEqual.test.js has been updated since the video was recorded. Each test in the file now has a number and a few more tests have been added. But the description of the tests in the video is still accurate and relevant.

Implementation Requirements

Do not make assumptions about any of the following items:

The max length of an array

The max levels of nesting of an array

The max number of properties of a non-array object

The max levels of nesting of a non-array object.

You can use any built-in JavaScript functions, if you like, but don't import any external packages.

You can write any helper methods you want.

You can use the typeof operator to determine the type of a value.

Due to a historical quirk typeof null returns 'object' even though null is a primitive type. So when comparing two object in Case 5, first make sure that neither of them is null.

To determine whether a value is an array, you can use the built-in method Array.isArray()Links to an external site..

You must use recursion to compare two non-array objects for deep equality.

JavaScript makes no guarantees about the order of properties in a non-array object.

This means that comparing the JSON representation of 2 non-array objects to determine deep equality is incorrect.

Also, non-array objects can include nested non-array objects. Use recursion to compare the properties of the object because these properties might in-turn be objects.

Optional

Implementing the following cases is optional (i.e., not required): 

An array that has a non-array object as an element

A non-array object that has an array as a property

You can use recursion to compare two arrays. However, this is not required for arrays since JavaScript guarantees an order for elements of an array.

You can find additional hints about how to implement this function in the book Eloquent JavaScriptLinks to an external site..

Reducer functions

One of the nice features of JavaScript is that it is possible to easily pass functions around as parameters for other functions to use. JavaScript arrays provides a method named reduce which is described on the MDN websiteLinks to an external site.. According to this description, the reduce method:

"executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value."

The example reducer function shown on MDN website sums up the elements of the array. But if the array contains non-numeric elements, then this reducer will do automatic type conversion and give results that can make us say "Wat!" As an example of this, if we call reduce on the array [1, 2, true, 'a', 4, true] with this example reducer function, we get the result '4a4true'.  Wat!

What you need to Implement?

Your task is to implement two versions of the example reducer from MDN, so that these new functions can handle non-numeric values in the array in a graceful manner. Here are the 2 functions you need to implement:

reducer1

If this function is passed to reduce, any non-numeric values in the array will be skipped and the sum of only the numeric values in the array will be returned.

If all the values in the array are non-numeric, then the value 0 will be returned.

reducer2

If this function is passed to reduce and the array contains any non-numeric values, this function will throw the exception TypeError.

Otherwise, the sum of all the values in the array will be returned.

To throw the exception TypeError with the message 'My error message'  you can use the statement throw new TypeError('My error message'). See TypeErrorLinks to an external site. on MDN for more discussion of this exception.

How to Implement and Test?

The directions for implementation and testing are similar to the ones we provided for deepEqual. We are providing you a zip file that you must use as a starting point for your implementation.

Create a directory on your machine.

Download the file reducers.zipDownload reducers.zip to this directory and unzip this file.

Open up a terminal (e.g., PowerShell or DOS in Windows, or a shell on Mac, or a terminal in VS Code), and go to the directory where the contents of the zip file have been unzipped.

The directory where the contents of the zip file have been unzipped will contain a directory reducers with the following 3 files:

package.json

reducers.js

reducers.test.js

Code the functionality of the functions reducer1 and reducer2 in the file reducers.js.

You can test the code interactively from the Node REPL as described for deepEqual.

The file reducers.test.js contains a test suite for the functions reducer1 and reducer2

You can run this test suite using npm install (once) and npm test (as many times as you want) as described for deepEqual.

Note: The file reducers.test.js has been updated since the video was recorded. 
Each test in the file now has a number and a new test has been added. 
But the description of the tests in the video is still accurate and relevant. There is also a minor change in the file reducers.js. 
The file shown in the video defines the functions reducer1 and reducer2 using function expressions. In the file provided in the zip file, these functions are defined using the traditional function keyword. With this change, if you are running the tests interactively using the REPL, you can reload the file in the REPL after making changes. When the functions were defined using function expressions and the function values were assigned to constant variables, trying to reload the file in the REPL caused an error because of the attempt to create a new constant variable with a pre-existing name. 
This is why in the video, I had to quit and restart the REPL after changing the code of the reducer functions. With the change, you can simply reload the changed file in the REPL and don't need to restart the REPL.
