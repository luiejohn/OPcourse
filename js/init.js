(function($){
  $(function(){
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('.modal').modal();
    $('.datepicker').datepicker();
    $('.datepicker').pickadate({
			    selectMonths: true, // Creates a dropdown to control month
			    selectYears: 15, // Creates a dropdown of 15 years to control year,
			    today: 'Today',
			    clear: 'Clear',
			    close: 'Ok',
			    closeOnSelect: false // Close upon selecting a date,
			  });

  }); // end of document ready
}) (jQuery); // end of jQuery name space