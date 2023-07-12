const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();



const port = 8080;
const dataPath = './db.json';

app.use(cors())

app.get('/api/data', (req, res) => {
  
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) throw err
    res.json(JSON.parse(data))
  }) 
  
  
})

app.listen(port, () => {
  console.log('Server running in port 8080');
})