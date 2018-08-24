require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')

const app = express();
const port = process.env.PORT || 3002;


massive( process.env.CONNECTION_STRING )
.then( dbInstace => {           
    console.log('this is my copy of my DB',dbInstace)
  app.set('db',dbInstace)
})
.catch(error => console.log('ERROR', error));



app.listen(port, () => {
  console.log(`Server is UP and listening on port ${port}.`)
});
