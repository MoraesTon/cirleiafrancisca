const desktopBanner = document.querySelector("#desktop");
const mobileBanner = document.querySelector("#mobile");
let screenSize = window.screen.width;

function setBanner() {
    if(screenSize <= 500) {
        desktopBanner.classList.add("hide");
        mobileBanner.classList.remove("hide");
    } else if(screenSize > 500) {
        desktopBanner.classList.remove("hide");
        mobileBanner.classList.add("hide");
    } else {
        console.log("fine")
    }

    setBanner();
}

window.onchange = setBanner;

setBanner;