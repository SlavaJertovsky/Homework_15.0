function oddOrEven(items) {
    let sum = 0;
    items.forEach(function (item) {
        sum =+ item;
    });

    if (sum % 2 == 0) {
        return "even";

    }  return "odd";

}
console.log(oddOrEven([0, 1, 5])); // 'even' 'четное'
console.log(oddOrEven([0, 1, 3])); // 'even'
console.log(oddOrEven([0, -1, -5])); // 'even'
console.log(oddOrEven([0, 1, 4])); // 'odd' 'нечетное'
console.log(oddOrEven([0, -1, 2])); // 'odd'
console.log(oddOrEven([0])); // 'even'
