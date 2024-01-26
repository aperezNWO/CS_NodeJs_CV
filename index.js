/*
const Tesseract = require('tesseract.js');

async function recognizeText(imagePath) {
  const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
  console.log(text);
}

//recognizeText('01.jpeg');
// A B C 
//recognizeText('02.jpeg');
// FAIL
recognizeText('03.png');
*/
//----------------------------------

//
//import { recognize } from "node-native-ocr";
//import fs from "fs-extra";

/*
//------------------------------------------------
const recognize = require("node-native-ocr");
const path      = require('path');
const fs        = require("fs-extra");
const filepath  = '01.jpeg';

//
const filepath = path.join(
  __dirname,
  "test",
  "fixtures",
  "01.jpeg"
);

//
fs.readFile(filepath).then(recognize).then(console.log); // 'node-native-ocr'
*/
//-----------------------------------------------
/*

// In the main process.
// In the main process.
const BrowserWindow  = require('electron')
const mainWindow     = new BrowserWindow({ width: 800, height: 600 })

mainWindow.capturePage(
  {
    x: 10,
    y: 10,
    width: 100,
    height: 10,
  },
  (data) => {
    const appPath = (electron.app || electron.remote.app).getAppPath();
    const tessdataPath = path.resolve(appPath, ocrPackagePath, "tessdata");
    recognize(data.toPNG(), {
      lang: ["eng", "ita"],
      // output can be 'tsv' or 'txt'
      output: "txt",
      tessdataPath,
    }).then(console.log);
  }
);
*/
//------------------------------------------------
/*
//index.js file
const Tesseract= require('tesseract.js');
Tesseract.recognize(
// this first argument is for the location of an image it can be a //url like below or you can set a local path in your computer
//'https://tesseract.projectnaptha.com/img/eng_bw.png',
//'03.png',
//'02.jpeg',
//'01.jpeg',
// this second argument is for the laguage 
'eng',
{ logger: m => console.log(m) }
).then(({ data: { text } }) => {
console.log(text);
})
*/

//--------------------------------------------------
/*
const NodeWebcam = require('node-webcam');

const opts = {
  width: 1280,
  height: 720,
  quality: 100,
  delay: 0,
  saveShots: true,
  output: "jpeg",
  device: false,
  callbackReturn: "location"
};

NodeWebcam.capture("test_picture", opts, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log("Image captured:", data);
  }
});
*/
//--------------------------------------------------

//----------------------------------------------------
/*
const Tesseract = require('tesseract.js');

async function solveSudokuFromImage(imagePath) {
  try {
    const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');

    // Parse the grid from the extracted text
    //const grid = parseGridFromText(text);

    // Solve the Sudoku using a solver algorithm
    //const solvedGrid = solveSudoku(grid);

    // Display or use the solved grid
    //console.log(solvedGrid);
	console.log(text);

  } catch (error) {
    console.error('Error solving Sudoku:', error);
  }
}

// 04.webp --> "Mild Splendour"
// 05.jpeg --> 2
// 06.jpg  --> FAIL
// 07.png  --> ALMOST OK
// 08.png  --> ALMOST OK
// 09.png  --> ALMOST OK
// 10.PNG  --> FAIL

solveSudokuFromImage('img/11.JPEG');
*/

//----------------------------------------------------
// image processing , get size
//----------------------------------------------------
/*  
sharp('img/12_CAPTUERED.jpeg').metadata()
  .then(metadata => {
    console.log('Image size:', metadata.width, 'x', metadata.height);
  })
  .catch(err => {
    console.error(err);
  });
*/
// img/12_CAPTUERED.jpeg --> 900 x 1600

/*
//----------------------------------------------------
// image processing , CUT 
//----------------------------------------------------

const sharp = require('sharp');

sharp('img/12_CAPTUERED.jpeg')
  .extract({ left: 5, top: 5, width: 875, height: 860 }) // Define crop dimensions
  .toFile('img/17_CAPTUERED_output.jpg', (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Image cropped:', info);
    }
  });
// img/12_CAPTUERED_OUTPUT.jpeg --> OK
// img/17_CAPTUERED_OUTPUT.jpeg --> OK

*/

