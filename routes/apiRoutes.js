const router = require('express').Router();

const fs = require('fs');
const Helper = require('../db/helper');

// requesting  notes

router.get('/notes', (req, res) => {
    Helper
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
 // posting note function route 
// delete function 
    })
module.exports = router;

