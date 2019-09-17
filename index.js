const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')

//hbs
const exphbs = require('express-handlebars')
//settings
app.set('port', process.env.PORT || 3000)
//hbs
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/user'));

//static files
app.use('/public', express.static(path.join(__dirname,'./public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
}); 