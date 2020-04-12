var storyID = 0;
var storyText = "";
var backgroundAudio = new Audio();

const buttonContainer = document.querySelector("#buttons-container");

document.getElementById("text-content").innerHTML = "";

function initialiseStory()
{
    playSound("assets/story/frog-septe.mp3", 0.5, true)
    //Get content from array
    // Add text content
    storyText = storyContent[0].textContent;
    document.getElementById("text-content").innerHTML = "<p>" + storyText + "</p>";
    
    //Add button content
    document.getElementById("button-1").getElementsByTagName("p")[0].textContent = storyContent[0].options[0];
    
    document.getElementById("button-2").getElementsByTagName("p")[0].textContent = storyContent[0].options[1];
    
    //Set link to follow
    document.getElementById("button-1").formAction = storyContent[0].optionsLinkID[0];
    
    document.getElementById("button-2").formAction = storyContent[0].optionsLinkID[1];
}

//Left Button Is Pressed
function buttonActivated(button)
{
    var indexOfNextStoryItem = 0;
    var matchedID = false;
    var buttonURL = button.formAction;
    var storyContentLength = storyContent.length;
    var buttonDestination = buttonURL.substring(buttonURL.lastIndexOf("/") + 1);
    
    //Find button destination ID
    //Load new content - story text plus buttons
    
    for(i = 0; i < storyContentLength; i++){
        if(storyContent[i].contentID == buttonDestination)
        {
            indexOfNextStoryItem = i;
            matchedID = true;
            break;
        }
    }
    
    if(matchedID == true){
        stopSounds();
        addNewContent(indexOfNextStoryItem);
    }
    else{
        window.alert("Error: Next story item not found");
    }
}

function addNewContent(index) {
    
    var buttonWrappers = new Array();
    var buttons = new Array();
    var buttonsText = new Array();
    
    //Clear Container and Buttons
    var el = document.getElementById('buttons-container');
    while ( el.firstChild ) el.removeChild( el.firstChild );
    
    //Start New Background Audio
    playSound(storyContent[index].backgroundAudioPath, storyContent[index].audioVolume, storyContent[index].audioLoop)
    
    //Set Story Text
    
    document.getElementById("text-content").innerHTML = "<p>" + storyContent[index].textContent + "</p>";
    
    //Change Story Image
    
    console.log(storyContent[index].imgPaths.length);
    
    document.getElementById("story-side-image").src = storyContent[i].imgPaths[0];
    document.getElementById("story-side-image").alt = storyContent[i].imgAlts[0];
    
    //Create New Container and Button
    //For each option create button and container
    
    for(i = 0; i < (storyContent[index].options.length); i++){
        var buttonWrapper = document.createElement("div")
        buttonWrapper.id = ("button-wrapper-" + [i + 1]);
        console.log("Button Wrapper ID = " + buttonWrapper.id)
        buttonWrapper.className = "button-wrapper";
        
        var button = document.createElement("button");
        button.id = ("button-" + [i + 1]);
        console.log("Button ID = " + button.id)
        button.formAction = storyContent[index].optionsLinkID[i];
        console.log("Form Action = " + button.formAction)
        
        var buttonText = document.createElement("p");
        buttonText.textContent = storyContent[index].options[i];
        console.log("Button Text = " + buttonText.textContent);
        
        document.getElementById("buttons-container").appendChild(buttonWrapper);
        document.getElementById("button-wrapper-" + [i + 1]).appendChild(button);
        document.getElementById("button-" + [i + 1]).appendChild(buttonText);
    }
}

function playSound(src, volume, loop) {
    backgroundAudio.src = src;
    backgroundAudio.loop = loop;
    backgroundAudio.volume = volume;
    backgroundAudio.play();
}

function stopSounds() {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
}


function checkForButton(element) {
    
    if(element.parentNode.tagName == "BUTTON")
    {
        buttonActivated(element.parentNode);
    }
}

buttonContainer.addEventListener("click",function() {
  checkForButton(event.target);
});

initialiseStory();