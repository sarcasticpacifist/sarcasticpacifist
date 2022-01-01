const express = require('express');
const hbs = require('hbs');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

//Default Paths for public and views
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlerbar engin and views location
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

//Setup static dir for server
app.use(express.static(publicPath));

//Default page
app.get('/', (req,res) => {
    console.log('home page');
    res.render('index', {
        title: 'This is home page!!!'
    });
});

//lisening incomming req
app.listen(port, (e) => {
    console.log('Server started!!');
});