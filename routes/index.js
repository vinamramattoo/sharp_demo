var express = require('express');
var router = express.Router();
var multer = require('multer');
var sharp = require('sharp');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({storage: storage}).single('imageUpload');


/* GET home page. */
router.get('/', function (req, res, next) {

    //TODO :: final code to automate full thing
    // var walkSync = function (dir, filelist) {
    //     var fs = fs || require('fs'),
    //         files = fs.readdirSync(dir);
    //     files.forEach(function (file) {
    //         if (fs.statSync(dir + '/' + file).isDirectory()) {
    //             filelist = walkSync(dir + '/' + file + '/', filelist);
    //         } else {
    //             filelist.push(dir + file);
    //         }
    //     });
    //     return filelist;
    // };
    //
    // let filelist = [];
    // let result = walkSync('/home/vinamra/eclipse-workspace/imagine/public/uploads/', filelist);
    // console.log(result);


    const testFolder = 'public/uploads/';
    const fs = require('fs');

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);

            sharp('public/uploads/' + file)
                .rotate(45)
                .toFile('public/thumb/thumb_45_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_45deg_ image" + file);
                    }
                    else {
                        console.log("failed to thumb_45deg_ convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .rotate(90)
                .toFile('public/thumb/thumb_90_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_90deg_ image" + file);
                    }
                    else {
                        console.log("failed to thumb_90deg_ convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .rotate(180)
                .toFile('public/thumb/thumb_180_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_180deg_ image" + file);
                    }
                    else {
                        console.log("failed to thumb_180deg_ convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .rotate(225)
                .toFile('public/thumb/thumb_225_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_225deg_ image" + file);
                    }
                    else {
                        console.log("failed to thumb_225deg_ convert image" + file);
                    }
                });
            sharp('public/uploads/' + file)
                .rotate(270)
                .toFile('public/thumb/thumb_270_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_270deg_ image" + file);
                    }
                    else {
                        console.log("failed to thumb_270deg_ convert image" + file);
                    }
                });


            sharp('public/uploads/' + file)
                .sharpen(2, 3, 5)
                .greyscale()
                .toFile('public/thumb/thumb_sharpandgrey_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_sharpandgrey_ image" + file);
                    }
                    else {
                        console.log("failed to thumb_sharpandgrey_ convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .greyscale()
                .sharpen(2, 3, 5)
                .toFile('public/thumb/greythensharp' + file, function (err) {
                    if (!err) {
                        console.log("converted greythensharp image" + file);
                    }
                    else {
                        console.log("failed to greythensharp convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .sharpen()
                .toFile('public/thumb/thumb_sharpdefault_' + file, function (err) {
                    if (!err) {
                        console.log("converted sharpdefault image" + file);
                    }
                    else {
                        console.log("failed to sharpdefault convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .greyscale()
                .toFile('public/thumb/thumb_grey_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_grey_ image" + file);
                    }
                    else {
                        console.log("failed to thumb_grey_ convert image" + file);
                    }
                });


            sharp('public/uploads/' + file)
                .sharpen(2, 3, 5)
                .toFile('public/thumb/thumb_sharp_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_sharp image" + file);
                    }
                    else {
                        console.log("failed to thumb_sharp convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .blur(2)
                .toFile('public/thumb/thumb_blur_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_blur image" + file);
                    }
                    else {
                        console.log("failed to thumb_blur convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .blur(5)
                .toFile('public/thumb/thumb_moreblur_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_moreblur image" + file);
                    }
                    else {
                        console.log("failed to thumb_moreblur convert image" + file);
                    }
                });

            sharp('public/uploads/' + file)
                .gamma(3)
                .toFile('public/thumb/thumb_gamma_' + file, function (err) {
                    if (!err) {
                        console.log("converted thumb_gamma image" + file);
                    }
                    else {
                        console.log("failed to thumb_gamma convert image" + file);
                    }
                });
        });
    });
});


router.post('/', upload, function (req, res, next) {

    const testFolder = 'public/uploads/';
    const fs = require('fs');

    fs.readdir(testFolder, (err, dirfiles) => {
        dirfiles.forEach(file => {
            if(file.isDirectory()){
                fs.readdir(file, (err, files) => {
                    files.forEach(file => {
                            console.log(file);

                    });
                });
            }

        });
    });

});


module.exports = router;
