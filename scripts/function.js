/* jshint browser: true */
/* jshint node: true */

//Current story array ID
var storyID = 0;
//Text content for story
var storyText = "";
//Declarding audio element
var backgroundAudio = new Audio();
//Bool if audio element has been activated
var audioStarted = false;
//Current story index - 1
var currentStoryIndex = 0;

const buttonContainer = document.querySelector("#buttons-container");
document.getElementById("text-content").innerHTML = "";


//Add initial story content
function initialiseStory()
{   
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

//Button activated
function buttonActivated(button)
{
    var indexOfNextStoryItem = 0; //Array index of next item to display
    var matchedID = false; //Matched destination ID with array content ID
    var buttonURL = button.formAction;
    var buttonID = button.id;
    var buttonIndex = (buttonID.substring(buttonID.lastIndexOf("-") + 1) - 1);
    console.log(buttonIndex);
    var storyContentLength = storyContent.length;
    var buttonDestination = buttonURL.substring(buttonURL.lastIndexOf("/") + 1);
    
    //Find button destination ID
    //Load new content - story text plus buttons
    
    for(var i = 0; i < storyContentLength; i++){
        if(storyContent[i].contentID == buttonDestination)
        {
            indexOfNextStoryItem = i;
            matchedID = true;
            break;
        }
    }
    
    //If button contentID matches destinationID
    if(matchedID){
        playSoundEffect(buttonIndex); //Play sound effect
        stopSounds(); //Stop audio elements from playing
        addNewContent(indexOfNextStoryItem); //Add new story content
    }
    else{
        //Couldn't match next story item to ID
        //Output message stating that the item can't be found
        window.alert("Error: Next story item not found");
    }
}

//Play sound effect
function playSoundEffect(buttonIndex)
{
    var soundID = storyContent[currentStoryIndex].buttonAudioName[buttonIndex];
    var soundEffectIndex = 0;
    
    //Iterates through sound effects ID
    //Matches sound ID
    for(var i = 0; i < soundEffects.length; i++)
    {
        if(soundEffects[i].soundID == soundID)
        {
            console.log("Match");
            soundEffectIndex = i;
            break;
        }
    }
    var soundEffectSelected = new Audio(); //Add new audio component
    soundEffectSelected.src = soundEffects[soundEffectIndex].filePath; //Starts sound using the index
    soundEffectSelected.load(); //Load audio
    soundEffectSelected.play(); //Play audio
}

//Add new story content
function addNewContent(index) {
    
    var buttonWrappers = [];
    var buttons = [];
    var buttonsText = [];
    
    //Set new story index
    currentStoryIndex = index;
    
    //Clear Container and Buttons
    var el = document.getElementById('buttons-container');
    while ( el.firstChild ) el.removeChild( el.firstChild );
    
    //Start New Background Audio
    playSound(storyContent[index].backgroundAudioPath, storyContent[index].audioVolume, storyContent[index].audioLoop);
    
    //Set Story Text
    
    document.getElementById("text-content").innerHTML = "<p>" + storyContent[index].textContent + "</p>";
    
    //Change Story Image
    
    document.getElementById("story-side-image").src = storyContent[index].imgPaths[0];
    document.getElementById("story-side-image").alt = storyContent[index].imgAlts[0];
    
    //Create New Container and Button
    //For each option create button and container
    for(var i = 0; i < (storyContent[index].options.length); i++)
    {
        var buttonWrapper = document.createElement("div");
        buttonWrapper.id = ("button-wrapper-" + [i + 1]);
        buttonWrapper.className = "button-wrapper";
        
        var button = document.createElement("button");
        button.id = ("button-" + [i + 1]);
        button.formAction = storyContent[index].optionsLinkID[i];

        var buttonText = document.createElement("p");
        buttonText.textContent = storyContent[index].options[i];

        document.getElementById("buttons-container").appendChild(buttonWrapper);
        document.getElementById("button-wrapper-" + [i + 1]).appendChild(button);
        document.getElementById("button-" + [i + 1]).appendChild(buttonText);    
    }
}


//Play background sound
//Using existing audio element
function playSound(src, volume, loop) {
    backgroundAudio.src = src; //Audio URL
    backgroundAudio.loop = loop; //Continous audio playing
    backgroundAudio.volume = volume; //Audio volume
    backgroundAudio.load();
    backgroundAudio.play();
}

//Stop background audio
function stopSounds() {
    backgroundAudio.pause(); //Pause audio
    backgroundAudio.currentTime = 0; //Set playback time to 0
}

//Check for button activated ID
function checkForButton(element) {
    if(element.parentNode.tagName == "BUTTON")
    {
        buttonActivated(element.parentNode);//Send in parent DIV ID
    }
}

//Listen for user click in button container
//Check if button is pressed
buttonContainer.addEventListener("click",function() {
  checkForButton(event.target);
});

//On load of the window
//Initialise the story
window.onload=function(){
    initialiseStory();
};