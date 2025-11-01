const palindromes = function (str) {
    const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
    const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter((char) => alphanum.includes(char))
    .join('');
    for(let i=0;i<=(cleanedStr.length/2);i++){
        if (cleanedStr[i] === cleanedStr[cleanedStr.length-i-1]){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
