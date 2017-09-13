const express = require("express")
const app = express()
const cors = require("cors");
const wordnet = require("./wordnet/wordnet")

// app.use(cors())
app.use(express.static('public'))


function pickRnd(arr){
   return arr[Math.floor((Math.random()*arr.length))]
}

function generateName(){
   return pickRnd(wordnet.adverbs) + "-" + pickRnd(wordnet.adjectives) + "-" + pickRnd(wordnet.nouns)
}

app.get('/api/',(req, res)=>{
   res.json({version: 1})
})

app.get('/api/generate',(req, res)=>{
   res.json({name: generateName()})
})

const port =  process.env.PORT || 8883;
app.listen(port,()=>{
   console.log("Listening on port: " + port)
})