const express = require('express')
const app = express()
const Review = require("./model/Review")
const mongoose = require('mongoose');
var exphbs =  require('express-handlebars');

// Middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set('view engine', 'handlebars');

// db connection
mongoose.connect('mongodb://localhost/rotten-potatoes')

// Index
app.get("/", (req, res) => {
    Review.find()
    .then(reviews => {
        res.render('reviews-index', {reviews: reviews});
    })
    .catch(err => {
        console.log(err);
    })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
