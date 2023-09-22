# Fynd Products App

This is a product inventory system designed for e-commerce and retail platforms. The app prioritizes simplicity, making the most of React's features. It's a single-page application that offers essential features: adding, updating, deleting, and fetching products. MongoDB serves as the database, while Express.js powers the creation of RESTful APIs. 

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### node server.js
Run this to start your server at PORT 3001

## Project Features
The following will include a short walkthrough of the project

###Fetch Product
When the page is loaded the first time, the useEffect hoook initialises the apps state with the products stored in the MongoDb database. i have implemented proper error handling to check any serverside errors for this process. and once the state is initialised the information is display through the Product component.

###Add Product
You can add new Product by click the + icon in top left
this will open a Form component where you can add the name, quantity and price.
the form check if any field is emmpty and if the quantity is with 0-100 otherwise the user prompted reneter the fields in the correcr range.

###Delete Product
In order to delete a product you can find the trash icon on the bottom right of each product. clicking on this icon will prompt you to confirm delete and if selected yes the product will be deleted from the databasse and react will update the DOM to show the changes

###Update Product
You can click on the edit details button to edit the details of a product. the fields are preset to the prev values so you perform the necessary changes. i have implented error checking to check if the uer is passsing any empty fields. after updating react will update the DOM to show the new changes

##Future scope
The app can be enhanced by allowing the user to upload images of the product.
Allowing the fields such as Exlusive! Limited sale! etc as radio button and then displaying them on each product card
Checking the quantity to show "Only 2 items left" when quantity is less than eg. 3
Filter option to filter the products shown.