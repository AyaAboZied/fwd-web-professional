const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');


// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

/** Listen port */
const port=8000;

// Setup Server
app.listen(port,() =>{
    console.log(`Server Running on: http://localhost:${port}`);
});


// Require Express to run server and routes
/** Get All Data http://localhost:8000/getAll */
app.get('/getAll',(req,res) =>{
    res.send(projectData).status(200).end();
});

app.post('/postData',(req,res)=>{
    projectData={
        temp:req.body.temp,
        date:req.body.date,
        content:req.body.content
    };
    res.send(projectData).status(200).end();
});