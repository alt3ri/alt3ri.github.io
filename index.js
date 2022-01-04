let counter = 0;
let nametxt = document.getElementById('name');

nametxt.addEventListener("click", function() {
    console.log(counter)
    if (counter >= 10) {
        easterEgg()
    } else {
        counter++;
    }
})

var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

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

function easterEgg() {
    nametxt.innerText = "UI from Discord"
    setTimeout(function(){
        nametxt.innerText = "alt3ri"
        counter = 0
    }, 2000);
}

window.onload = function() {
    if (Math.random() * (10000 - 1) + 1 == 2503) {
        document.getElementById('kt').innerHTML = "KarokeType" + `<svg style="float: right; position: absolute; right: 5px;" aria-hidden="false" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path><path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path></svg>`
    }
}

document.querySelector(".genshin").addEventListener("click", function() {
    document.getElementById('subname').innerText = "UID: 1"
});
