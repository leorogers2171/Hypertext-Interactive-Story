//Set resposive height of the document wrapper
//Based on 16:9 aspect ratio
//Calculates correct size with proportions on window height
function resposiveHeight()
{
    var screenHeight = screen.height;
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    var resposiveHeight = (windowWidth * 0.5625) - (screenHeight - windowHeight);
    return resposiveHeight;
}

//Set window heigh property
function setWindowSize() {
    document.getElementById("wraper").style.height = (resposiveHeight() + "px");
}

//On resize of the window set the window size
window.onresize = function(){
    setWindowSize();
}

setWindowSize();