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

(function() {
    $('.btn').click(function() {
        $(this).toggleClass('active');
        return $('.box').toggleClass('open');
    });

}).call(this);
