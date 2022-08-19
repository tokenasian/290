'use strict';
// Don't add or change anything above this comment.

// Author: Matthew Armstrong
// Date: 04/11/2022
// Description: deepEqual that will help us understand data types supported by JavaScript and make us familiar with some looping and branching constructs.

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    if (val1 === val2)  {
        return true;
    }
    if (typeof(val1) == "object" && typeof(val2) == "object") {
        if (val1 == null || val2 == null) {
            return false;
        }
        
        const val1keys = Object.keys(val1);
        const val2keys = Object.keys(val2);
        // checks if arrays are of the same length
        if (Object.keys(val1).length !== Object.keys(val2).length) {
            return false;
        }
        // checks if both are arrays
        if (Array.isArray(val1) && Array.isArray(val2)) {
        // recursion check for deep equality
            for (let i = 0; i < val1.length; i++) {
                if (!deepEqual(val1[i], val2[i])) {
                    return false;}
            }
            //arrays can be deep equal when all of the conditions are satisfied
            return true;
        // checks if arrays are not deep equal
        } else if(Array.isArray(val1) !== Array.isArray(val2)){
            return false;
        } else {
            // checks key values
            for (let i = 0; i < val1keys.length; i++) {
                if (!val2keys.includes(val1keys[i])) {return false;}
                if (!deepEqual(val2[val1keys[i]], val1[val1keys[i]])) {return false;}
            }
            return true;
        }
    } 
    return false;   
}
// Don't add or change anything below this comment.
module.exports = deepEqual;