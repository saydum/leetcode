const nums = [1, 2, 3, 4];

function containsDuplicate(array) {
    const tmp = [];

    for (let i = 0; i < array.length; i++) {
        const newArray = array[i];
        if (tmp.indexOf(newArray) !== -1) {
            return true;
        }
        tmp.push(newArray);
    }
    return false;
}

containsDuplicate(nums);