const app = require('express')()
const Comment = require('../models/comment.js')

// NEW Comment
app.post('/reviews/comments', (req, res) => {
    Comment.create(req.body).then(comment => {
        res.redirect(`/reviews/${comment.reviewId}`)
    }).catch((err) => {
        console.log(err.message);
    })
})

// Delete
app.delete("/reviews/comments/:id", (req, res) => {
    console.log("Delete comment");
    Comment.findByIdAndRemove(req.params.id)
    .then((comment) => {
        res.redirect(`/reviews/${comment.reviewId}`)
    }).catch((err) => {
        console.log(err.message);
    })
})


module.exports = app
