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
    optionsLinkID: ["try-your-luck-on-this-chair","jump-on-the-middle-chair","jump-on-the-smallest-chair"],
    backgroundAudioPath: "assets/story/Mission%20Impossible%20-%20Theme%20%28Ti%C3%ABsto%20Remix%29.mp3",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2","audio_background2","audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[17] = { 
    contentID: "try-your-luck-on-this-chair",
    textContent: "This one could be the right one - you can rest and continue the cabin exploration later.",
    imgPaths: ["assets/story/http://leorog.com/goldilocks/goldilocks-chair-scene-7.jpg"],
	imgAlts: ["Goldilocks on top of chair"],
	options: ["Try a different chair"],
    optionsLinkID: ["pounce-on-the-biggest-of-the-chairs"],
    backgroundAudioPath: "assets/story/Mission%20Impossible%20-%20Theme%20%28Ti%C3%ABsto%20Remix%29.mp3",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[18] = { 
    contentID: "jump-on-the-middle-chair",
    textContent: "You try the middle chair. Unfortunately - this one is too soft and wiggly.",
    imgPaths: ["assets/story/goldilocks-chair-scene-8.jpg"],
	imgAlts: ["Goldilocks on table on middle chair"],
	options: ["Try a different chair"],
    optionsLinkID: ["pounce-on-the-biggest-of-the-chairs"],
    backgroundAudioPath: "assets/story/Mission%20Impossible%20-%20Theme%20%28Ti%C3%ABsto%20Remix%29.mp3",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[19] = { 
    contentID: "jump-on-the-smallest-chair",
    textContent: "You jump to the smallest chair. But the smallest chair breaks and you fall down. Are you too tired to continue?",
    imgPaths: ["assets/story/goldilocks-chair-scene-9.jpg"],
	imgAlts: ["Goldilocks sat on smallest chair"],
	options: ["Yes", "No"],
    optionsLinkID: ["too-tired-to-continue", "climb-down-using-your-own-braid-as-a-rope"],
    backgroundAudioPath: "assets/story/Mission%20Impossible%20-%20Theme%20%28Ti%C3%ABsto%20Remix%29.mp3",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[20] = { 
    contentID: "too-tired-to-continue",
    textContent: "You take a nap, right there in the rubble. But then the bears come in! The bears are warmhearted towards girls in general and they adopt you. You become like Mowgli (The Jungle Book), only with bear manners. THE END",
    imgPaths: ["assets/story/goldilocks-chair-scene-11.jpg"],
	imgAlts: ["Goldilocks fallen on logs with bears in kitchen"],
	options: ["Start again"],
    optionsLinkID: ["step-1"],
    backgroundAudioPath: "assets/story/352531__vintprox__challenging-countdown-20s.wav",
    audioVolume: 0.5,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[21] = { 
    contentID: "climb-down-using-your-own-braid-as-a-rope",
    textContent: "You then go upstairs, to the bedroom.",
    imgPaths: ["assets/story/goldilocks-chair-scene-10.jpg"],
	imgAlts: ["Goldilocks using braid to climb down table leg"],
	options: ["Continue"],
    optionsLinkID: ["continue-upstairs"],
    backgroundAudioPath: "assets/story/DubbleA%20Garage%20Foley%20Demo%202.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_bee_buzz"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[22] = { 
    contentID: "continue-upstairs",
    textContent: "On your way upstairs, you notice a jar of honey. You open it, and taste the sweetest nectar there is! You enter the bedroom and see three beds. You're now facing a tough decision considering your nearest future. Are you taking a nap or going to hop on the giant beds like they were trampolines?",
    imgPaths: ["assets/story/goldilocks-scene-honey-stairs-1.jpg", "assets/story/Goldilocks-beds-e1551908799589.jpg"],
	imgAlts: ["Goldilocks sees a jar of honey on the stairs", "Three beds small, medium, large in the bedroom"],
	options: ["Take a nap", "Hop on beds"],
    optionsLinkID: ["take-nap", "hop-on-beads"],
    backgroundAudioPath: "assets/story/187204__zagi2__balkan-intro-outro-2.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_sleeping", "audio_bed"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[23] = { 
    contentID: "take-nap",
    textContent: "You feel a bit fatigued, so you'll go for a nap. But which bed you choose?",
    imgPaths: ["assets/story/Goldilocks-beds-e1551908799589.jpg"],
	imgAlts: ["Three beads in bedroom small, medium and large"],
	options: ["The first bed", "The second bed", "The third bed"],
    optionsLinkID: ["the-first-bed", "the-second-bed", "the-third-bed"],
    backgroundAudioPath: "assets/story/114609__daxter31__snoring-2.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_ow", "audio_background2", "audio_victory1"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[24] = { 
    contentID: "the-first-bed",
    textContent: "The first one - it's rather hard for you to sleep in it.",
    imgPaths: ["assets/story/goldilocks-Bed%201.jpg"],
	imgAlts: ["Goldilocks sleeping in first bed the small one"],
	options: ["Try another bed"],
    optionsLinkID: ["take-nap"],
    backgroundAudioPath: "",
    audioVolume: 1,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[25] = { 
    contentID: "the-second-bed",
    textContent: "The second one - too bummby and squeeky.",
    imgPaths: ["assets/story/goldilocks-Bed%202.jpg"],
	imgAlts: ["Goldilocks sleeping in second bed the medium one"],
	options: ["Try another bed"],
    optionsLinkID: ["take-nap"],
    backgroundAudioPath: "assets/story/240121__martialway47__bed-squeak-2.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[26] = { 
    contentID: "the-third-bed",
    textContent: "A perfect match! You lay your head on the pillow, zzzzzzzzzz… But that's no sound of a little girl sleeping!",
    imgPaths: ["assets/story/goldilocks-Bed%203.jpg"],
	imgAlts: ["Goldilocks sleeping in third beds, a perfect match"],
	options: ["Continue"],
    optionsLinkID: ["hop-on-beds"],
    backgroundAudioPath: "assets/story/384108__spookycustard__killer-bee-attack-2.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[27] = { 
    contentID: "hop-on-beds",
    textContent: "All of a sudden, a swarm of bees enters the room! Will they assume that the bears stole their honey, not you, when there’s sweet smell of honey all around you?",
    imgPaths: ["assets/story/Bees-scene-stole-honey.jpg"],
	imgAlts: ["Goldilocks with a swarm of bees around in bedroom"],
	options: ["Yes", "No"],
    optionsLinkID: ["yes", "no"],
    backgroundAudioPath: "assets/story/goldilocks/481647__joncon-library__bee-buzzing.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_ow", "myaudio"],
    buttonAudioEvent: ["onclick"]
    
};



console.table(storyContent);
