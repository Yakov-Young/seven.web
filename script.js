function BtnClick1(){
    var firstName = prompt("Его имя", "");
    var secondName = prompt("Её имя", "");
    if (firstName && secondName != null) {
        resultLove.innerHTML =`${firstName} подходит к ${secondName} на ${Random()} процентов!`;
    } else {
        resultLove.innerHTML = `Ошибка: Введите имена`;
    }
    
}

function Random() {
    return Math.round(Math.random() * 100);
}



function BtnClick2() {
    var helight = document.getElementById("helight");
    var weight = document.getElementById("weight");

    var temp = weight / Math.pow(helight, 2);

    if (temp <= 18.5) {
        resultBMI.innerHTML = "Недостаточный вес";
    } else if (25 >= temp > 18.5){
        resultBMI.innerHTML = "Нормально";
    } else if (30 >= temp > 25){
        resultBMI.innerHTML = "У вас излишек веса";
    } else if (temp > 30){
        resultBMI.innerHTML = "Ожирение";
    } else {
        resultBMI.innerHTML = "Проверьте введенные параметры";
    }
}

function BtnClick3() {
    var year = document.getElementById("year").value;
    resultLY.innerHTML = year;
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        resultLY.innerHTML = "Високосный год";
    } else if (isNaN(year)) {
        resultLY.innerHTML = "Ошибка в данных";
    } else {
        resultLY.innerHTML = "Не високосный год";
    }
}