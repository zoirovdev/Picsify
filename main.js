const searchEl = document.getElementById("search");
const containerEl = document.getElementById("container");





searchEl.addEventListener("keyup", (event) => {
	if(event.key === "Enter"){
		const inputVal = searchEl.value;
		window.location.href = `search.html?inputVal=${encodeURIComponent(inputVal)}`
	}
})


getAll()

function getAll(){
	const cardEl = document.createElement("div");
	cardEl.classList.add("card");

	const anchorEl = document.createElement("a");
	anchorEl.href = "detail.html?image=fox.jpg";

	const imgEl = document.createElement("img");
	imgEl.src = 'fox.jpg';
	imgEl.alt = 'fox'

	anchorEl.appendChild(imgEl);

	const btnContainer = document.createElement("div");
	btnContainer.classList.add("btn-container");

	const btnEl = document.createElement("button");
	btnEl.type = "button"
	btnEl.classList.add("btn");
	btnEl.id = "download"


	btnContainer.appendChild(btnEl);

	const iconEl = document.createElement("i");
	iconEl.classList.add("fas", "fa-arrow-down")

	btnEl.appendChild(iconEl);
	
	cardEl.appendChild(anchorEl);
	cardEl.appendChild(btnContainer);
	containerEl.appendChild(cardEl);
}