//----------------------------------------------------
// image processing , slice
//----------------------------------------------------
//
/*
const sharp     = require('sharp');
//
let width      = 857;
let height     = 860;
let left       = 5;
let top        = 5;
let box_size   = 9;
let box_width  = Math.abs(Math.floor(width/box_size));
let box_height = Math.abs(Math.floor(height/box_size));
let _width     = parseInt(box_width);
let _height    = parseInt(box_height);
let i          = 1;
let imgCount   = 1;
let input_path = 'img/17_CAPTUERED_output.jpg';
//
console.log("BoxSize width : " + box_width + ",height:" + box_height);
//
while (i <= box_size)
{	
	let j = 1;
	//
	while (j <= box_size)	
	{
		//	
	    let _left       = left   + (_width*(j-1));
		let _top        = top    + (_height*(i-1));
		let _outputPath = 'img/boxes/boxes_' + (imgCount)+ '.jpg';
		//
		console.log("left : " + _left + ",top:" + _top);
		//
		console.log("Image Count : " + imgCount);
		//
		console.log("Image Name: "   + _outputPath);
		//
		imgCount++;
		//
		j++;
		//
		sharp(input_path)
		  .extract({ left  : _left, 
		             top   : _top, 
					 width : _width, 
					 height: _height }) // Define crop dimensions
		  .toFile(_outputPath, (err, info) => {
			if (err) {
			  console.error(err);
			} else {
			    //	
			    //console.log('Image cropped:', info);
			}
		  });
	}
  	//	
    i++;	  
};	  
*/


/*
//----------------------------------------------------
// image processing -  ocr - scan
//----------------------------------------------------
// 
const Tesseract  = require('tesseract.js');
const fs         = require('fs');
let imageCount   = 1;
let i            = 1;
//
while (i < 9)
{	
   //
   let j = 1;
   //
   while(j < 9)
   {
	    //
	    let __outputPath = 'img/boxes/boxes_' + imageCount + '.jpg';
		//let __outputPath = 'img/boxes/boxes_1.jpg';
		j++;
		//
		imageCount++;
		//
		Tesseract.recognize(
			__outputPath,
			// this second argument is for the laguage 
			'eng',
			{ logger: m => console.log(m) }
			).then(({ data: { text } }) => {
				//
				let msg = "fileName : " + __outputPath + ", scanned text : " + text + "\n";
				//
				console.log(msg);
				//
				fs.appendFile('saveLog.txt', msg, (err) => {
				  if (err) {
					//  
					console.error(err);
				  } 
				  else {
					//  
					console.log('File saved successfully!');
				  }
				});
		});
    }
    //
    i++;	
}
*/

//----------------------------------------------------
//----------------------------------------------------



/*
// First, initiate the Optiic lib
const Optiic = require('optiic');
const optiic = new Optiic({apiKey: '9qxyzxFN1dNrrUAKNfHqJNbB4mU883uMyPaEjFEhdCXQ'});
// You can also supply a local image file
optiic.process({
image: 'img/boxes/png/boxes_45.png'
})
.then(result => console.log('result : ' + result));
*/

//----------------------------------------------------
// image processing -  sub crop
//----------------------------------------------------
const sharp       = require('sharp');
const fs          = require('fs');
const Tesseract   = require('tesseract.js');
const logFilePath = 'saveLog.txt';
//
let metadata_width = 900;
let __left         = 15;
let __top          = 10;
let __width        = 0;// calc ahead metadata_width - __left;
let __height       = 0;// calc ahead metadata_width - __top;
//
let padding    = 20;
let box_size   = 9;
let box_width  = 0; // calc ahead parseInt(Math.abs(Math.floor(__width/box_size)));
let box_height = 0; // calc ahead parseInt(Math.abs(Math.floor(__height/box_size)));
//
let imgExtension  = 'jpeg'
let captureNumber = 25;
let imgPrefix     = 'img/captures/'+ captureNumber + '_CAPTURED';
let sourcePath    = imgPrefix + '.'        +  imgExtension;
let input_path    = imgPrefix + '_output.' +  imgExtension;

