//3. party modules
const express = require('express');
const mongoose = require('mongoose');

//core modules
const ejs = require('ejs');
const path = require('path');

//modules created by us
const Post = require('./models/Post');

const app = express();

//connect db
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('view engine', 'ejs'); //express template engine olarak ejs kullanacağız diyoruz.

//ROUTES
app.get('/', async (req, res) => { //mongodb de ki tüm postları index sayfasında listeleme
  const posts = await Post.find({})
  res.render('index', {
    posts
  });
});

app.get('/posts/:id', async (req, res) => { //her post için tekil sayfa oluşturma
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
});



app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  console.log(req.body);
  res.render('add_post');
});

app.post('/posts', async (req, res) => { //add post to mongo db
  console.log(req.body);
  await Post.create(req.body);
  res.redirect('/');
});




const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı. `);
});



//1. homework
// app.get('/', (req, res) => {
//   const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
//   res.send(blog);
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'temp/index.html'));
// });