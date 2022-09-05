const createError = require('http-errors');	//si tenemos tiempor para jugar pagina 404
const cookieParser = require('cookie-parser');
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require ("path");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');

/* Middlewares */
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');

/* Rutas */
const mainRoutes =require("./routes/mainRoutes");
const productsRoutes =require("./routes/productsRoutes");
const usersRoutes =require("./routes/usersRoutes");
const apiUsersRoutes =require("./routes/api/apiUsersRoutes");
const apiProductsRoutes =require("./routes/api/apiProductsRoutes");

/* App USE!!! */

app.use(express.static(__dirname + '/public'));
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));
app.use(cookieParser());
app.use(userLoggedMiddleware);
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use("/",mainRoutes)
app.use("/products",productsRoutes)
app.use("/users",usersRoutes)
app.use("/api/users",apiUsersRoutes)
app.use("/api/products",apiProductsRoutes)


app.listen(3000, () => console.log(`servidor corriendo en el puerto ${PORT}`));