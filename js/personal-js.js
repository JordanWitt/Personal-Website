//grabbing the ids for the event listener function on my project display
let jordanImg = document.getElementById("jordan");
let projectOne = document.getElementById("project-one");
let projectTwo = document.getElementById("project-two");
let projectThree = document.getElementById("project-three");
let projectFour = document.getElementById("project-four");
let projectFive = document.getElementById("project-five");
let projectSix = document.getElementById("project-six");
let projectDisplay = document.getElementById("project-display");

//separate grabs
let paragraghOne = document.getElementById("paragraph-one");
let paragraghTwo = document.getElementById("paragraph-two");
let paragraghThree = document.getElementById("paragraph-three");


//EVENT LISTENERS FOR HOME PAGE
jordanImg.addEventListener("mouseover", function (){
    projectDisplay.src = "images/jordan.jpeg";
    paragraghOne.innerText = "Howdy,"
    paragraghTwo.innerText = " First off my name is Jordan and here is a lil' bit about myself: \n\n I'll try my best to keep this short. I struggled for many years trying to find a career path that I felt best suit me. I like a little bit of art, a little bit of logic..and..BOOM...coding. That made it sound simple...it wasn't. I was recommended a bootcamp by a friend and before you know it I was coding away with Codeup(the bootcamp). I never thought I could love and hate doing something simultaneously but here we are! With coding I am able to satisfy my artistic needs with front-end development as well as my logical needs i.e: problem solving and debugging; the best of both worlds. I could write more but for the sake of keeping it short I'll just end it here. Enjoy!"
    paragraghThree.innerText = "Fun Facts:\n\n" + "1. My favorite color is yellow\n" + "2. I am obsessed with Panda Bears\n" + "3. I can't stand onions(I tried, I promise!)"
});
projectOne.addEventListener("mouseover", function (){
    projectDisplay.src = "images/movie-app.jpg";
    paragraghOne.innerText = "Movie App Project:"
    paragraghTwo.innerText ="This was our first introduction into using apis and creating fetch requests\n\n 1. I created a GitHub organization and created a repository to put our code in there.\n\n 2. Used my own remixed URL to fetch results inside my project to perform RESTful API requests\n\n 3. Utilized CRUD (Create, Read, Update, Delete)\n\n 4. Acquired new CSS and HTML techniques"
    paragraghThree.innerText = "Pros:\n 1. More Work with Paired Programming\n 2. Successfully performing API requests\n 3. Make a full front-end web application\n\n Cons:\n 1. Features need work/updated\n 2. Scheduling conflicts and git conflicts"
});
projectTwo.addEventListener("mouseover", function (){
    projectDisplay.src = "images/8-bit-brew-final.jpg";
});
projectThree.addEventListener("mouseover", function (){
    projectDisplay.src = "images/adlister.jpg";
});
projectFour.addEventListener("mouseover", function (){
    projectDisplay.src = "images/database.jpg";
});
projectFive.addEventListener("mouseover", function (){
    projectDisplay.src = "/images/contact-manager.jpg";
})


//API FOR MARQUEE TO DISPLAY FACTS
let factsApi = 'https://buttoned-awake-trumpet.glitch.me/jokes';
let container = document.getElementById("marqueeShow")
function getJokes() {
    fetch(factsApi)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach( function (fact) {
                container.innerHTML = `<div class="marquee" id="marqueeShow">\n` +
                    `    <span id="marqueeText">${fact.joke}</span>\n` +
                    `</div>`;
            })
        });
}
getJokes();
