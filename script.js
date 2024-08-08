console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let hbutton = document.querySelector("#helloButton")
console.log(hbutton)
// Select the empty p tag under that button
let emptyp = document.querySelector("#helloText")
console.log(emptyp)
// Add an event listener to the hello button such that when it's clicked, the p tag text says "Hello"
hbutton.addEventListener("click", function (event){
  emptyp.textContent = "Hello!"
})


// Task 2: All caps button flow
// Implement the DOM manipulation code flow such that when you click the all caps button, the text below becomes all caps (i.e. "THERE'S NO NEED TO SHOUT")
// Make sure to add whatever IDs/classes you need to select the necessary elements
let allC = document.querySelector("#ALLc")
let pTag = document.querySelector("#shout")

allC.addEventListener("click", function(event){
  pTag.textContent = pTag.textContent.toUpperCase()
})


// Task 3: Dog image flow
// Implement the DOM manipulation code flow such that when your mouse is over the dog image, it shows happy-dog.jpeg and when it is off the dog image, it shows sad-dog.jpeg.
// Make sure to add whatever IDs/classes you need to select the necessary elements
let sadDog = document.querySelector("#sad")

sadDog.addEventListener("mouseover", function (event){
sadDog.src = "happy-dog.jpeg"
})

sadDog.addEventListener("mouseout", function(event){
 sadDog.src = "sad-dog.jpeg"
})


// Task 4: Name input flow
// Implement the DOM manipulation code flow such that when you click the submit button, you display "Nice to meet you " with the value typed into the input field
// Make sure to add whatever IDs/classes you need to select the necessary elements



