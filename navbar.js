// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var nav = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.style.position = "fixed";
          nav.style.top = 0;

  } else {
     nav.style.position = 'relative'; //fixed
            nav.style.top = 100;
  }
}


var splash = document.getElementById("splash");

//Please add splashes
var splashes = ["The not-official website!", "Steves!", "Games, Tuts, and more!", "Not made by Mojang", "Top Text", "(Wiki not by us)", "Pure fun!", "Sample Text", "Try it out today", "No cucumbers :(", "Super cool!", "Null", "Tips n Tricks", "Undefined", "Herobrine wuz here", "Entity303 sez hai", "Made with repl.it", "STEM rulez", "Dad joke here", "Kills 99.99% of germs", "Now with 1% more funny!", "Minecraft ≠ Uncool", "Always dig down", "As seen on YT", "Check out our games!", "hi.", "I'm out of ideas.", ":D :]", "Bej has bad hair", "Reeee", "No pressure, no diamonds", "EAT YOUR VEGGIES", "Arr matey", "*Minecraft music*", "Most coyotes are illiterate", "Gravity is a lie", "You're fired", "Come to papa!", "wHaT?", "The End?", "Colormatic!", "    ._.   " ,"yes", "NO", "egggg.ga", "Donka Tonka"];
//Please add splashes

var long = splashes.length;
splash.innerHTML = splashes[Math.floor(Math.random() * long)];

function loaded() {
  document.getElementById("loading").remove()
  document.querySelector("body").classList.remove("noscroll");
}