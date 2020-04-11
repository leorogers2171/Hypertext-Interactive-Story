var storyID = 0;
var storyText = "";

const buttonContainer = document.querySelector("#buttons-container");

document.getElementById("text-content").innerHTML = "";

function initialiseStory()
{
    //Get content from array
    // Add text content
    storyText = storyContent[0].textContent;
    document.getElementById("text-content").innerHTML = "<p>" + storyText + "</p>";
    
    //Add button content
    document.getElementById("button-1").getElementsByTagName("p")[0].textContent = storyContent[0].opt1;
    
    document.getElementById("button-2").getElementsByTagName("p")[0].textContent = storyContent[0].opt2;
    
    //Set link to follow
    document.getElementById("button-1").formAction = storyContent[0].opt1LinkID;
    
    document.getElementById("button-2").formAction = storyContent[0].opt2LinkID;
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
        console.log("The index to go next is: " + indexOfNextStoryItem);
       addNewContent(indexOfNextStoryItem);
    }
    else{
        window.alert("Error: Next story item not found");
    }
}

function addNewContent(index) {
    //Clear Container and Buttons
    var el = document.getElementById('buttons-container');
    while ( el.firstChild ) el.removeChild( el.firstChild );
    
    //Create New Container and Button
    //For each option create button and container
    
    //Create Wrapper 1 and Set Properties
    var buttonWrapper1 = document.createElement("div");
    buttonWrapper1.id = "button-wrapper-1";
    buttonWrapper1.className = "button-wrapper";
    
    //Create Button 1 and Set Properties
    var button1 = document.createElement("button");
    button1.id = "button-1";
    button1.formAction = "test-next-stage";
    
    //Create Button Text and Set Propoerties
    var buttonText1 = document.createElement("p");
    buttonText1.textContent = "Test next stage";
    
    
    //Append Elements To Parents
    document.getElementById("buttons-container").appendChild(buttonWrapper1);
    document.getElementById("button-wrapper-1").appendChild(button1);
    document.getElementById("button-1").appendChild(buttonText1);
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