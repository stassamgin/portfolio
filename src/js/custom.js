'use strict';

//COUNTRY DEFINITION 
var country = 'RU';

var xml = new XMLHttpRequest();
xml.open("GET", "http://ipinfo.io/?callback=callback", true);
xml.send();
xml.onreadystatechange = function() {
    if (xml.readyState != 4) return;
    if (xml.status != 200) {
    console.log( xml.status + ': ' + xml.statusText );
    } else {
        var responseData = xml.responseText;
        responseData = responseData.slice(responseData.indexOf("({")+1, -2);
        var ipResponse = JSON.parse(responseData);
        country = ipResponse.country;
    }

    if( country == 'UA' ) {
        document.getElementById('js-adres').innerHTML = "<span >Адрес: </span>ул. Вышгородская, г.Киев"
        document.getElementById('js-res-pdf').setAttribute('href', 'file/SAMGIN_STANISLAV_FRONTEND.pdf');
        document.getElementById('js-res-docx').setAttribute('href', 'file/SAMGIN_STANISLAV_FRONTEND.docx');
    }
}

// EVENT MENU CLICK

document.querySelector('.menuBtn').onclick = function (e) {
    e.preventDefault();
    document.querySelector('.header__nav').classList.toggle('header__nav--active');
}

// EVENT SCROLL - BOTTOM PROGRESS BAR 

var scrollProgress = document.querySelector('.scroll_progress');
scrollProgress.style.width = 0;

window.onscroll = function() {
  var offset = window.pageYOffset || document.documentElement.scrollTop,
  		windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight,
      progress = Math.floor(offset/windowHeight * 100);
  scrollProgress.style.width = progress + '%';
}

// EVENT MENU CLICK - SCROLL ON BLOCK

document.querySelector('.header__navList').onclick = function(e) {
    e.preventDefault();
    var target = e.target;
    if (target.tagName != 'A') return;
    var href = target.getAttribute('href'),
        elem = document.querySelector('.' + href);

    window.scrollTo(0, getElementHeight(elem));

    document.querySelector('.header__nav').classList.remove('header__nav--active');   
}

function getElementHeight (elem) {
    var box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}

// EVENT WORK IMAGE HOVER/CLICK

document.querySelector('.works__list').onclick = function (e) {
    var target = e.target;

    if(document.documentElement.clientWidth >= 768) return;
    if (!target.classList.contains('works__item')) return;
   
    var itemColl = target.parentNode.children;
    for (var i = 0; i < itemColl.length; i++) {
        if (target == itemColl[i]) continue;        
        itemColl[i].classList.remove('works__item--active');
        itemColl[i].querySelector('.works__descr').classList.remove('works__descr--active');
        itemColl[i].querySelector('.works__tools').classList.remove('works__tools--active');
    }

    target.classList.toggle('works__item--active');
    target.querySelector('.works__descr').classList.toggle('works__descr--active');
    target.querySelector('.works__tools').classList.toggle('works__tools--active');
}

//ASIDE TITLE SCROLL

var eventItemsCollection = document.querySelectorAll('.asideTitle__rotate'),
    eventItems = [];

for (var i = 0; i < eventItemsCollection.length; i++) {
    eventItems.push(eventItemsCollection[i]);
}

eventItems.forEach(function(item) {
    var itemWidth = item.offsetWidth + item.offsetWidth*0.3,
        itemHeight = item.offsetHeight,
        itemSize = itemWidth  + itemHeight;

    item.style.top = itemSize +  'px';

})


 window.addEventListener('scroll', function (e) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    eventItems.forEach(function(item) {
        var parent,
            itemWidth = item.offsetWidth + item.offsetWidth*0.3,
            itemHeight = item.offsetHeight,
            itemSize = itemWidth  + itemHeight;

        function getParrent(elem) {
            if (elem.classList.contains("container")) {
                parent = elem; 
                return elem}
            if (elem === document.body) return false;
            getParrent(elem.parentNode);
        }
        getParrent(item);

        var startEventHeight = getElementHeight(parent) - document.documentElement.clientHeight/2 + itemSize/4;
        
        if (scrolled >= startEventHeight + itemSize/2 && 
            scrolled <= startEventHeight + parent.offsetHeight - itemSize/2 - 50) { 
            item.style.top = itemSize/2 + scrolled - startEventHeight + 'px';            
        }
        
    })
 })

// EFFECTS & ANIMATION https://greensock.com

