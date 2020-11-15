// Coffee grinds
// var button = document.getElementById("a");
// var close = document.querySelector(".closecoffee");
// close.addEventListener("click", closeCoffeeTip);
// button.addEventListener("click", displayCoffeeTip);

// function displayCoffeeTip() {
//     document.getElementById("coffee-grinds").classList.add("show");
//     document.getElementById("coffee-gif").classList.add("show");
//     console.log(button);
// }

// function closeCoffeeTip() {
//     document.getElementById("coffee-grinds").classList.remove("show");
// }

var button = document.getElementById("a");
var close = document.querySelector(".closecoffee");
function toggleCoffeeTip() {
    document.getElementById("coffee-grinds").classList.toggle("tips-window");
    document.getElementById("coffee-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleCoffeeTip);
button.addEventListener("click", toggleCoffeeTip);


// Lemon peel
var button = document.getElementById("b");
var close = document.querySelector(".closelemon");
function toggleLemonTip() {
    document.getElementById("lemon-peel").classList.toggle("tips-window");
    document.getElementById("lemon-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleLemonTip);
button.addEventListener("click", toggleLemonTip);

// Tea bags
var button = document.getElementById("c");
var close = document.querySelector(".closetea");
function toggleTeaTip() {
    document.getElementById("tea-bags").classList.toggle("tips-window");
    document.getElementById("tea-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleTeaTip);
button.addEventListener("click", toggleTeaTip);

// Olive stones
var button = document.getElementById("d");
var close = document.querySelector(".closeolive");
function toggleOliveTip() {
    document.getElementById("olive-stones").classList.toggle("tips-window");
    document.getElementById("olive-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleOliveTip);
button.addEventListener("click", toggleOliveTip);

// Cheese whey
var button = document.getElementById("e");
var close = document.querySelector(".closecheese");
function toggleCheeseTip() {
    document.getElementById("cheese-whey").classList.toggle("tips-window");
    document.getElementById("cheese-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleCheeseTip);
button.addEventListener("click", toggleCheeseTip);

// Apple scraps
var button = document.getElementById("f");
var close = document.querySelector(".closeapple");
function toggleAppleTip() {
    document.getElementById("apple-scraps").classList.toggle("tips-window");
    document.getElementById("apple-gif").classList.toggle("gif-window")
    console.log(button);
}
close.addEventListener("click", toggleAppleTip);
button.addEventListener("click", toggleAppleTip);

// Onion skins
var button = document.getElementById("g");
var close = document.querySelector(".closeonion");
function toggleOnionTip() {
    document.getElementById("onion-skins").classList.toggle("tips-window");
    document.getElementById("onion-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleOnionTip);
button.addEventListener("click", toggleOnionTip);

// Stale bread
var button = document.getElementById("h");
var close = document.querySelector(".closebread");
function toggleBreadTip() {
    document.getElementById("stale-bread").classList.toggle("tips-window");
    document.getElementById("bread-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleBreadTip);
button.addEventListener("click", toggleBreadTip);

// Herb stalks
var button = document.getElementById("i");
var close = document.querySelector(".closeherb");
function toggleHerbTip() {
    document.getElementById("herb-stalks").classList.toggle("tips-window");
    document.getElementById("herb-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleHerbTip);
button.addEventListener("click", toggleHerbTip);

// Banana peel
var button = document.getElementById("j");
var close = document.querySelector(".closebanana");
function toggleBananaTip() {
    document.getElementById("banana-peel").classList.toggle("tips-window");
    document.getElementById("banana-gif").classList.toggle("gif-window");
    console.log(button);
}
close.addEventListener("click", toggleBananaTip);
button.addEventListener("click", toggleBananaTip);

// Trash
var button = document.getElementById("k");
var close = document.querySelector(".closetrash");
function toggleTrashTip() {
    document.getElementById("trashcan").classList.toggle("tips-window");
    console.log(button);
}
close.addEventListener("click", toggleTrashTip);
button.addEventListener("click", toggleTrashTip);

//  Default windows
var button = document.getElementById("start");
var close = document.querySelector(".closestart");
function toggleStartWindows() {
    document.getElementById("warning-window").classList.toggle("hidden");
    document.getElementById("error-window").classList.toggle("hidden");
    document.getElementById("hello-gif").classList.toggle("hidden");
    console.log(button);
}
close.addEventListener("click", toggleStartWindows);
button.addEventListener("click", toggleStartWindows);

// Contact window
var button = document.getElementById("contact");
var close = document.querySelector(".closecontact");
function toggleContactWindow() {
    document.getElementById("contact-window").classList.toggle("tips-window");
    console.log(button);
}
close.addEventListener("click", toggleContactWindow);
button.addEventListener("click", toggleContactWindow);

//  Randomize array
var button = document.getElementById("randomize");
function randomizeTip() {
    let tipsArray = Array.from(document.getElementsByClassName("tips"));
    let gifArray = Array.from(document.getElementsByClassName("gifs"));
    let randomNumber = Math.floor(Math.random() * (tipsArray.length - 0));
    tipsArray[randomNumber].classList.toggle("tips-window");
    gifArray[randomNumber].classList.toggle("gif-window");
}
button.addEventListener("click", randomizeTip);
