Introduction
In this assignment, you will write a web app that calls the Random User Generator web serviceLinks to an external site. and displays data from the response from this web service in the browser. You will also add an Express middleware function to maintain and print certain statistics.

Note: To complete this assignment, you need to know material covered in Modules 6 (in addition to material covered in earlier modules, in particular Module 4).

Be sure to periodically review Assignment 5 FAQs & Tips  thread in the Ed discussion board (pinned at the top) 

Learning Outcomes
How can we modify the DOM tree? (Module 4, MLO 4)
What are DOM events and how can we use them to create interactive web applications? (Module 4, MLO 5)
How to write asynchronous JavaScript programs using promises? (Module 6, MLO 2)
How to write asynchronous JavaScript programs using the await and async keywords? (Module 6, MLO 3)
How is the concept of modules supported in JavaScript? (Module 6, MLO 4)
What is Express middleware and what are its uses? (Module 6, MLO 5)
Instructions
Write a web app that calls the Random Person API, https://randomuser.me/api/,Links to an external site. from the browser and from an Express app, and maintains statistics using an Express middleware function. Your app will consist of:

A homepage and client-side JavaScript code.
A static HTML page that is displayed as the homepage (i.e., displayed in the browser for the URL http://localhost:3000),Links to an external site. and includes 2 links that execute JavaScript code to send 2 different HTTP requests
An Express app listening at port 3000.
This app serves the homepage.
Provides an endpoint for GET requests to the URL /random-person
Includes a middleware function to maintain and print statistics to the console running the Express app.
Starter Code
We have provided you with a zip fileDownload a zip file that you must use as starter code.

Unzip the zip file, go to the directory where the files have been unzipped, then run the commands npm install once (to install the necessary packages) and then npm start to start the web app corresponding to the starter code.
Don't change the names of the files we have provided to you.
You can modify these files, with some exceptions, as noted below.
The file index.html in the directory public is the homepage.
Modify this file to add the HTML elements required in the homepage.
Do not add any JavaScript code in this file.
The file random.js is in the directory public.
This file is referenced in the file index.html using the script tag.
Modify this file to add all your client-side JavaScript code.
The file .env specifies the port number (3000) that the server side Express app will listen on.
Don't change this file.
The file package.json must not be changed without approval from the instructor.
This file includes the dependencies dotenv, express, express-async-handler, node-fetch and nodemon.
The start property is set to start the app using the file server.mjs.
Because you have been provided this file, you don't need to run the command npm init to initialize the app.
You can simply run the command npm install (once) to install the dependencies and then run npm start whenever you want to start the app.
Note that the app is run using nodemon. This means that when you make any changes to the files random.js or server.mjs and save that file, the Express app will automatically restart and pick up these code changes.
If you want to make any changes to package.json, e.g., to add other dependencies in this file, you must get the approval of the instructor. Don't make any changes in this file without our approval.
The file server.mjs will contain the code for the Express app, i.e., the server-side of your web app.
Add code in this file for a route handler, and for maintaining and printing statistics.
You are also allowed to (but not required to) add a file (or files) for CSS stylesheet(s) to the web app.
Don't add any other files without approval from the instructor.
Video Describing the Functionality of the Web App
Here is a video that describes the functionality at a high-level.


Homepage and Client-side JavaScript Code
The homepage must include

An h1 element
Some descriptive text, and
2 links, using <a> elements, with short content that describes the behavior of the links. We will refer to these links as "The Direct Link" and "The Express Link." The behavior of each link is described below.
The Direct Link
A user click on this link, i.e., the click event on the link, must result in the execution of JavaScript code in the file random.js that

Uses the fetch APILinks to an external site. to send a request to the Random User API.
Displays the first name, last name, phone number and email of the random person sent in the response sent by the Random User API by adding one or more nodes in the page using the DOM API.
The Express Link
A user click on this link,  i.e., the click event on the link, must result in the execution of JavaScript code in the file random.js that

Uses the fetch API to send a request to the Express app's endpoint GET /random-person.
Displays the first name, last name, phone number and email of the random person sent in the response sent by the Express API by adding one or more nodes in the page using the DOM API.
The Server-Side Express App
Endpoint to Call Random Person API
Code a route handler for the endpoint GET /random-person.

This route handler must call the Random Person API using the npm package node-fetchLinks to an external site..
It must return the response from the Random Person API as its own response to the request. The response status code must be 200.
The route handler must be coded so that if an exception were to be thrown by the statements it executes, a response with status code 500 must be sent back. This response must be generated by an error handler middleware function written by you.
Middleware to Print Statistics
Write a named middleware function that maintains a count of how many HTTP requests have been received for the endpoint  GET /random-person and prints these statistics to the console on every 10th request.

This middleware function must maintain a count of these requests received from the time the server was started.
In other words, keep the statistics in memory. Don't persist them to the file system or a database.
The statistics must be printed to the console running the Express app after the 10th request and then every 10 requests after that.
i.e., after 10 retrieve requests are received, then after a total of 20 retrieve requests, then after 30, and so on.
The maintenance and printing of the statistics must be done solely by this named middleware function, and not by the code of the app.get route handler for this endpoint.
Example: Printing Statistics
Total requests for random-person: 20
Video of a Sample Solution
Here is a video walk-through of a sample solution for Assignment 5.


Suggestions
In your client-side and server-side JavaScript code you are free to write the asynchronous code using either the then() method or the asyn/await keywords.
You can choose to use one approach in the client-side code and the other in the server-side code, or use the same approach on both sides.
Exploration — Writing Asynchronous Code contains examples of web apps where the client-side JavaScript code has functionality very similar to what you need for this assignment.
Based on whether your want to write asynchronous code using the then() method or the asyn/await keywords, carefully study the corresponding example from that exploration. If you want, feel free to adapt the example for this assignment.
