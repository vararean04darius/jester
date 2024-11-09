function caesarCipher(string, shiftFactor) {
    if(shiftFactor != 0) {
        // let lettersArray = String.charCodeAt(string.split(''))
        let numbersArray = [];
        for(let i = 0; i < string.length; i++) {
            //skip when characters are not inside ascii 65-90 or 97-122            
            if(string.charCodeAt(i) < 65 || (string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97) || string.charCodeAt(i) > 122){
                numbersArray.push(string.charCodeAt(i))
            } else if( string.charCodeAt(i) <= 90 && (string.charCodeAt(i) + shiftFactor) > 90) {
                numbersArray.push(string.charCodeAt(i) + shiftFactor - 26)
            } else if( string.charCodeAt(i) <= 122 && (string.charCodeAt(i) + shiftFactor) > 122) {
                numbersArray.push(string.charCodeAt(i) + shiftFactor - 26)
            } else if( string.charCodeAt(i) >= 65 && (string.charCodeAt(i) + shiftFactor) < 65) {
                numbersArray.push(string.charCodeAt(i) + shiftFactor + 26)
            } else if( string.charCodeAt(i) >= 97 && (string.charCodeAt(i) + shiftFactor) < 97 ) {
                numbersArray.push(string.charCodeAt(i) + shiftFactor + 26)
            } else{
                numbersArray.push(string.charCodeAt(i) + shiftFactor)
            }
        }
        string = String.fromCharCode(...numbersArray);
    }
    return string;
}
    module.exports = caesarCipher;