const mongoose =  require('mongoose')

const ReviewSchema = mongoose.Schema({
    title: String,
    movieTitle: String
})

module.exports = mongoose.model('Review', ReviewSchema);
