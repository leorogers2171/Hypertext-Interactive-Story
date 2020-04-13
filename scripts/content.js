// Content for the Story
//Boiler Plate

//	storyContent[0] = { 
//    contentID: "",
//    textContent: "",
//    imgPaths: ["assets/story/"],
//	imgAlts: [""],
//	options: [""],
//    optionsLinkID: [""],
//    backgroundAudioPath: "assets/story/",
//    audioVolume: 1,
//    audioLoop: true,
//    buttonAudioName: [""],
//    buttonAudioEvent: ["onclick"]
//    
//};


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
    audioLoop: true,
    buttonAudioName: ["audio_frog"],
    buttonAudioEvent: ["onclick"]
    };

    storyContent[5] = { 
    contentID: "proceed-inside",
    textContent: "You enter the first room and see that everything is gigantic here. You can smell something delicious - there's hot steam coming from the giant table – it’s porridge! But you can’t reach it. <br> You were not nice to the Frog! You're on your own!",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-1.jpg"],
	imgAlts: ["Goldilocks with three bowls of porrige and frog in the kitchen"],
	options: ["Go back to the woods", "Try to reach the top of the table on your own"],
    optionsLinkID: ["try-to-reach-the-top-of-the-table-on-your-own","its-even"],
    backgroundAudioPath: "assets/story/444473__casualman__boiling-porridge.wav",
    audioVolume: 1,
    audioLoop: true,
    buttonAudioName: ["audio_frog"],
    buttonAudioEvent: ["onclick"]
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
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
};

    storyContent[7] = { 
    contentID: "its-odd",
    textContent: "The pile collapses when you try to climb up, you fall down and remain on the ground, badly hurt. <br> Did you pick berries at the beginning?.. <br> You didn't! <br> You just lie there for a while. Suddenly you here some treading - the bears return and capture you.",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-Firewood-4.jpg", "assets/story/Goldilocks-Table-Porridge-Firewood-5.jpg/"],
	imgAlts: [""],
	options: ["Continue"],
    optionsLinkID: ["continue-to-bears"],
    backgroundAudioPath: "assets/story/352531__vintprox__challenging-countdown-20s.wav",
    audioVolume: 5,
    audioLoop: true,
    buttonAudioName: ["audio_bear"],
    buttonAudioEvent: ["onclick"]
};

	storyContent[8] = { 
    contentID: "continue-to-bears",
    textContent: "What do you say to the bears ?",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-Firewood-5.jpg"],
	imgAlts: ["Goldilocks on floor in kitchen with bears"],
	options: ["Curse at the bears", "Apologise to the bears for trespassing"],
    optionsLinkID: ["curse-at-the-bears", "apologise-to-the-bears-for-trespassing"],
    backgroundAudioPath: "assets/story/352531__vintprox__challenging-countdown-20s.wav",
    audioVolume: 0.5,
    audioLoop: true,
    buttonAudioName: ["audio_growl"],
    buttonAudioEvent: ["onclick"]
};

	storyContent[9] = { 
    contentID: "curse-at-the-bears",
    textContent: "You curse at the bears, then the biggest one, Papa Bear, who gets inexplicably mad when hears profanity, eats you up. <br> THE END",
    imgPaths: ["assets/story/382547d94755d9f601fc7bcc6e6af672.jpg"],
	imgAlts: ["Bears eating Goldilocks in kitchen"],
	options: ["Return to start"],
    optionsLinkID: ["step-1"],
    backgroundAudioPath: "assets/story/49138__smidoid__dinosaur-eating.wav",
    audioVolume: 0.5,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[10] = { 
    contentID: "apologise-to-the-bears-for-trespassing",
    textContent: "You're scared and you apologise to the bears for trespassing, so they let you stay at their place until you're well.",
    imgPaths: ["assets/story/92-922602_goldilocks-and-the-three-bears-cartoon.png"],
	imgAlts: ["Goldilocks eating poridge with the three bears"],
	options: ["Return home"],
    optionsLinkID: ["return-to-shattered-home"],
    backgroundAudioPath: "assets/story/DubbleA%20Garage%20Foley%20Demo%202.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[11] = { 
    contentID: "its-even",
    textContent: "You get to taste the sweet porridge alright! But wait, there are three bowls on the table!",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-Firewood-3.jpg"],
	imgAlts: ["Goldilocks on table with three bowls of poridge"],
	options: ["Bowl 1", "Bowl 2", "Bowl 3"],
    optionsLinkID: ["bowl-1","bowl-2","bowl-3"],
    backgroundAudioPath: "assets/story/331032__anshgang__a10b-2.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_ow","audio_cold","audio_victory1"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[12] = { 
    contentID: "bowl-1",
    textContent: "You pick the first one, the biggest one – the porridge is too hot!",
    imgPaths: ["assets/story/goldilocks-clipart-46.jpg"],
	imgAlts: ["Goldilocks eating porridge which is too hot"],
	options: ["Try again"],
    optionsLinkID: ["its-even"],
    backgroundAudioPath: "assets/story/331032__anshgang__a10b-2.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[13] = { 
    contentID: "bowl-2",
    textContent: "You choose the second one, however, is too cold.",
    imgPaths: ["assets/story/goldilocks.jpg"],
	imgAlts: ["Goldilocks eating poridge"],
	options: ["Try again"],
    optionsLinkID: ["its-even"],
    backgroundAudioPath: "assets/story/331032__anshgang__a10b-2.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[14] = { 
    contentID: "bowl-3",
    textContent: "The third one - now that's porridge! You eat it all!",
    imgPaths: ["assets/story/goldilocks_insurance_package-1080x675.jpg"],
	imgAlts: ["Goldilocks eating poridge which is just right"],
	options: ["Continue"],
    optionsLinkID: ["continue-third-bowl"],
    backgroundAudioPath: "assets/story/331032__anshgang__a10b-2.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[15] = { 
    contentID: "continue-third-bowl",
    textContent: "You spot three chairs standing near the table. ‘Oh, why haven’t I just climbed the chairs in the first place,’ you cry out, ‘instead of all that jumble!’ <br>How are you going to get down?",
    imgPaths: ["assets/story/Goldilocks-Table-Porridge-Chairs-2.jpg"],
	imgAlts: ["Goldilocks stuck at the top of the kitchen table"],
	options: ["Pounce on the biggest of the chairs","Sit there for a moment","Climb down using your own braid as a rope."],
    optionsLinkID: ["pounce-on-the-biggest-of-the-chairs", "sit-there-for-a-moment", "climb-down-using-your-own-braid-as-a-rope"],
    backgroundAudioPath: "assets/story/Mission%20Impossible%20-%20Theme%20%28Ti%C3%ABsto%20Remix%29.mp3",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_ow","audio_background","audio_frog"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[16] = { 
    contentID: "pounce-on-the-biggest-of-the-chairs",
    textContent: "This chair seems to be too hard!",
    imgPaths: ["assets/story/goldilocks-chair-scene-7.jpg"],
	imgAlts: ["Goldilocks on a chair"],
	options: ["Try your luck on this chair","Jump on the middle chair","Jump on the smallest chair"],
    optionsLinkID: ["try-your-luck-on-this-chair","jump-on-the-middle-chair","Jump-on-the-smallest-chair"],
    backgroundAudioPath: "assets/story/Mission%20Impossible%20-%20Theme%20%28Ti%C3%ABsto%20Remix%29.mp3",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2","audio_background2","audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

//	storyContent[0] = { 
//    contentID: "",
//    textContent: "",
//    imgPaths: ["assets/story/"],
//	imgAlts: [""],
//	options: [""],
//    optionsLinkID: [""],
//    backgroundAudioPath: "assets/story/",
//    audioVolume: 1,
//    audioLoop: true,
//    buttonAudioName: [""],
//    buttonAudioEvent: ["onclick"]
//    
//};
//
//	storyContent[0] = { 
//    contentID: "",
//    textContent: "",
//    imgPaths: ["assets/story/"],
//	imgAlts: [""],
//	options: [""],
//    optionsLinkID: [""],
//    backgroundAudioPath: "assets/story/",
//    audioVolume: 1,
//    audioLoop: true,
//    buttonAudioName: [""],
//    buttonAudioEvent: ["onclick"]
//    
//};
//
//	storyContent[0] = { 
//    contentID: "",
//    textContent: "",
//    imgPaths: ["assets/story/"],
//	imgAlts: [""],
//	options: [""],
//    optionsLinkID: [""],
//    backgroundAudioPath: "assets/story/",
//    audioVolume: 1,
//    audioLoop: true,
//    buttonAudioName: [""],
//    buttonAudioEvent: ["onclick"]
//    
//};
//
//	storyContent[0] = { 
//    contentID: "",
//    textContent: "",
//    imgPaths: ["assets/story/"],
//	imgAlts: [""],
//	options: [""],
//    optionsLinkID: [""],
//    backgroundAudioPath: "assets/story/",
//    audioVolume: 1,
//    audioLoop: true,
//    buttonAudioName: [""],
//    buttonAudioEvent: ["onclick"]
//    
//};
//
//	storyContent[0] = { 
//    contentID: "",
//    textContent: "",
//    imgPaths: ["assets/story/"],
//	imgAlts: [""],
//	options: [""],
//    optionsLinkID: [""],
//    backgroundAudioPath: "assets/story/",
//    audioVolume: 1,
//    audioLoop: true,
//    buttonAudioName: [""],
//    buttonAudioEvent: ["onclick"]
//    
//};



console.table(storyContent);
