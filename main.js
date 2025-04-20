const searchEl = document.getElementById("search");


searchEl.addEventListener("keyup", (event) => {
	if(event.key === "Enter"){
		const inputVal = searchEl.value;
		window.location.href = `search.html?inputVal=${encodeURIComponent(inputVal)}`
	}
})
