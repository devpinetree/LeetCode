/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {};

    nums.forEach(num => {
        if (obj[num]) {
            obj[num] = obj[num] + 1;
        } else {
            obj[num] = 1;
        }
    });

    return Object.keys(obj)[Object.values(obj).findIndex(value => value === 1)];
};