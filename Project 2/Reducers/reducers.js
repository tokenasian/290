'use strict';
// Don't add or change anything above this comment.

// Author: Matthew Armstrong
// Date: 04/11/2022
// Description: reducer function exercise. 

/**
 * If this function is passed to reduce, 
 * any non-numeric values in the array will be skipped,
 * and the sum of only the numeric values in the array will be returned.
 * If all the values in the array are non-numeric, 
 * then the value 0 will be returned.
 */
 const reducer1 = (previousValue, currentValue) => {
    if(typeof(previousValue) === 'number' && (typeof(currentValue) === 'number')){
            return previousValue + currentValue;
    } else if (typeof(previousValue) === 'number'){
        return previousValue;
    } else if (typeof(currentValue) === 'number') {
        return currentValue;
    } else {
        return 0;
    }
};

/**
 * This function serves to check if all of the values are numeric. 
 * If they are not numeric, then a typeerror message is thrown. 
 * If they are numeric, then the sum is returned.
 */
 const reducer2 = (previousValue, currentValue) => {
    if(typeof(previousValue) === 'number' && (typeof(currentValue) === 'number')){
        return previousValue + currentValue;
    }
    else{
        throw new TypeError('My error message');
    }
};

// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };