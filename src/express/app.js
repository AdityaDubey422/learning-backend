const express = require("express");
const connection = require("../../config/db")
const app = express()

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/get-form-data", (req, res) => {
    console.log(req.body)
    res.send("Data received")
})

app.get("/about", (req, res) => {
    res.send("about route")
})

app.get("/profile", (req, res) => {
    res.send("profile route")
})


// get method use kiya jaata hai jaaki data ko server se frontend tak le jaaya ja sake and post method use hota hai frotned se data server tak laane ke liye
app.listen(3000)