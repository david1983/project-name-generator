const express = require("express")
const app = express()
const wordnet = require("./wordnet/wordnet")
app.use(express.static('public'))

function pickRnd(arr){
   return arr[Math.floor((Math.random()*arr.length))]
}
function generateName(){
   return pickRnd(wordnet.adverbs) + "-" + pickRnd(wordnet.adjectives) + "-" + pickRnd(wordnet.nouns)
}

app.get('/api/generate',(req, res)=>{
   res.json({name: generateName()})
})

const port =  process.env.PORT || 8882;
app.listen(port,()=>{
   console.log("Listening on port: " + port)
})