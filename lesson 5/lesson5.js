
/* 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

function chess(num) {
    
    var $chess = document.getElementById("chess");
    var $table = document.createElement("table");

    // массив координат столбцов
    var rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];

    for (var i = 0; i <= num; i++) {
        var $tr = document.createElement("tr");
        for (var j = 0; j <= num; j++) {
            var $td = document.createElement("td");
            // выводим координаты колонок в последней строке таблицы
            if (i == num && j > 0) {
                $td.classList.add("coordinates");
                $td.textContent = rows[j - 1];
            // выводим координаты строк в первой колонке таблицы
            } else if (i != num && j == 0) {
                $td.classList.add("coordinates");
                $td.textContent = num - i;
            // раскрасим ячейки основного поля.
            } else if (i != num ) {
                if ((i + j) % 2 == 0) {
                    $td.classList.add("white");
                } else {
                    $td.classList.add("black");
                }
            }

            $tr.appendChild($td);
        }
        $table.appendChild($tr);
    }

    $chess.appendChild($table);
}

// вывод шахматной доски 8х8
chess(8);
// вывод доски 16хх16
//chess(16);





/* 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

// объект корзина
var basket = {
    // массив товаров в корзине
    products: [],
    // возвращент текущее представление корзины
    basketText: function(){
        if (this.products.length == 0){
            return "Корзина пуста";
        } else{
            return "В корзине: " + this.countBasketCount() + " товаров на сумму " + this.countBasketPrice() + " рублей";    
        }
    },
    // возвращает сумму корзины
    countBasketPrice: function(){
        var sum = 0;
        for(var i = 0; i < this.products.length; i++){
            sum = sum + this.products[i].price * this.products[i].count;
        }
        return sum;
    },
    // возвращает количество товара в корзине
    countBasketCount: function(){
        var sum = 0;
        for(var i = 0; i < this.products.length; i++){
            sum = sum + this.products[i].count;
        }
        return sum;
    }
}
// функция выводит текст в заданный элемент
function displayText($dom,text){
    $dom.textContent = text;    
}

var products = [
    {name: 'Куртка', price: 5000, count: 2}, 
    {name: 'Штаны', price: 3000, count: 1}, 
    {name: 'Футболка', price: 1000, count: 1},
];
basket.products = products;

$cart = document.getElementById("cart");
$cart.classList.add("cart");

displayText($cart,basket.basketText());





/* 3.* Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.*/

function displayCatalog(products){

    $productBox = document.getElementById("catalog");
    $productBox.classList.add("catalog");

    // Выводим заголовки
    var $product = document.createElement("div");
    $product.classList.add("product");

    var $productName = document.createElement("div");
    $productName.classList.add("productName");
    $productName.classList.add("productHeadline");

    var $productCount = document.createElement("div");
    $productCount.classList.add("productCount");
    $productCount.classList.add("productHeadline");

    var $productPrise = document.createElement("div");
    $productPrise.classList.add("productPrise");
    $productPrise.classList.add("productHeadline");

    var $productSum = document.createElement("div");
    $productSum.classList.add("productSum");
    $productSum.classList.add("productHeadline");

    $productName.textContent = "Товар";
    $productCount.textContent = "количество";
    $productPrise.textContent = "цена";
    $productSum.textContent = "сумма";

    $productBox.appendChild($product);
    $product.appendChild($productName);
    $product.appendChild($productCount);
    $product.appendChild($productPrise);
    $product.appendChild($productSum);

    // выводим информацию о каждом товаре из каталога
    for(var i = 0; i < products.length; i++){

        var $product = document.createElement("div");
        $product.classList.add("product");
    
        var $productName = document.createElement("div");
        $productName.classList.add("productName");
    
        var $productCount = document.createElement("div");
        $productCount.classList.add("productCount");
    
        var $productPrise = document.createElement("div");
        $productPrise.classList.add("productPrise");
    
        var $productSum = document.createElement("div");
        $productSum.classList.add("productSum");
    
        $productName.textContent = products[i].name;
        $productCount.textContent = products[i].count;
        $productPrise.textContent = products[i].price;
        $productSum.textContent = products[i].price * products[i].count;

        $productBox.appendChild($product);
        $product.appendChild($productName);
        $product.appendChild($productCount);
        $product.appendChild($productPrise);
        $product.appendChild($productSum);   
    }
    displayText($cart,basket.basketText());
}

var products = [
    {name: 'Куртка', price: 5000, count: 2}, 
    {name: 'Штаны', price: 3000, count: 1}, 
    {name: 'Футболка', price: 1000, count: 1}
];

displayCatalog(products);