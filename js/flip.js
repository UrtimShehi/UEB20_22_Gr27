$(document).ready(function() {
    $('.flip-button').on('click', function() {
      var $card = $(this).closest('.card');
  
      // Toggle the display of front and back sides
      $card.find('.front, .back').toggle();
  
      // Apply rotation to flip the card
      $card.toggleClass('flipped');
    });
  });
  