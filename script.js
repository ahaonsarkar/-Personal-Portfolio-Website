$(document).ready(function(){

  // Smooth scroll for navbar and close menu on click (for mobile)
  $('.nav-link').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    // Collapse navbar if open (for mobile)
    var navbarCollapse = $('.navbar-collapse');
    if(navbarCollapse.hasClass('show')) {
      navbarCollapse.collapse('hide');
    }
    setTimeout(function(){
      $('html, body').animate({scrollTop: $(target).offset().top - 70}, 600);
    }, 300); // Wait for collapse animation
  });

  // Contact form validation
  $('#contactForm').submit(function(e){
    e.preventDefault();
    var name=$('#name').val().trim();
    var email=$('#email').val().trim();
    var message=$('#message').val().trim();
    if(name && email && message){
      alert('Thanks '+name+'! Your message has been sent.');
      $(this)[0].reset();
    } else alert('Please fill in all fields.');
  });

  // Portfolio card click to show modal
  $('.portfolio-card').click(function(e){
    // If card has data-scroll, scroll to section instead of modal
    var scrollTarget = $(this).data('scroll');
    if(scrollTarget) {
      $('html, body').animate({scrollTop: $(scrollTarget).offset().top - 70}, 600);
      return;
    }
    $('#modalContent').text($(this).data('info'));
    var modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    modal.show();
  });

  // Info cards, achievement cards, and all .info-card: scroll to section on click
  $('.info-card, .achievement-card').click(function(){
    var scrollTarget = $(this).data('scroll');
    if(scrollTarget) {
      $('html, body').animate({scrollTop: $(scrollTarget).offset().top - 70}, 600);
    }
  });

  // Skill and project hover effect
  $('.skill-card, .project-card, .info-card, .achievement-card').mousedown(function(){
    $(this).css('box-shadow','0 25px 40px rgba(0,0,0,0.7)');
  }).mouseup(function(){
    $(this).css('box-shadow','0 15px 25px rgba(0,0,0,0.6)');
  });

});
