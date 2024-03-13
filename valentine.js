let no = document.querySelector("#no");
let t1 = document.querySelector("#t1");

var textArray = [
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You migth regret this!",
  "Give it another thought!",
  "Are you absolutely certain!",
  "Think could be a mistake",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Would you reconsider?",
  "Is that you final answer?",
  "You breaking my heart :(",
];


var currentIndex = 0;

    function changeText() {
      var t1 = document.getElementById("t1");

      if (currentIndex < textArray.length - 1) {
        // If it's not the last line, update the text as usual
        t1.innerText = textArray[currentIndex];
        // Increment the index for the next click
        currentIndex = (currentIndex + 1) % textArray.length;
      } else {
        // If it's the last line, remove all content and display an image
        document.body.innerHTML = '';

        // Create and append an image element
        var image = document.createElement('img');
        image.src = 'b2.gif'; // Replace with the path to your image
        image.style.width = '600px'; // Set the width to 100% of the container
        image.style.height = '600px'; // Maintain the aspect ratio
        image.style.marginLeft="500px";
        document.body.appendChild(image);
      }
    }

    function changeNoText() {
      var t1 = document.getElementById("#t1");
      t1.innerText = "Are you sure?";
    }



let teddy = document.querySelector("#teddy");
let text = document.querySelector("#text");
let yay = document.querySelector("#yay");

let yes = document.querySelector("#yes");
let kiss = document.querySelector("#kiss");
yes.addEventListener("click",()=>{
  teddy.style.display="none";
  text.style.display="none";
  yes.style.display="none";
  no.style.display="none";
  kiss.style.display="block";
  yay.style.display="block";

})
