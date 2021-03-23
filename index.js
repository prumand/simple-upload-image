const express = require('express')
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


process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);



function shutDown() {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
  })
}
