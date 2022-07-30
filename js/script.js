// fixed menu
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".header-top").addClass("bg-dark-opacity");
    $(".header-top").css({
      'position': 'fixed',
      'top': '0px',
      'width': '100%',
      'z-index': '99',
    });
  } else {
    $(".header-top").removeClass("bg-dark-opacity");
    $(".header-top").css({
      'position': 'relative',
      'top': '0px',
      'width': '100%',
      'z-index': '1',
    })
  }
});

// carousel responsive
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      320: {
        items: 1,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<span class="fs-1"><i class="bi bi-chevron-left"></i><span>', '<span class="fs-1"><i class="bi bi-chevron-right"></i><span>']
      },
      576: {
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<span class="fs-1"><i class="bi bi-chevron-left"></i><span>', '<span class="fs-1"><i class="bi bi-chevron-right"></i><span>']
      },
      768: {
        items: 2,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<span class="fs-1"><i class="bi bi-chevron-left"></i><span>', '<span class="fs-1"><i class="bi bi-chevron-right"></i><span>']
      },
      992: {
        items: 3,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<span class="fs-1"><i class="bi bi-chevron-left"></i><span>', '<span class="fs-1"><i class="bi bi-chevron-right"></i><span>']
      },
      1200: {
        items: 4,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ['<span class="fs-1"><i class="bi bi-chevron-left"></i><span>', '<span class="fs-1"><i class="bi bi-chevron-right"></i><span>']
      }
    }
  });
});

// toggle search menu
function clickToggle() {
  $(".select-option").fadeToggle("slide").css({ display: 'flex' });
  if ($(this).is(':visible')) {
    $(".search-show-more-button").replaceWith(`<a href="#" onclick="clickToggle()" class="search-show-more-button"><span class="orange-color"><i
    class="bi bi-chevron-double-up"></i></span><span>Less Filter</span></a>`);
  } else {
    $(".search-show-more-button").replaceWith(` <a href="#" onclick="clickToggle()" class="search-show-more-button"><span class="orange-color"><i
      class="bi bi-chevron-double-down"></i></span><span>More Filter</span></a>`);
  }
}


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;