function getAncestryPage(a) {
	var model = '' +
		'<div id="panelAncestry' + a.Id + '" class="tab-pane fade" style="margin:5px">' +
		'<h3 align="center"><b>' + a.Name + '</b></h2>' +
		'<p class="text-justify">' + a.Description + '</p>' +
		'<h4 align="center"><b>HIT POINTS ' + a.HitPoints + ' | SIZE ' + a.Size + ' | SPEED ' + a.Speed + ' feet</b></h4>' +
		'<div>' +
		'<div class="col-md-8 text-justify">' +
		'<h3>Overview</h3>' + a.Overview +
		'</div>' +
		'<div class="col-md-4 well">' +
		'<p><b>ABILITY BOOSTS</b>';
	$.each(a.AbilityBoosts, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	if (a.AbilityFlaws) {
		model += '<p><b>ABILITY FLAW</b>';
		$.each(a.AbilityFlaws, function (i, val) {
			model += '<br />' + val;
		});
		model += '</p>';
	}
	model += '<p><b>LANGUAGES</b>';
	$.each(a.Languages, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	model += '<p class="text-justify"><b>BONUS LANGUAGES</b><br />' + a.BonusLanguages.Description;
	$.each(a.BonusLanguages.List, function (i, val) {
		model += val;
		if (i != a.BonusLanguages.List.length - 1) model += ', '; else model += '.';
	});
	model += '</p>';
	model += '<p><b>TRAITS</b>';
	$.each(a.Traits, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	$.each(a.Features, function (i, feature) {
		model += '<p class="text-justify"><b>' + AncestryFeatureList[feature].Name + '</b><br />' + AncestryFeatureList[feature].Description;
	});
	model += '</p>';
	model +=
		'</div>' +
		'</div>' +
		'<hr><button type="button" id="buttonAncestry' + a.Id + '" class="btn btn-primary" objid="' + a.Id + '">Select</button>' +
		'</div>';
	return model;
}

function getBackgroundPage(a) {
	var model = '' +
		'<div id="panelAncestry' + a.Id + '" class="tab-pane fade" style="margin:5px">' +
		'<h3 align="center"><b>' + a.Name + '</b></h2>' +
		'<p class="text-justify">' + a.Description + '</p>' +
		'<h4 align="center"><b>HIT POINTS ' + a.HitPoints + ' | SIZE ' + a.Size + ' | SPEED ' + a.Speed + ' feet</b></h4>' +
		'<div>' +
		'<div class="col-md-8 text-justify">' +
		'<h3>Overview</h3>' + a.Overview +
		'</div>' +
		'<div class="col-md-4 well">' +
		'<p><b>ABILITY BOOSTS</b>';
	$.each(a.AbilityBoosts, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	if (a.AbilityFlaws) {
		model += '<p><b>ABILITY FLAW</b>';
		$.each(a.AbilityFlaws, function (i, val) {
			model += '<br />' + val;
		});
		model += '</p>';
	}
	model += '<p><b>LANGUAGES</b>';
	$.each(a.Languages, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	model += '<p class="text-justify"><b>BONUS LANGUAGES</b><br />' + a.BonusLanguages.Description;
	$.each(a.BonusLanguages.List, function (i, val) {
		model += val;
		if (i != a.BonusLanguages.List.length - 1) model += ', '; else model += '.';
	});
	model += '</p>';
	model += '<p><b>TRAITS</b>';
	$.each(a.Traits, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	$.each(a.Features, function (i, feature) {
		model += '<p class="text-justify"><b>' + AncestryFeatureList[feature].Name + '</b><br />' + AncestryFeatureList[feature].Description;
	});
	model += '</p>';
	model +=
		'</div>' +
		'</div>' +
		'<hr><button type="button" id="buttonAncestry' + a.Id + '" class="btn btn-primary" objid="' + a.Id + '">Select</button>' +
		'</div>';
	return model;
}

function getClassPage(a) {
	var model = '' +
		'<div id="panelAncestry' + a.Id + '" class="tab-pane fade" style="margin:5px">' +
		'<h3 align="center"><b>' + a.Name + '</b></h2>' +
		'<p class="text-justify">' + a.Description + '</p>' +
		'<h4 align="center"><b>HIT POINTS ' + a.HitPoints + ' | SIZE ' + a.Size + ' | SPEED ' + a.Speed + ' feet</b></h4>' +
		'<div>' +
		'<div class="col-md-8 text-justify">' +
		'<h3>Overview</h3>' + a.Overview +
		'</div>' +
		'<div class="col-md-4 well">' +
		'<p><b>ABILITY BOOSTS</b>';
	$.each(a.AbilityBoosts, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	if (a.AbilityFlaws) {
		model += '<p><b>ABILITY FLAW</b>';
		$.each(a.AbilityFlaws, function (i, val) {
			model += '<br />' + val;
		});
		model += '</p>';
	}
	model += '<p><b>LANGUAGES</b>';
	$.each(a.Languages, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	model += '<p class="text-justify"><b>BONUS LANGUAGES</b><br />' + a.BonusLanguages.Description;
	$.each(a.BonusLanguages.List, function (i, val) {
		model += val;
		if (i != a.BonusLanguages.List.length - 1) model += ', '; else model += '.';
	});
	model += '</p>';
	model += '<p><b>TRAITS</b>';
	$.each(a.Traits, function (i, val) {
		model += '<br />' + val;
	});
	model += '</p>';
	$.each(a.Features, function (i, feature) {
		model += '<p class="text-justify"><b>' + AncestryFeatureList[feature].Name + '</b><br />' + AncestryFeatureList[feature].Description;
	});
	model += '</p>';
	model +=
		'</div>' +
		'</div>' +
		'<hr><button type="button" id="buttonAncestry' + a.Id + '" class="btn btn-primary" objid="' + a.Id + '">Select</button>' +
		'</div>';
	return model;
}
