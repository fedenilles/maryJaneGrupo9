const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require ("path");
const mainRoutes =require("./routes/mainRoutes");
const productsRoutes =require("./routes/productsRoutes");
const usersRoutes =require("./routes/usersRoutes");


app.listen(3000, () => console.log(`servidor corriendo en el puerto ${PORT}`));

app.use(express.static(__dirname + '/public'));

app.use("/",mainRoutes)
app.use("/product",productsRoutes)
app.use("/user",usersRoutes)


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));