$.getJSON('json/readymovies.json', function(dat){
  
  var owlHTML = '';

  for (var i = 0; i < dat.length; i++) {
    owlHTML += '<div class="item" data-idex="' + i + '"><img  class="imgitem" src="' + dat[i].urlp + '"><div class="overlay unselected"></div></div>';
  }

  $('.owl-carousel').html(owlHTML);

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      0:{
        items:2,
      },
      920:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:6
      },
      1900:{
        items:9
      }
    }
  });

  $('.owl-prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });

  document.getElementById("current-image").src = dat[0].url;
  document.getElementById("genre").textContent = dat[0].genres;
  document.getElementById("owlname").textContent = dat[0].name;
  document.getElementById("owldesc").textContent = dat[0].description;
  $('.owl-carousel [data-idex="' + 0 + '"]  div').removeClass('overlay');


  $('.item').click(function() {
    var index = $(this).data('idex');
    console.log('Clicked item index:', index);
    document.getElementById("current-image").src = dat[index].url;
    document.getElementById("genre").textContent = dat[index].genres;
    document.getElementById("owlname").textContent = dat[index].name;
    document.getElementById("owldesc").textContent = dat[index].description;

    $('.owl-carousel .unselected ').addClass('overlay');

    $('.owl-carousel [data-idex="' + index + '"]  div').removeClass('overlay');




    
  });

});
