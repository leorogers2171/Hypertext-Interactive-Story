// Content for the Story


//    storyContent[0] = { 
//    contentID: = "",
//    textContent: "",
//    imgPath: "../assets/story/",
//	imgAlt: "",
//	opt1: "",
//	opt2: ""	
//    };

var storyContent = new Array;

	storyContent[0] = { 
    contentID: "step-1",
    textContent: "You walk through the forest, carrying a basket to pick some berries and some mushrooms – that’s what you were ordered to do. But you suddenly see a path you never saw before.",
    imgPath: "../assets/story/954759.jpg",
	imgAlt: "Forest To Walk Through",
	opt1: "Follow the path",
    opt1LinkID: "follow-the-path",
	opt2: "Don't follow the path",
    opt2LinkID: "",
};

    storyContent[1] = { 
    contentID: "follow-the-path",
    textContent: "You're an inconsiderate, but curious little girl, so you continue walking, and stumble upon a sweet little house in the woods. ",
    imgPath: "../assets/cottage.jpg/",
	imgAlt: "Cottage",
	opt1: "Keep following",
    opt1LinkID: "keep-following"
};

    storyContent[2] = { 
    contentID: "keep-following",
    textContent: "You reach a cosy little cabin in the forest. You come to the door, but there’s a frog sitting on the doorstep. The frog tells you that the masters are away, and there’s nobody home, cre-crek!",
    imgPath: "../assets/story/frog-septe.mp3",
	imgAlt: "Frog On Doorstep",
	opt1: "Kick that pompous creature away from the doorstep",
    opt1LinkID: "kick-that-pompous-creature-away-from-the-doorstep",
	opt2: "Refrain from kicking the frog",
    opt2LinkID: "refrain-from-kicking-the-frog"
};

    storyContent[3] = { 
    contentID: "kick-that-pompous-creature-away-from-the-doorstep",
    textContent: "You surely do, and then enter the cabin.",
    imgPath: "../assets/story/52240.jpg",
	imgAlt: "Front Door",
	opt1: "Proceed inside",
    opt1LinkID: "proceed-inside"    
};

    storyContent[4] = { 
    contentID: "refrain-from-kicking-the-frog",
    textContent: "You sit on the porch and start crying because you're tired and hungry. The frog takes pity on you and lets you in.",
    imgPath: "../assets/story/Goldilocks-Frog-Porch-1.jpg",
	imgAlt: "Goldilocks sat on doorstep with frog guarding",
	opt1: "Proceed inside",
    opt1LinkID: ""	
    };

    storyContent[5] = { 
    contentID: "proceed-inside",
    textContent: "You enter the first room and see that everything is gigantic here. You can smell something delicious - there's hot steam coming from the giant table – it’s porridge! But you can’t reach it. <br> You were not nice to the Frog! You're on your own!",
    imgPath: "../assets/story/Goldilocks-Table-Porridge-1.jpg",
	imgAlt: "Goldilocks with three bowls of porrige and frog in the kitchen",
	opt1: "Go back to the woods",
    opt1LinkID: "",
	opt2: "Try to reach the top of the table on your own",
    opt2LinkID: "try-to-reach-the-top-of-the-table-on-your-own"
};

    storyContent[6] = { 
    contentID: "try-to-reach-the-top-of-the-table-on-your-own",
    textContent: "You find chopped woods and make a pyramidal pile right up to the top of the table. Is the number of the firewood chops odd or even if the first row starts with exactly 7 chops?",
    imgPath: "../assets/story/Goldilocks-Table-Porridge-Firewood-1.jpg",
	imgAlt: "Goldilocks with table, porridge and firewood",
	opt1: "It's Odd",
    opt1LinkID: "its-odd",
	opt2: "It's Even",
    opt2LinkID: ""
};

    storyContent[7] = { 
    contentID: "its-odd",
    textContent: "The pile collapses when you try to climb up, you fall down and remain on the ground, badly hurt. <br> Did you pick berries at the beginning?.. <br> You didn't! <br> You just lie there for a while. Suddenly you here some treading - the bears return and capture you.",
    imgPath: "../assets/story/Goldilocks-Table-Porridge-Firewood-4.jpg",
    imgPath2: "../assets/story/Goldilocks-Table-Porridge-Firewood-5.jpg/",
	imgAlt: "",
    imgAlt2: "",
	opt1: "Continue",
    opt1LinkID: ""
};