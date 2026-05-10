const arr =
    [1, 2, 3, 1, 5, 4, 2, 3, 5,
        'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const a_set = new Set(arr);
const new_arr = [... a_set];
// console.log(a_set);
console.log(new_arr);