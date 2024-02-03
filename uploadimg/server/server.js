const express = require('express');
const multer = require('multer');
const cors=require('cors')
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
  
  app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.status(200).json({ message: 'File uploaded successfully.' });
  });

app.listen(port, () => {
console.log("start");
});

