const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    constructor(){

    }
    read(){
        return readFileAsync("db/db.json", "utf8")
    }

    write(newNote){
        return writeFileAsync("db/db.json", JSON.stringify(newNote))   
    }

    getNotes(){
        return this.read().then((notes) => { 
            let parseNotes = JSON.parse(notes);
            return parseNotes;
        })
        
    }

    async addNotes(newNote){
       let notesArray = await this.getNotes();
       console.log(notesArray);
        notesArray.push(newNote);
        console.log("notesArray", notesArray)
        this.write(notesArray);
    }
    // grab the notes add the new one then write to db json
    // take a note in param

    // removeNote() 
    // will use an id in param
}

module.exports = new Store()