let keyboard = document.getElementsByClassName("keyboard")[0]
let textarea = document.getElementById('textarea')
let attention = document.getElementsByClassName('attention')[0]

//потом эту строчку делитни
// localStorage.setItem("lang", "en")

var currentLanguage = localStorage.getItem("lang");
if (!currentLanguage) currentLanguage = "en";

const keyValues = [
    {
        lang: "en",
        keys: [
            {
                shiftKey: "~",
                keyTextValue: "`",
                key: "`"
            },
            {
                shiftKey: "!",
                keyTextValue: "1",
                key: "1" //like keyCode
            },
            {
                shiftKey: "@",
                keyTextValue: "2",
                key: "2"
            },
            {
                shiftKey: "#",
                keyTextValue: "3",
                key: "3"
            },
            {
                shiftKey: "$",
                keyTextValue: "4",
                key: "4"
            },
            {
                shiftKey: "%",
                keyTextValue: "5",
                key: "5"
            },
            {
                shiftKey: "^",
                keyTextValue: "6",
                key: "6"
            },
            {
                shiftKey: "&",
                keyTextValue: "7",
                key: "7"
            },
            {
                shiftKey: "*",
                keyTextValue: "8",
                key: "8"
            },
            {
                shiftKey: "(",
                keyTextValue: "9",
                key: "9"
            },
            {
                shiftKey: ")",
                keyTextValue: "0",
                key: "0"
            },
            {
                shiftKey: "_",
                keyTextValue: "-",
                key: "-"
            },
            {
                shiftKey: "+",
                keyTextValue: "=",
                key: "="
            },
            {
                shiftKey: null,
                keyTextValue: "Backspace",
                key: "Backspace"
            },
            {
                shiftKey: null,
                keyTextValue: "Tab",
                key: "Tab"
            },
            {
                shiftKey: "Q",
                keyTextValue: "q",
                key: "q"
            },
            {
                shiftKey: "W",
                keyTextValue: "w",
                key: "w"
            },
            {
                shiftKey: "E",
                keyTextValue: "e",
                key: "e"
            },
            {
                shiftKey: "R",
                keyTextValue: "r",
                key: "r"
            },
            {
                shiftKey: "T",
                keyTextValue: "t",
                key: "t"
            },
            {
                shiftKey: null,
                keyTextValue: "Shift",
                key: "Shift",
                isPressed: true
            },
        ]
    },
    {
        lang: "ru",
        keys: [
            {
                shiftKey: "Ё",
                keyTextValue: "ё",
                key: "ё"
            },
            {
                shiftKey: "!",
                keyTextValue: "1",
                key: "1" //like keyCode
            },
            {
                shiftKey: "\"",
                keyTextValue: "2",
                key: "2"
            },
            {
                shiftKey: "№",
                keyTextValue: "3",
                key: "3"
            },
            {
                shiftKey: ";",
                keyTextValue: "4",
                key: "4"
            },
            {
                shiftKey: "%",
                keyTextValue: "5",
                key: "5"
            },
            {
                shiftKey: ":",
                keyTextValue: "6",
                key: "6"
            },
            {
                shiftKey: "?",
                keyTextValue: "7",
                key: "7"
            },
            {
                shiftKey: "*",
                keyTextValue: "8",
                key: "8"
            },
            {
                shiftKey: "(",
                keyTextValue: "9",
                key: "9"
            },
            {
                shiftKey: ")",
                keyTextValue: "0",
                key: "0"
            },
            {
                shiftKey: "_",
                keyTextValue: "-",
                key: "-"
            },
            {
                shiftKey: "+",
                keyTextValue: "=",
                key: "="
            },
            {
                shiftKey: null,
                keyTextValue: "Backspace",
                key: "Backspace"
            },
            {
                shiftKey: "Й",
                keyTextValue: "й",
                key: "й"
            },
            {
                shiftKey: "Ц",
                keyTextValue: "ц",
                key: "ц"
            },
        ]
    }
]

function addButtonEvents(key) {
    key.onclick = function () {
        textarea.value = textarea.value + key.textContent

        setTimeout(() => {
            key.style.background = '#333333';
        }, 200);
    }

    key.onfocus = function () {
        key.style.background = '#ffa600';
    }

    key.onblur = function () {
        setTimeout(() => {
            key.style.background = '#333333';
        }, 200);
    }
}

let createButton = (keyTextValue) => {
    let key = document.createElement('button');
    key.appendChild(document.createTextNode(keyTextValue))
    key.className = "key"
    keyboard.appendChild(key);
    addButtonEvents(key)
}

function createKeyBoard() {
    console.log("currentLanguage: " + currentLanguage);
    if (currentLanguage === "en") {
        for (var i = 0; i < keyValues[0].keys.length; i++) {
            createButton(keyValues[0].keys[i].keyTextValue);
        }
    }
    else if (currentLanguage === "ru") {
        for (var i = 0; i < keyValues[1].keys.length; i++) {
            createButton(keyValues[1].keys[i].keyTextValue);
        }
    }
    else {
        console.log("ты что черт натворил")
    }
}

createKeyBoard();

let keysToChangeLang = [];

function changeLanguage() {
    if (localStorage.getItem("lang") === "en") {
        keysToChangeLang.length = 0
        attention.textContent = "Для смены языка нажмите Alt+Shift"
        localStorage.setItem("lang", "ru")
        console.log("lang change on ru")

        var keys = document.getElementsByClassName('key')
        for (var j = 0; j < keys.length; j++) {
            keys[j].textContent = keyValues[1].keys[j].keyTextValue
        }
    }
    else {
        keysToChangeLang.length = 0
        attention.textContent = "Press Alt+Shift to change the language"
        localStorage.setItem("lang", "en")
        console.log("lang change on en")

        var keys = document.getElementsByClassName('key')
        for (var j = 0; j < keys.length; j++) {
            keys[j].textContent = keyValues[0].keys[j].keyTextValue
        }
    }
}

//подсветка нажатых клавиш на физ клаве
document.addEventListener('keydown', function (event) {
    var keys = document.getElementsByClassName('key')
    for (var j = 0; j < keys.length; j++) {
        if (event.key === keys[j].textContent) {
            keys[j].style.background = '#ffa600';
        }
    }

    //заполняем массив для смены языка
    if (event.key === "Alt" || event.key === "Shift") {
        if (keysToChangeLang.length >= 0 && keysToChangeLang.length < 2) {
            // console.log("о чет в массив запихнули " + event.key)
            keysToChangeLang.push(event.key)
        }
    }


    console.log('не угадаешь что нажали: ' + event.key)
});

document.addEventListener('keyup', function (event) {
    var keys = document.getElementsByClassName('key')
    for (var j = 0; j < keys.length; j++) {
        if (event.key === keys[j].textContent) {
            keys[j].style.background = '#333333';
            break;
        }
    }

    //проверяем на смену языка
    if (keysToChangeLang.length == 2 && (keysToChangeLang[0] === "Alt" && keysToChangeLang[1] === "Shift") || (keysToChangeLang[1] === "Alt" && keysToChangeLang[0] === "Shift")) {
        changeLanguage()
    }

});

