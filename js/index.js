const rating = $("#rating");
const result = $(".result");
const scoreBtn = $("#rating ul button");
const thankYou = $("#thank-you");

thankYou.hide();

function SubmitScore() {
    thankYou.show();
    rating.hide();
}

scoreBtn.click(function() {
    scoreBtn.removeClass("active");
    $(this).addClass("active");
    result.text("You selected " + $(this).text() + " out of 5");
});

$("a").click(function(event) {
    event.preventDefault();
});