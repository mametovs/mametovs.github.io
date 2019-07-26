$('.widget').slick({
	dots: true,
  arrows: false,
  rows: false
});



$('.swiper-wrapper').slick({
  slidesToShow: 4,
   responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
    {
      breakpoint: 769,
      settings: {
         slidesToShow: 2,
      }
    },
     {
      breakpoint: 581,
      settings: {
         slidesToShow: 1,

      }
    }
  ]
});

$('.stock-slider').slick({
  slidesToShow: 3,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 769,
    settings: {
     slidesToShow: 2,
   }
 },
 {
  breakpoint: 580,
  settings: {
   slidesToShow: 1,
 }
}
]
});

$('.information-block-slide').slick({
  slidesToShow: 3,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 769,
    settings: {
     slidesToShow: 2,
   }
 },
 {
  breakpoint: 580,
  settings: {
   slidesToShow: 1,
 }
}
]
});


$( "#menuToggle" ).click(function() {
  $( "#menu" ).slideToggle( "slow", function() {
  });
});


$( function() {
  $( "#slider-range" ).slider({
    step: 1,
    range: true,
    min: 1200,
    max: 11700,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "" + ui.values[ 0 ]  );
      $( "#amount_1" ).val( "" + ui.values[ 1 ]  );
    }
  });
  $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) );

  $( "#amount_1" ).val( "" + $( "#slider-range" ).slider( "values", 1 ) );
});


$('.swiper-wrapper-wrap').slick({
  slidesToShow: 3,
  arrows:false,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 769,
    settings: {
     slidesToShow: 2,
   }
 },
 {
  breakpoint: 581,
  settings: {
   slidesToShow: 1,

 }
}
]
});




var acc = document.getElementsByClassName("price-wrap"),
i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    for (j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.classList.remove("price-wrapper");

      } else {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("price-wrapper");
      }
    }
  }
};

var aca = document.getElementsByClassName("price-wrap-wrap"),
i;
for (i = 0; i < aca.length; i++) {
  aca[i].onclick = function() {
    for (j = 0; j < aca.length; j++) {
      if (aca[j] !== this) {
        aca[j].classList.remove("active");
        aca[j].nextElementSibling.classList.remove("price-wrapper-wrap");

      } else {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("price-wrapper-wrap");
      }
    }
  }
};



$('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });


$('.minus-copy').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plus-copy').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });

/*
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
    });
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}
showPanel(0);*/




var bor = document.getElementsByClassName("pagination-btn"),
i;
for (i = 0; i < bor.length; i++) {
  bor[i].onclick = function() {
    for (j = 0; j < bor.length; j++) {
      if (bor[j] !== this) {
        bor[j].classList.remove("active");
        bor[j].nextElementSibling.classList.remove("oils-wrap");

      } else {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("oils-wrap");
      }
    }
  }
};

var oil = document.getElementsByClassName("pagination-btn-wrap"),
i;
for (i = 0; i < oil.length; i++) {
  oil[i].onclick = function() {
    for (j = 0; j < oil.length; j++) {
      if (oil[j] !== this) {
        oil[j].classList.remove("active");
        oil[j].nextElementSibling.classList.remove("oils-wrap");

      } else {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("oils-wrap");
      }
    }
  }
};


$('.swiper-wrapper-item').slick({
  slidesToShow: 4,
  
   responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
    {
      breakpoint: 769,
      settings: {
         slidesToShow: 2,
      }
    },
     {
      breakpoint: 581,
      settings: {
         slidesToShow: 1,

      }
    }
  ]
});


var btn = document.querySelector('.btn'), // Главная кнопка
    modal = document.querySelector('.modal'), // Модальное окно
    closeBtn = document.querySelector('.closeBtn'); // Кнопка, закрывающая модальное окно

// Открытие модального окна
btn.addEventListener('click', function() {
    modal.style.display = 'flex'; 
})
// Закрытие модального окна при клике на кнопку
closeBtn.addEventListener('click', function () {
  modal.style.display = "none";
})
// Закрытие модального окна при клике на серую область
window.addEventListener('click', function (e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }   
})


// var office = document.getElementsByClassName("office-btn"),
// i;
// for (i = 0; i < office.length; i++) {
//   office[i].onclick = function() {
//     for (j = 0; j < office.length; j++) {
//       if (office[j] !== this) {
//         office[j].classList.remove("active");
//         office[j].nextElementSibling.classList.remove("office-btn-copy");

//       } else {
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("office-btn-copy");
//       }
//     }
//   }
// };

// var btns = document.getElementsByClassName("purchase-btn"),
// i;
// for (i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     for (j = 0; j < btns.length; j++) {
//       if (btns[j] !== this) {
//         btns[j].classList.remove("active");
//         btns[j].nextElementSibling.classList.remove("purchase-btn-item");

//       } else {
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("purchase-btn-item");
//       }
      
//     }
//   }
// };
      


$('.office-btn').on('click', function(){
  $(this).toggleClass('opened');
  $('div#office-btns').slideToggle(150);
})

$('body').click(function(e){
  if(!$(e.target).is('.office-btn, .office-btn *, div#purchase-btns *')) {
  $('div#office-btns').slideUp(150);
  $('.office-btn').removeClass('opened')
  }
})




$('.purchase-btn').on('click', function(){
  $(this).toggleClass('opened');
  $('div#purchase-btns').slideToggle(150);
})

$('body').click(function(e){
  if(!$(e.target).is('.purchase-btn, .purchase-btn *, div#purchase-btns *')) {
  $('div#purchase-btns').slideUp(150);
  $('.purchase-btn').removeClass('opened')
  }
})



$('.compresion-item').slick({
  arrows: true,
  slidesToShow: 2,
  infinite: false,


  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 448,
    settings: {
      slidesToShow: 1,
     arrows: false,
   }
 },
 {
  breakpoint: 408,
  settings: {
   slidesToShow: 1,

 }
}
  ]
});


$('.cost-slider').slick({
  arrows: true,
  slidesToShow: 5,
  infinite: true,
  prevArrow: '<button class="btn-slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button class="btn-slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
     
   }
 },
   {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
   }
 },   

 {
  breakpoint: 320,
  settings: {
   slidesToShow: 1,
 }
}
  ]
});

$('.img-transform').on('click', function(){
  $(this).toggleClass('opened');
  $('.back-item').slideToggle(350);
})

$('.img-transform-two').on('click', function(){
  $(this).toggleClass('opened');
  $('.back-item_two').slideToggle(350);
})

$('.img-transform-three').on('click', function(){
  $(this).toggleClass('opened');
  $('.back-item_three').slideToggle(350);
})
