function Pupil(surname, name, patronymic, gender, schoolClass) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.gender = gender;
        this.schoolClass = schoolClass;

}

let pupils = [];

// function addPupil() {
//     let countPupils = +prompt("Ввеедите количество школьников: ");
//     let numberPupil = countPupils;
//
//     while(countPupils !== 0) {
//         countPupils -= 1;
//         alert("Данные школьника номер: " + (numberPupil - countPupils));
//
//         let surname = prompt("Введите фамилию: ", '-');
//         if (surname === null) break;
//         let name = prompt("Введите имя: ", '-');
//         if (name === null) break;
//         let patronymic = prompt("А теперь введите отчество: ", '-');
//         if (patronymic === null) break;
//         let gender = prompt("Осталось немного, введите пол: ", '-');
//         if (gender === null) break;
//         let schoolClass = prompt("И напоследок, введите класс: ", '-');
//         if (schoolClass === null) break;
//
//         pupils.push(new Pupil(surname, name, patronymic, gender, schoolClass));
//     }
// }
//
// addPupil();
pupils.push(new Pupil("Неяскин", "Семён", "Александрович", "М", "1"));
pupils.push(new Pupil("Логинова", "Зена", "Димидовна", "М", "5"));
pupils.push(new Pupil("Ганн", "Зена", "Димидовна", "М", "5"));
pupils.push(new Pupil("Антипов", "Семён", "Семёнович", "Ж", "2"));
pupils.push(new Pupil("Голиков", "Илья", "Ильич", "Ж", "2"));

function allDataAboutPupils(array) {
    if (array.length === 1) {
        alert("Школьник номер: 1" +
            "\nФамилия: " + array[0].surname +
            "\nИмя: " + array[0].name  +
            "\nОтчество: " + array[0].patronymic +
            "\nПол: " + array[0].gender +
            "\nКласс: " + array[0].schoolClass);
    } else {
        for (let q = 0; q < array.length; q++) {
            alert("Школьник номер: " + (q + 1) +
                "\nФамилия: " + array[q].surname +
                "\nИмя: " + array[q].name +
                "\nОтчество: " + array[q].patronymic +
                "\nПол: " + array[q].gender +
                "\nКласс: " + array[q].schoolClass);
        }
    }
}

allDataAboutPupils(pupils);

function searchPupils() {

    let value =  prompt("Введите характеристику и значение (Например - Имя Семён или Пол М): ");

    let values = value.split(" ")

    if (values.length === 2) {
        alert(values[0])
        alert(values[1])
        switch (values[0]) {
            case "Имя":
                values[0] = "name"
                break
            case "Фамилия":
                values[0] = "surname"
                break
            case "Отчество":
                values[0] = "patronymic"
                break
            case "Пол":
                values[0] = "gender"
                break
            case "Класс":
                values[0] = "schoolClass"
                break
        }
        // values[0] = (values[0] === "Имя") ? values[0] = "name" : values[0] = values[0]
        // values[0] = (values[0] === "Фамилия") ? values[0] = "surname" : values[0] = values[0]
        // values[0] = (values[0] === "Отчество") ? values[0] = "patronymic" : values[0] = values[0]
        // values[0] = (values[0] === "Пол") ? values[0] = "gender" : values[0] = values[0]
        // values[0] = (values[0] === "Класс") ? values[0] = "schoolClass" : values[0] = values[0]

        let results = pupils.filter(pupil => pupil[values[0]] === values[1]);

        if (results.length === 0) {
            alert("У нас так не принято")
        } else {
            allDataAboutPupils(results)
        }
    } else {
        alert("Ошибка")
    }
}

searchPupils()

// function arrayOrder(){
//
//     alert(pupils.sort(Pupil()));
// }
//
// arrayOrder()