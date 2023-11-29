import express from 'express';
import {engine} from "express-handlebars";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import session from "express-session"

const app = express()

app.get('/',async function(req,res){
    res.send('This is an expense tracker app') 
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log('🚀 App has started on', PORT);
})