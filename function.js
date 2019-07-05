
function generateActor(actor) {
	return "" +
		'<div class="actor-card" data-actor="'+ actor.name +'">' +
			'<div class="row">'+
				'<div class="property">' +
					'<span class="label">Name:</span>' +
					'<input type="text" data-role="name" value="' + actor.name + '" id="actor-card-name-'+ actor.id +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'name\');">' +
				'</div>' +
				'<div class="property">' +
					'<input type="button" data-role="delete" value="X" id="actor-card-btnremove-'+ actor.id +'" onclick="tracker.deleteActor(\''+actor.name+'\');">' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
				'<div class="property">' +
					'<span class="label">Ini:</span>' +
					'<input type="number" data-role="ini" value="'+ actor.ini +'" id="actor-card-ini-'+ actor.id +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'ini\');">' +
				'</div>' +
				'<div class="property">' +
					'<span class="label">LeP:</span>' +
					'<input type="number" data-role="lp" value="'+ actor.lp +'" id="actor-card-lp-'+ actor.id +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'lp\');">' +
				'</div>' +
			'</div>' +
			'<div class="row">' +
				'<div class="property">' +
					'<span class="label">AsP:</span>' +
					'<input type="number" data-role="ap" value="'+ actor.ap +'" id="actor-card-ap-'+ actor.id +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'ap\');">' +
				'</div>' +
				'<div class="property">' +
					'<span class="label">KaP:</span>' +
					'<input type="number" data-role="kp" value="'+ actor.kp +'" id="actor-card-kp-'+ actor.id +'" onchange="tracker.autoUpdate(\''+actor.name+'\', \'kp\');">' +
				'</div>' +
			'</div>' +
		'</div>';
}

function generateSortedActorList() {
	let total = "";
	tracker.getSortedActors().forEach(actor => {
		total += generateActor(actor);
	});
	document.getElementById("actor-list").innerHTML = total;
}

function addCardStyle(actor, style) {
	document.querySelector(".actor-card[data-actor='"+actor.name+"']").classList.add(style);
}

function removeCardStyle(actor, style) {
	document.querySelector(".actor-card[data-actor='"+actor.name+"']").classList.remove(style);
}

function scrollToElement(query) {
	document.querySelector(query).scrollIntoView({block: "center", behavior: "smooth"});
}
