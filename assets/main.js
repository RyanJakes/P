//background inspired by stripe.com

$("#email").click(function() {
    $("#changer").fadeOut("slow", function() {
        $("#changer").text("ryan@forcir.ca");
        $("#changer").fadeIn("fast");
    })
});

$("#phone").click(function() {
    $("#changer").fadeOut("slow", function() {
        $("#changer").text("250-938-1534");
        $("#changer").fadeIn("fast");
    })
});

$("#photo").click(function() {
    $(".cards").slideToggle();
});
(function() {
    var words = [
            'Student',
            'Designer',
            'Tech Guru',
            'Developer',
            'Skier',
            'Teacher',
            'Teddy Bear'
        ],
        i = 0;
    setInterval(function() {
        $('#changingword').fadeOut(function() {
            $(this).html(words[i = (i + 1) % words.length]).fadeIn();
        });
    }, 6000);

})();

$(".card-toggle").on("click", function() {

    // Card toggle state 	
    $(".card-toggle").removeClass("active");
    $(this).addClass("active");

    var isAnimating = false;

    if (!isAnimating) {
        isAnimating = true;

        $(".card").find(".card-content").css("z-index", 0);
        $(".card").removeClass("active");

        var that = $(this);

        $(this).siblings().css("z-index", 1);

        setTimeout(function() {
            that.parent().toggleClass("active").find(".card-content").on("transitionend", function() {
                isAnimating = false;
            });;

        }, 10);
    } else {
        return;
    }
});

$("input,textarea").blur(function() {
    if ($(this).val()) {
        $(this).parent().addClass("filled");
    } else {
        $(this).parent().removeClass("filled");
    }
});

$(".contact").on("click", function() {
    $(".contact-form").toggleClass("active");
});
$(".contact-form input[type=submit], .contact-form .close").on("click", function(e) {
    e.preventDefault();
    $(".contact-form").toggleClass("active")
});