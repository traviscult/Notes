// const fs = require('fs');
// const util = require('util');
const store = require('../db/store')
const router = require('express').Router();
const db = require ("../db/db.json")

console.log (db)

// add uuid to object before you write 

router.get('/notes', (req, res) =>{
//  use store (res.json) add notes to side bar

 
}) 

router.post('/notes', (req, res) =>{
    let newNote = req.body;   
    console.log ("this is being logged", newNote);
    store.addNotes(newNote);
    
    res.json(newNote)
})

router.delete('/notes/:id', (req, res) =>{
    store.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
})


module.exports = router