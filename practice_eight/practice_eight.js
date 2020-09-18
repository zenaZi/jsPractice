// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('введите a', 0);
//         this.b = +prompt('введите b', 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }
//
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('введите число для добавления: ', 0);
    };

}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений