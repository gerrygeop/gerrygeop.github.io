const BASE_URL = "https://gerrygeop.github.io/images-base/data.json";

function status(response) {
	if (response.status !== 200) {
		console.log(`Ada Error: ${response.status}`);
		return Promise.reject(new Error(response.statusText));
	} else {
		return response;
	}
}

function json(response) {
	return response.json();
}

function error(error) {
	console.log("Fetch-Error :( " + error);
}

function showCardItem(data) {
	let listProject = "";

	const idsToShow = [18, 19, 20, 21, 22, 23]; // ID yang ingin ditampilkan
	const filteredData = data.images.filter((image) => idsToShow.includes(image.id));

	filteredData.reverse().forEach((image) => {
		listProject += `
            <a href="detail.html?id=${image.id}" class="hover:shadow-md hover:shadow-accent rounded-xl p-4">
                <div class="relative overflow-hidden rounded-xl w-full h-[250px]">
                    <img src="${image.pictureId}" alt="${image.name}" class="w-full h-full object-cover object-center rounded-xl transition-transform duration-300 transform ease-brand hover:scale-110">
                </div>

                <div class="mt-2 py-2">
                    <h3 class="font-mono text-soft-accent tracking-wide text-lg">${image.name}</h3>
                </div>
            </a>
        `;
	});

	document.getElementById("list-project").innerHTML = listProject;
}

fetch(BASE_URL)
	.then(status)
	.then(json)
	.then((data) => {
		console.log(data.images);
		showCardItem(data);
	})
	.catch(error);
