
function generateActor(actor) {
	let out = document.createElement("div");
	out.innerHTML = 
		'<div class="actor-card" data-actor="'+ actor.name +'">' +
			'<div class="row">'+
				'<span class="label">Name:</span>' +
				'<input type="text" placeholder="Name" value="' + actor.name + '" id="actor-card-'+ actor.name +'" + onchange="tracker.autoUpdate(\''+actor.name+'\');">' +
			'</div>' +
		'</div>';
	return out;
}
