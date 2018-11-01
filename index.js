// INITIALS
const express = require('express')
const app = express();
var mongoose = require('mongoose');
var exphbs =  require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require("method-override")
const reviews = require('./controllers/reviews');
const port =  process.env.PORT || 3000;


// Middleware
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rotten-potatoes", { useNewUrlParser: true})
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'))
app.use(reviews)

app.listen(port);

module.exports = app
