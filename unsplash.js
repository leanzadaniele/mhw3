var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};


function onJson(json){
    const album = document.querySelector(".album");
    album.innerHTML = "";
    console.log(json);
    //console.log(json.total);
    let results = json.results;
    for(let i=0; i < json.total;i++){
        let link = document.createElement("a");
        link.href=results[i].urls.full;
        link.target="_blank";
        let img = document.createElement("img");
        img.src= results[i].urls.small;
        album.appendChild(link);
        link.appendChild(img);
    }
}

function onResponse(response){
    return response.json();
}

function onError(error){
    console.log("error: " + error)
}


function apiRestSearchImages(text){
    const encodedText = encodeURIComponent(text);
    const urlRequest = "https://api.unsplash.com/search/photos?per_page=30&query=" + encodedText + "&client_id=PzE5KZG0PwNUguSq4EQI7uYb2ZmIJUO9O5BFYWFbMmI";
    fetch(urlRequest,requestOptions).then(onResponse,onError).then(onJson);
    console.log("ricerco: " + text + ", url richiesta: " + urlRequest);
}


const searchBox = document.querySelector("#searchbox");
searchBox.addEventListener('keydown', search);

function search(event){
    console.log(event.key);
    if(event.key === "Enter"){
        let research = searchBox.value;
        apiRestSearchImages(research);
    }
}

apiRestSearchImages("places");