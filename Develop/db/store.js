const fs = require('fs');


class Store {
    constructor(){

    }
    read(){
        fs.readFile("./db.json", "utf8", function (err, res) {
            // res.write(data);
            console.log("res", res)
            return res;
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

    addNotes(){
       let notesArray = this.getNotes();
       console.log(notesArray);


    }
    // grab the notes add the new one then write to db json
    // take a note in param

    // removeNote() 
    // will use an id in param
}

module.exports = new Store()