const express =require('express');
const app = express();
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

const cors=require('cors');
app.use(cors());

app.use(express.static('demo'));

const port=8000;
const server =app.listen(port,listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}