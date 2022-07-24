const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require ("path");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const bodyParser = require("body-parser")
const session = require('express-session');

/* Middlewares */
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');

/* Rutas */
const mainRoutes =require("./routes/mainRoutes");
const productsRoutes =require("./routes/productsRoutes");
const usersRoutes =require("./routes/usersRoutes");

/* App USE!!! */

app.use(express.static(__dirname + '/public'));
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookieParser());
//app.use(userLoggedMiddleware);
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));


/* var unless = function(path, middleware) {
    return function(req, res, next) {
        if (path === req.path) {
            return next();
        } else {
            return middleware();
        }
    };
}; */


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use("/",mainRoutes)
app.use("/products",productsRoutes)
/* app.use(unless("/users",userLoggedMiddleware),usersRoutes) */
app.use("/users",usersRoutes)


app.listen(3000, () => console.log(`servidor corriendo en el puerto ${PORT}`));