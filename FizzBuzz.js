// TODO: Define constants for the form and the result display area
let userinput = document.getElementById('numberInput');
let submit = document.getElementById('submitBtn');
let result = document.getElementById('result');
// TODO: Add the first line of the event listener to handle form submission
submit.addEventListener('click', submitfunction);
function submitfunction(event) {
    event.preventDefault();

// TODO: Get the number from the form input
let inputnum = Number(userinput.value);
// TODO: Write FizzBuzz logic here
if (inputnum % 15 === 0) {
    output = "FizzBuzz";
}
if (inputnum % 3 === 0) {
    output = "Fizz";
}
if (inputnum % 5 === 0) {
    output = "Buzz";
}
else {
    output = inputnum;

}


}
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page
result.textContent = output;
