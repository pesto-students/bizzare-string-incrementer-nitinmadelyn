// Start your implementation here
const bizarreStringIncrementer = (inputString) => {
    if(typeof(inputString) != "string"){
        console.log("Not a string!");
        return;
    }
    let outputString, numberFound = [], noNumberFoundAtEnd = false, notANumber = true;
    for(let i = inputString.length; i >= 0; i--){
        let stringIndex = i-1;
        if(i == inputString.length && isNaN(parseInt(inputString[stringIndex])) ){
            noNumberFoundAtEnd = true;
            outputString = inputString+"1";
            break;
        } else {
            if(Number.isInteger(parseInt(inputString[stringIndex])) && notANumber === true){
                numberFound.unshift(inputString[stringIndex])
            } else {
                notANumber = false;
            }
        }
    }

    if(noNumberFoundAtEnd === false){
        outputString = inputString.substr(0, inputString.length - numberFound.length) + ((parseInt(numberFound.join(""))+1).pad(numberFound.length)).toString()
    }
    console.log(outputString)
}

//function to pad numbers with zero
Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

bizarreStringIncrementer("foo");
bizarreStringIncrementer("foo23");
bizarreStringIncrementer("foo0041");
bizarreStringIncrementer("foo9");
bizarreStringIncrementer("foo099");
bizarreStringIncrementer("f99oo");
bizarreStringIncrementer("f99oo23");
bizarreStringIncrementer("f99oo099");
bizarreStringIncrementer("f99oo0099");