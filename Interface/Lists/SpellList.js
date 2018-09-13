var SpellList = [
	{
		Name: "ABERRANT WHISPERS",
		Type: "Power",
		Level: 3,
		Casting: ["S", "V"],
		Area: [15, "aura"],
		Target: "Each enemy in the area",
		Duration: [1, "round"],
		Description: "You utter phrases in an unknown tongue, assaulting the minds of those nearby.The effect is based on the result of the target’s Will save.Regardless of the result of each target’s save, each target is bolstered against castings of aberrant whispers.",
		Success: "The target is unaffected.",
		Failure: "The target is stupefied 2.",
		CriticalFailure: "The target is confused.",
		Traits: ["Auditory", "Enchantment", "Mental"]
	}
];