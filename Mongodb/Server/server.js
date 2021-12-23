const express = require('express')
const mongo = require("mongodb")
const mongoClient = require("mongodb").MongoClient;
var db;
const app = express()
const path = require('path')
const dbName = "JournalDB"
const url = "mongodb://localhost:27017"
const cors = require('cors')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());



mongoClient.connect(url, (err, client) => {

    if (err != null) {
        console.log(err.message)
        throw err;
    }

    db = client.db(dbName)
    console.log("connect to Mongo")
})

app.get("/posts", (req, res) => {
    db.collection("journal").find().toArray(function(err, posts) {
        if (!err)
            res.json(posts)
        else
            res.json(err)
    })
})

app.post("/posts", (req, res) => {
    db.collection("journal").insertOne(req.body, function(err, result) {
        if (!err)
            res.json(result)
        else
            res.json(err)
    })
})

app.delete("/posts/:id", (req, res) => {
    var key = { "_id": mongo.ObjectId(req.params.id) }
    db.collection("journal").deleteOne(key, function(err) {
        if (!err)
            res.status(204)
        else
            res.json(err)
    })
})


app.put("/posts/:id", (req, res) => {
    var key = { "_id": mongo.ObjectId(req.params.id) }
    db.collection("journal").updateOne(key, { $set: req.body }, function(err, result) {
        if (!err)
            res.json(result)
        else
            res.json(err)
    })
})
app.listen(3000, () => {
    console.log("listening op port 3000");
})