const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`<form method="POST" action="/upload-multiple-images" enctype="multipart/form-data">
  <div>
      <label>Select multiple images:</label>
      <input type="file" name="multiple_images" multiple />
  </div>
  <div>
      <input type="submit" name="btn_upload_multiple_images" value="Upload" />
  </div>
</form>`)
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, '/uploaded-files/');
  },

  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
});

app.post('/upload-multiple-images', (req, res) => {
  // 10 is the limit I've defined for number of uploaded files at once
  // 'multiple_images' is the name of our file input field
  let upload = multer({ storage: storage }).array('multiple_images', 10);

  upload(req, res, function(err) {
      let result = `You have uploaded ${req.files.length} files`;
      res.send(result);
  });
});


process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);



function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
  })
}
