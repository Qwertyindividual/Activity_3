// // import express
// const express = require("express");
// // import cors
// const cors = require("cors");
 
// const bodyParser = require ('body-parser');
 
// // import routes
// const route = express.Router();  
// // init express
// const app = express();
  
// // use express json
// app.use(express.json());
  
// // use cors
// app.use(cors());


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

  
// // use router
// app.use(route);

const express = require('express');
//Express app

const path = require('path');

const db = require('./config');

const bodyParser = require('body-parser'); 

const cors = require("cors");


const Router = require("./Routes/routes.js")

const port = parseInt(process.env.port) || 4000;

const app = express();

app.use(express.json());
app.use(Router);

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//router
// const route = express.Router();

// app.use(
//     route,
//     express.json,
//     bodyParser.urlencoded({extended: false}),
// )

  
// app.listen(5000, () => console.log('Server running at http://localhost:5000'));


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
