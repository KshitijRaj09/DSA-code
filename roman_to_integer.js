// ques: 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

var romanToInt = function(s) {
    // Create a map to store the values of each Roman numeral
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let result = 0;
    let prevValue = 0;

    // Iterate through the string in reverse order
    for (let i = s.length - 1; i >= 0; i--) {
        const currentSymbol = s[i];
        const currentValue = romanMap.get(currentSymbol);

        // If the current value is less than the previous, subtract it
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            // Otherwise, add it to the result
            result += currentValue;
        }

        // Update the previous value for the next iteration
        prevValue = currentValue;
    }

    return result;
};
