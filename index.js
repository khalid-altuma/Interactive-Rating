var choice = 0;

$(".buttons-num").click(function (e) {

    choice = $(this).attr("id");

    $(".submit").removeAttr("disabled");

} )

$(".submit").click(function (e) {

    $(this).css({
        'background-color' : 'rgb(256, 256, 256)',
        'color' : 'hsl(25, 97%, 53%)'
    } )

    submittedScreen();
} )

function submittedScreen() {

    $("#thank-img").removeClass("non-visible");
    $("#thank-divp").removeClass("non-visible");
    $("#thank-p").removeClass("non-visible");
    $("#thank-divp").addClass("thank-divp");
    $("#thank-p").addClass("thank-p");
    $("#thank-p").text(" You selected " + choice + " out of 5 ");
    $("#text").addClass("thank-text");
    $("button, .star").addClass("non-visible");
    $("#text").removeClass("text");

    if (choice >= 4) {
        $("h1").text("Thank you!");
        $(".p").text("We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!");
    } else if (choice >= 2) {
        $("h1").text("Sorry to hear that!");
        $(".p").text("We appreciate you taking the time to give a rating. We will get in touch with you to know the problem as soon as possible!");
    } else {
        $("h1").text("So Sorry to hear that!");
        $(".p").text("We will get in touch with you as soon as possible to resolve the issue! We apologize for the inconvenience.");
    }
}

