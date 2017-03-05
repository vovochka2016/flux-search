const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const STATIC_PATH = path.join(__dirname,'build');
app.use(express.static(STATIC_PATH));

app.get('*', (req, res) => {
  res.sendFile(path.join(STATIC_PATH,'index.html'))
});

app.listen(PORT, () =>{
  console.log(`Express server started on port ${PORT}`)
});