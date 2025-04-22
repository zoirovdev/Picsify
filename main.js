const searchEl = document.getElementById("search");
const containerEl = document.getElementById("container");





searchEl.addEventListener("keyup", (event) => {
	if(event.key === "Enter"){
		const inputVal = searchEl.value;
		window.location.href = `search.html?inputVal=${encodeURIComponent(inputVal)}`
	}
})


getAll()

async function getAll(){
	const ACCESS_KEY = 'rLctyv9Gt88pPG_AFlfnPWK_AMQnDuPoCES641c85dA'

	const response = await fetch('https://api.unsplash.com/photos?page=1&per_page=10', {
		headers : {
			Authorization: `Client-ID ${ACCESS_KEY}`
		}
	})

	const data = await response.json()


	for(let i = 0; i < 10; i++){
		
		console.log(data[i]);
		const cardEl = document.createElement("div");
		cardEl.classList.add("card");

		const anchorEl = document.createElement("a");
		const params = new URLSearchParams({ image: `${data[i].urls.small}`, id: data[i].id, slug: data[i].slug,
			created_at: data[i].created_at, description: data[i].alt_description, updated_at: data[i].updated_at,
			height: data[i].height, width: data[i].width });

		anchorEl.href = `detail.html?${params.toString()}`;

		const imgEl = document.createElement("img");
		imgEl.src = `${data[i].urls.small}`
		imgEl.alt = 'fox'

		anchorEl.appendChild(imgEl);

		const btnContainer = document.createElement("div");
		btnContainer.classList.add("btn-container");

		const btnEl = document.createElement("button");
		btnEl.type = "button"
		btnEl.classList.add("btn");
		btnEl.id = "download"

		btnEl.addEventListener("click", () => {
			const link = document.createElement("a");
			link.href = `${data[i].links.download}`;
			link.download = `${data[i].urls.small}`;
			link.click();
		});


		btnContainer.appendChild(btnEl);

		const iconEl = document.createElement("i");
		iconEl.classList.add("fas", "fa-arrow-down")

		btnEl.appendChild(iconEl);
	
		cardEl.appendChild(anchorEl);
		cardEl.appendChild(btnContainer);
		containerEl.appendChild(cardEl);
	}
}
