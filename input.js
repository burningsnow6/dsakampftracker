
function inputActor() {
	let name = document.getElementById("actor-add-name").value;
	let ini = parseInt(document.getElementById("actor-add-ini").value);
	let lp = parseInt(document.getElementById("actor-add-lp").value);
	let ap = parseInt(document.getElementById("actor-add-ap").value);
	let kp = parseInt(document.getElementById("actor-add-kp").value);
	if(!name) {
		flashError("#actor-add-name");
	}
	let newActor = tracker.addActor({
		"name": name,
		"ini": ini, 
		"lp": lp,
		"ap": ap,
		"kp": kp
	});
	generateSortedActorList();
}

function clearActorInput() {
	document.getElementById("actor-add-name").value = "";
	document.getElementById("actor-add-ini").value = "";
	document.getElementById("actor-add-lp").value = "";
	document.getElementById("actor-add-ap").value = "";
	document.getElementById("actor-add-kp").value = "";
}

function moduleTurns() {

	let activeActor = -1;
	let sortedActors = null;
	let sortedIds = [];
	let initialized = false;

	nextActor = () => {
		if(!initialized) {
			updateActors();
		} else {
			if(sortedIds[activeActor])removeCardStyle(tracker.getActorById(sortedIds[activeActor]), "active");
		}
		activeActor++;
		if(!sortedIds[activeActor]){
			activeActor = 0;
			updateActors();
		}
		addCardStyle(tracker.getActorById(sortedIds[activeActor]), "active");
	}

	updateActors = () => {
		initialized = true;
		sortedActors = tracker.getSortedActors();
		sortedIds = [];
		sortedActors.forEach((actor)=>{
			sortedIds.push(actor.id);
		});
	}

	return this;
}

const turns = moduleTurns();

function nextTurn() {
	if(Object.keys(tracker.getActors()).length >= 2){
		turns.nextActor();
	}
}
