const leapYears = function(year) {
    const isDivisibleBy4 = year%4 === 0;
    const isCentury = year%100 === 0;
    const isDivisibleBy400 = year%400 === 0;
    if (isDivisibleBy4 && (!isCentury || isDivisibleBy400)){
        return true;
    }
    else{
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
