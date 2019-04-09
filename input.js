
function inputActor() {
	let name = document.getElementById("actor-add-name").value;
	let ini = parseInt(document.getElementById("actor-add-ini").value);
	let lp = parseInt(document.getElementById("actor-add-lp").value);
	let ap = parseInt(document.getElementById("actor-add-asp").value);
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
	let out = generateSortedActorList();
	document.getElementById("actor-list").innerHTML = out;
}
