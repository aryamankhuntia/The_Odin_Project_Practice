const removeFromArray = function(arr,...ele) {
    const result = [];
    arr.forEach((item) => 
    {
        if(!ele.includes(item)){
            result.push(item);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
