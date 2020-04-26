// Content for the Story

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
    optionsLinkID: ["proceed-inside"],
    backgroundAudioPath: "assets/story/361529__inspectorj__calm-synthesizer-b-2.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_frog"],
    buttonAudioEvent: ["onclick"]
    };

    storyContent[5] = { 
    contentID: "proceed-inside",
    textContent: "You enter the first room and see that everything is gigantic here. You can smell something delicious - there's hot steam coming from the giant table – it’s porridge! But you can’t reach it. You were not nice to the Frog! You're on your own!",
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
    optionsLinkID: ["its-odd", "its-even"],
    backgroundAudioPath: "assets/story/444473__casualman__boiling-porridge.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_background2", "audio_background2"],
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
    audioVolume: 0.5,
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
    imgPaths: ["assets/story/goldilocks-chair-scene-7.jpg"],
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
    optionsLinkID: ["take-nap", "hop-on-beds"],
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

	storyContent[28] = { 
    contentID: "yes",
    textContent: "There will be some stinging!",
    imgPaths: ["assets/story/Bees-scene-stole-honey-2.jpg"],
	imgAlts: ["Goldilocks getting stung by bees in the bedroom"],
	options: ["Choose the Point Of View"],
    optionsLinkID: ["pov1"],
    backgroundAudioPath: "assets/story/384108__spookycustard__killer-bee-attack-2.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[29] = { 
    contentID: "no",
    textContent: "If they don’t blame you for the theft, they will buzz around to warn you about the bears’ return.",
    imgPaths: ["assets/story/Bees-scene-stole-honey-3.jpg"],
	imgAlts: ["Bees buuzzing aroung Goldicloks"],
	options: ["Choose the Point Of View"],
    optionsLinkID: ["pov1"],
    backgroundAudioPath: "assets/story/481647__joncon-library__bee-buzzing.wav",
    audioVolume: 0.2,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[30] = { 
    contentID: "pov1",
    textContent: "Choose your Point Of View",
    imgPaths: ["assets/story/POV%20Choice.png"],
	imgAlts: ["Two doors one with Goldilocks behind and the other bears"],
	options: ["Goldilocks Point Of View", "Bears Point Of View"],
    optionsLinkID: ["goldilocks-pov", "bears-pov"],
    backgroundAudioPath: "assets/story/DubbleA%20Garage%20Foley%20Demo%202.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background", "audio_background"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[31] = { 
    contentID: "bears-pov",
    textContent: "You enter the cabin only to find that someone was in your house. You notice that somebody has also been eating your porridge, but only the smallest portion has been eaten. What's your bare necessity decision?",
    imgPaths: ["assets/story/Bears%20Return%20Home.jpg"],
	imgAlts: ["Bears in kitchen"],
	options: ["Look for the intruder", "Run away to get some help"],
    optionsLinkID: ["look-for-the-intruder", "run-away-to-get-some-help"],
    backgroundAudioPath: "assets/story/Pirates%20of%20the%20Caribbean%20Theme%20-%20Fingerstyle%20Guitar%20Cover.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_bear", "audio_bear"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[32] = { 
    contentID: "look-for-the-intruder",
    textContent: "You look for the intruder, and tiptoe upstairs, into the bedroom.",
    imgPaths: ["assets/story/Bears%20Return%20Home%20Stairs.jpg"],
	imgAlts: ["Bear stood on staircase"],
	options: ["Continue"],
    optionsLinkID: ["continue-upstairs-intruder"],
    backgroundAudioPath: "assets/story/Pirates%20of%20the%20Caribbean%20Theme%20-%20Fingerstyle%20Guitar%20Cover.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_growl"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[33] = { 
    contentID: "run-away-to-get-some-help",
    textContent: "You run away to get some help. You then return with many wild forest creaturs - Goldilocks can't beat this gang, and gets eaten. THE END",
    imgPaths: ["assets/story/forest-animals-safari-tropical-cartoon-happy-birthday-photo-background-photography-backdrops-quality-vinyl.jpg"],
	imgAlts: ["Wild forest with creatures in"],
	options: ["Go back to the start"],
    optionsLinkID: ["step-1"],
    backgroundAudioPath: "assets/story/361529__inspectorj__calm-synthesizer-b-2.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[34] = { 
    contentID: "continue-upstairs-intruder",
    textContent: "You hear the bears call out ‘Somebody has been sleeping in my bed'! 'Somebody has been sleeping in my bed too'! 'Somebody is still sleeping in my bed!’",
    imgPaths: ["assets/story/Bears%20Back%20In%20Bedroom.jpg"],
	imgAlts: ["Bears in bedroom with three beds in"],
	options: ["Change your POV"],
    optionsLinkID: ["change-your-pov"],
    backgroundAudioPath: "assets/story/Jaws%20-%20Theme%20song.wav",
    audioVolume: 0.5,
    audioLoop: true,
    buttonAudioName: ["audio_growl"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[35] = { 
    contentID: "goldilocks-pov",
    textContent: "You previously had a fear of bees. No bees to help you, you're on your own now.",
    imgPaths: ["assets/story/8437046b4a7e52a30ca3da23d72b77d1.jpg"],
	imgAlts: ["Swarm of bees"],
	options: ["Continue"],
    optionsLinkID: ["bees-continue-no-fear"],
    backgroundAudioPath: "assets/story/481647__joncon-library__bee-buzzing.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[36] = { 
    contentID: "bees-continue-no-fear",
    textContent: "You're ok with the bees, you then ask the bees for help. The bees make a dense swarm, pick you up, and take you out of the window and into the forest.",
    imgPaths: ["assets/story/Bees%20Carying%20Goldilocks%20Out%20Window.jpg"],
	imgAlts: ["Goldilocks flying out of windows with swarm of bees"],
	options: ["Explore the forest"],
    optionsLinkID: ["keep-following"],
    backgroundAudioPath: "assets/story/Pirates%20of%20the%20Caribbean%20Theme%20-%20Fingerstyle%20Guitar%20Cover.wav",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[37] = { 
    contentID: "bees-continue-fear",
    textContent: "Did you pick some poisonous mushrooms at the beginning? Turns out you didn't! You catch the bees with your basket, and close the lid. Then you wait.",
    imgPaths: ["assets/story/woman-picking-mushrooms-autumn-forest_1456-697.jpg"],
	imgAlts: ["Mushrooms"],
	options: ["Find out what happens"],
    optionsLinkID: ["continue-upstairs-intruder"],
    backgroundAudioPath: "assets/story/481647__joncon-library__bee-buzzing.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[38] = { 
    contentID: "change-your-pov",
    textContent: "Are you a bee-keeper or a mushroom-soup chef?",
    imgPaths: ["assets/story/POV-Choice-2.png"],
	imgAlts: ["Mushroom soup chef or bee keeper"],
	options: ["Mushroom-soup chef", "Bee-keeper"],
    optionsLinkID: ["mushroom-soup-chef", "bee-keeper"],
    backgroundAudioPath: "assets/story/DubbleA%20Garage%20Foley%20Demo%202.wav",
    audioVolume: 0.35,
    audioLoop: true,
    buttonAudioName: ["audio_chef", "audio_bee_buzz"],
    buttonAudioEvent: ["onclick"]
    
};

	storyContent[39] = { 
    contentID: "bee-keeper",
    textContent: "The bees are out! The bees instantly recognise the real honey thieves, so they attack them, run them out of the cabin, into the woods, and then into the stream where the bears drown.",
    imgPaths: ["assets/story/bears-beekeeper-bees-1.jpg"],
	imgAlts: ["Bee keeper, bears and bees at mountain lake"],
	options: ["Continue"],
    optionsLinkID: ["cabin-all-alone"],
    backgroundAudioPath: "assets/story/INSIDEINFO%20-%20HONEY%20BEE%20%28AUDIO%20REMIX%29-2.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[40] = { 
    contentID: "cabin-all-alone",
    textContent: "You're now all alone in the cabin. You contemplate your future life. Will you stay in the bear cabin?",
    imgPaths: ["assets/story/bee-keeper-scene-Artboard%203.jpg"],
	imgAlts: ["Bee keeper in cabin alone"],
	options: ["Yes", "No"],
    optionsLinkID: ["stay-in-cabin", "return-to-shattered-home"],
    backgroundAudioPath: "assets/story/INSIDEINFO%20-%20HONEY%20BEE%20%28AUDIO%20REMIX%29-2.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_chef", "audio_chef"],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[41] = { 
    contentID: "stay-in-cabin",
    textContent: "You stay in the cabin, take care of the household, get married and have a family, and tell your children a story of Goldilocks, a courageous girl that had beaten the bears. YOU HAVE SUCCESSFULLY REACHED THE END VERDICT",
    imgPaths: [""],
	imgAlts: [""],
	options: ["Start again"],
    optionsLinkID: ["step-1"],
    backgroundAudioPath: "assets/story/447538__drakensson__cinematic-industrial-outro-3.wav",
    audioVolume: 0.7,
    audioLoop: true,
    buttonAudioName: [""],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[42] = { 
    contentID: "return-to-shattered-home",
    textContent: "You return to your shattered home and look for your father. The two of you repair your house, and you take care of him when he gets old. The story of the brave girl called Goldilocks falls into oblivion. YOU HAVE SUCCESSFULLY REACHED THE END VERDICT",
    imgPaths: [""],
	imgAlts: [""],
	options: ["Start again"],
    optionsLinkID: ["step-1"],
    backgroundAudioPath: "assets/story/447538__drakensson__cinematic-industrial-outro-3.wav",
    audioVolume: 0.7,
    audioLoop: true,
    buttonAudioName: [""],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[43] = { 
    contentID: "mushroom-soup-chef",
    textContent: "'Have a little sip of my soup, messieurs, ' a delicate dish as a token of truce. Would the bears rather eat soup or a girl? Think wisely...",
    imgPaths: ["assets/story/muscroom-chef-scene-1.jpg"],
	imgAlts: ["Goldilocks the bears and a mushroom soup chef in the kitchen"],
	options: ["Eat soup", "Eat a girl"],
    optionsLinkID: ["bee-keeper", "eat-a-girl"],
    backgroundAudioPath: "assets/story/muscroom-chef-scene-1.jpg",
    audioVolume: 0.6,
    audioLoop: true,
    buttonAudioName: ["audio_chef", "audio_berries"],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[44] = { 
    contentID: "eat-a-girl",
    textContent: "You have reached the end your journey. Your moral compas was not faced in the correct direction.",
    imgPaths: ["assets/story/113050-OO6LHP-457.png"],
	imgAlts: ["Old fashioned compas"],
	options: ["Go back to the start"],
    optionsLinkID: ["step-1"],
    backgroundAudioPath: "assets/story/52531__vintprox__challenging-countdown-20s.wav",
    audioVolume: 0.5,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[45] = { 
    contentID: "don't-follow-the-path",
    textContent: "You continue to pick berries and mushrooms.",
    imgPaths: ["assets/story/Berries-and-Mushrooms-1.png"],
	imgAlts: ["Berries and mushrooms"],
	options: ["Pick colourful, but poison ones", "Pick shabby looking, but delicious ones."],
    optionsLinkID: ["pick-enough-berries", "wait-for-your-father-the-hunter-to-return"],
    backgroundAudioPath: "assets/story/447538__drakensson__cinematic-industrial-outro-3.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_chef", "audio_chef"],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[46] = { 
    contentID: "pick-enough-berries",
    textContent: "You see your home crushed into pieces, no sign of your mother. You're brought to tears, What do you do?",
    imgPaths: ["assets/story/Home-Crushed-Berries.png"],
	imgAlts: ["Home crushed to peices"],
	options: ["Escape", "Wait for your father, the hunter, to return."],
    optionsLinkID: ["keep-following", "wait-for-your-father-the-hunter-to-return"],
    backgroundAudioPath: "assets/story/447538__drakensson__cinematic-industrial-outro-3.wav",
    audioVolume: 0.8,
    audioLoop: true,
    buttonAudioName: ["audio_background2", "audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[47] = { 
    contentID: "wait-for-your-father-the-hunter-to-return",
    textContent: "Your father eventually shows up, sees bear traces, so he goes to the forest and hunts the bears down. THE END",
    imgPaths: [""],
	imgAlts: [""],
	options: ["Go back to the start"],
    optionsLinkID: ["step-1"],
    backgroundAudioPath: "",
    audioVolume: 1,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};
	storyContent[48] = { 
    contentID: "sit-there-for-a-moment",
    textContent: "You know what happened to your house and mum.",
    imgPaths: [""],
	imgAlts: [""],
	options: ["Escape the forest"],
    optionsLinkID: ["keep-following"],
    backgroundAudioPath: "assets/story/352531__vintprox__challenging-countdown-20s.wav",
    audioVolume: 0.5,
    audioLoop: true,
    buttonAudioName: ["audio_background2"],
    buttonAudioEvent: ["onclick"]
    
};

console.table(storyContent);
