//3. party modules
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//core modules
const ejs = require('ejs');
// const path = require('path');

//modules created by us
// const Post = require('./models/Post');
const pageControllers = require('./controllers/pageControllers');
const postControllers = require('./controllers/postControllers');
const config = require('./config');

const app = express();

app.set('view engine', 'ejs'); //express template engine olarak ejs kullanacağız diyoruz.

//connect db
mongoose.connect(`mongodb+srv://${config.USER_ID}:${config.USER_KEY}@cluster0.1ziix19.mongodb.net/?retryWrites=true&w=majority`,{//'mongodb://127.0.0.1:27017/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method' , {
  methods:['POST', 'GET'] //hangi methodların gerektiğinde override yapılmasını belirttik. html PUT VE DELETE requesti bu methodları override yaparak kullanıyor.
})); 


//ROUTES
app.get('/',postControllers.getAllPosts); //list all posts
app.get('/posts/:id', postControllers.getPost);// get a post
app.post('/posts', postControllers.createPost ); //create a post mongodb
app.delete('/posts/:id', postControllers.deletePost); //delete a post
app.put('/posts/:id', postControllers.updatePost);//update post

app.get('/about', pageControllers.getAboutPage);//about sayfası 
app.get('/add_post', pageControllers.getAddpostPage); //add_post sayfası
app.get('/posts/edit/:id',pageControllers.getEditPage); //edit page yönlendirme



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı. `);
});