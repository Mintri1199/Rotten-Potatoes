const express = require('express')
const app = express()
const Review = require("./model/Review")
const mongoose = require('mongoose');
var exphbs =  require('express-handlebars');
const bodyParser = require('body-parser');

// Middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true}));

// db connection
mongoose.connect('mongodb://localhost/rotten-potatoes')

// Routes
// Index
app.get("/", (req, res) => {
    Review.find()
    .then(reviews => {
        res.render('reviews-index', {reviews: reviews});
    }).catch(err => {
        console.log(err);
    })
})

// New
app.get("/reviews/new", (req, res) => {
    res.render('reviews-new', {});
})

// Create
app.post('/reviews', (req, res) => {
    console.log(req.body);
    Review.create(req.body)
    .then((review) => {
        console.log(review);
        res.redirect("/")
    }).catch((err) => {
        console.log(err);
    })
})








app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
