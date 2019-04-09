
function generateActor(actor) {
	let out = "" +
		'<div class="actor-card" data-actor="'+ actor.name +'">' +
			'<div class="row">'+
				'<div class="property">' +
					'<span class="label">Name:</span>' +
					'<input type="text" value="' + actor.name + '" id="actor-card-name-'+ actor.name +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'name\');">' +
				'</div>' +
				'<div class="property">' +
					'<input type="button" value="X" id="actor-card-btnremove-'+ actor.name +'" onclick="tracker.deleteActor(\''+actor.name+'\');">' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
				'<div class="property">' +
					'<span class="label">Ini:</span>' +
					'<input type="number" value="'+ actor.ini +'" id="actor-card-ini-'+ actor.name +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'ini\');">' +
				'</div>' +
				'<div class="property">' +
					'<span class="label">LeP:</span>' +
					'<input type="number" value="'+ actor.lp +'" id="actor-card-lp-'+ actor.name +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'lp\');">' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
				'<div class="property">' +
					'<span class="label">AsP:</span>' +
					'<input type="number" value="'+ actor.ap +'" id="actor-card-ap-'+ actor.name +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'ap\');">' +
				'</div>' +
				'<div class="property">' +
					'<span class="label">KaP:</span>' +
					'<input type="number" value="'+ actor.kp +'" id="actor-card-kp-'+ actor.name +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'kp\');">' +
				'</div>' +
			'</div>' +
		'</div>';
	return out;
}

function generateSortedActorList() {
	let total = "";
	tracker.getSortedActors().forEach(actor => {
		total += generateActor(actor);
	});
	return total;
}
