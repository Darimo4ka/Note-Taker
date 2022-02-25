// //  create connection to this folder
const path = require('path');

// req esxpress router
const router = require('express').Router();
const fs = require('fs');
const util = require('util');

router.get('/notes', (req, res) => {
    // Send data from db
    readFromFile(path.join(__dirname, "db/db.json"))
        .then((data) => res.json(JSON.parse(data)));
});
// Route that sends the user the db.json file
// router.get("/api/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "db/db.json"));
// });
//   export 
module.exports = router;

