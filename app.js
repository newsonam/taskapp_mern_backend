const express=require('express');
const app=express();
const cors = require("cors");
app.use(cors());
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const PORT=process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(require('./router/taskroutes'));
app.listen(PORT);