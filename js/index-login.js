$("#login-button").click(function(event){
    event.preventDefault();

    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
});

$("#signup-button").click(function(event) {
    event.preventDefault();
    $('.login-container').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('.signup-container').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$("#return-button").click(function(event) {
    event.preventDefault();
    $('.login-container').animate({height: "toggle", opacity: "toggle"}, "slow");
    $('.signup-container').animate({height: "toggle", opacity: "toggle"}, "slow");
});