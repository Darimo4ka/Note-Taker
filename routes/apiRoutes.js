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
    })    
//  posting note function route 
 router.post('/notes', (req, res) => {
    console.log(req.body)
    Helper
        .addNote(req.body)
        .then(note => {
           return res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
 })    
// })

// delete function 

router.delete('/notes/:id', (req, res) => {
    Helper
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))

 })
module.exports = router;

