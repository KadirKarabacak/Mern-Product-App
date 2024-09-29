# **MERN Stack Product App 🍃**

This project is using MERN stack [ Mongo DB, ExpressJs, ReactJs, NodeJs] and created for learning purposes.

### **Steps to follow:**

-   Initialize npm with `npm init -y`
-   Install packages for backend `npm install express mongoose dotenv`
-  `Expressjs` for build an API easily and for routing system
-   `Mongoose` for the interact with the database which is **Mongo DB**
-   `Dotenv` for the create and access environment variables
-   After all create a file named `server.js` inside backend folder. Import express inside this file, call as app and then listen for port.
-   Next, run `node ./backend/server.js` command in terminal to run backend on that port. Instead of that create a script inside package.json `"dev": "node backend/server.js"`
-   Next, run `npm i nodemon -D`. After installed nodemon update dev script with `"dev": "nodemon backend/server.js"`. Nodemon instantly watching changes and reflecting
-   Create a `config` folder inside backend folder and `db.js` file inside config folder. import `mongoose` and create an async function called `connectDB()` to connect MongoDB to project.
-   Create a `.env` file and inside that file create `MONGO_URI` environment variable which contains the string we copied from mongoDB. Then use this environment variable inside db.js file in `connectDB` function.
-   Next, create a `models` folder inside backend. Then inside models create `product.model.js` file which contains and exporting the product schema.
-   Next, create `New Workspace` in postman. Within that workspace create a request which request you want to test. Move to `Body` tab, select `raw` and `JSON`. Under that body, create an example body with the type of your model.
-   Next, `app.use(express.json())` add this code to your server.js for allow to accept JSON data in the body. Otherwise app is crashing
-   After created your endpoints for Create, Update, Delete and Read products, create a `routes` folder inside backend. Then create `product.route.js` inside routes folder. Then `import express from "express"` & `const router = express.Router();` & `export default router`. And then change all the endpoints name with `router.get()` & `router.put()` etc.
-   After everything is end about backend, start building frontend. Move in to the frontend folder by terminal and run `npm create vite@latest .` command to create vite project in current path.
-   On frontend, start installing our library which is ChakraUI with the command `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion` and also `npm i react-router-dom` for routing system.
-   Next create `pages` & `components` folders for **Home**, **Create** pages and the **Navbar** component.
-   Complete the Navbar & Create page UI and move into the create a store using `zustand` with the following command of `npm i zustand`.
-   Next, in this store create `fetch()` requests to our API endpoints to update database with the requested action like `createProduct(), getProduct(), updateProduct() and deleteProduct()`. And this functions also should contain the `set()` function which allow us to update UI instantly with the requested action.
-   After the store setup is completed use this hook inside our components as required.

### **Deployment**

-   Now on deploy section we have a server on `localhost:5000` and we have a client on `localhost:5173`. One thing we have to do use same domain both server and client.
-   Next, move into the server.js and `import path from "path";` and then create a variable like `const __dirname = path.resolve()`. With this variable we have to check if we are on the production or development.
-   Next, move into the frontend folder and run `npm run build` to ready up vite for production.
-   After the build completed, in server.js file under the productRoutes usage, write this code
-   ```
    if (process.env.NODE_ENV === "production") {
     app.use(express.static(path.join(__dirname, "frontend/dist")));

     // Express will serve up production assets
     app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
     );
    }
    ```
-   Next, create build script for production like `"build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"`. This handles installing & building both backend & frontend node_modules folders.
-   Next, we also need to create a start script like `"start": "NODE_ENV=production node backend/server.js"` but this time we using node instead of nodemon because of this is just run once in the production. Also update dev script with `"dev": "NODE_ENV=development nodemon backend/server.js",`.

### **About Mongo DB**

-   Mongo DB using NoSQL as default.
-   NoSQL means we have `Collections` in MongoDB and each Collection contains `documents` as like Firebase. MySQL and SQL creates `Tables` instead of collections.

### **Postman 🕴**

-   Postman is a tool that simplifies `API development, testing and documentation`. It is very widely used, especially for working with web APIs such as RESTful and GraphQL.

### **Terminal commands**

-   `New-Item fileName` is creates new file with fileName.
-   `mkdir folderName` is creates new folder with folderName.
-   `Ctrl + K + 0` closing all ranges.

### **Notes to pay attention to**

-   To use `import` syntax instead of `require` we must change the type: "module" in package.json
-   If `app.use(express.json())` is not provided in server.js requests can not accept JSON as body.
-   If updating whole object in database use `put`. But if only updating some of fields that object use `patch` method
-   If a function written like `create(set => ({}));` this, it means the function returns an object.
