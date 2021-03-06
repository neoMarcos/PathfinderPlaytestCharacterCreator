﻿var FeatList = [
	// Alchemist
	{
		Name: "Alchemical Familiar",
		Type: "Feat",
		Level: 1,
		Traits: ["Alchemist"],
		Description:
			"<p>You have created life via alchemy, though only a simple creature formed from alchemical materials and a bit of your own blood.This alchemical familiar assists you in your laboratory and adventuring, like any other familiar(see Familiars on page 287 for more information).</p>",
	},
	{
		Name: "Alchemical Savant",
		Type: "Feat",
		Level: 1,
		Traits: ["Alchemist"],
		Description:
			"<p>You can identify alchemical items quickly. When trained in the Arcana skill and attempting to use its Identify Magic action(see page 145) on an alchemical item you hold, you can do so as a single action with the concentrate and manipulate traits instead of taking an hour.If you have the formula for the item you are attempting to identify, you gain a +2 circumstance bonus to your check and treat any critical failures as failures instead.</p>",
	},

	// Barbarian
	{
		Name: "Acute Vision",
		Type: "Feat",
		Level: 1,
		Traits: ["Barbarian"],
		Description:
			"<p>When you are raging, your visual senses improve, granting you low-light vision and darkvision.</p>",
	},
	{
		Name: "Raging Intimidation",
		Type: "Feat",
		Level: 1,
		Traits: ["Barbarian"],
		Description:
			"<p>While you are raging, any Demoralize action you use gains the rage trait. As soon as you meet the appropriate prerequisites of the skill feats Intimidating Glare and Scare to Death, you gain these feats.Scare to Death also gains the rage trait while you Rage.</p>",
	},

	// Bard
	{
		Name: "Bardic Lore",
		Type: "Feat",
		Level: 1,
		Traits: ["Bard"],
		Description:
			"<p>Your eclectic studies inform you on just about any topic. You are trained in Bardic Lore, a special lore skill that can be used only to Recall Knowledge, but can be used to Recall Knowledge on any topic.If you are legendary in Occultism, you become an expert in Bardic Lore, but you can’t increase your proficiency rank in Bardic Lore by any other means.</p>",
	},
	{
		Name: "Lingering Composition",
		Type: "Feat",
		Level: 1,
		Traits: ["Bard"],
		Description:
			"<p>By adding a flourish, you can make your compositions last longer. You learn the lingering composition composition power(see page 235), which you can cast at a cost of 1 Spell Point.Increase your Spell Point pool by 2.</p>",
	},

	// Cleric
	{
		Name: "Communal Healing",
		Type: "Feat",
		Level: 1,
		Traits: ["Cleric", "Healing", "Positive"],
		Description:
			"<p>You’re a conduit for positive energy, and as you channel it through you it heals some of your minor injuries.When you cast the heal spell to heal a single creature other than yourself, you regain Hit Points equal to the spell level of your heal spell.</p>",
	},
	{
		Name: "Deadly Simplicity",
		Type: "Feat",
		Level: 1,
		Traits: ["Cleric"],
		Prerequisites: ["deity with a simple favored weapon", "trained with your deity’s favored weapon"],
		Description:
			"<p>When you are wielding your deity’s favored weapon, increase the damage die of that weapon by one step(d4 to d6, d6 to d8, d8 to d10, d10 to d12).If the weapon already has a damage die of d12, you gain no benefit from this feat.</p>" +
			"<p>If your deity’s favored weapon has the unarmed trait(such as if you worship Irori and have the fist as your favored weapon) and its damage die is lower than d6, this feat increases its damage die to d6.</p>",
	},

	// Druid
	{
		Name: "Animal Companion",
		Type: "Feat",
		Level: 1,
		Traits: ["Animal Order", "Druid"],
		Description:
			"<p>You gain the service of a young animal companion. This companion travels with you on your adventures, and it obeys any simple commands you give it to the best of its abilities.See the Animal Companion section on page 284 for more information about these creatures.</p>",
		Special: "<p>If you are a druid of the animal order, your animal companion increases its Constitution, Wisdom, and Charisma modifiers by 1.</p>"
	},
	{
		Name: "Leshy Familiar",
		Type: "Feat",
		Level: 1,
		Traits: ["Druid","Leaf Order"],
		Description:
			"<p>You gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature.Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars(see page 287 for more details about familiars).</p>",
		Special: "<p>If you are a druid of the leaf order, your familiar has three powers instead of two.</p>"
	},
];