///
function getFileSize()
{

	sharp(sourcePath).metadata()
	  .then(metadata => {
		//  
		console.log(sourcePath + ' : - Image size:' + metadata.width + ' X ' + metadata.height);
		//
		__width        = metadata_width - (padding*2);
	    __height       = metadata_width - (padding*2);
		box_width      = parseInt(Math.abs(Math.floor(__width/box_size)));
		box_height     = parseInt(Math.abs(Math.floor(__height/box_size)));

		//
		deleteMainFile();	
	  })
	  .catch(err => {
		console.error(err);
	});
}  

///
function deleteMainFile()
{
	//	
	if (fs.existsSync(input_path)) {
		//
		fs.unlink(input_path, (err) => {
		  if (err) {
			console.error(err);
		  } 
		  else 
		  {
				///
				console.log('File ' + input_path + ' deleted successfully!');
				
				///
				cropMainFile();
		  }
	    });
	} 
	else 
	{
		///
	    cropMainFile();
	}
}

///
function cropMainFile()
{
		sharp(sourcePath)
		  .extract({ left   : __left, 
					 top    : __top, 
					 width  : __width, 
					 height : __height }) // Define crop dimensions
		  .toFile(input_path, (err, info) => {
			if (err) {
			  console.error(err);
			} else {
			   //		
               cropBoxes(info);
			}
		  });
};

///
function cropBoxes(info)
{
  //	
  console.log('Image path   :' + input_path + "\n");
  console.log('Image cropped:', info);		

    //   
	let i             = 1;
	let imgCount      = 1;

	//
	console.log("BoxSize width : " + box_width + ",height:" + box_height);
    //
	while (i <= box_size)
	{	
		let j = 1;
		//
		while (j <= box_size)	
		{
			//	
			let _left       = __left   + (box_width*(j-1)) /*  + padding*/;
			let _top        = __top    + (box_height*(i-1))/* + padding */;
			let _outputPath = 'img/boxes/png/boxes_' + (imgCount)+ '.' + imgExtension;
			//
			imgCount++;
			//
			j++;
			//
			sharp(input_path)
			  .extract({ left  : _left, 
						 top   : _top, 
						 width : box_width  - (padding *2), 
						 height: box_height - (padding *2) }) // Define crop dimensions
			  .toFile(_outputPath, (err, info) => {
				if (err) {
				  console.error(err);
				} else {
					//
					console.log("left : " + _left + ",top:" + _top);
					//
					console.log("Image Count : " + (imgCount-1));
					//
					console.log("Image Name: "   + _outputPath);
					//	
					console.log('Image cropped:', info);
					//
				}
			  });
		}
		//	
		i++;	  
	};
}
//----------------------------------------------------
// image processing -  ocr - scan - save log
//----------------------------------------------------
//
//
async function _doOcr()
{
	if (fs.existsSync(logFilePath)) {
		//
		fs.unlink(logFilePath, (err) => {
		  if (err) {
			console.error(err);
		  } 
		  else 
		  {
				///
				console.log('File ' + logFilePath + ' deleted successfully!');
		  }
	    });
	} 
	//
	let _imgCount = 1;
	//
	while (_imgCount <= (box_size*box_size))
	{
	  let _outputPath = 'img/boxes/png/boxes_' + (_imgCount)+ '.' + imgExtension;
	  //
		  try {
			//   
			const { data: { text } } = await Tesseract.recognize(_outputPath, 'eng');
			//
			let _msg = _outputPath + " : " + text  + "\n";
			//
			console.log('Extracted Text : ' + _msg);
			// 
			fs.appendFile(logFilePath, _msg, (err) => {
			  if (err) {
				//  
				console.error(err);
				//
				_imgCount = (box_size*box_size) + 1;
			  } 
			  else {
				//  
				console.log('File saved successfully!');
				//
				_imgCount++;
			  }
			});

		  } catch (error) {
			//   
			console.error('Error solving Sudoku:', error);
			//
			_imgCount = (box_size*box_size) + 1;
		  } 
	}
}
//--------------------------------------------------
// DRIVER CODE
//--------------------------------------------------
getFileSize(sourcePath);
_doOcr();
