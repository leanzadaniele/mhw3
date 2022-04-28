// Endpoints
const EndopointToken = 'https://api.dailymotion.com/oauth/token';
const Endpoint = 'https://api.dailymotion.com/video/';


// token_access
    let token = undefined;

    function getToken(json) {
        console.log(json);
        token = json.access_token;
        console.log('token: ' + token);
    }

    function onTokenResponse(response) {
        console.log(response);
        return response.json();
    }

fetch(EndopointToken,
    {
        method: "post",
        body: 'grant_type=client_credentials&client_id=c01fdf78d84734fdf85c&client_secret=8476837fe7e6049e16c9887bf28ab6cef731d018',
        headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
    }
).then(onTokenResponse).then(getToken);


function onResponseDAILY(response) {
    //console.log(response);
    return response.json();
}

function onJsonDAILY(json) {
    if (!json)
        console.log(' Documento vuoto... :C  ');
    else {
        console.log(json.url);
        const aVidLink = document.querySelector(".videoLink a");
        aVidLink.href=json.url;
        aVidLink.textContent = json.title;

    }
}

function testFetch(event) {
    // richiedo l'accesso
    fetch(Endpoint + event.currentTarget.dataset.videoId + '?fields=title,url',
        {
            headers:
                {
                    'Authorization': 'Bearer ' + token
                }
        }).then(onResponseDAILY).then(onJsonDAILY);
}

function openModal(event){
    modal.classList.toggle("hiddenModal");
    document.querySelector("body").classList.add("noScroll");
    const imgModal = document.querySelector(".displayer img");
    imgModal.src=event.currentTarget.src;
    const titleModal = document.querySelector(".placeDetails div h2");
    console.log(titleModal.textContent);
    titleModal.textContent=event.currentTarget.dataset.placeName;
}

function closeModal(event){
    modal.classList.toggle("hiddenModal");
    document.querySelector("body").classList.remove("noScroll");
}


const btnCloseModal = document.querySelector("#close");
btnCloseModal.addEventListener("click",closeModal);

const modal = document.querySelector("#modal");
const imagesClickable = document.querySelectorAll('.details img');
for(let img of imagesClickable) {
    img.addEventListener('click', testFetch);
    img.addEventListener('click', openModal);
}


