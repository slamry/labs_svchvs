
document.getElementById('en').addEventListener('click', changeLang.bind(null,'en'));
document.getElementById('ru').addEventListener('click', changeLang.bind(null,'ru'));

function changeLang(lang){
  localStorage.setItem('lang', lang);
  
  if( window.hasOwnProperty('localStorage')){
    localStorage.setItem('lang', lang);
    setLangRus(lang);
    setLangEng(lang);    
  }
}

var lang = (window.hasOwnProperty('localStorage') && localStorage.getItem('lang', lang)) || 'en';
changeLang(lang);

function setLangRus(lang){
  if (localStorage.getItem('lang') == 'ru'){
    lang = localStorage.setItem('lang', lang);
           

    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-1')[i].textContent = 'Главная';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-2')[i].textContent = 'Услуги';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-3')[i].textContent = 'О нас';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-4')[i].textContent = 'Проекты';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-5')[i].textContent = 'Обратная связь';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-6')[i].textContent = 'Статьи';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-7')[i].textContent = 'Навигация';
    }    
    ///
    document.getElementById('cart-text').textContent = "КОРЗИНА ( 0 )";
    document.getElementById('main-title-text').textContent = "Мы - креативное дизайнерское агентство из Лос-Анджелеса, Калифорния";
    document.getElementById('main-desc-text').textContent = "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил...";
    document.getElementById('main-page_button1').textContent = "СВЯЗАТЬСЯ С НАМИ";
    document.getElementById('main-page_button2').textContent = "НАШИ ПРОЕКТЫ";
    ///
    document.getElementById('services__title-text').textContent = "Мы больше, чем просто брендинговое агентство.";
    document.getElementById('services__button__desktop').textContent = "Все услуги";
    var srvPageDesc = document.getElementsByClassName('services-page__desc');
    for (var i = 0; i < srvPageDesc.length; i++) {
      srvPageDesc[i].textContent = "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.";
    }
    document.getElementById('serv-page-subtitle1').textContent = "/ Брендинг";
    document.getElementById('serv-page-subtitle2').textContent = "/ Веб-дизайн";
    document.getElementById('serv-page-subtitle3').textContent = "/ UX/UI дизайн";
    document.getElementById('serv-page-subtitle4').textContent = "/ Графический дизайн";
    document.getElementById('serv-page-subtitle5').textContent = "/ Моушн-дизайн";
    document.getElementById('serv-page-subtitle6').textContent = "/ Маркетинг";
    ///
    for (var i = 0; i < document.getElementsByClassName('about-us__head__title').length; i++) { document.getElementsByClassName('about-us__head__title')[i].textContent = "НАШЕ АГЕНТСТВО НАЧАЛО СВОЮ ДЕЯТЕЛЬНОСТЬ ЕЩЕ В 2002 ГОДУ"; }
    document.getElementById('about-us__button__desktop').textContent = "Подробнее";
    for (var i = 0; i < document.getElementsByClassName('about-us__grid__item__text').length; i++) {
      document.getElementsByClassName('about-us__grid__item__text')[i].textContent = "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову";
    }
    ///
    for (var i = 0; i < document.getElementsByClassName('projects__head__title').length; i++) {
      document.getElementsByClassName('projects__head__title')[i].textContent = "ОЗНАКОМЬТЕСЬ С НАШИМИ ПОСЛЕДНИМИ ПРОЕКТАМИ В ПОРТФОЛИО";
    }
    document.getElementById('projects__button__desktop').textContent = "Подробнее";
    for (var i = 0; i < document.getElementsByClassName('projects__item__description').length; i++) {
      document.getElementsByClassName('projects__item__description')[i].textContent = "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.";
    }
    document.getElementById('proj_category_1').textContent = "Брендинг / 2021";
    document.getElementById('proj_category_2').textContent = "Графич. дизайн / 2021";
    document.getElementById('proj_category_3').textContent = "Веб-дизайн / 2021";
    document.getElementById('proj_category_4').textContent = "Графич. дизайн / 2021";
    document.getElementById('proj_subt_1').textContent = "Фирменный стиль для Хауса";
    document.getElementById('proj_subt_2').textContent = "Дизайн упаковки для Сьюзан";
    document.getElementById('proj_subt_3').textContent = "Дизайн веб-сайта для Дона";
    document.getElementById('proj_subt_4').textContent = "Дизайн обеспечения для Globex";
    ///
    document.getElementById('contact_banner_title').textContent = "ЕСТЬ ПРОЕКТ? СВЯЖИТЕСЬ С НАМИ";
    document.getElementById('contact-us__banner__button').textContent = "Подробнее";
    for (var i = 0; i < document.getElementsByClassName('contacs-us__head__title').length; i++) {
      document.getElementsByClassName('contacs-us__head__title')[i].textContent = "Эффективный трехэтапный процесс";
    }   
    for (var i = 0; i < document.getElementsByClassName('contacs-us__head__description').length; i++) {
      document.getElementsByClassName('contacs-us__head__description')[i].textContent = "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.";
    }
    for (var i = 0; i < document.getElementsByClassName('step__description').length; i++) {
      document.getElementsByClassName('step__description')[i].textContent = "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое.";
    }
    document.getElementById('step_subt-1').textContent = '/Идея';
    document.getElementById('step_subt-2').textContent = '/Реализация';
    document.getElementById('step_subt-3').textContent = '/Запуск';  
    document.getElementById('contact-us__content__button1').textContent = 'Подробнее';
    document.getElementById('contact-us__content__button2').textContent = 'О нас';

  }
}

