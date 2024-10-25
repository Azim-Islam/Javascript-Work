function fizzbuzz(input){
    let str = ""
    if (input%3 === 0) str += "fizz"
    if (input%5 === 0) str += "buzz"
    if (isNaN(input%3)) str = "Not a number"
    return str
}


console.log(fizzbuzz(3))
console.log(fizzbuzz(30))
console.log(fizzbuzz("sss"))

