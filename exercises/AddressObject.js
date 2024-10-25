function showAddress(address){
    for(let key in address){
        console.log(key + " " + address[key], address.key)
    } 
}


sampleAddress = {
    street: "1, 2, East Tejturi Bazar",
    city: "Dhaka",
    zipCode: "1215"
}



showAddress(sampleAddress)