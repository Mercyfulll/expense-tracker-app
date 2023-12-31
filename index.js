import express from 'express';
import {engine} from "express-handlebars";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import flash from "express-flash";
import session from "express-session"
import expenseTracker from './service/expensetracker.js';
import routes from './routes/routes.js';

const app = express()
const pgp = pgPromise()


const connectionString = process.env.DATABSE || 'postgres://crmqbido:l_5NI8cn3s3fJd2KZbkLiMbTXqx9V8_V@flora.db.elephantsql.com/crmqbido'

const db = pgp(connectionString)
const expense = expenseTracker(db)
const route = routes(expense) 

// use the express.static built-in middleware to serve static file 'css'
app.use(express.static('public'))

// set and callback engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//configure session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));

// configure flash
app.use(flash());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', route.home)
app.get('/expense', route.expenditure)
app.post('/expense', route.addExpense)
app.post('/filter', route.filter)

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log('🚀 App has started on', PORT);
})