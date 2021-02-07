const Cookie = require('./Cookie')

class ChocolateButter extends Cookie{
    constructor(ingredients){
        super('Chocolate Butter Cookies',75000,ingredients)
        this.count = 200
    }
}

class ChocolateCheese extends Cookie{
    constructor(ingredients){
        super('Chocolate Cheese Cookies',75000,ingredients)
        this.count = 200
    }
}

class ChocolateChip extends Cookie{
    constructor(ingredients){
        super('Chocolate Chip Cookies',75000,ingredients)
        this.count = 200
    }
}

class PeanutButter extends Cookie{
    constructor(ingredients){
    super('Peanut Butter Cookies',65000,ingredients)
    this.count = 100
    }
}

module.exports = { PeanutButter, ChocolateButter, ChocolateCheese, ChocolateChip}