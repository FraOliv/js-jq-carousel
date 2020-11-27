$(document).ready(function () {
    var PreviewButton = $('.fa-angle-left');
    var NextButton = $('.fa-angle-right');
  
    // Cliccando sulla freccia di dx scorro in avanti lo slider
    // e coloro correttamente i pallini
    NextButton.click(function () {
      NextImage();
    });
  
    // Cliccando sulla freccia di sx scorro indietro lo slider
    // e coloro correttamente i pallini
    PreviewButton.click(function () {
      PreviewImage();
    });
  
  
  });
  
  //FUNZIONI PER LO SLIDER

//RICORDA NEXT
  
  function NextImage() {
    var imgActive = $('img.active');
    var imgFirst = $('img.first');
    var dotActive = $('i.fa-circle.active');
    var dotFirst = $('i.fa-circle.first');
  
    imgActive.removeClass('active');
    dotActive.removeClass('active');
  
    if (imgActive.hasClass('last')) {
      imgFirst.addClass('active');
      dotFirst.addClass('active');
    } else {
      imgActive.next('img').addClass('active');
      dotActive.next('i').addClass('active');
    }
  };
  
  function PreviewImage() {
    var imgActive = $('img.active');
    var imgLast = $('img.last');
    var dotActive = $('i.fa-circle.active');
    var dotLast = $('i.fa-circle.last');
  
    imgActive.removeClass('active');
    dotActive.removeClass('active');
  
    if (imgActive.hasClass('first')) {
      imgLast.addClass('active');
      dotLast.addClass('active');
    } else {
      imgActive.prev('img').addClass('active');
      dotActive.prev('i').addClass('active');
    }
  };
