import {numAboveAndBelow, rotateString} from '../Challenge_Answers/answers';
/**
 * Stores data for each challenge question
 */
export default [
    //Question 1
    {
        question: 'Print the number of integers in an array that are above the given input and the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.',
        fields: ['Number array (comma seperated list)', 'Number'],
        presets: [
            {
                name: 'Basic test',
                inputs: ['1,2,3,4,5,6,7,8,9,10', '5'],
            },
            {
                name: 'Lots of repeats',
                inputs: ['1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3', '2'],
            },
            {
                name: 'Negatives',
                inputs: ['-1, -2, -3, -4, -5, -6, -7, -8, -9, -10', '-5'],
            },
        ],
        callback: (array, num) => {
            //Filter whitespace and form number array
            array = array.replace(/\s+/g, '');
            array = array.split(',');
            //input validation
            for (let i = 0; i < array.length; i++) {
                if(isNaN(array[i])) {
                    return 'Array input must be a comma seperated list of numbers';
                }
            }
            if(isNaN(num)) {
                return 'Number input must be a number'
            }
            return numAboveAndBelow(array, num);
        },
    },
    //Question 2
    {
        question: 'Rotate the characters in a string by a given input and have the overflow appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.',
        fields: ['String', 'Rotation Amount'],
        presets: [
            {
                name: 'Basic test',
                inputs: ['MyString', '2'],
            },
            {
                name: 'Factor larger than string',
                inputs: ['MyString', '11'],
            },
            {
                name: 'Negative Rotation',
                inputs: ['MyString', '-7'],
            },
        ],
        callback: (string, factor) => {
            //input validation
            if(isNaN(factor)) {
                return 'Rotation Amount input must be a number'
            }
            return rotateString(string, factor);
        },
    },
    //Question 3
    {
        question: 'If you could change 1 thing about your favorite framework/language/platform (pick one), what would it be?',
        answer: "JavaScript is a weakly-typed language. While I acknowledge the pros of this such as easy data manipulation, easy random object creation, and lack of need to compile, I simply do not value it as much as strongly typed variables.\n\n The obvious first reason is catching bugs. This function is taking a variable called string, so presumably I'm getting a string? No, it may be an object for all I really know.\n\n I'd take strongly-typed variables purely for readablity regardless of effectiveness of finding bugs. It may result in slightly more typing, but I'd know what type of data is getting manipulated regardless of potentially poor variable naming.\n\n Luckily I'm not alone in this thought and tools such as TypeScript exist to mitigate these frustrations.",
    },
];