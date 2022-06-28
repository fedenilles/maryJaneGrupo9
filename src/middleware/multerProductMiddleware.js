const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb)
     {
        let folderA = "";
        console.log(req.url);
        if (req.url == "/") {
             folderA = path.join(__dirname, '../public/img/products') 
        }else{
            folderA = path.join(__dirname, '../public/img/users') 
        }
        
        cb(null, folderA);
    },
    filename: function (req, file, cb) {
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName);
    }
});
  

  
const uploadFile = multer({ storage: storage });



module.exports = uploadFile;

  