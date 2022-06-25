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
        alert("yo!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert("ayo!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
        alert("heyo!");
        return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
        alert("o!");
        return false;
    }
}, false);

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        alert("sounds like a L php user trying to right-click eeh!");
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        alert("e!");
        window.event.returnValue = false;
    });
}

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
