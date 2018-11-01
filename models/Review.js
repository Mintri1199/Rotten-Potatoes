const mongoose =  require('mongoose')

const ReviewSchema = mongoose.Schema({
    title: String,
    movieTitle: String,
    description: String,
    ratingValue: Number
})

module.exports = mongoose.model('Review', ReviewSchema);
