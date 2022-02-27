// express wants you to build out your server-related pieces before the frontend pieces, and it wants your setup for the routes (the server) before the routes. So you have to build it in that order; 


const express = require('express');

// create var to ref out routes.
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3001;
//  first declare app.use(express.json()) to set the base of server:
app.use(express.json());

// to establish the url encoding
app.use(express.urlencoded({extended: true}));

// configuration statment config the public folder to read from it static content
app.use(express.static('public')); 
// create connection to our routes folders. this is routes defined if i recive req at the end of it slash / it will go to this difen and find all the slashes and proceed to do w/e that an. fnc
// to declare your api routes before your static html routes
app.use('/api', apiRoutes);

app.use('/', htmlRoutes);


// start server.this is where we start our server on this port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
