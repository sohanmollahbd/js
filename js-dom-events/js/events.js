//option : 1. directly set on the html element
//<button onclick="document.body.style.backgroundColor ='yellow'">Make yellow</button>



                           // we will use this : IMPORTANT
// Option 2: add onclick function  
//<button onclick="makeRed()">Make red</button>

function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3:

const makeBLueButton = document.getElementById("make-blue");
makeBLueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//option- 3 another:
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

//option - 4:

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//option - 4:another

const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});




                     // IMPORTANT : We will use this sometimes
//option - 4: final 

// document.getElementById('make-goldenrod').addEventListener('click',function(){})
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
