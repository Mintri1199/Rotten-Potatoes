const express = require('express')
const app = express()
//const Review = require("./model/Review")
const mongoose = require('mongoose');
var exphbs =  require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require("method-override")
// Explain this line
const reviews = require('./controllers/reviews');

// Middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'))
app.use(reviews)

// db connection
mongoose.connect('mongodb://localhost/rotten-potatoes')

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app
