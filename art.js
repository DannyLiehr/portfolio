let overlay1= document.querySelector(".overlay");
let overlay2= document.querySelector(".overlay-message");

function buildGallery(fileName, fileID, alt, title){
    return document.querySelector("#lightgallery").innerHTML+= `<div><img class="item" id="${fileID}" src="./images/art/${fileName}" onclick="lightRoom(this)" alt="${alt}"><p><em>${title}</em></p></div>`;
}

function overlay(){
    if (overlay1.style.display=="none"){
        // Show the overlay.
        overlay1.style.display= "block";
        overlay2.style.display= "block";
    } else {
        overlay1.style.display= "none";
        overlay2.style.display= "none";
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
    overlay2.innerHTML=`<div class="caption" onclick="overlay()"><img src="${imgsrc}" class="gallery"><p>${img.alt}</p><p class="small"><em>Click anywhere to close.</em></p></div>`;

}

window.onload= function(){
    buildGallery("mae.jpg", "mae", "Mae from my original series, Deebee's Inner Diary.", "Mae");
    buildGallery("bex_sketches.jpg", "bex", "Sketches of the rapper, Bexey Swan.", "Bexey");
    buildGallery("christmas1.jpg", "xmas", "Deebee and Ram from my original series, Deebee's Inner Diary.", "Deebee- Happy Holidays 2020");
    buildGallery("d-day.jpg", "dday", "2D and Murdoc from Gorillaz, with a creepy twist.", "Gorillaz- D-Day");
    buildGallery("2d_horror.jpg", "2Dproc", "2D from Gorillaz, drawn in procreate. His pose is meant to mimic Frankenstein. Part of a horror poster series.", "Horror Series- 2D");
    buildGallery("murdoc_bateman.jpg", "Murdoc", "Murdoc Niccals from Gorillaz, drawn in procreate. His pose is meant to mimic Patrick Bateman from American Psycho. Part of a horror poster series.", "Horror Series- Murdoc");
    buildGallery("grocerystore.jpg", "groc", "A liminal looking grocery store.", "Hey, did we get everything?");
    buildGallery("6lack_pinkph.jpg", "6lack", "The rapper, 6lack, in the music video The Pink Phantom.", "The Pink Phantom");
    buildGallery("bo-burnham.jpg", "boburnham", "Bo Burnham in his recent special, Inside. This is based on the song called Welcome to the Internet.", "Bo Burnham")
}
