const { Router } = require('express');
const express = require('express')
const app = express();
const port = 3030
const insertrouter = require('./router/insert');
const findrouter = require('./router/find');
const updaterouter = require('./router/update');
const deleterouter = require('./router/delete');
const mongoose = require('mongoose');
const bodyparse = require('body-parser');




mongoose.connect('mongodb://mongo:rXqLAkgDbNJZITyj08xJ@containers-us-west-68.railway.app:5576')
.then(() => console.log('Connected!'))
.catch((err) => console.log(err))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
  res.send('Good Morning!')
})

app.use(bodyparse())
app.use('/',insertrouter);
app.use('/',findrouter);
app.use('/',updaterouter);
app.use('/',deleterouter);
app.use(express.json());



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;