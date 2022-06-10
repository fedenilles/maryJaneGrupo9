const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require ("path");
const mainController =require("./controllers/mainController");
const mainRoutes =require("./routes/mainRoutes");

app.listen(3000, () => console.log(`servidor corriendo en el puerto ${PORT}`));

app.use(express.static(__dirname + '/public'));
app.use(mainRoutes)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/",mainRoutes);
// app.get("/login",mainController.login);
// app.get("/register",mainController.register);
// app.get("/cart",mainController.cart);
// app.get("/productdetail",mainController.productDetail);

app.get("/productForm.html", (req,res) => {
    res.sendFile(__dirname + '/views/productForm.html');
})


// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });


// app.get('/login.html', (req,res) => {
//     res.sendFile(__dirname + '/views/login.html');
// });

// app.get('/cart.html', (req,res) => {
//     res.sendFile(__dirname + '/views/cart.html');
// });
// app.get('/register.html', (req,res) => {
//     res.sendFile(__dirname + '/views/register.html');
// });

// app.get('/productdetail.html', (req,res) => {
//     res.sendFile(__dirname + '/views/productdetail.html');
// });

