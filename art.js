let overlay1= document.querySelector(".overlay");
let overlay2= document.querySelector(".overlay-message");

function buildGallery(fileName, fileID, alt, title){
    return document.querySelector("#lightgallery").innerHTML+= `<div><img class="item" id="${fileID}" src="./images/art/${fileName}" onclick="lightRoom(this)" alt="${alt}"><p><em>${title}</em></p></div>`;
}

function overlay(){
    if (overlay1.style.opacity=="0"){
        // Show the overlay.
        overlay1.style.opacity= ".85";
        overlay2.style.opacity= "1";
        overlay1.style.zIndex = "1001";
        overlay2.style.zIndex = "1002";
    } else {
        overlay1.style.opacity= "0";
        overlay2.style.opacity= "0";
        overlay1.style.zIndex = "-1";
        overlay2.style.zIndex = "-2";

    }
}

function lightRoom(img){
    var imgsrc = document.getElementById(img.id).src;

    // If the lightroom is "hidden":
    //  Step 1: make the div have the image in it.
    //  Step 2: Unhide it.
    // if it's not hidden:
    //  hide it.
    overlay();
    setTimeout(function(){
        overlay2.innerHTML=`<div class="caption centeredcontent" onclick="overlay()"><p>${img.alt} <br/><span class="small"><em>Click anywhere to close.</em></span></p><img src="${imgsrc}" class="gallery centeredcontent"></div>`;
    }, 20);

}

window.onload= function(){
    buildGallery("mae.png", "mae", "Mae from my original series, Deebee's Inner Diary.", "Mae");
    buildGallery("bex_sketches.jpg", "bex", "Sketches of the rapper, Bexey Swan.", "Bexey");
    buildGallery("christmas1.jpg", "xmas", "Deebee and Ram from my original series, Deebee's Inner Diary.", "Deebee- Winter 2020");
    buildGallery("d-day.jpg", "dday", "2D and Murdoc from Gorillaz, with a creepy twist.", "Gorillaz- D-Day");
    buildGallery("2D_horror.jpg", "2Dproc", "2D from Gorillaz, drawn in procreate. His pose is meant to mimic Frankenstein.", "Horror Series- 2D");
    buildGallery("murdoc_bateman.jpg", "Murdoc", "Murdoc Niccals from Gorillaz, drawn in procreate. His pose is meant to mimic Patrick Bateman from American Psycho.", "Horror Series- Murdoc");
    buildGallery("grocerystore.jpg", "groc", "A liminal looking grocery store.", "Hey, did we get everything?");
    buildGallery("6lack_pinkph.jpg", "6lack", "The rapper, 6lack, in the music video The Pink Phantom.", "The Pink Phantom");
    buildGallery("bo-burnham.jpg", "boburnham", "Bo Burnham in his recent special, Inside. This is based on the song called Welcome to the Internet.", "Bo Burnham");
    buildGallery("2D2.jpg", "2Dsticker", "A sticker design of 2D from Gorillaz", "Sticker- 2D");
    buildGallery("murdoc2.jpg", "Murdocsticker", "A sticker design of Murdoc from Gorillaz", "Sticker- Murdoc");
    buildGallery("noodle2.jpg", "Noodlesticker", "A sticker design of Noodle from Gorillaz", "Sticker- Noodle");
    buildGallery("russ2.jpg", "Russsticker", "A sticker design of Russel from Gorillaz", "Sticker- Russel");
}
