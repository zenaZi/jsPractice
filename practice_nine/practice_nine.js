// создаем функцию
// в ней объявляем массив
// считаем сумму элементов
// возвращаем сумму элементов
// выводим сумму элементов


// function sumInput() {
//     let arr = [1, -2, 3, 4, -9, 6];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
// console.log(sum);
// }
// alert(sumInput());

//let arr = [1, -2, 3, 4, -9, 6];

//
// function sumInput() {
//
//     let arr = [];
//
//     while (true) {
//         let value = +prompt('Введите число: ', 0);
//
//         if (!isFinite(value) || value === "" || value === null) break;
//             arr.push(value);
//     }
//
//     let sum = 0;
//     for (let number of arr) {
//         sum += number;
//     }
//     return(sum)
// }
//
// alert(sumInput());


function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let elem of arr) {
        currentSum += elem;
        maxSum = Math.max(maxSum, currentSum);
        if(currentSum < 0) currentSum = 0;
    }
    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); //= 5 (сумма выделенных)
alert(getMaxSubSum([2, -1, 2, 3, -9])); //= 6
alert(getMaxSubSum([-1, 2, 3, -9, 11])); //= 11
alert(getMaxSubSum([-2, -1, 1, 2])); //= 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); //= 100
alert(getMaxSubSum([1, 2, 3])); //= 6 (берём все)

