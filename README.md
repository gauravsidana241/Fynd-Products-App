# Fynd Products App

This is a product inventory system designed for e-commerce and retail platforms. The app prioritizes simplicity, making the most of React's features. It's a single-page application that offers essential features: adding, updating, deleting, and fetching products. MongoDB serves as the database, Express.js powers the creation of RESTful APIs and Bootstrap is used for CSS styling.

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The page will reload when you make changes.

### `node server.js`

Run this to start your server at PORT 3001

## Project Features

The following will include a short walkthrough of the project.

### Fetch Product

When the page is loaded for the first time, the useEffect hook initializes the app's state with the products stored in the MongoDB database. I have implemented proper error handling to check for any server-side errors during this process. Once the state is initialized, the information is displayed through the Product component.

### Add Product

You can add a new product by clicking the + icon in the top left corner. This will open a Form component where you can input the name, quantity, and price. The form checks if any field is empty and whether the quantity is within the range of 0-100. If any field is empty or the quantity is not in the correct range, the user will be prompted to re-enter the fields with the correct information.\
![addPic](https://github.com/gauravsidana241/Fynd-Products-App/assets/92263871/8b09def0-a51f-4ead-bb9d-3aaf7efb1a92)\
![image](https://github.com/gauravsidana241/Fynd-Products-App/assets/92263871/46c673c0-9dad-49b2-9ec6-6ffb39ee7c2a)\

Add form in list-view
![image](https://github.com/gauravsidana241/Fynd-Products-App/assets/92263871/4825b20e-347d-427f-a34f-eb0c953a71af)


### Delete Product

To delete a product, you can find the trash icon on the bottom right of each product. Clicking on this icon will prompt you to confirm the delete action, and if you select "yes," the product will be deleted from the database. React will then update the DOM to reflect the changes.\
![deletePic](https://github.com/gauravsidana241/Fynd-Products-App/assets/92263871/e946a6e8-1936-4627-9e8c-a1738421d388)

### Update Product

You can click on the "Edit Details" button to edit the details of a product. The fields will be pre-set with the previous values so that you can make the necessary changes. I have implemented error checking to ensure that the user does not submit empty fields. After updating, React will refresh the DOM to display the new changes.\
![image](https://github.com/gauravsidana241/Fynd-Products-App/assets/92263871/48918799-97fd-4f11-9019-ba4202f14338)

Update form in list-view.
![image](https://github.com/gauravsidana241/Fynd-Products-App/assets/92263871/9d9cd958-46c3-4de6-ab19-16afaa44edf1)

## You can find the list-view changes in the list-view branch
