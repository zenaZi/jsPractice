class Pupil{
    constructor(surname, name, patronymic, gender, schoolClass) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.gender = gender;
        this.schoolClass = schoolClass;
    }
    // sayHi() {
    //     alert(`Привет,  ${this.name}, тебе ${this.age}`);
    // }

}


// let user = new Pupil("Иван", "18");
// user.sayHi();
// arr.push(new Pupil("test", "tittt", "ore", "mt", "12"));
// alert(arr[0].name);

let arr = [];

function addPupil(countPupil) {

    arr = [countPupil];

    while (prompt("дальшe") !== ".") {
        let surname = prompt("Введите фамилию: ", "Иванов");
        let name = prompt("Введите имя: ", "Иван");
        let patronymic = prompt("Введите отчество: ", "Иванович");
        let gender = prompt("Ваш пол? ", "женский");
        let schoolClass = +prompt("В каком классе вы обучаетесь?: ", "10");
        arr.push(new Pupil(surname, name, patronymic, gender, schoolClass)); break;
    }

     alert(arr[0].name);
     alert(arr[1].name);
}

alert(addPupil(2));

// alert(addPupil(6));
