var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function(element, index) {
    console.log(element);
    element.addEventListener('click', function(e) {
        e.preventDefault();
        card.classList.remove('active');
    });
});

var video = document.getElementById("myVideo");

document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
    }
}, false);

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        alert("This function has been disabled to prevent you from stealing my code!");
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        alert("This function has been disabled to prevent you from stealing my code!");
        window.event.returnValue = false;
    });
}

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}