function setLangEng(lang){
  if (localStorage.getItem('lang') == 'en'){
    lang = localStorage.setItem('lang', lang);

    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-1')[i].textContent = 'Main';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-2')[i].textContent = 'Services';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-3')[i].textContent = 'About us';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-4')[i].textContent = 'Projects';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-5')[i].textContent = 'Contact us';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-6')[i].textContent = 'Articles';
    }
    for (var i = 0; i < document.getElementsByClassName('menu__li-1').length; i++) {
      document.getElementsByClassName('menu__li-7')[i].textContent = 'Navigation';
    }
    ///
    document.getElementById('cart-text').textContent = "CART ( 0 )";
    document.getElementById('main-title-text').textContent = "We\'re a creative design agency from Los Angeles, CA";
    document.getElementById('main-desc-text').textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.";
    document.getElementById('services__title-text').textContent = "We're more than just a branding agency.";
    document.getElementById('main-page_button1').textContent = "CONTACT US";
    document.getElementById('main-page_button2').textContent = "OUR PROJECTS";
    ///
    document.getElementById('services__button__desktop').textContent = "Browse all services";
    var srvPageDesc = document.getElementsByClassName('services-page__desc');
    for (var i = 0; i < srvPageDesc.length; i++) {
      srvPageDesc[i].textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Exepteur sintolmelt occaecat cupidatat non proid.";
    }
    document.getElementById('serv-page-subtitle1').textContent = "/ Branding";
    document.getElementById('serv-page-subtitle2').textContent = "/ Web Design";
    document.getElementById('serv-page-subtitle3').textContent = "/ UX/UI Design";
    document.getElementById('serv-page-subtitle4').textContent = "/ Graphic Design";
    document.getElementById('serv-page-subtitle5').textContent = "/ Motion Design";
    document.getElementById('serv-page-subtitle6').textContent = "/ Marketing";
    ///
    for (var i = 0; i < document.getElementsByClassName('about-us__head__title').length; i++) {
      document.getElementsByClassName('about-us__head__title')[i].textContent = "OUR AGENCY STARTED BACK IN 2002";
    }
    document.getElementById('about-us__button__desktop').textContent = "More About Us";
    for (var i = 0; i < document.getElementsByClassName('about-us__grid__item__text').length; i++) {
      document.getElementsByClassName('about-us__grid__item__text')[i].textContent = "Pellentesque sit amet porttitor eget dolor morbi non turpis egestas maecenas pharetra convallis posuere netus et malesuada fames ac fames ac turpis.";
    }
    ///
    for (var i = 0; i < document.getElementsByClassName('projects__head__title').length; i++) {
      document.getElementsByClassName('projects__head__title')[i].textContent = "See our latest portfolio projects";
    }
    document.getElementById('projects__button__desktop').textContent = "Browse more";
    for (var i = 0; i < document.getElementsByClassName('projects__item__description').length; i++) {
      document.getElementsByClassName('projects__item__description')[i].textContent = "Pellentesque sit amet porttitor eget dolor morbi non turpis egestas maecenas pharetra convallis posuere netus et malesuada fames ac fames ac turpis.";
    }
    document.getElementById('proj_category_1').textContent = "BRANDING / 2021";
    document.getElementById('proj_category_2').textContent = "GRAPHIC DESIGN / 2021";
    document.getElementById('proj_category_3').textContent = "WEB DESIGN / 2021";
    document.getElementById('proj_category_4').textContent = "GRAPHIC DESIGN / 2021";
    document.getElementById('proj_subt_1').textContent = "Brand Identity for Haus";
    document.getElementById('proj_subt_2').textContent = "Packaging Design for Sezane";
    document.getElementById('proj_subt_3').textContent = "Website Design for Doean";
    document.getElementById('proj_subt_4').textContent = "Collateral Design for Globex";
    ///
    document.getElementById('contact_banner_title').textContent = "Have a project? Get in touch today";
    document.getElementById('contact-us__banner__button').textContent = "Contact us";
    for (var i = 0; i < document.getElementsByClassName('contacs-us__head__title').length; i++) {
      document.getElementsByClassName('contacs-us__head__title')[i].textContent = "A simple, yet effective three step process.";
    }
    for (var i = 0; i < document.getElementsByClassName('contacs-us__head__description').length; i++) {
      document.getElementsByClassName('contacs-us__head__description')[i].textContent = "A scelerisque purus semper eget duis at tellus integer malesuada nunc vel risus commodo viverra maecenas doloro accumsan pharetra massa massa ultricie.";
    }
    for (var i = 0; i < document.getElementsByClassName('step__description').length; i++) {
      document.getElementsByClassName('step__description')[i].textContent = "A scelerisque purus semper eget duis at tellus integer malesuada nunc vel risus commodo viverra maecenas doloro accumsan pharetra massa massa ultricie.";
    }
    document.getElementById('step_subt-1').textContent = '/Project Idea';
    document.getElementById('step_subt-2').textContent = '/Execution';
    document.getElementById('step_subt-3').textContent = '/Launch';
    document.getElementById('contact-us__content__button1').textContent = 'Contact us';
    document.getElementById('contact-us__content__button2').textContent = 'About our agency';
              
  }
}