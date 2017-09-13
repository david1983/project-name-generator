let adjectives = require("./adjectives")
let nouns = require("./nouns")
let adverbs = require("./adverbs")
let verbs = require("./verbs")

function prepare(arr){
   return arr
      .filter((i)=>(!i.match("_")))
      .filter((i)=>(!i.match("-")))
      .filter((i)=>(i.charAt(0) !== i.charAt(0).toUpperCase()))
}

adjectives = prepare(adjectives)
nouns = prepare(nouns)
adverbs = prepare(adverbs)
verbs = prepare(verbs)


module.exports = {adjectives, nouns, adverbs, verbs}