document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".obj");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var audioFile = button.getAttribute("data-audio");
            var audio = new Audio("audio/" + audioFile);
            audio.play();
        });
    });
});
