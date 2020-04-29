// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

const apiRoutes = require("./Routes/apiRoutes")
const htmlRoutes = require("./Routes/htmlRoutes.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use("/", htmlRoutes)

app.use("/api", apiRoutes )


app.listen(PORT, () =>{
    console.log(`The app is listening on port: ${PORT}`)
})