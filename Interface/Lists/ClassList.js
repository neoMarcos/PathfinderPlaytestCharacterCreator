var ClassList = [
	{
		Name: "Alchemist",
		Description: "There’s no sight more beautiful to you than a strange brew bubbling in your laboratory’s beakers, and you consume your various creations with abandon.Perhaps you’re fascinated with uncovering the secrets of magic and science, or perhaps you simply like to watch volatile chemical reactions.Regardless, you’re constantly experimenting in your lab or on the go with inventive concoctions tweaked for any eventuality.With your fearlessness in the face of risk, your unique path toward greatness is lined with alchemical brews that push your mind and body to their limits.",
		KeyAbility: "Intelligence",
		HitPoints: 8,
		Proficiencies: [0, 1, 1, 0],
		Skills: 2,
		Weapons: ["Simple Weapons", "Alchemical Bombs"],
		Armor: ["Light Armor"],
		SignatureSkills: ["Arcana", "Crafting", "Medicine"],
		Features: [
			{
				Level: 1,
				Name: "Advanced Alchemy",
				Description:
					"<p>You gain the Alchemical Crafting feat (see page 162), even if you don’t meet that feat’s prerequisites, and you gain the four additional common 1st-level alchemical formulas that feat grants.The list of alchemical items begins on page 360. You can use this feat to create common alchemical items as long as you have their formulas in your formula book, though their power is fleeting. You can create these items in two different ways, as described below. An alchemical item you create this way has the infused trait.</p>" +
					"<p>First, during your daily preparations (described on page 332), you can create items for which you have the formulas.Creating items in this way requires spending 1 Resonance Point to create a batch of alchemical items of that type with the infused trait.You select how many items are in the batch, up to half the normal maximum batch size(half a typical batch is two items, but see the Crafting Trained Activities section on page for more information).You don’t need to attempt a Crafting check to do this, and you ignore the number of days typically required to create the items and any requirements of alchemical reagents.You can’t overspend Resonance Points to create infused items in this way during your daily preparations.</p>" +
					"<p>Second, you can create alchemical items with the Quick Alchemy action, described below.</p>",
				BookPage: ["RB",45],
			},
			{
				Level: 1,
				Name: "Formula Book",
				Description:
					"<p>You start with a standard formula book worth 10 sp or less(as detailed on page 186) for free.The formula book contains formulas for your choice of 4 common 1st - level alchemical items.The list of alchemical items begins on page 360.</p>" +
					"<p>Each time you gain a new level, you can add formulas for two alchemical items to your formula book. These can be of any level of item you can create.You learn these formulas automatically, but it’s also possible to find or buy other formulas, or to invent them with the Inventor feat(see page 167).</p>",
				BookPage: ["RB",46],
			},
			{
				Level: 1,
				Name: "Studied Resonance",
				Description:
					"<p>Knowledge, rather than personality, fuels your interactions with alchemical and magical substances and devices.Your maximum number of Resonance Points is equal to your character level plus your Intelligence modifier(instead of your Charisma modifier).</p>",
				BookPage: ["RB",46],
			},
			{
				Level: 1,
				Name: "Alchemist Feats",
				Description:
					"<p>At 1st level and every even-numbered level thereafter, you gain an alchemist class feat.Alchemist class feats are described beginning on page 48.</p>",
				BookPage: ["RB",46],
			},
			{
				Level: 2,
				Name: "Skill Feats",
				Description:
					"<p>At 2nd level and every 2 levels thereafter, you gain a skill feat.Skill feats can be found in Chapter 5 and have the skill trait.You must be trained or better in the corresponding skill to select a skill feat.</p>",
				BookPage: ["RB",46],
			},
			{
				Level: 3,
				Name: "Empower Bombs",
				Description:
					"<p>When you craft an alchemical item with the bomb and infused traits—hereafter referred to in this entry as a bomb—you can empower it.You can empower only a 1st - level bomb, increasing its level and causing it to deal more damage.This also increases any persistent damage dealt by the bomb, but not its splash damage.</p>" +
					"<ul>" +
					"<li>At 3rd level, you can create 3rd-level bombs that deal double the bomb’s base damage as presented in its entry. For instance, if you created a flask of 3rd - level empowered alchemist’s fire(see page 360), it would deal 2d6 fire damage, 2 persistent fire damage, and 1 splash damage on a hit.</li>" +
					"<li>At 7th level, you can create 7th-level bombs that deal three times the base damage.</li>" +
					"<li>At 11th level, you can create 11th-level bombs dealing four times the base damage.</li>" +
					"<li>At 15th level, you can create 15th-level bombs that deal five times the base damage, and attack rolls with your empowered bombs gain a + 1 item bonus.</li>" +
					"<li>At 19th level, you can create 19th-level bombs that deal six times the base damage, and attack rolls with your empowered bombs gain a + 2 item bonus.</li>" +
					"</ul>",
				BookPage: ["RB",46],
			},
			{
				Level: 3,
				Name: "General Feats",
				Description:
					"<p>At 3rd level and every 4 levels thereafter, you gain a general feat.General feats are listed in Chapter 5.</p>",
				BookPage: ["RB",46],
			},
			{
				Level: 3,
				Name: "Skill Increases",
				Description:
					"<p>At 3rd level and every 2 levels thereafter, you gain a skill increase.You can use this increase to either become trained in one skill you’re untrained in or become an expert in one skill in which you’re already trained.</p>" +
					"<p>If you are at least 7th level, you can use this increase to become a master in a signature skill in which you’re already an expert.If you are at least 15th level, you can use this increase to become legendary in a signature skill in which you’re already a master.</p>",
				BookPage: ["RB",46],
			},
			{
				Level: 5,
				Name: "Mutagen Crafting",
				Description:
					"<p>You learn the secret of mutagens. When you gain a new level and add new formulas to your book, you can select formulas for uncommon alchemical items with the mutagen trait.</p>",
				BookPage: ["RB",47],
			},
			{
				Level: 5,
				Name: "Ability Boosts",
				Description:
					"<p>At 5th level and every 5 levels thereafter, you boost four different ability scores.You can use these ability boosts to increase your ability scores above 18. Boosting an ability score increases it by 1 if it’s already 18 or above, or by 2 if it starts out below 18.</p>",
				BookPage: ["RB",47],
			},
			{
				Level: 5,
				Name: "Ancestry Feats",
				Description:
					"<p>In addition to the ancestry feat you started with, you gain an ancestry feat at 5th level and every 4 levels thereafter.The list of ancestry feats open to you can be found in your ancestry’s entry in Chapter 2.</p>",
				BookPage: ["RB",47],
			},
			{
				Level: 9,
				Name: "Expanded Resonance",
				Description:
					"<p>You gain a number of bonus Resonance Points equal to half your level. You can use these bonus Resonance Points only when using the Quick Alchemy action.</p>",
				BookPage: ["RB",47],
			},
			{
				Level: 13,
				Name: "Double Elixir",
				Description:
					"<p>When using the Quick Alchemy action, instead of spending 1 Resonance Point to create a single item, you can spend up to 2 Resonance Points to make up to two alchemical items as described in that action.These items need not be the same.</p>",
				BookPage: ["RB",47],
			},
			{
				Level: 17,
				Name: "Alchemical Alacrity",
				Description:
					"<p>When using the Quick Alchemy action, you can spend up to 3 Resonance Points to make up to three alchemical items as described in that action(1 per Resonance Point spent). These items need not be the same.</p>",
				BookPage: ["RB",47],
			},
		],
		BookPage: ["RB",44]
	}
];