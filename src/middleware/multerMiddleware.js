const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = "";
        if (req.url == "/create") {
            folder = path.join(__dirname, '../public/img/products')
        } else {
            folder = path.join(__dirname, '../public/img/users')
        }

        cb(null, folder);
    },
    filename: function (req, file, cb) {
        let filename = Date.now() + path.extname(file.originalname)
        cb(null, filename);
    }
});

const uploadFile = multer({ storage });

module.exports = uploadFile;