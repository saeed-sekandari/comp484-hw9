// ========================================
// Part 1: Date Display
// ========================================

// Create a Date object for the current date.
const currentDate = new Date();

// Extract the month, day, and year.
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();

// Create the date in MM/DD/YYYY format.
const formattedDate = `${month}/${day}/${year}`;

// Display the date on the webpage.
document.getElementById("dateOutput").textContent =
  `Today is ${formattedDate}`;


// ========================================
// Part 2: Number Conversion and Validation
// ========================================

// Create four separate string values.
// These include valid numbers, a decimal, and an invalid value.
const firstValue = "42";
const secondValue = "19.75";
const thirdValue = "hello";
const fourthValue = "100";

// Convert each string into a number using Number().
const firstNumber = Number(firstValue);
const secondNumber = Number(secondValue);
const thirdNumber = Number(thirdValue);
const fourthNumber = Number(fourthValue);


// Create a result for each number test.
function createNumberTest(originalValue, convertedValue) {
  let validityMessage;
  let integerMessage;

  // Check whether the converted value is NaN.
  if (Number.isNaN(convertedValue)) {
    validityMessage = "This value is not a valid number.";
  } else {
    validityMessage = "This value is a valid number.";
  }

  // Check whether the converted value is an integer.
  if (Number.isInteger(convertedValue)) {
    integerMessage = "This value is an integer.";
  } else {
    integerMessage = "This value is not an integer.";
  }

  return `
    <article class="result-item">
      <p><strong>Original value:</strong> "${originalValue}"</p>
      <p><strong>Converted result:</strong> ${convertedValue}</p>
      <p><strong>isNaN:</strong> ${Number.isNaN(convertedValue)}</p>
      <p><strong>isInteger:</strong> ${Number.isInteger(convertedValue)}</p>
      <p>${validityMessage} ${integerMessage}</p>
    </article>
  `;
}


// Combine and display all four number tests.
// No arrays or loops are used.
document.getElementById("numberConversionOutput").innerHTML =
  createNumberTest(firstValue, firstNumber) +
  createNumberTest(secondValue, secondNumber) +
  createNumberTest(thirdValue, thirdNumber) +
  createNumberTest(fourthValue, fourthNumber);


// ========================================
// Part 3: Math and Number Formatting
// ========================================

// Create numeric values for a rental-car price calculation.
const carRentalPrice = 275.5;
const insurancePrice = 48.25;
const taxRate = 0.095;

// Perform arithmetic calculations.
const subtotal = carRentalPrice + insurancePrice;
const taxAmount = subtotal * taxRate;
const totalCost = subtotal + taxAmount;
const dailyAverage = totalCost / 3;

// Display formatted results using toFixed().
document.getElementById("mathOutput").innerHTML = `
  <p><strong>Car rental price:</strong> $${carRentalPrice.toFixed(2)}</p>
  <p><strong>Insurance price:</strong> $${insurancePrice.toFixed(2)}</p>
  <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
  <p><strong>Tax amount:</strong> $${taxAmount.toFixed(2)}</p>
  <p><strong>Total cost:</strong> $${totalCost.toFixed(2)}</p>
  <p><strong>Average cost per day:</strong> $${dailyAverage.toFixed(2)}</p>
`;


// ========================================
// Extra Credit 1: typeof
// ========================================

// Create five different types of values.
const textValue = "DriveEasy";
const numericValue = 484;
const booleanValue = true;
const undefinedValue = undefined;
const objectValue = { course: "COMP 484" };

// Identify the type of each value using typeof.
const textType = typeof textValue;
const numericType = typeof numericValue;
const booleanType = typeof booleanValue;
const undefinedType = typeof undefinedValue;
const objectType = typeof objectValue;


// ========================================
// Extra Credit 2: Parsing Comparison
// ========================================

// Compare Number(), parseInt(), and parseFloat().
const parsingValue = "42.75px";

const numberConversion = Number(parsingValue);
const integerConversion = Number.parseInt(parsingValue, 10);
const decimalConversion = Number.parseFloat(parsingValue);


// ========================================
// Extra Credit 3: Ternary Operator
// ========================================

// Use a ternary operator to determine whether the score is passing.
const passingScore = 85;
const passingMessage =
  passingScore >= 70 ? "Passing" : "Not passing";


// Display all extra-credit results on the webpage.
document.getElementById("extraCreditOutput").innerHTML = `
  <h3>Typeof Results</h3>
  <p><strong>textValue:</strong> ${textType}</p>
  <p><strong>numericValue:</strong> ${numericType}</p>
  <p><strong>booleanValue:</strong> ${booleanType}</p>
  <p><strong>undefinedValue:</strong> ${undefinedType}</p>
  <p><strong>objectValue:</strong> ${objectType}</p>

  <h3>Parsing Comparison</h3>
  <p><strong>Original value:</strong> "${parsingValue}"</p>
  <p><strong>Number():</strong> ${numberConversion}</p>
  <p><strong>Number.parseInt():</strong> ${integerConversion}</p>
  <p><strong>Number.parseFloat():</strong> ${decimalConversion}</p>

  <h3>Ternary Pass/Fail Result</h3>
  <p><strong>Score:</strong> ${passingScore}</p>
  <p><strong>Result:</strong> ${passingMessage}</p>
`;