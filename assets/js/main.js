

//function myFunction(x) {
//        x.classList.toggle("change");
//      }
$(document).ready(function() {

    /* =====TestimonalSlider=======*/

    $('.ProductSlider').slick({
        arrows: true,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });

   

});

(function($){
    "use strict";
    $(document).ready(function(){
        function testSlider(){
            if ((".user_img_slider-2665").length > 0 ) {
                jQuery('.user_img_slider-2665').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: true,
                    vertical:true,
                    verticalSwiping:true,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                    focusOnSelect: true,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                arrows: false,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                                vertical: false,
                                verticalSwiping:false,
                            }
                        },
                        {
                            breakpoint: 640,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                                vertical: false,
                                verticalSwiping:false,
                            }
                        }
                    ]
                });
            }
           
        }
        testSlider();
    });

}(jQuery));

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


  //=====================countundoen =================//
  var countDownDate = new Date("Jan 1, 2025 15:37:25").getTime();
  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countDown").innerHTML = "EXPIRED";
    }
  }, 1000);