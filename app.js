const path = require('path');

const express = require('express');
// "bodyParser" extract the entire body from  incoming request stream
const bodyParser = require('body-parser');
const expressHBS=require('express-handlebars');
const app = express();
// 'engine' is a method ,which will tell to express to register a template engine which  we r providing
// "handlerbars" is the name given to templatenging,expressHBS is constant which have all library of all the templates
// app.engine('handlerbars',expressHBS)
//" defaultLayout" name of the file
app.engine('hbs',expressHBS({extname:'hbs',layoutsDir:'views/layouts',defaultLayout:'main-content'}));
// setting engine:'
app.set('view engine','hbs');
app.set('views','views');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404',{pageTitle:'page not found'});
});

app.listen(3000);
