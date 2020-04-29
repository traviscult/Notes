const fs = require('fs');
const util = require('util');
const router = require('express').Router();

router.get('/notes', (req, res) =>{
    // let createdNote = req.params.notes;
    // console.log(createdNote);
    // res.json(createdNote)

    fs.readFile("db/db.json", (err, data) => {
        res.write(data);
        return res.end();
    })
}) 

router.post('/notes', (req, res) =>{
    let newNote = req.body; 

    console.log (newNote);

    res.json(newNote)

    fs.appendFile("db/db.json", JSON.stringify(newNote), (err) => {
        if(err) throw (err);
        console.log("note saved")

    } )   
})

router.delete('/notes/:id', (req, res) =>{
    res.json(notes)
})

module.exports = router