// google.books.load();

// function initialize() {
//     var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
//     viewer.load('ISBN:0738531367');
// }

// google.books.setOnLoadCallback(initialize);
// <!-- <script type="text/javascript" src="https://www.google.com/books/jsapi.js"></script> -->


// function handle(e){
//     if(e.key === "Enter"){
//         alert("Enter was just pressed.");
//     }

//     return false;
// }

var apikey = 'AIzaSyBd2JM8h8bp_00NnlsjSZ0arfwmhtOWSjI'

var search = document.getElementById("search");

search.focus();

search.addEventListener('keypress', function (e) {
    // если пользователь нажал на Enter, выполняем нужный код
    // e.preventDefault() для того чтобы отключить действие браузера по умолчанию (обычно это отправка формы).
    if (e.key === "Enter") {
        e.preventDefault();
        alert('You clicked Enter');
    }
});