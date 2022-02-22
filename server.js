const express = require('express');

const app = express();
// create var to ref out routes.
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// create connection to our routes folders
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// start server
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
