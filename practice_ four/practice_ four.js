// let age = prompt("Сколько вам лет?", 19);
// if (age >= 14 && age <= 90) {
//     alert("Вы включены");
// }else {
//     alert("Нам не подходит");
// }

let userName = prompt("Введите логин:");
    if(userName === "Админ") {
        let userPassword = prompt("Введите пароль:");

        if (userPassword === "Я главный") {
            alert("Здравствуйте!")
        } else if (userPassword === null || userPassword === "") {
            alert("Отменено")
        }else {
            alert("Невереный пароль");
        }

    }else if (userName === null || userName === "") {
        alert("Отменено");
    } else{
        alert("Я вас не знаю");
    }


