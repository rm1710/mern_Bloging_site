const mongoose= require('mongoose');


const BlogSchema = new mongoose.Schema({
    title: {String, required: true},
    description: String,
    coverImg:String,
    category: String,
    author: String,
    rating: Number,
    createdAt:{type: Date, default: Date.now},
})

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
