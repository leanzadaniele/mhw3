const bgDiv = document.querySelector(".bgDiv");
const showBGs = document.querySelector(".info").querySelector("span");
showBGs.addEventListener("click",openBackgroundsDiv);
const closeBtn = bgDiv.querySelector(".close");
closeBtn.addEventListener("click",closeBackgroundsDiv);


//console.log(showBGs.parentElement.parentElement);


function openBackgroundsDiv(){
    bgDiv.classList.toggle("opened");
    showBGs.parentElement.parentElement.classList.toggle("hidden");
    const modale = document.querySelector("#modal");
    modale.classList.add("hiddenModal");
    document.querySelector("body").classList.add("noScroll");
}

function closeBackgroundsDiv(){
    bgDiv.classList.toggle("opened");
    showBGs.parentElement.parentElement.classList.toggle("hidden");

    document.querySelector("body").classList.remove("noScroll");
}
