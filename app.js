const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'njk');
nunjucks.configure('views', {
    express: app,
});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/portfolio', (req, res, next) => {
    res.render('portfolio');
});

app.get('/about', (req, res, next) => {
    res.render('about');
}); 

app.use((req, res, next) => {
    res.redirect('/');
});

app.listen(process.env.PORT || 3000, console.log('App running...'));
