# MEAN GraphQL CRUD - Quotes App
 
The term MEAN stack refers to a collection of JavaScript based technologies used to develop web applications. MEAN is an acronym for MongoDB, ExpressJS, AngularJS and Node. js.
Add to that GraphQL was used in this project to expose data from MongoDB.

This is a simple application of Quotes where you can register quotes and its author. Also you can update and delete the quotes.

## Frontend

![image](https://user-images.githubusercontent.com/19416887/119704936-94411b80-be2e-11eb-841d-fa7ff64801a5.png)

## Backend - GraphQL

![image](https://user-images.githubusercontent.com/19416887/119705494-3234e600-be2f-11eb-943e-2395f3a4d240.png)

## How to run the project

### Backend

Add your MongoDB config.json in backend/config folder as the example below:

backend/config/config.json

```javascript
   {
        "dbname": "crud",
        "url": "mongodb://localhost:27017"
    }
```

In the command line navigate to backend folder:

    $cd backend
    
Run the command:

    $npm start

### Frontend

In the command line navigate to frontend folder:

    $cd frontend
    
Run the command:

    $npm start
    
### References

This project was based in the Jon Peppinck [YouTube video](https://www.youtube.com/watch?v=zCMNvnlDoVg).
