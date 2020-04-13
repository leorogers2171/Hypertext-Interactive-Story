function resposiveHeight()
{
    var screenHeight = screen.height;
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    var resposiveHeight = (windowWidth * 0.5625) - (screenHeight - windowHeight);
    return resposiveHeight;
}

function setWindowSize() {
    document.getElementById("wraper").style.height = (resposiveHeight() + "px");
}

window.onresize = function(){
    setWindowSize();
}

setWindowSize();