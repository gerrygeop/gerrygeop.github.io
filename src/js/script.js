const BASE_URL = 'https://gerrygeop.github.io/images-base/data.json';

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
    console.log('Fetch-Error :( ' + error);
}

function showCardItem(data){
    let listProject = "";
    data.images.forEach(image => {
        listProject += `
            <div class="card">
                <div class="card-header">
                    <h3>${image.name}</h3>
                </div>
    
                <img src="${image.pictureId}" alt="${image.name}" width="300">
    
                <div class="card-footer">
                    <a href="#">LIHAT</a>
                </div>
            </div>
        `;
    });

    document.getElementById('list-project').innerHTML = listProject;
}

fetch(BASE_URL)
    .then(status)
    .then(json)
    .then(data => {
        console.log(data.images);
        showCardItem(data);
    })
    .catch(error);