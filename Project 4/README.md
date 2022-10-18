In this assignment, you’ll write a client-side application using React. You will use HTML page layout tags and CSS rules to design the page layout, tables, and form controls. In addition, you'll use React to render the content. 

Note : The material you need to know to complete this assignment is covered in Modules 4 and 5 (in addition to material covered in earlier modules).

Be sure to periodically review Assignment 4 FAQs & TipsLinks to an external site.  thread in the Ed discussion board (pinned at the top) 

Learning Outcomes

What is CSS and how do we use it in web applications? (Module 4 MLO 1)

What are some of the important CSS properties & what is the CSS block model? (Module 4 MLO 2)

What is the Document Object Model, or DOM? (Module 4 MLO 3)

How can we modify the DOM tree? (Module 4 MLO 4)

What are DOM events and how can we use them to create interactive web applications? (Module 4 MLO 5)

What is the React framework? (Module 5 MLO 1)

What are destructuring expressions in JavaScript and how do we use them? (Module 5 MLO 2)

What is JSX and how do we define components using JSX? (Module 5 MLO 3)

What is the State Hook and what are its uses? (Module 5 MLO 4)

How can we write Single Page Applications (SPAs) using React Router? (Module 5 MLO 5)

How can we define and use forms in React apps? (Module 5 MLO 6)

Instructions

Develop a web app as a Single Page Application (SPA) using React, React Router, HTML, and CSS rules. The website will include the following 3 pages, incorporate component files, use React Router for routing between pages, and use CSS rules for page layout:

Homepage.

Shopping List Page.

Store List Page.

Data for the App

We have provided you a zip file with starter code assignment4.zipDownload assignment4.zip 

Instead of creating a new React app, download the zip file, unzip it into a directory and then run npm install in the directory where you  have unzipped the file.

The zip file has the boiler-plate code for a React app with the following changes and additions

The package.json file has been modified to include the dependencies react-router-dom (with version 5.x) and react-icons.

The App.js file has been modified to import data from 2 data files that we have added.

The data your app will use is in two files we have added: items.js and stores.js.

These files are in the directory src/data.

Don't change these files.

The App.js file imports data from these data files into the variables items and stores.

Your app must get its data from these variables.

Do not change the part of App.js that imports these files.

During testing, we may replace the two data files with a different set of test files with the same names.

The properties of the objects and the type of their values in the test files will match the properties of the objects in the files provided to you.

However, the values of these properties as well as the number of objects in the test files can be different from the files provided to you.

Create Additional Files

You must create a separate file for each page and React component you define.

Inside the /src folder, create a /pages folder and in this folder create three files for 3 pages of your app (you can choose different names for your files)

HomePage.js

OrderPage.js, and

StoresPage.js

Inside the /src folder, create a /components folder and in this folder create one file for each of the following React components;

GroceryTable

GroceryRow

SelectQuantity

StoreTable

StoreRow

ZipSearch

Note:

You are not required to use the same names for the React components as we have listed above. The names have been given as an example.

You can also define additional React components if you want.

April 29, 2022: The /src folder had been misspelled as /scr in 2 places. This has been fixed.

1. Homepage

This page renders when the app starts up.

This page must include:

A heading level 2 <h2> to introduce the page.

A paragraph <p> to tell users what to do.

Links to the following 2 pages:

Shopping List Page.

Store List Page.

2. Shopping List Page

This page must include:

A heading level 2 <h2> to introduce the page.

A paragraph <p> to tell users what to do.

A <table> that displays data from the variable items. This HTML table will be created by a React component (GroceryTable in our example) and will include:

A <thead> row that specifies these three columns for an item's:

Name

Price

Quantity

Rows of data that render in the <tbody>.

Each row of data must display the name, price and quantity of the item, and must be created by another React component (GroceryRow in our example).

Use the map function to create these row components. There should be one row component for each item in the variable items.

Within each row, the quantity value must use another React component (SelectQuantity in our example) that provides a control via 2 icons to increment and decrement the quantity of the item in the row.

The initial value of the quantity must be zero.

The user must not be able to set the quantity to less than 0 or greater than 10.

You can use Exercise Counter Component in Exploration - State and React Hooks as a starting point for this component.

A link to the homepage.

3. Store List Page

This page must includes:
  
A heading level 2 <h2> to introduce the page.

A paragraph <p> to tell users what to do.

A <table> that displays data from the variable stores. This HTML table will created by a React component ((StoreTable in our example) and will include:

A <thead> row which specifies these three columns:

City

State

Zip

Rows of data that render in the <tbody>.

Each row of data must be created by another React component (StoreRow in our example).

Use the map function to create these row components. There should be one row component for each store in the variable stores.

A React component (ZipSearch in our example) that creates a <form> with <fieldset>, <legend>, and number <input> control for a user to enter their 5-digit zip code, and a <button> to submit the data. 

An alert (or other dynamic message) that displays the response message, which includes the data entered (rather than submitting the form).

A link to the homepage.

CSS

Update and add rules to the existing App.css file that resides in the /src folder. Note that specifying black, white, and Times New Roman font are not allowed (because they are already the defaults).

Global page design:

Add a body rule in the first line of the App.css file that defines the font-family, background-color, color, margin, and padding for the app.

Add h1 and h2 rules with a new color and font family.

Table

Add tr th and tr td rules to update borders, color, and padding.

Form

Add fieldset, legend, input, and button rules that include the same font-family as the body

This is needed because the form elements do not inherit the font-family from body by default

Note: you are allowed to add additional rules beyond the required rules listed above.
