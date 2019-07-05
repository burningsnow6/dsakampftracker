
function Tracker() {

	let actors = {};
	let dict = {};
	let actorPointer = 1;

	dereference = (name) => {
		if(!dict[name]) {
			console.error("No valid actor with name " + name);
			return null;
		}
		if(!actors[dict[name]]) {
			console.error("Dereferencing error with name " + name +" and reference " + dict[name]);
			return null;
		}
		return actors[dict[name]];
	}
	rereference = (id) => {
		if(!actors[id]){
			console.error("No valid actor with id "+id);
			return null;
		}
		return actors[id].name;
	}
	getActorById = (id) => {
		if(!actors[id]){
			console.error("No valid actor with id "+id);
			return null;
		}
		return actors[id];
	}

	getActor = (name) => {return dereference(name);}

	addActor = (actor) => {
		if(!actor.name) {
			console.error("No name given for new Actor!");
			return;
		}
		let name = actor.name;
		if(!!dict[actor.name]) {
			count = 2;
			namenew = actor.name;
			while(dict[namenew]) {
				namenew = name + " " + count;
				count++;
			}
			name = namenew;
			console.log("Name already existet, changed to: " + name);
		}
		actors[actorPointer] = {
			'name': name,
			'ini': !!actor.ini ? actor.ini : 0,
			'lp': !!actor.lp ? actor.lp : 0,
			'ap': !!actor.ap ? actor.ap : 0,
			'kp': !!actor.kp ? actor.kp : 0,
			'id': actorPointer,
			'notes': {}
		}
		dict[name] = actorPointer;
		actorPointer++;
		turns.updateActors();
		return dereference(name);
	}

	getActors = () => {
		return actors;
	}

	updateActor = (name, property, value) => {
		if(!dict[name]) {
			console.error("Trying to update non-existant actor: " + name);
			return;
		}
		if(typeof actors[dict[name]][property] === "undefined") {
			console.error("Trying to update actor " + name + " with invalid property: " + property);
			return;
		}
		actors[dict[name]][property] = value;
		if(property == "name") {
			dict[value] = dict[name];
			actorPointer++;
			delete dict[name];
		}
		if(property == "ini") {
			generateSortedActorList();
		}
		turns.updateActors();
	}

	autoUpdate = (name, property) => {
		if(!dict[name]){
			console.error("Trying to auto-update non-existant actor: " + name);
			return;
		}
		let card = document.querySelector(".actor-card[data-actor='"+name+"']");
		if(!card) {
			console.error("Card for actor " + name + " could not be found during auto-update");
			return;
		}
		let target = card.querySelector("#actor-card-" + property + "-" + dict[name]);
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
		let newCard = generateActor(dereference(name));
		let target = document.querySelector(".actor-card[data-actor='"+name+"']");
		target.outerHTML = newCard.outerHTML;
	}

	updateCardWithNameChange = (nameOld, nameNew) => {
		let newCard = generateActor(dereference(nameNew));
		let target = document.querySelector(".actor-card[data-actor='"+nameOld+"']");
		target.outerHTML = newCard.outerHTML;
	}

	deleteActor = (name) => {
		delete actors[dict[name]];
		delete dict[name];
		let target = document.querySelector(".actor-card[data-actor='"+name+"']");
		target.remove();
		turns.updateActors();
	}

	getSortedActors = () => {
		return Object.values(actors).sort((a1, a2) => {
			return a2.ini - a1.ini;
		});
	}
	
	return this;
}

const tracker = Tracker();

