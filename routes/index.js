var express = require('express');
var router = express.Router();
var multer = require('multer');
var sharp = require('sharp');


var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'public/uploads/')
    },
    filename: function (req,file,cb){
        cb(null,file.originalname);
    }
});

var upload = multer({storage: storage }).single('imageUpload');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/',upload, function(req,res,next){
console.log(req.file);
let width = 100;
let height = 100;

//configure sharp
sharp(req.file.path)
    .resize(width,height)
    .toFile('public/uploads/thumb/thumb_'+ req.file.originalname, function (err) {
        if(!err){
            res.write("File uploaded successfully.");
            res.end();
        }
    });
});


module.exports = router;
