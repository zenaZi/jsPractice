// //создаем объект с тремя методами
// let calculator = {
//     read() {
//         this.a = +prompt('введите a', 0)
//         this.b = +prompt('введите b', 0)
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// };
//
// calculator.read();
// alert( `Cумма чисел:  ${calculator.sum()}`);
// alert( `Произведение чисел:  ${calculator.mul()}` );



let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder
    .up()
    .up()
    .down()
    .showStep()
    .up()
    .down();//1
// 1