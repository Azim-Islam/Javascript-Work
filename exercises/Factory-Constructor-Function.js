function factoryFunctionAddress(street, city, zipCode){

    return {
        street: street,
        city: city,
        zipCode: zipCode
    }
}

function ConstructorFunctionAddress(street, city, zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode
}


function areEqual(address1, address2){
    for(let key in address1) {
        if (address1[key] !== address2[key]) {
            return false
        }
    }
    for(let key in address2){
        if (address2[key] !== address1[key]) {
            return false
        }
    }
    return true
}


let addressFromFac = factoryFunctionAddress(street="Abcd", city="Dhaka", zipCode="1215")

let addressFromCons = new ConstructorFunctionAddress(street="Abcd", city="Dhaka", zipCode="1215")


// console.log(addressFromCons.city)
// console.log(addressFromFac.city)

console.log(areEqual(addressFromFac, addressFromCons))