const express = require('express');

const app = express();
// create var to ref out routes.
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

// configuration statment config the public folder to read from it static content
app.use(express.static('public')); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// create connection to our routes folders. this is routes defined if i recive req at the end of it slash / it will go to this difen and find all the slashes and proceed to do w/e that an. fnc

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// start server.this is where we start our server on this port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
