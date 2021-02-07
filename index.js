const fs = require('fs')
const recipe = JSON.parse(fs.readFileSync('./recipe.json','utf-8'))
const {PeanutButter,ChocolateButter, ChocolateCheese, ChocolateChip} = require('./listCookies')


class CookiesFactory{
    static create(recipe){
        let result = []
        for (let i = 0; i < recipe.length; i++) {
            if(recipe[i].Name === 'Peanut Butter Cookies'){
                result.push(new PeanutButter)
            }else if(recipe[i].Name === 'Chocolate Chip Cookies'){
                result.push(new ChocolateChip)
            }else if(recipe[i].Name === 'Chocolate Cheese Cookies'){
                result.push(new ChocolateCheese)
            }else if(recipe[i].Name === 'Chocolate Butter Cookies'){
                result.push(new ChocolateButter)
            }
        }
        return result
    }

    static NoSugar(days,recipe){
        let result = []
        let counter = 0
        for (let i = 0; i < recipe.length; i++) {
            for (let j = 0; j < recipe[i].Ingredients.length; j++) {
                if (recipe[i].Ingredients[j].name === 'sugar') {
                counter ++
                }
            }
        //    console.log(counter);
            if (counter === 0) {
                result.push(recipe[i].Name)
            }
            counter = 0
        }
        return `Hari ${days} kue tanpa gula adalah ${result}`
    }
}

let batchOfCookies = CookiesFactory.create(recipe)
for (let i = 0; i < batchOfCookies.length; i++) {
    console.log(batchOfCookies[i]);
    
    
}

let noSugar = CookiesFactory.NoSugar('selasa',recipe)
console.log(noSugar);