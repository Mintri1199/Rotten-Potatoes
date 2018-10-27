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
  Review.create(req.body).then((review) => {
    console.log(review)
    // Grave accents. not single quotes
    res.redirect(`/reviews/${review._id}`) // Redirect to reviews/:id
  }).catch((err) => {
    console.log(err.message)
  })
})
//Error
// SHOW
app.get('/reviews/:id', (req,res) => {
    Review.findById(req.params.id).then((review) => {
        res.render("reviews-show", {review: review})
    }).catch((err) => {
        console.log(err.message);
    })
});






app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
