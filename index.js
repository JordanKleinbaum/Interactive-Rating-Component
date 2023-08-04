//VARIABLES

//Puts all of the main container div in a variable
const mainContainer = document.querySelector(".main-container");

//Puts all of the thank you container div in a variable
const thanksContainer = document.querySelector(".thank-you");

//Puts the submit button in a variable
const submitButton = document.getElementById("submit");

//Puts the rate again button in a variable
const rateAgain = document.getElementById("rate-again");

//Puts the rating span in a variable
const rating = document.getElementById("rating");

//Puts all the buttons with a class of "btn" in a variable
const rates = document.querySelectorAll(".btn");
//____________________________________________________________________________
//FUNCTIONS

//Listening for an onCLick event
submitButton.addEventListener("click", () => {
  //Removes the class of "hidden" from the thank-you class
  thanksContainer.classList.remove("hidden");
  //Adds the display style of "none" to the main-container CSS
  mainContainer.style.display = "none";
});

//Listening for an onCLick event
rateAgain.addEventListener("click", () => {
  //Adds the class of "hidden" to the thank-you class
  thanksContainer.classList.add("hidden");
  //Adds the display style of "block" to the main-container CSS
  mainContainer.style.display = "block";
});

//Creates a for loop to iterate over each button that takes a variable called rate
rates.forEach((rate) => {
  //Listens for an onClick event
  rate.addEventListener("click", () => {
    //Assigns whatever the "rate" is (1-5), to the "rating" value aka the span
    rating.innerHTML = rate.innerHTML;
  });
});
