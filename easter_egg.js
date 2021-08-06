// Use localstorage for all this.

var startGame;


if (window.console) {
        //
        if (!(localStorage.getItem("startedGame"))){
            // console.log("Oh, hello there. Thanks for looking over this portfolio. Try not to break anything. But also, see if you can find Easter eggs.");
            console.log("Oh, hello there. Thanks for looking over this portfolio. Try not to break anything. But also, come back later for an easter egg hunt.");
        } else {
            console.log("Welcome back.")
        }
        localStorage.setItem("startedGame", "true");

        // console.log(`Type "seeAchievements();" to see what easter eggs you found.`);
        // console.log(`Of course, you COULD look over the js file this is from, but isn't it more fun to find all the secrets on your own?\n\nKind of like guerilla testing.`);
        console.log(`Stick with me. I'm gonna be adding easter eggs soon!`);
    };

function seeAchievements(){
    return console.log(`You haven't found anything yet.`);
}

function iterate(data, num){
    return console.log(`That magic doesn't work here, user.`);
}
