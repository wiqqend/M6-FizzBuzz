// TODO: Define constants for the form and the result display area
const userinput = document.getElementById('numberInput');
const submit = document.getElementById('submitBtn');
const result = document.getElementById('result');
// TODO: Add the first line of the event listener to handle form submission
submit.addEventListener('click', function(event) {
    event.preventDefault();

    // TODO: Get the number from the form input
    let output = Number(userinput.value);
    // TODO: Write FizzBuzz logic here
    console.log(output);
    if (output % 15 === 0) {
        result.textContent = "FizzBuzz";
    }
    else if (output % 3 === 0) {
        result.textContent = "Fizz";
    }
    else if (output % 5 === 0) {
        result.textContent = "Buzz";
    }
    else if (isNaN(output)) {
        result.textContent = "Enter a number";
    }
    else {
        result.textContent = output;
    }
});
// If divisible by both 3 and 5, set the output to "FizzBuzz"
// If divisible by 3, set the output to "Fizz"
// If divisible by 5, set the output to "Buzz"
// Otherwise, set the output to the number itself

// Display the result on the page