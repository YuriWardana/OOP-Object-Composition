const fs = require('fs')
const recipe = JSON.parse(fs.readFileSync('./recipe.json','utf-8'))
const Ingredients = require('./ingredients')

class Cookie{
    constructor(name,price){
        this.name = name
        this.price = price
        this.ingredients = this.generateRecipe(recipe)
    }

    generateRecipe(recipe){
        let result = []
        for (let i = 0; i < recipe.length; i++) {
            if (this.name === recipe[i].Name) {
                for (let j = 0; j < recipe[i].Ingredients.length; j++) {
                    // console.log(recipe[i].Ingredients[j].name , recipe[i].Ingredients[j].ammount);
                    result.push(new Ingredients(recipe[i].Ingredients[j].name , recipe[i].Ingredients[j].ammount))  
                }
             return result
            }  
        }
    }
}

module.exports = Cookie