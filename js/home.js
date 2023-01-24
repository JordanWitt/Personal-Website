//PROJECT IN NAV GRABS
let jordanImg = document.getElementById("jordan");
let projectOne = document.getElementById("project-one");
let projectTwo = document.getElementById("project-two");
let projectThree = document.getElementById("project-three");
let projectFour = document.getElementById("project-four");
let projectFive = document.getElementById("project-five");
let projectSix = document.getElementById("project-six"); //not being used...YET
let projectDisplay = document.getElementById("project-display");

//PARAGRAPH GRABS
let paragraghOne = document.getElementById("paragraph-one");
let paragraghTwo = document.getElementById("paragraph-two");
let paragraghThree = document.getElementById("paragraph-three");

//STYLING CSS DARK MODE
let body = document.getElementById("body");
let border = document.getElementById("border");
let moon = document.getElementById("moon");
let marquee = document.getElementById("marqueeText");
let darkMode = false;


moon.addEventListener("click", function () {
    darkMode = !darkMode;
    if (darkMode) {
        body.classList.add("dark-mode");
        projectDisplay.classList.add("dark-mode-shadow");
        border.classList.add("dark-mode-border");
        projectOne.classList.add("dark-mode-a:hover")
        marquee.classList.add("dark-mode-marqueeText");
        moon.classList.add("dark-mode-moon");
    } else {
        body.classList.remove("dark-mode");
        projectDisplay.classList.remove("dark-mode-shadow");
        border.classList.remove("dark-mode-border");
        projectOne.classList.remove("dark-mode-a:hover")
        marquee.classList.remove("dark-mode-marqueeText");
        moon.classList.remove("dark-mode-moon");
    }
});

//EVENT LISTENERS FOR HOME PAGE
jordanImg.addEventListener("mouseover", function (){
    projectDisplay.src = "images/jordan.jpeg";
    paragraghOne.innerText = "Hello There,"
    paragraghTwo.innerText = " First off my name is Jordan and here is a lil' bit about myself: \n\n I'll try my best to keep this short. I struggled for many years trying to find a career path that I felt best suit me. I like a little bit of art, a little bit of logic..and..BOOM...coding. That made it sound simple...it wasn't. I was recommended a bootcamp by a friend and before you know it I was coding away with Codeup(the bootcamp). I never thought I could love and hate doing something simultaneously but here we are! With coding I am able to satisfy my artistic needs with front-end development as well as my logical needs i.e: problem solving and debugging; the best of both worlds. I could write more but for the sake of keeping it short I'll just end it here. Enjoy!"
    paragraghThree.innerText = "Fun Facts:\n\n" + "1. My favorite color is yellow\n" + "2. I am obsessed with Panda Bears\n" + "3. I can't stand onions(I tried, I promise!)"
});
projectOne.addEventListener("mouseover", function (){
    projectDisplay.src = "images/movie-app.jpg";
    paragraghOne.innerText = "Movie App Project:"
    paragraghTwo.innerText ="This was our first introduction into using apis and creating fetch requests\n\n 1. I created a GitHub organization and created a repository to put our code in there.\n\n 2. Used my own remixed URL to fetch results inside my project to perform RESTful API requests\n\n 3. Utilized CRUD (Create, Read, Update, Delete)\n\n 4. Acquired new CSS and HTML techniques"
    paragraghThree.innerText = "Pros:\n 1. More Work with Paired Programming\n 2. Successfully performing API requests\n 3. Make a full front-end web application\n\n Cons:\n 1. Features need work/updated\n 2. Scheduling conflicts and GitHub conflicts"
});
projectTwo.addEventListener("mouseover", function (){
    projectDisplay.src = "images/8-bit-brew-final.jpg";
    paragraghOne.innerText = "Coffee Project:"
    paragraghTwo.innerText = "Second paired programming projects\n Main focuses were bootstrap JavaScript functionality\n\n 1. Updated old HTML style and refactored tables\n\n2. Sorted coffees in ascending order\n\n3. Added search functionality"
    paragraghThree.innerText ="Pros:\n1. Paired programming and version control\n2. Understanding Bootstrap grid layout\n 3. Working with a partner\n\n Cons:\n 1. A lot of the functionality was there,\n so at the time it felt difficult to debug\n 2. Could have used an extra day or two\n tightening it up\n 3. Small GitHub conflicts"
});
projectThree.addEventListener("mouseover", function (){
    projectDisplay.src = "images/adlister.jpg";
    paragraghOne.innerText = "Ad-Lister Project:"
    paragraghTwo.innerText = "Back-end Application for creating and displaying ads\n\n1. Implement functionality that allows users to search through the ads in your database.\n2. Show user's ads on their profile page\n3. Allow users to update and delete ads\n4. Intended Redirects"
    paragraghThree.innerText ="Pros:\n 1. Working on a team of 3\n2. No merge conflicts on GitHub\n3. Completed a clean functioning website\n\nCons:\n 1. Took a while to understand all the moving pieces\n2. Could have used and extra day or 2 to complete \nall of the suggested functionality\n3. We were not using Spring Boot"
});
projectFour.addEventListener("mouseover", function (){
    projectDisplay.src = "images/database.jpg";
});
projectFive.addEventListener("mouseover", function (){
    projectDisplay.src = "/images/contact-manager.jpg";
})


//WELCOMING MARQUEE
let messages = ['WELCOME', 'HELLO', "BUENOS DIAS", 'HI', 'WELCOME BACK', "HOWDY", "BONJOUR", "WILLKOMMEN", "欢迎", "こんにちは", "안녕하세요"];
let counter = 0;
function updateMarquee() {
    let container = document.getElementById("marqueeText");
    container.innerHTML = messages[counter];
    counter = (counter + 1) % messages.length;
}
setInterval(updateMarquee, 1500);


//CURSOR
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('#circularCursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});

//HOVER SOUND
function playSoundHover() {
    let audio = new Audio("sounds/zapsplat_multimedia_button_click_007_53868.mp3");
    audio.play();
}
//CLICK SOUND


//CODEPEN EXAMPLE **** NOT MY CODE
//CURSOR FOUND ON https://github.com/tholman/cursor-effects
window.addEventListener('load', (event) => {
    new cursoreffects.fairyDustCursor({colors: ["rgb(255,31,127)", "rgb(255,169,255)", "rgb(248,60,255)"]});
});
