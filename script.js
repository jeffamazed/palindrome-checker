// Constants

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");

// Functions

const cleanInputString = (str) => {
  const regex = /[\W_]/g;
  return str.toLowerCase().replace(regex, "");
};

const inputStringReversal = (str) => str.split("").reverse().join("");

const palindromeChecker = (str) => {
  const cleanStr = cleanInputString(str);
  const reversedStr = inputStringReversal(cleanStr);
  return cleanStr === reversedStr;
};

// Interactivity

checkButton.addEventListener("click", () => {
  const inputValue = textInput.value.trim();
  if (!inputValue) {
    alert("Please input a value");
    return;
  }
  
  resultText.style.display = "block";
  resultText.innerText = palindromeChecker(inputValue) 
  ? `${inputValue} is a palindrome.` 
  : `${inputValue} is not a palindrome.`;
  setTimeout(() => {
    resultText.style.display = "none";
  }, 5000);
});

textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkButton.click();
  }
});
