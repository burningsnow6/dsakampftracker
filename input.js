
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

function turnTracker() {

	this.activeActor = -1;
	this.sortedActors = null;
	this.sortedIds = [];
	this.turnCount = 0;

	nextActor = () => {
		if(this.activeActor == -1 ) document.querySelector(".module[data-module='turns']").classList.remove("active");
		else if(this.sortedIds[this.activeActor])removeCardStyle(tracker.getActorById(this.sortedIds[this.activeActor]), "active");
		this.activeActor++;
		if(!this.sortedIds[this.activeActor]){
			this.activeActor = -1;
			this.turnCount++;
			document.querySelector("#turnCounter").innerHTML = this.turnCount;
			document.querySelector(".module[data-module='turns']").classList.add("active");
			return;
		}
		addCardStyle(tracker.getActorById(this.sortedIds[this.activeActor]), "active");
		scrollToElement(".actor-card[data-actor='"+tracker.getActorById(this.sortedIds[this.activeActor]).name+"']");
	};

	updateActors = () => {
		this.activeActor = -1;
		this.sortedActors = tracker.getSortedActors();
		this.sortedIds = [];
		this.sortedActors.forEach((actor)=>{
			this.sortedIds.push(actor.id);
		});
	};

	resetTurns = () => {
		this.turnCount = 0;
		updateActors();
	};

	return this;
}

const turns = new turnTracker();

function nextTurn() {
	if(Object.keys(tracker.getActors()).length >= 2){
		turns.nextActor();
	}
}
