const express = require('express');
const multer = require('multer');
//const cv = require('node-opencv');


const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' }); // Configure upload directory

/*
cv.onRuntimeInitialized = () => {

   console.log("... processing image...");
  
  // Code to execute after OpenCV.js is loaded

  const src = cv.imread('./img/square.jpg'); // Load an image

  // Perform OpenCV operations (example: convert to grayscale)
  const dst = new cv.Mat();
  cv.cvtColor(src, dst, cv.COLOR_BGR2GRAY);

  // Display or save the result (requires additional libraries or methods)
  // ...

  src.delete();
  dst.delete();

};
*/

/*
app.post('/api/upload-image', upload.single('image'), async (req, res) => {
  try {
    const image = await cv.imread(req.file.path);

    const shapes = [];

    // Circle detection
    //const circles = await cv.HoughCircles(image, cv.HOUGH_GRADIENT, 1, 2, 100, 50, 0, 0);
    for (const circle of circles) {
      shapes.push('Circle');
    }

    // Triangle detection (more complex, requires further implementation)
    // Replace with your triangle detection logic using OpenCV functions
    // shapes.push(...detectTriangles(image));

    // Square detection (more complex, requires further implementation)
    // Replace with your square detection logic using OpenCV functions
    // shapes.push(...detectSquares(image));

    res.json({ shapes });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Error processing image');
  }
});
*/

app.listen(port, () => console.log(`Server listening on port ${port}`));