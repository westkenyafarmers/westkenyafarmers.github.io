$("#button2").click(function(event) {
  event.preventDefault();
  $(".cotn_principal").show(1000);
  $("#google-plus").show(100);
  $("#instagram").show(300);
  $("#linkedin").show(500);
  $("#twitter").show(700);
  $("#facebook").show(900);
});

$(".close").click(function(event){
  $(".cotn_principal").slideUp(500);
});


// lewis js



// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

//second slide

// Instantiate the Bootstrap carousel
$('.multi-item-carouselz').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carouselz .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});







//third slide

// Instantiate the Bootstrap carousel
$('.multi-item-carouselq').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carouselq .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});









//last slide
// Instantiate the Bootstrap carousel
$('.multi-item-carousels').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousels .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

function showContacts() {
  document.getElementById('form-container front').show(1500);
}

//collasable menu
$(':radio').change(
  function(){
    $('.choice').text( this.value + ' stars' );
  }
)


function toggle(){
  var a = getElementById('produce');
  if(a.style.display="none")
    a.style.display="block";

    else {
      a.style.display="none";
    }
}
