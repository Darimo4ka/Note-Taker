const path = require('path');

// req esxpress router

const router = require('express').Router()

// setting up get routers: 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
  );
//   export 
 module.exports = router;
