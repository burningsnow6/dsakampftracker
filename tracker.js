
function Tracker() {

	let actors = {};

	addActor = (actor) => {
		if(!actor.name) {
			console.error("No name given for new Actor!");
			return;
		}
		if(!!actors[actor.name]) {
			count = 1;
			nameorig = actor.name;
			namenew = actor.name + " 1";
			while(actors[namenew]) {
				count++;
				namenew = nameorig + " " + count;
			}
			actor.name = namenew;
			console.log("Name already existet, changed to: " + actor.name);
		}
		actors[actor.name] = {
			'name': actor.name,
			'ini': !!actor.ini ? actor.ini : 0,
			'lp': !!actor.lp ? actor.lp : 0,
			'ap': !!actor.ap ? actor.ap : 0,
			'kp': !!actor.kp ? actor.kp : 0,
			'notes': {}
		}
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
			actors[value] = actors['name'];
			delete actors[name]; //TODO: this deletes the new actor reference made above!
		}
	}

	autoUpdate = (name) => {
		if(!actors[name]){
			console.error("Trying to auto-update non-existant actor: " + name);
			return;
		}
		let card = document.querySelector(".actor-card[data-actor='"+name+"']");
		if(!card) {
			console.error("Card for actor " + name + " could not be found during auto-update");
		}
	}
	
	return this;
}

const tracker = Tracker();


