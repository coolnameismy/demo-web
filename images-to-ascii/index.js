// Dependencies
var ImageToAscii = require("image-to-ascii");
var __dirname = "./images/";



// Convert to ascii this image
// ImageToAscii(__dirname + "/github.jpeg", function(err, converted) {
// 	console.log("1");
//     console.log(err || converted);
// });


ImageToAscii(__dirname + "5.jpg", function(err, converted) {
	console.log("1");
    console.log(err || converted);
});

