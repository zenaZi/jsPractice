function Pupil(surname, name, patronymic, gender, schoolClass) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.gender = gender;
        this.schoolClass = schoolClass;

}

let pupils = [];

function addPupil() {
    let countPupils = +prompt("Enter count pupils: ");
    let numberPupil = countPupils;

    while(countPupils !== 0) {
        countPupils -= 1;
        alert("Данные школьника номер: " + (numberPupil - countPupils));

        let surname = prompt("Enter surname: ", '-');
        if (surname === null) break;
        let name = prompt("Enter name: ", '-');
        if (name === null) break;
        let patronymic = prompt("Enter patronymic: ", '-');
        if (patronymic === null) break;
        let gender = prompt("Enter gender: ", '-');
        if (gender === null) break;
        let schoolClass = prompt("Enter class: ", '-');
        if (schoolClass === null) break;

        pupils.push(new Pupil(surname, name, patronymic, gender, schoolClass));
    }
}

addPupil();

function allDataAboutPupils() {
    for (let q = 0; q < pupils.length; q++) {
        alert("Школьник номер: " + (q + 1) +
            "\nФамилия: " + pupils[q].surname +
            "\nИмя: " + pupils[q].name +
            "\nОтчество: " + pupils[q].patronymic +
            "\nПол: " + pupils[q].gender +
            "\nКласс: " + pupils[q].schoolClass);
    }
}

allDataAboutPupils();

function searchPupils() {
    let property = prompt("Введите свойство: ");
    let value = prompt("Введите значение: ");

    for (let q = 0; q < pupils.length; q++) {
        pupils.find(name)
    }

    // for (let q = 0; q < pupils.length; q++) {
    //     switch (property) {
    //         case 'Фамилия':
    //             if (pupils[q].surname === value) {
    //                 alert("Школьник номер: " + (q + 1) +
    //                     "\nФамилия: " + pupils[q].surname +
    //                     "\nИмя: " + pupils[q].name +
    //                     "\nОтчество: " + pupils[q].patronymic +
    //                     "\nПол: " + pupils[q].gender +
    //                     "\nКласс: " + pupils[q].schoolClass);
    //             }
    //             break;
    //         case 'Имя':
    //             if (pupils[q].name === value) {
    //                 alert("Школьник номер: " + (q + 1) +
    //                     "\nФамилия: " + pupils[q].surname +
    //                     "\nИмя: " + pupils[q].name +
    //                     "\nОтчество: " + pupils[q].patronymic +
    //                     "\nПол: " + pupils[q].gender +
    //                     "\nКласс: " + pupils[q].schoolClass);
    //             }
    //             break;
    //         case 'Отчество':
    //             if (pupils[q].patronymic === value) {
    //                 alert("Школьник номер: " + (q + 1) +
    //                     "\nФамилия: " + pupils[q].surname +
    //                     "\nИмя: " + pupils[q].name +
    //                     "\nОтчество: " + pupils[q].patronymic +
    //                     "\nПол: " + pupils[q].gender +
    //                     "\nКласс: " + pupils[q].schoolClass);
    //             }
    //             break;
    //         case 'Пол':
    //             if (pupils[q].gender === value) {
    //                 alert("Школьник номер: " + (q + 1) +
    //                     "\nФамилия: " + pupils[q].surname +
    //                     "\nИмя: " + pupils[q].name +
    //                     "\nОтчество: " + pupils[q].patronymic +
    //                     "\nПол: " + pupils[q].gender +
    //                     "\nКласс: " + pupils[q].schoolClass);
    //             }
    //             break;
    //         case 'Класс':
    //             if (pupils[q].schoolClass === value) {
    //                 alert("Школьник номер: " + (q + 1) +
    //                     "\nФамилия: " + pupils[q].surname +
    //                     "\nИмя: " + pupils[q].name +
    //                     "\nОтчество: " + pupils[q].patronymic +
    //                     "\nПол: " + pupils[q].gender +
    //                     "\nКласс: " + pupils[q].schoolClass);
    //             }
    //             break;
    //         default:
    //             alert("Неа");
    //     }
    // }
}

searchPupils()