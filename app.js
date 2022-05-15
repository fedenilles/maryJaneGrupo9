const express = require ("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require ("path");

app.listen(3000, () => console.log(`servidor corriendo en el puerto ${PORT}`));

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
});