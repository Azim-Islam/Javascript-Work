showNumber(10);

function showNumber(limit){
    for(let i = 0; i <= limit; i++){
        str = ""
        if (i%2) {
            str = "ODD"
        }
        else{
            str = "EVEN"
        }
        console.log(i + " " + str)
    }
}