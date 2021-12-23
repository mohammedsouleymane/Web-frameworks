const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/about.html'))
})
app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get("/store.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/store.html'))
})

app.get("/products.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/products.html'))
})
app.listen(3000, () => {
    console.log("listening op port 3000");
})