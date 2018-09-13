var AncestryList = [
	//	"Description": "Your character’s heritage determines which of the world’s many peoples she calls her own, whether it’s diverse humans, insular but vivacious elves, traditionalist and family-focused dwarves, or any of the other groups of people that call Golarion home. Both her heritage and her experiences as a youth might be key parts of her identity, and they likely shape how she sees the world and her place in it.",
	{
		Name: "Dwarf",
		Description: "Dwarven lore tells epic tales of the short, stocky people’s long-ago pilgrimage from their Darklands home to the surface—a journey they undertook at the behest of a prophet of the god of dwarvenkind.The people reached their destination and built magnificent fortifications they came to call Sky Citadels, and many dwarves remain ensconced within these and other ancestral homes to this day.Given the dwarves’ harrowing history, their reputation as a stoic and stern people is well earned.",
		HitPoints: 10,
		Size: "Medium",
		SizeShort: "M",
		Speed: 20,
		AbilityBoosts: ["Constitution", "Wisdom", "Free"],
		AbilityFlaw: ["Charisma"],
		Languages: ["Common", "Dwarf"],
		BonusLanguages: ["Giant", "Gnome", "Goblin", "Orc", "Terran", "Undercommon"],
		Traits: ["Dwarf", "Humanoid"],
		Features: ["Darkvision", "Unburdened"]
	},
	{
		Name: "Elf",
		Description: "Elven culture is deep, rich, and on the decline. Their society peaked millennia ago, long before they fled Golarion to escape the calamity of Earthfall.Returning to a changed land, the elves have struggled to reclaim their ancestral homes, most notably from the terrible demons that have invaded parts of their homeland.Remnants of great elven settlements lie scattered across the Inner Sea region, and even their ancestral lands contain long-forgotten ruins and artifacts alongside newer structures.",
		HitPoints: 6,
		Size: "Medium",
		SizeShort: "M",
		Speed: 30,
		AbilityBoosts: ["Dexterity", "Intelligence", "Free"],
		AbilityFlaw: ["Constitution"],
		Languages: ["Common", "Elven"],
		BonusLanguages: ["Celestial", "Draconic", "Gnoll", "Gnomish", "Goblin", "Orcish", "Sylvan"],
		Traits: ["Elf", "Humanoid"],
		Features: ["Low-Light Vision"]
	},
	{
		Name: "Gnome",
		Description: "Long ago, early gnome ancestors migrated from the First World, realm of the fey. While it’s unclear why the first gnomes wandered to Golarion, their origin manifests in modern gnomes’ bizarre reasoning, eccentricity, obsessive tendencies, and what some see as naivete.These qualities are further reflected in their physical characteristics, such as spindly limbs, brightly colored hair, and childlike and extremely expressive facial features that further reflect their otherworldly origins.",
		HitPoints: 8,
		Size: "Small",
		SizeShort: "S",
		Speed: 20,
		AbilityBoosts: ["Constitution", "Charisma", "Free"],
		AbilityFlaw: ["Strength"],
		Languages: ["Common", "Gnomish", "Sylvan"],
		BonusLanguages: ["Draconic", "Dwarven", "Elven", "Goblin", "Jotun", "Orcish"],
		Traits: ["Gnome", "Humanoid"],
		Features: ["Low-Light Vision"]
	},
	{
		Name: "Goblin",
		Description: "It’s been almost 20 years since the end of the Goblinblood Wars that scorched the Chitterwood, forcing dozens of tribes into hiding.Now with new threats rising up, the many tribal elders have put aside their reckless ways in the hope of forging alliances that give them a chance at survival.While many have stayed to protect their homelands, others have become refugees, with some traveling to Absalom in search of a home that might offer them sanctuary in a world that does not trust them.",
		HitPoints: 6,
		Size: "Small",
		SizeShort: "S",
		Speed: 25,
		AbilityBoosts: ["Dexterity", "Charisma", "Free"],
		AbilityFlaw: ["Wisdom"],
		Languages: ["Common", "Goblin"],
		BonusLanguages: ["Draconic", "Dwarven", "Gnoll", "Gnomish", "Halfling", "Orcish"],
		Traits: ["Goblin", "Humanoid"],
		Features: ["Darkvision"]
	},
	{
		Name: "Halfling",
		Description: "Claiming no place as their own, halflings control few settlements larger than villages. Instead, they frequently live among humans within the walls of larger cities, carving out small communities alongside other tall-folk.Many halflings lead perfectly fulfilling lives in the shadows of their larger neighbors, while others prefer a nomadic existence, traveling the world and taking advantage of opportunities and adventures as they come.",
		HitPoints: 6,
		Size: "Small",
		SizeShort: "S",
		Speed: 25,
		AbilityBoosts: ["Dexterity", "Wisdom", "Free"],
		AbilityFlaw: ["Strength"],
		Languages: ["Common", "Halfling"],
		BonusLanguages: ["Dwarven", "Elven", "Gnomish", "Goblin"],
		Traits: ["Halfling", "Humanoid"],
		Features: []
	},
	{
		Name: "Human",
		Description: "As unpredictable and varied as any the peoples on Golarion, humans have the exceptional drive and capacity to endure and expand.Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea.",
		HitPoints: 8,
		Size: "Medium",
		SizeShort: "M",
		Speed: 25,
		AbilityBoosts: ["Free", "Free"],
		AbilityFlaw: [],
		Languages: ["Common", "Ethnicity"],
		BonusLanguages: ["Any"],
		Traits: ["Human", "Humanoid"],
		Features: []
	}
];

var AncestryFeatureList = [
	{
		Name: "Darkvision",
		Description: "You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white."
	}, {
		Name: "Low-Light Vision",
		Description: "You can see in dim light as though it were bright light."
	}, {
		Name: "Unburdened",
		Description: "If your Speed would be reduced by armor you wear or the encumbered condition, you ignore 5 feet of that reduction."
	}
];