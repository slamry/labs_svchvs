let keyboard = document.getElementsByClassName("keyboard")[0]
let textarea = document.getElementById('textarea')

//потом эту строчку делитни
localStorage.setItem("lang", "en")

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
                shiftKey: "Q",
                keyTextValue: "q",
                key: "q"
            },
            {
                shiftKey: "W",
                keyTextValue: "w",
                key: "w"
            },

        ]
    },
    {
        lang: "ru",
        keys: [
            {
                shiftKey: "!",
                keyTextValue: "1",
                key: "1"
            },
            {
                shiftKey: "@",
                keyTextValue: "2",
                key: "2"
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

let createButton = (keyTextValue) => {
    let key = document.createElement('button');
    key.appendChild(document.createTextNode(keyTextValue))
    key.className = "key"
    keyboard.appendChild(key);

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
    else{
        console.log("ты что черт натворил")
    }
}

createKeyBoard();

//подсветка нажатых клавиш на физ клаве
document.addEventListener('keydown', function (event) {
    var keys = document.getElementsByClassName('key')
    for (var j = 0; j < keys.length; j++) {
        if (event.key === keys[j].textContent) {
            keys[j].style.background = '#ffa600';
            // break;
        }
    }

    if (event.key === "Shift") {
        console.log("кто-то шифт зажал")
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
});

