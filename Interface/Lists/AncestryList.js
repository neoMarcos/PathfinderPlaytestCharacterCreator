var AncestryList = {
	//	"Description": "Your character’s heritage determines which of the world’s many peoples she calls her own, whether it’s diverse humans, insular but vivacious elves, traditionalist and family-focused dwarves, or any of the other groups of people that call Golarion home. Both her heritage and her experiences as a youth might be key parts of her identity, and they likely shape how she sees the world and her place in it.",
	Dwarf: {
		Id: "Dwarf",
		Name: "Dwarf",
		Description: "Dwarven lore tells epic tales of the short, stocky people’s long-ago pilgrimage from their Darklands home to the surface—a journey they undertook at the behest of a prophet of the god of dwarvenkind.The people reached their destination and built magnificent fortifications they came to call Sky Citadels, and many dwarves remain ensconced within these and other ancestral homes to this day.Given the dwarves’ harrowing history, their reputation as a stoic and stern people is well earned.",
		HitPoints: 10,
		Size: "Medium",
		SizeShort: "M",
		Speed: 20,
		AbilityBoosts: ["Constitution", "Wisdom", "Free"],
		AbilityFlaw: ["Charisma"],
		Languages: ["Common", "Dwarf"],
		BonusLanguages: {
			Description: "At 1st level, if your Intelligence score is 14 or higher, you can also select one of the following languages: ",
			List: ["Giant", "Gnome", "Goblin", "Orc", "Terran", "Undercommon"],
		},
		Traits: ["Dwarf", "Humanoid"],
		Features: ["Darkvision", "Unburdened"],
		Overview:
			"<p>The dwarves’ ancient surface empire fell long ago, overwhelmed by orc and goblinoid enemies, but dwarves today retain many of the qualities that propelled their people to greatness in ancient times: fierceness, gumption, and stubbornness in endeavors ranging from battle and craftsmanship to forging ties with family and friends. Dwarves are slow to trust people who are not their kin—a tendency that traces to their history of bloody conflict with foes such as giants, orcs, and the horrors of the deeps. Trust from a dwarf is hard won, but as strong as iron.</p>" +
			"<p>These sturdy people stand about a foot shorter than most humans. Long hair is often a source of pride among them, particularly when braided into intricate patterns. Men are typically broader than women, and many men take pride in their long beards. Dwarves typically reach physical adulthood around the age of 25 and can live to around 350 years old.</p>" +
			"<p>The distance between dwarven mountain citadels creates vast cultural divides, but many dwarves share a common passion for architecture, gem cutting, metalwork, mining, and stonework. Dwarves revere honor, justice, and the traditions of their clans and kingdoms. Few dwarves are seen without a clan dagger, a weapon forged just before an individual dwarf’s birth and bearing the gemstone of the clan. Torag, the god of dwarvenkind, is a favored dwarven deity.</p>",
		Adventurers:
			"<p>Some backgrounds are particularly suitable for dwarves. You might consider the acolyte background if you have religious leanings, the nomad background if you’ve traveled far from home, or the warrior background if you were raised to defend a dwarven community. The barkeep, blacksmith, farmhand, and merchant backgrounds also speak to the dwarven way of life.</p>" +
			"<p>Dwarves excel at many of the martial classes, such as barbarian, fighter, monk, and ranger, but they also make excellent clerics and druids.</p>",
	},
	Elf: {
		Id: "Elf",
		Name: "Elf",
		Description: "Elven culture is deep, rich, and on the decline. Their society peaked millennia ago, long before they fled Golarion to escape the calamity of Earthfall. Returning to a changed land, the elves have struggled to reclaim their ancestral homes, most notably from the terrible demons that have invaded parts of their homeland. Remnants of great elven settlements lie scattered across the Inner Sea region, and even their ancestral lands contain long-forgotten ruins and artifacts alongside newer structures.",
		HitPoints: 6,
		Size: "Medium",
		SizeShort: "M",
		Speed: 30,
		AbilityBoosts: ["Dexterity", "Intelligence", "Free"],
		AbilityFlaw: ["Constitution"],
		Languages: ["Common", "Elven"],
		BonusLanguages: {
			Description: "At 1st level, if your Intelligence score is 14 or higher, you can also select one of the following languages: ",
			List: ["Celestial", "Draconic", "Gnoll", "Gnomish", "Goblin", "Orcish", "Sylvan"],
		},
		Traits: ["Elf", "Humanoid"],
		Features: ["LowLightVision"],
		Overview:
			"<p>Elves combine an otherworldly grace, sharp intellect, and mysterious charm in a way that is practically magnetic to members of other ancestries. They are often voraciously intellectual, though they fill their long years with complicated pedagogies that most shorter - lived peoples find inefficient. Elves also hold notoriously long grudges against their rivals, but these antagonistic relationships can sometimes blossom into friendship over time.</p>" +
			"<p>Elves are generally taller than humans, and they have a fragile grace accentuated with long facial features and sharply pointed ears. Broad pupils fill their wide eyes, giving elves an alien look and allowing them to see sharply even in very little light. Elves typically reach physical adulthood around the age of 20(though they’re considered by other elves to be fully emotionally mature at close to the end of their first century), and they can live to around 600 years old.</p>" +
			"<p>Elves subtly and deeply attune to their environment and their companions, and they often take on physical traits reflecting their surroundings. An elf who has dwelled in primeval forests for centuries, for example, might exhibit verdant hair and gnarled fingers, while one who’s lived in a desert might have golden pupils and skin.</p>" +
			"<p>Elves are often emotional and capricious, yet they also value kindness and beauty. They prefer deities who share their love of all things mystic and artistic — Desna and Shelyn are particular favorites. Calistria is the most notorious of elven deities, as she represents many of the elven ideals taken to the extreme.</p>",
		Adventurers:
			"<p>Some background options are particularly suitable for elves. Look to the hunter background if you were raised in the wilderness, the noble background if you grew up in the court, or the scholar background if you pursued a life in academia. In addition, the acrobat, entertainer, and scout backgrounds all make good fits for an elf.</p>" +
			"<p>When selecting a class, consider selecting ranger or rogue, both of which take advantage of elves’ inherently dexterous nature. You might also consider being an alchemist or wizard, both of which speak to elves’ natural intellectual curiosity.</p>",
	},
	Gnome: {
		Id: "Gnome",
		Name: "Gnome",
		Description: "Long ago, early gnome ancestors migrated from the First World, realm of the fey. While it’s unclear why the first gnomes wandered to Golarion, their origin manifests in modern gnomes’ bizarre reasoning, eccentricity, obsessive tendencies, and what some see as naivete. These qualities are further reflected in their physical characteristics, such as spindly limbs, brightly colored hair, and childlike and extremely expressive facial features that further reflect their otherworldly origins.",
		HitPoints: 8,
		Size: "Small",
		SizeShort: "S",
		Speed: 20,
		AbilityBoosts: ["Constitution", "Charisma", "Free"],
		AbilityFlaw: ["Strength"],
		Languages: ["Common", "Gnomish", "Sylvan"],
		BonusLanguages: {
			Description: "At 1st level, if your Intelligence score is 14 or higher, you can also select one of the following languages: ",
			List: ["Draconic", "Dwarven", "Elven", "Goblin", "Jotun", "Orcish"],
		},
		Traits: ["Gnome", "Humanoid"],
		Features: ["LowLightVision"],
		Overview:
			"<p>Always hungry for new experiences, gnomes constantly wander both mentally and physically, attempting to stave off a terrible ailment that threatens all of their people. This affliction—the Bleaching—strikes gnomes who fail to dream, innovate, and take in new experiences as their progenitors did every hour of every day in the First World. The Bleaching slowly drains the literal color from gnomes, and it plunges the affected into states of deep depression that eventually claim their lives. Only a very few gnomes survive this scourge, becoming deeply morose and wise survivors known as bleachlings.</p>" +
			"<p>Most gnomes stand just over 3 feet tall and weigh little more than a young human child. Gnomes reach physical adulthood around the age of 18, though many retain a childlike curiosity even into adulthood. Gnomes rarely live longer than 400 years.</p>" +
			"<p>Though they all trace their ancestry to the First World, gnomes otherwise have little culture they point to as their own. Instead, gnomes tend to pick and choose cultural practices of the region in which they live. Gnomes claim no nation in its entirety, and as a people they wouldn’t know what to do with such a state if one existed. Most gnomes consider adventure not a choice but a necessity, and gnome adventurers often collect mementos during their travels that allow them to relive their most exciting stories.</p>" +
			"<p>Gnomes eschew order, and therefore most worship deities who value individuality and nature, such as Cayden Cailean, Desna, Gozreh, and Shelyn.</p>",
		Adventurers:
			"<p>Some background options make particularly good choices for gnomes. Consider the entertainer background if you grew up in front of a crowd, the merchant background if you were raised in a family business, or the nomad background if you traveled from place to place with your kin. In addition, the animal whisperer, barkeep, and farmhand backgrounds are all applicable to the gnome lifestyle.</p>" +
			"<p>When deciding on a class, note that gnomes’ connection to the natural world makes them suitable rangers or druids. While gnomes are not often physically strong, they are often gifted with magic, especially magic that originates from the First World, making them excellent bards and sorcerers.</p>",
	},
	Goblin: {
		Id: "Goblin",
		Name: "Goblin",
		Description: "It’s been almost 20 years since the end of the Goblinblood Wars that scorched the Chitterwood, forcing dozens of tribes into hiding. Now with new threats rising up, the many tribal elders have put aside their reckless ways in the hope of forging alliances that give them a chance at survival. While many have stayed to protect their homelands, others have become refugees, with some traveling to Absalom in search of a home that might offer them sanctuary in a world that does not trust them.",
		HitPoints: 6,
		Size: "Small",
		SizeShort: "S",
		Speed: 25,
		AbilityBoosts: ["Dexterity", "Charisma", "Free"],
		AbilityFlaw: ["Wisdom"],
		Languages: ["Common", "Goblin"],
		BonusLanguages: {
			Description: "At 1st level, if your Intelligence score is 14 or higher, you can also select one of the following languages: ",
			List: ["Draconic", "Dwarven", "Gnoll", "Gnomish", "Halfling", "Orcish"],
		},
		Traits: ["Goblin", "Humanoid"],
		Features: ["Darkvision"],
		Overview:
			"<p>Even those goblins who break from their destructive past often subtly perpetuate some of the qualities that have been tied to the creatures for millennia. Goblins tend to flock to strong leaders, fiercely protecting those companions who have protected them from physical harm or offered a sympathetic ear when they learn of the goblins’ woes. Some goblins remain deeply fascinated with fire, or fearlessly devour a meal that might turn others’ stomachs. Others are endless tinkerers and view their companions’ trash simply as components of gadgets yet to be made. Occasionally, fellow adventurers find these proclivities unsettling or odd, but more often than not, goblins’ friends consider these qualities endearing.</p>" +
			"<p>Though goblins’ culture has splintered radically, their reputation across the Inner Sea region has changed little. As such, goblins who travel to larger cities are frequently subjected to derision, and as a result many goblins work twice as hard at proving their worth. Those who befriend a goblin quickly learn that while a goblin’s friendship might include all manners of pranks, such fun comes from a place of true acceptance—something that a goblin does not give freely.</p>" +
			"<p>Goblins reach adolescence by the age of 3 and adulthood 4 or 5 years later. In theory, goblins could live 50 years or more, but without anyone to protect them from each other or themselves, few live past 20 years of age. Goblins typically stand about 3 feet tall, with skin colors that range from green to gray to blue. Goblin adventurers typically worship Cayden Cailean.</p>",
		Adventurers:
			"<p>Some backgrounds make particularly good choices for goblins. Consider the criminal background if you came from a lawless tribe, the entertainer background if you made a living performing for an audience, or the street urchin background if you were raised in poverty. In addition, the acrobat, gladiator, and hunter backgrounds also make sense for a goblin.</p>" +
			"<p>When it is time to select a class, consider playing an alchemist, since many goblins love fire, or a bard, since many goblins love songs. As scrappy survivors, goblins are often rogues who dart about the shadows, though their natural charismatic nature also draws them to the pursuit of magical classes such as sorcerer.</p>",
	},
	Halfling: {
		Id: "Halfling",
		Name: "Halfling",
		Description: "Claiming no place as their own, halflings control few settlements larger than villages. Instead, they frequently live among humans within the walls of larger cities, carving out small communities alongside other tall-folk. Many halflings lead perfectly fulfilling lives in the shadows of their larger neighbors, while others prefer a nomadic existence, traveling the world and taking advantage of opportunities and adventures as they come.",
		HitPoints: 6,
		Size: "Small",
		SizeShort: "S",
		Speed: 25,
		AbilityBoosts: ["Dexterity", "Wisdom", "Free"],
		AbilityFlaw: ["Strength"],
		Languages: ["Common", "Halfling"],
		BonusLanguages: {
			Description: "At 1st level, if your Intelligence score is 14 or higher, you can also select one of the following languages: ",
			List: ["Dwarven", "Elven", "Gnomish", "Goblin"],
		},
		Traits: ["Halfling", "Humanoid"],
		Features: null,
		Overview:
			"<p>Many taller people dismiss halflings due to their size or, worse still, treat them like children. Halflings use these misconceptions and prejudices to their advantage, gaining access to opportunities and performing deeds of daring mischief or heroism. A halfling’s curiosity is tempered with caution, often leading to narrow escapes.</p>" +
			"<p>Despite their jovial and friendly nature, halflings don’t naturally tend to congregate together. They have no cultural homeland, and they instead weave themselves throughout the world’s societies. Halflings usually dwell among humans within the walls of cities, eking out whatever livings they can, many performing menial labor or simple service jobs. Some halflings reject such a life, instead turning to the open road, traveling from place to place in search of fortune and fame. These nomadic halflings often travel in small groups, sharing hardships and simple pleasures among close friends and family.</p>" +
			"<p>Halflings rarely grow to more than 3 feet in height. Tufts of hair warm the tops of their broad, tanned feet, and they prefer to walk barefoot. Halflings typically reach physical adulthood at the age of 20. A typical halfling can live to around 150 years old. Halflings are loyal to their friends and family, but they are not afraid to do what needs to be done in order to survive. Halflings favor gods that either grant luck, such as Desna, or encourage guile, like Norgorber, and many appreciate Cayden Cailean’s role as a liberator.</p>" +
			"<p>Halflings’ wanderlust and opportunism make them ideal adventurers, and one popular superstition even claims that traveling with a halfling is good luck.</p>",
		Adventurers:
			"<p>Some backgrounds make particularly good choices for halflings. You might consider the acrobat background if you were raised in a troupe, the entertainer background if you had to perform to pay for a meal, or the street urchin background if you grew up in poverty. In addition, the barkeep, criminal, and laborer backgrounds all make good fits for halflings.</p>" +
			"<p>When choosing a class, note that halflings make great clerics and rogues due to their natural proclivities, but many also become skilled monks or rangers.</p>",
	},
	Human: {
		Id: "Human",
		Name: "Human",
		Description: "As unpredictable and varied as any the peoples on Golarion, humans have the exceptional drive and capacity to endure and expand. Though many civilizations thrived before humanity rose to prominence, humans have built some of the greatest and the most terrible societies throughout the course of history, and today they are the most populous people in the realms around the Inner Sea.",
		HitPoints: 8,
		Size: "Medium",
		SizeShort: "M",
		Speed: 25,
		AbilityBoosts: ["Free", "Free"],
		AbilityFlaw: null,
		Languages: ["Common", "One additional language, selected from those to which you have access"],
		BonusLanguages: {
			Description: "At 1st level, if your Intelligence score is 14 or higher, you can also select one of the languages from the list of common languages on page 40 or from other languages you have access to.",
			List: null,
		},
		Traits: ["Human", "Humanoid"],
		Features: null,
		Overview:
			"<p>Humans’ empires and nations are vast, sprawling things, and their citizens carve names for themselves with the strength of their sword arms and the power of their spells. Humanity is both diverse and tumultuous, running the gamut from cruel to kind, from sinister to saintlike. And while humans build large nation states and free cities alike, many of them venture forth to explore, leaving their homes to map uncharted realms, search for long - lost treasure, or lead mighty armies to conquer their neighbors for no better reason than because they can.</p>" +
			"<p>Human variety also manifests in their governments, attitudes, and social norms. Though the oldest of human cultures trace their histories thousands of years into the past, when compared to the societies of the elves or dwarves, human civilizations seem to be in a constant state of flux, as empires fragment and new kingdoms subsume the old.</p>" +
			"<p>Humans typically reach physical adulthood at the age of 18. A typical human can live to be around 90 years old. Humans often intermarry with other peoples, giving rise to children who bear traits of both parents. The most notable half-humans are half - elves and half - orcs. Humans worship a wide range of gods and practice many different religions.</p>" +
			"<p>For many humans, adventuring serves as a means to an end, whether that end is accumulating wealth, striving for acclaim, increasing in social status, or uncovering arcane knowledge and power.</p>",
		Adventurers:
			"<p>Some backgrounds make particularly good choices for humans. You might choose the farmhand background if you have just left home, the gladiator background if you’ve just earned your freedom, or the sailor background if you’ve recently returned from the roiling sea. You should look for a background that complements your class, granting you a boost to an ability score that the class values.</p>" +
			"<p>When looking for a class, you are open to many class choices. Your character could be a young, bright-faced paladin ready to take on the world or a jaded wizard looking to leave it behind for a larger destiny in the planes of the Great Beyond—or anything in between.</p>",
	},
};

var AncestryFeatureList = {
	Darkvision: {
		Name: "Darkvision",
		Description: "You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white."
	},
	LowLightVision: {
		Name: "Low-Light Vision",
		Description: "You can see in dim light as though it were bright light."
	},
	Unburdened: {
		Name: "Unburdened",
		Description: "If your Speed would be reduced by armor you wear or the encumbered condition, you ignore 5 feet of that reduction."
	},
};