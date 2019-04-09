
function Tracker() {

	let actors = {};

	addActor = (actor) => {
		if(!actor.name) {
			console.error("No name given for new Actor!");
			return;
		}
		let name = actor.name;
		if(!!actors[actor.name]) {
			count = 2;
			namenew = actor.name;
			while(actors[namenew]) {
				namenew = name + " " + count;
				count++;
			}
			name = namenew;
			console.log("Name already existet, changed to: " + name);
		}
		actors[name] = {
			'name': name,
			'ini': !!actor.ini ? actor.ini : 0,
			'lp': !!actor.lp ? actor.lp : 0,
			'ap': !!actor.ap ? actor.ap : 0,
			'kp': !!actor.kp ? actor.kp : 0,
			'notes': {}
		}
		return actors[name];
	}

	getActor = (name) => {
		if(!actors[name]) {
			console.error("Trying to fetch non-existant actor: " + name);
			return null;
		}
		return actors[name];
	}

	getActors = () => {
		return actors;
	}

	updateActor = (name, property, value) => {
		if(!actors[name]) {
			console.error("Trying to update non-existant actor: " + name);
			return;
		}
		if(typeof actors[name][property] === "undefined") {
			console.error("Trying to update actor " + name + " with invalid property: " + property);
			return;
		}
		actors[name][property] = value;
		if(property == "name") {
			actors[value] = actors[name];
			delete actors[name];
		}
	}

	autoUpdate = (name, property) => {
		if(!actors[name]){
			console.error("Trying to auto-update non-existant actor: " + name);
			return;
		}
		let card = document.querySelector(".actor-card[data-actor='"+name+"']");
		if(!card) {
			console.error("Card for actor " + name + " could not be found during auto-update");
			return;
		}
		let target = card.querySelector("#actor-card-" + property + "-" + name);
		if(!target) {
			console.error("Property "+ property +" for actor " + name + " could not be found during auto-update");
			return;
		}
		let val = target.value;
		updateActor(name, property, val);
	}

	autoUpdateAll = (name) => {
		["name", "ini", "lp", "ap", "kp"].forEach(e=>{ autoUpdate(name, e); });
	}

	updateCard = (name) => {
		let newCard = generateActor(actors[name]);
		let target = document.querySelector(".actor-card[data-actor='"+name+"']");
		target.outerHTML = newCard.outerHTML;
	}

	updateCardWithNameChange = (nameOld, nameNew) => {
		let newCard = generateActor(actors[nameNew]);
		let target = document.querySelector(".actor-card[data-actor='"+nameOld+"']");
		target.outerHTML = newCard.outerHTML;
	}

	deleteActor = (name) => {
		delete actors[name];
		let target = document.querySelector(".actor-card[data-actor='"+name+"']");
		target.remove();
	}

	getSortedActors = () => {
		return Object.values(actors).sort((a1, a2) => {
			return a2.ini - a1.ini;
		});
	}
	
	return this;
}

const tracker = Tracker();


