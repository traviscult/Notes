// const fs = require('fs');
const notes = require()
const router = require('express').Router();

router.get('/notes', (req, res) =>{
    res.json(notes)
}) 

router.post('/notes', (req, res) =>{
    res.json(notes)
})

router.delete('/notes/:id', (req, res) =>{
    res.json(notes)
})

module.exports = router