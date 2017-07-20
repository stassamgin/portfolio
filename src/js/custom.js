'use strict';

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

    if(document.documentElement.clientWidth < 768) {
        document.querySelector('.header__nav').classList.remove('header__nav--active');
    }    
}

function getElementHeight (elem) {
    var box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}

