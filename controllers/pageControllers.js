const Post = require('../models/Post');

//about sayfası yönlendirme
exports.getAboutPage = (req, res) => {
    res.render('about');
  };

//add post sayfası yönlendirme
exports.getAddpostPage = (req, res) => {
    res.render('add_post');
  };

//edit sayfası yönlendirme
exports.getEditPage =  async (req,res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('edit_post',{
      post
    });
  };