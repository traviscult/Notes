const fs = require('fs');

class Store {
    constructor(){

    }
    read(){
        fs.readFile("db/db.json", (err, data) => {
            res.write(data);
            return res.end();
        })
    }

    write(newNote){
        fs.writeFile("db/db.json", JSON.stringify(newNote), (err) => {
            if(err) throw (err);
            console.log("note saved")
        })   
    }

    getNotes(){
        return this.read().then((notes) => { 
            let parseNotes = JSON.parse(notes);
            return parseNotes;
        })
        
    }

    addNotes()
    // take a note in param

    removeNote() 
    // will use an id in param
}