if(TweenMax && document.documentElement.clientWidth > 768){
    TweenMax.from(".hero__img", .2, {opacity: 0, delay: .9});
    TweenMax.from(".menuBtn", .3, {x:50, opacity: 0});

    TweenMax.from(".hero__title", .3, {x:-70, opacity: 0});
    TweenMax.from(".hero__discr", .3, {x:-70, opacity: 0, delay: .3});
    TweenMax.from(".hero__resume", .3, {x:-70, opacity: 0, delay: .6});


    // START PARAM FOR ANIMATED BLOCKS
    function leftHide (elem){
        TweenMax.set(elem, { x:-70, opacity: 0 });
    }

    function rightHide (elem){
        TweenMax.set(elem, { x:70, opacity: 0 });
    }

    function topHide (elem){
        TweenMax.set(elem, { y:-70, opacity: 0 });
    }    

    function bottomHide (elem){
        TweenMax.set(elem, { y:70, opacity: 0 });
    }
    leftHide ( ".about .asideTitle, .skills .asideTitle, .works .asideTitle" )
    // leftHide ( ".about .asideTitle, .works .asideTitle" )
    leftHide ( ".education .asideTitle, .workExp .asideTitle" )
    rightHide ( ".about__contact, .education__item, .workExp__item" )
    topHide ( ".about__subtitle, .about__title, .skillBlockMain__title, .skillBlockSecond__title" )
    topHide ( ".skillBlockLanguage__title, .works__title, .education__title, .workExp__title")
    bottomHide ( ".about__descr, .skillBlockLanguage__item, .works__item" )


    TweenMax.set(".skillBlockMain__item", { width: 0, opacity: 0 });
    TweenMax.set(".skillBlockSecond__item", { opacity: 0, scale: 0 });

    // SHOWED FUNCTION
    var elNorm = { x: 0, y: 0, opacity: 1 };

    function aboutAnim () {
        TweenMax.to(".about .asideTitle, .about__title, .about__subtitle, .about__descr, .about__contact", 
                .5, elNorm);
    }

    function skillsMainAnim () {      
        // TweenMax.to(".skills .asideTitle, .skillBlockMain__title", 
        //         .5, elNorm);

        TweenMax.to(".skills .asideTitle", 
                .5, { x: 0, y: 0, opacity: 1, delay: .5 });

        TweenMax.to(".skillBlockMain__title", 
                .5, elNorm);

        TweenMax.staggerTo('.skillBlockMain__item', .5, { width: 100 +'%' }, .2);
        TweenMax.staggerTo('.skillBlockMain__item', .2, elNorm, .2);
    }

    function skillsSecondAnim () {
        TweenMax.to(".skillBlockSecond__title", .5, elNorm);
        TweenMax.staggerTo('.skillBlockSecond__item', .5, { opacity: 1, scale: 1, ease: Elastic.easeOut}, .1);
    }

    function skillsLanguageAnim () {
        TweenMax.to(".skillBlockLanguage__title", .5, elNorm);
        TweenMax.staggerTo('.skillBlockLanguage__item', .5, elNorm, .3);
    }
    
    function worksAnim () {
        TweenMax.to(".works .asideTitle, .works__title", 
                .5, elNorm);

        TweenMax.staggerTo('.works__item', .5, elNorm, .3);
    }

    function educationAnim () {
        TweenMax.to(".education .asideTitle, .education__title", 
                .5, elNorm);


        TweenMax.staggerTo('.education__item', .5, elNorm, .3);
    }

    function workExpAnim () {
        TweenMax.to(".workExp .asideTitle, .workExp__title", 
                .5, elNorm);


        TweenMax.staggerTo('.workExp__item', .5, elNorm, .3);
    }



    window.addEventListener('scroll', function (e) {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrolled += 300;
        if(document.documentElement.clientWidth >= 1400) scrolled += 370;
        
        if ( scrolled >= getElementHeight(document.querySelector('.about')) ) {
            aboutAnim() 
        }
        if ( scrolled >= getElementHeight(document.querySelector('.skills')) ) {
            skillsMainAnim() 
        }
        if ( scrolled >= getElementHeight(document.querySelector('.skillBlockSecond')) ) {
            skillsSecondAnim() 
        }
        if ( scrolled >= getElementHeight(document.querySelector('.skillBlockLanguage')) ) {
            skillsLanguageAnim() 
        }
        if ( scrolled >= getElementHeight(document.querySelector('.works')) ) {
            worksAnim() 
        }
        if ( scrolled >= getElementHeight(document.querySelector('.education')) ) {
            educationAnim() 
        }
        if ( scrolled >= getElementHeight(document.querySelector('.workExp')) ) {
            workExpAnim()
        }
    }, false)
}
