// Content for the Story


//    storyContent[0] = { 
//    contentID: = "",
//    textContent: "",
//    imgPath: "../assets/story/",
//	imgAlt: "",
//	opt1: "",
//	opt2: ""	
//    };

//backgroundAudioPath: "../assets/story/"

//buttonAudioPaths: [""],
//buttonAudioEvent: "onclick"


var storyContent = new Array;

	storyContent[0] = { 
    contentID: "step-1",
    textContent: "You walk through the forest, carrying a basket to pick some berries and some mushrooms – that’s what you were ordered to do. But you suddenly see a path you never saw before.",
    imgPaths: ["assets/story/954759.jpg"],
	imgAlts: ["Forest To Walk Through"],
	options: ["Follow the path", "Don't follow the path"],
    optionsLinkID: ["follow-the-path", "don't-follow-the-path"],
    backgroundAudioPath: "assets/story/DubbleA%20Garage%20Foley%20Demo%202.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

    storyContent[1] = { 
    contentID: "follow-the-path",
    textContent: "You're an inconsiderate, but curious little girl, so you continue walking, and stumble upon a sweet little house in the woods. ",
    imgPaths: ["assets/story/cottage.jpg"],
	imgAlts: ["Cottage"],
	options: ["Keep following"],
    optionsLinkID: ["keep-following"],
    backgroundAudioPath: "assets/story/DubbleA%20Garage%20Foley%20Demo%202.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
};

    storyContent[2] = { 
    contentID: "keep-following",
    textContent: "You reach a cosy little cabin in the forest. You come to the door, but there’s a frog sitting on the doorstep. The frog tells you that the masters are away, and there’s nobody home, cre-crek!",
    imgPaths: ["assets/story/36447.jpg"],
	imgAlts: "Frog On Doorstep",
	options: ["Kick that pompous creature away from the doorstep","Refrain from kicking the frog"],
    optionsLinkID: ["kick-that-pompous-creature-away-from-the-doorstep", "refrain-from-kicking-the-frog"],
    backgroundAudioPath: "assets/story/frog-septe.mp3",
    audioVolume: 0.45,
    audioLoop: false,
    buttonAudioName: ["audio_frog", "audio_frog"],
    buttonAudioEvent: ["onclick", "onclick"]
};

    storyContent[3] = { 
    contentID: "kick-that-pompous-creature-away-from-the-doorstep",
    textContent: "You surely do, and then enter the cabin.",
    imgPaths: ["assets/story/52240.jpg"],
	imgAlts: ["Front Door"],
	options: ["Proceed inside"],
    optionsLinkID: ["proceed-inside"],
    backgroundAudioPath: "assets/story/frog-septe.mp3",
    audioVolume: 0.45,
    audioLoop: true,
    buttonAudioName: ["audio_door_opening", "audio_door_opening"],
    buttonAudioEvent: ["onclick", "onclick"]
};

    storyContent[4] = { 
    contentID: "refrain-from-kicking-the-frog",
    textContent: "You sit on the porch and start crying because you're tired and hungry. The frog takes pity on you and lets you in.",
    imgPaths: ["assets/story/Goldilocks-Frog-Porch-1.jpg"],
	imgAlts: ["Goldilocks sat on doorstep with frog guarding"],
	options: ["Proceed inside"],
    optionsLinkID: [""],
    backgroundAudioPath: "assets/story/361529__inspectorj__calm-synthesizer-b-2.wav",
    audioVolume: 0.8,
    audioLoop: true
    };

    storyContent[5] = { 
    contentID: "proceed-inside",
    textContent: "You enter the first room and see that everything is gigantic here. You can smell something delicious - there's hot steam coming from the giant table – it’s porridge! But you can’t reach it. <br> You were not nice to the Frog! You're on your own!",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-1.jpg"],
	imgAlts: ["Goldilocks with three bowls of porrige and frog in the kitchen"],
	options: ["Go back to the woods", "Try to reach the top of the table on your own"],
    optionsLinkID: [""],
    backgroundAudioPath: "assets/story/444473__casualman__boiling-porridge.wav",
    audioVolume: 1,
    audioLoop: true
};

    storyContent[6] = { 
    contentID: "try-to-reach-the-top-of-the-table-on-your-own",
    textContent: "You find chopped woods and make a pyramidal pile right up to the top of the table. Is the number of the firewood chops odd or even if the first row starts with exactly 7 chops?",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-Firewood-1.jpg"],
	imgAlts: ["Goldilocks with table, porridge and firewood"],
	options: ["It's Odd", "It's Even"],
    optionsLinkID: ["its-odd",],
    backgroundAudioPath: "assets/story/444473__casualman__boiling-porridge.wav",
    audioVolume: 0.8,
    audioLoop: true
};

    storyContent[7] = { 
    contentID: "its-odd",
    textContent: "The pile collapses when you try to climb up, you fall down and remain on the ground, badly hurt. <br> Did you pick berries at the beginning?.. <br> You didn't! <br> You just lie there for a while. Suddenly you here some treading - the bears return and capture you.",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-Firewood-4.jpg", "assets/story/Goldilocks-Table-Porridge-Firewood-5.jpg/"],
	imgAlts: [""],
	options: ["Continue"],
    backgroundAudioPath: "assets/story/352531__vintprox__challenging-countdown-20s.wav",
    audioVolume: 5,
    audioLoop: true
};

console.table(storyContent);
