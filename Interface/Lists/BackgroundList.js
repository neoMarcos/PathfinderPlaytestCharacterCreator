var BackgroundList = [
	{
		Name: "Acolyte",
		Description: "You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep inside you’ll always carry the lessons you learned.",
		AbilityBoosts: [["Constitution", "Wisdom"], "Free"],
		Feat: "Student of the Canon",
		Skill: "Deity Lore"
	},
	{
		Name: "Acrobat",
		Description: "In a circus or on the streets, you earned your pay by performing as an acrobat.You might have turned to adventuring when the money dried up, or when you learned to put skills to better use.",
		AbilityBoosts: [["Strength", "Dexterity"], "Free"],
		Feat: "Steady Balance",
		Skill: "Circus Lore"
	},
	{
		Name: "Animal Whisperer",
		Description: "You have always felt a connection to animals, and it was only a small leap to learn to train them. As you travel, you continuously encounter different creatures, befriending them along the way.",
		AbilityBoosts: [["Wisdom", "Charisma"], "Free"],
		Feat: "Train Animal",
		Skill: "Animal Lore"
	},
	{
		Name: "Barkeep",
		Description: "You have five specialties: hefting barrels, polishing steins, drinking, drinking, and drinking. You ran or worked in a bar, where you learned how to hold your liquor and rowdily socialize.",
		AbilityBoosts: [["Constitution", "Charisma"], "Free"],
		Feat: "Hobnobber",
		Skill: "Alcohol Lore"
	},
	{
		Name: "Blacksmith",
		Description: "You were a blacksmith or a blacksmith’s apprentice, and during countless hours toiling at the forge, you learned how to smith armor and weapons. Perhaps you worked hard each day and dreamed of adventure each night, or perhaps the adventuring life was thrust upon you by a pivotal event.",
		AbilityBoosts: [["Strength", "Intelligence"], "Free"],
		Feat: "Specialty Crafting(blacksmithing)",
		Skill: "Smithing Lore"
	},
	{
		Name: "Criminal",
		Description: "As an unscrupulous independent or as a member of an underworld organization, you lived a life of crime. You might have become an adventurer to seek redemption, to escape the law, or simply to get access to bigger and better loot.",
		AbilityBoosts: [["Dexterity", "Intelligence"], "Free"],
		Feat: "Experienced Smuggler",
		Skill: "Underworld Lore"
	},
	{
		Name: "Farmhand",
		Description: "With a strong back and an understanding of seasonal cycles, you tilled the land and tended crops. Your farm could have been razed by invaders, you could have lost the family tying you to the land, or you might have simply tired of the drudgery, but at some point you became an adventurer.",
		AbilityBoosts: [["Constitution", "Wisdom"], "Free"],
		Feat: "Assurance(Athletics)",
		Skill: "Farming Lore"
	},
	{
		Name: "Gladiator",
		Description: "The bloody games of the arena taught you the art of combat. Before you attained true fame, you departed—or escaped—the arena to explore the world. Your skill at drawing both blood and a crowd’s attention pay off in a new adventuring life.",
		AbilityBoosts: [["Strength", "Charisma"], "Free"],
		Feat: "Fascinating Performance",
		Skill: "Gladiator Lore"
	},
	{
		Name: "Hunter",
		Description: "You stalk and take down animals and other creatures of the wild. Skinning animals, harvesting their flesh, and cooking them were also part of your training, all of which can give you useful resources while you adventure.",
		AbilityBoosts: [["Dexterity", "Wisdom"], "Free"],
		Feat: "Survey Wildlife",
		Skill: "Hunting Lore"
	},
	{
		Name: "Laborer",
		Description: "You have spent years performing arduous physical labor, perhaps against your will. It was a difficult life, but you somehow survived. You may have embraced adventuring as an easier method to make your way in the world, or you might adventure under someone else’s command.",
		AbilityBoosts: [["Strength", "Constitution"], "Free"],
		Feat: "Robust Recovery",
		Skill: "Labor Lore"
	},
	{
		Name: "Merchant",
		Description: "In a dusty shop, market stall, or merchant caravan, you bartered wares for coin and trade goods. The skills you picked up still apply in the adventuring life, in which a deal on a suit of armor could save your life.",
		AbilityBoosts: [["Intelligence", "Charisma"], "Free"],
		Feat: "Bargain Hunter",
		Skill: "Mercantile Lore"
	},
	{
		Name: "Noble",
		Description: "To the common folk, the life of a noble seems one of idyllic luxury, but growing up as a noble or member of the aspiring gentry, you know the reality: a noble’s lot is obligation and intrigue. Whether you seek to escape your duties by adventuring or to thereby better your station, you have traded silks and pageantry for an adventurer’s life.",
		AbilityBoosts: [["Intelligence", "Charisma"], "Free"],
		Feat: "Courtly Graces",
		Skill: "Nobility Lore"
	},
	{
		Name: "Nomad",
		Description: "Traveling far and wide, you picked up basic tactics for surviving on the road and in unknown lands, getting by with few supplies and even fewer comforts. As an adventurer, you travel still, often into even more dangerous places.",
		AbilityBoosts: [["Constitution", "Wisdom"], "Free"],
		Feat: "Assurance(Survival)",
		Skill: "Terrain(Pick) Lore"
	},
	{
		Name: "Sailor",
		Description: "You heard the call of the sea from a young age. Perhaps you signed onto a merchant’s vessel, joined the navy, or even fell in with a crew of pirates and scallywags.",
		AbilityBoosts: [["Strength", "Dexterity"], "Free"],
		Feat: "Underwater Marauder",
		Skill: "Sailing Lore"
	},
	{
		Name: "Scholar",
		Description: "You have a knack for learning, and from a young age, you sequestered yourself from the outside world to learn all that you could. You’ve read about so many wondrous places and things in your books, and you’ve always dreamed about one day seeing the real things. Eventually, that curiosity led you to leave your studies and become an adventurer",
		AbilityBoosts: [["Intelligence", "Wisdom"], "Free"],
		Feat: "Assurance(Arcana or Nature or Occulstims or Religion)",
		Skill: "Academia Lore"
	},
	{
		Name: "Scout",
		Description: "You called the wilderness home as you hunted game, found trails, and guided travelers. Your wanderlust could have called you to the adventuring life, or perhaps you were serving as a scout for soldiers and found you liked battle.",
		AbilityBoosts: [["Dexterity", "Wisdom"], "Free"],
		Feat: "Forager",
		Skill: "Scouting Lore"
	},
	{
		Name: "Street Urchin",
		Description: "You eked out a living by picking pockets on the streets of a major city, never knowing where you’d find your next meal. While some folk adventure for the glory, you adventure as a means of survival.",
		AbilityBoosts: [["Dexterity", "Intelligence"], "Free"],
		Feat: "Pickpocket",
		Skill: "Underworld Lore"
	},
	{
		Name: "Warrior",
		Description: "As a warrior in a tribe or a member of a militia or army, you waded into battle in your younger days. You might have wanted to break out from the regimented structure of these forces, or could have always been as independent a warrior as you are now.",
		AbilityBoosts: [["Strength", "Constitution"], "Free"],
		Feat: "Quick Repair",
		Skill: "Warfare Lore"
	}
];
