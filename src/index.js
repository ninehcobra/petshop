const express = require('express');
const path = require('path');
const morgan = require('morgan'); 
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;
app.use(express.json()); app.use(express.urlencoded({ extended: true}));
const db= require('./config/db')

//connect db
db()


const route= require('./routes/index.js')

//get path


app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources\\views'))

//route init
route(app)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});