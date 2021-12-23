const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))
app.use(express.json())
app.use(express.kurlencoded({ extended: false }))
differnce = 1
pokemons = require("./pokedex.json")
app.get("/", (req, res) => {
    res.send(pokemons)
})

app.get("/:id", (req, res) => {
    res.send(pokemons[parseInt(req.params.id) - 1])
})

app.delete("/:id", (req, res) => {

    pokemons.splice(parseInt(req.params.id) - differnce, 1)
    differnce++
    res.send(pokemons)
})
app.listen(3000, () => {
    console.log("listening op port 3000");
})