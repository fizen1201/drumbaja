var numO = document.querySelectorAll(".drum").length;

for (var i = 0; i < numO; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var key = this.innerHTML;
        audios(key);
        animate(key);
    });
    document.addEventListener('keypress', function(E){
        audios(E.key);
        animate(E.key);
    })
}
 
function audios(key){
    switch (key) {

        case "w":
            var audio = new Audio('sounds/1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio("sounds/2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("sounds/3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("sounds/4.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("sounds/5.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("sounds/6.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("sounds/7.mp3");
            audio.play();
            break;
    }
 }

 function animate(keys){
     var activeButton=document.querySelector("."+keys);
     activeButton.classList.toggle("pressed");
 }