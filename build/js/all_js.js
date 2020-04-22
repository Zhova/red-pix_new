"use strict";

window.addEventListener('DOMContentLoaded', preloaderHide, false);
var preloader = $('#preloader');

function preloaderHide() {
  window.setTimeout(function () {
    preloader.addClass('preloader-hide');
    preloader.css('opacity', '0');
    setTimeout(function () {
      preloader.css('display', 'none');
    }, 500);
  }, 1000);
}

;
$(document).ready(function () {
  $('.partners-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
  $('.portfolio-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: "<div class='prev'></div>",
    nextArrow: "<div class='next'></div>"
  });
  $('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: "<div class='prev'></div>",
    nextArrow: "<div class='next'></div>",
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.burger').click(function () {
    $('.header').toggleClass('header__mob');
    $('.header').toggleClass('burger-menu');
    $('.header ul').toggleClass('mobile-menu');
  });
  $('.header__menu a').click(function () {
    $('.header ul').removeClass('mobile-menu');
    $('.header').removeClass('burger-menu');
    $('.header').removeClass('header__mob');
  });
  var menu = $('.header__menu li a');
  menu.each(function () {
    $(this).on('click', function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
    });
  });
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  function changeFav(fav) {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.href = fav;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  var firstTitle = 'Вернись',
      secondTitle = 'к нам!!!',
      location = window.onblur,
      $fav = $("link[rel='shortcut icon']").attr('href'),
      fav1 = './img/warning.png',
      fav2 = './img/warning1.svg',
      changeTitle = function changeTitle() {
    if ($title.text() == firstTitle) {
      $title.text(secondTitle);
      changeFav(fav1);
    } else {
      $title.text(firstTitle);
      changeFav(fav1);
    }
  },
      interval;

  var $title = $('title');

  window.onblur = function () {
    interval = setInterval(changeTitle, 1000);
  };

  window.onfocus = function () {
    clearInterval(interval);
    $title.text('Red-pix');
    changeFav('./img/fav-redpix.png');
  }; // btn to-top


  var btn = $('#to-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.css({
        'opacity': '1'
      });
    } else {
      btn.css({
        'opacity': '0'
      });
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
});