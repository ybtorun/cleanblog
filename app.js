const express = require('express');
const app = express();
const ejs = require('ejs');

const path =require('path');

//1. homework
// app.get('/', (req, res) => {
//   const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
//   res.send(blog);
// });

app.use(express.static('public'));//Middlewares

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'temp/index.html'));
// });

app.set('view engine', 'ejs');  //express template engine olarak ejs kullanacağız diyoruz.

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı. `);
});
