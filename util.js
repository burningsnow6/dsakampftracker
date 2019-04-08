
function flashError(elem, time = 500) {
	document.querySelectorAll(elem).forEach(e => {
		e.classList.add("flash-error");
		setTimeout(()=>{
			e.classList.remove("flash-error");
		}, time)
	});
}

//onload
window.addEventListener("load", () => {
	//open/close modules
	document.querySelectorAll(".module .head").forEach((el)=>{
		let parent = el.parentElement;
		el.addEventListener("click", () => {
			parent.setAttribute("data-status", parent.getAttribute("data-status") == "closed" ? "open" : "closed");
		});
	});
});