const express = require('express');
const app = express();
// const cors = require('cors')
// const bodyParser = require('body-parser');
var router = require('./routes/index.js');
const path = require('path'); 


app.listen(process.env.port || 3001);




app.use('/api', router);

// app.get('/api/:userHandle', (req,res)=>{
//   res.send('qpwoee')
// })


app.use(express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
