const parkImage = document.querySelector("#selected-park");
const parks = document.querySelectorAll(".park");
parks.forEach(park => park.addEventListener('click', onParkClick));

function onParkClick(e) {
    const newImage = `img/${e.target.id}.jpg`;
    parkImage.src = newImage;
    parkImage.alt = e.target.innerText;

    for (let park of parks) {
        if (park.classList.contains("highlighted")) {
            park.classList.remove("highlighted");
        }
    }
    this.classList.add("highlighted");
}

