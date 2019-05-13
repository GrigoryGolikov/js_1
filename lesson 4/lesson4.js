/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
function nomberToObject(number){
    // Если число > 999 или < 0 возвращаем пустой объект
    if ((number > 999) || (number < 0)) {
        console.log("number is incorrect");
        return {};
    }
    var numberObject = {
        units: number % 10, 
        tens: Math.floor(number / 10) % 10,
        hundreds: Math.floor(number / 100) % 10,
    }

    return numberObject;
}

console.log(nomberToObject(123)); // проверка трехзначного числа
console.log(nomberToObject(12)); // проверка двузначного числа
console.log(nomberToObject(1)); // проверка однозначного числа
console.log(nomberToObject(1234)); // проверка числа больше 999
console.log(nomberToObject(-1)); // проверка отрицательного числа




/* 2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

var basket = {
    produkts: [],
    countBasketPrice: function(){
        var sum = 0;
        for(var i = 0; i < this.produkts.length; i++){
            sum = sum + this.produkts[i].price * this.produkts[i].count;
        }
        return sum;
    }
}

var produkts = [
    {name: 'Куртка', price: 5000, count: 2}, 
    {name: 'Штаны', price: 3000, count: 1}, 
    {name: 'Футболка', price: 1000, count: 1}
];

basket.produkts = produkts;

console.log("сумма корзины: " + basket.countBasketPrice());