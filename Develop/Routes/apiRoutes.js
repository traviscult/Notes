// const fs = require('fs');
// const util = require('util');
const store = require('../db/store')
const router = require('express').Router();
const db = require ("../db/db.json")

console.log (db)



router.get('/notes', (req, res) =>{
    // let createdNote = req.params.notes;
    // console.log(createdNote);
    // res.json(createdNote)

 
}) 

router.post('/notes', (req, res) =>{
    let newNote = req.body;   
    console.log ("this is being logged", newNote);
    store.addNotes(newNote);
    
    res.json(newNote)
})

router.delete('/notes/:id', (req, res) =>{
    res.json(notes)
})

module.exports = router