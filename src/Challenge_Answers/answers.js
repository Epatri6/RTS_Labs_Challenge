// #``1  Print the number of integers in an array that are above the given input and the number that are below,
// e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.

/**
 * Takes an array and a number then returns a string with the counts of number of elements
 * above and below that number.
 * 
 * My strategy: 
 * Go through each element and increase above/below count as needed.
 * O(n) performance.
 */
export function numAboveAndBelow(array, num) {
    let above = 0;
    let below = 0;
    array.forEach(ele => {
        if(ele === num) {
            return;
        }
        (ele > num) ? above++ : below++;
    })
    return `above: ${above}, below: ${below}`;
}

// #2  Rotate the characters in a string by a given input and have the overflow appear at the beginning, 
//e.g. “MyString” rotated by 2 is “ngMyStri”.

/**
 * Rotates a string by a given factor
 * 
 * My strategy: 
 * The desired result is basically just two substrings combined -
 * one starting (factor) number of characters from the end of the string to the end of the sting
 * and one starting at the beginning of the string to that point.
 * 
 * Considerations: 
 * If factor or string length is 0 we shouldn't bother doing anything
 * Factor may be larger than the string's length
 * What if factor is negative?
 * 
 * Performance: O(n)
 */
export function rotateString(string, factor) {
    if(factor === 0 || string.length === 0) {
        return string;
    }
    factor = factor % string.length;
    //Negative factors are the same as corresponding positive factors
    if(factor < 0) {
        factor = string.length + factor;
    }
    const factorIdx = (string.length - factor);
    return string.substring(factorIdx, string.length) + string.substring(0, factorIdx);
}

// #3  If you could change 1 thing about your favorite framework/language/platform (pick one), what would it be?

/**
 * JavaScript is a weakly-typed language. While I acknowledge the pros of this such as easy data manipulation,
 * easy random object creation, and lack of need to compile, I simply do not value it as much as strongly typed variables.
 * 
 * The obvious first reason is catching bugs.
 * This function is taking a variable called string, so presumably I'm getting a string?
 * No, it may be an object for all I really know.
 * 
 * I'd take strongly-typed variables purely for readablity regardless of effectiveness of finding bugs.
 * It may result in slightly more typing, but I'd know what type of data is getting manipulated
 * regardless of potentially poor variable naming.
 * 
 * Luckily I'm not alone in this thought and tools such as TypeScript exist to mitigate these frustrations.
 */