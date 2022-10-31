const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    default : 'Ybtorun',
  },
});

//create model
const Post = mongoose.model('Post',PostSchema);
module.exports = Post;