/*
function changeButtonThemeValue(elem){
    if(elem.value=='light'){
       elem.value = 'dark';
       document.getElementById('theme-img').src = "images/icons/dark-mode.png";  
    } 
    else {
        elem.value = 'light';
        document.getElementById('theme-img').src = "images/icons/light-mode.png";
    }
}*/

function setDarkChangeButton(){
    document.getElementById('light').style.display = 'none';
    document.getElementById('dark').style.display = 'block';    
}

function setLightChangeButton(){
    document.getElementById('dark').style.display = 'none';
    document.getElementById('light').style.display = 'block';    
}

document.getElementById('light').addEventListener('click', changeTheme.bind(null,'light'));
document.getElementById('dark').addEventListener('click', changeTheme.bind(null,'dark'));

function changeTheme(theme){
    localStorage.setItem('theme', theme);

    if( window.hasOwnProperty('localStorage')){
        localStorage.setItem('theme', theme);

        if (theme == 'light'){
            localStorage.setItem('theme', theme);
            setThemeLight(theme);
        }
        if (theme == 'dark'){
            localStorage.setItem('theme', theme);
            setThemeDark(theme);                  
        }
    }
}

var theme = (window.hasOwnProperty('localStorage') && localStorage.getItem('theme', theme)) || 'light';
changeTheme(theme);

function setThemeLight(theme){
    for (var i = 0; i < document.getElementsByClassName('textcolor').length; i++) {
        document.getElementsByClassName('textcolor')[i].style.color = '#181A3F';
    }
    document.body.style.background = '#FFFFFF';
    for (var i = 0; i < document.getElementsByClassName('contact-us__wrap').length; i++) {
        document.getElementsByClassName('contact-us__wrap')[i].style.background = '#F0EFEC';
    }
    for (var i = 0; i < document.getElementsByClassName('nav__title-part').length; i++) {
        document.getElementsByClassName('nav__title-part')[i].style.background = '#F0EFEC';
    }
    for (var i = 0; i < document.getElementsByClassName('footer__body').length; i++) {
        document.getElementsByClassName('footer__body')[i].style.background = '#F0EFEC';
    }
    for (var i = 0; i < document.getElementsByClassName('bar').length; i++) {
        document.getElementsByClassName('bar')[i].style.background = '#000000';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__link').length; i++) {
        document.getElementsByClassName('menu__link')[i].style.color = '#181A3F';
    }
    for (var i = 0; i < document.getElementsByClassName('popup').length; i++) {
        document.getElementsByClassName('popup')[i].style.background = '#FFFFFF';
    }

  //document.getElementById("photo").src = "img/1.jpg";  
}

function setThemeDark(theme){
    for (var i = 0; i < document.getElementsByClassName('textcolor').length; i++) {
        document.getElementsByClassName('textcolor')[i].style.color = '#FFFFFF';
    }
    document.body.style.background = '#726B6F';
    for (var i = 0; i < document.getElementsByClassName('contact-us__wrap').length; i++) {
        document.getElementsByClassName('contact-us__wrap')[i].style.background = '#bcb2b8';
    }
    for (var i = 0; i < document.getElementsByClassName('nav__title-part').length; i++) {
        document.getElementsByClassName('nav__title-part')[i].style.background = '#bcb2b8';
    }
    for (var i = 0; i < document.getElementsByClassName('footer__body').length; i++) {
        document.getElementsByClassName('footer__body')[i].style.background = '#bcb2b8';
    }
    for (var i = 0; i < document.getElementsByClassName('bar').length; i++) {
        document.getElementsByClassName('bar')[i].style.background = '#F0EFEC';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__link').length; i++) {
        document.getElementsByClassName('menu__link')[i].style.color = '#F0EFEC';
    }
    for (var i = 0; i < document.getElementsByClassName('popup').length; i++) {
        document.getElementsByClassName('popup')[i].style.background = '#bcb2b8';
    }
    
    //document.getElementById("photo").src = "img/2.jpg";   
}