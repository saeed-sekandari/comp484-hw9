# COMP 484 Homework 9

## JavaScript Built-In Objects

This webpage demonstrates JavaScript running in the browser using an external
`script.js` file.

## Required Features

- Current date formatting with the `Date` object
- Number conversion with `Number()`
- Number validation with `Number.isNaN()` and `Number.isInteger()`
- Arithmetic calculations using addition, multiplication, and division
- Currency formatting with `toFixed(2)`
- Conditional messages using `if/else` statements
- Results displayed directly on the webpage using the DOM

## Built-In Objects and Methods Used

- `Date`
- `Date.getMonth()`
- `Date.getDate()`
- `Date.getFullYear()`
- `Number()`
- `Number.isNaN()`
- `Number.isInteger()`
- `Number.parseInt()`
- `Number.parseFloat()`
- `String()`
- `String.padStart()`
- `Number.toFixed()`
- `typeof`
- `document.getElementById()`

## GitHub Pages

https://saeed-sekandari.github.io/comp484-hw9/

## GitHub Repository

https://github.com/saeed-sekandari/comp484-hw9

## Screenshot

[screenshot.png](screenshot.png)

## Reflection

The easiest part was creating the HTML sections and connecting the page to the external JavaScript file. The hardest part was formatting the date because JavaScript months begin at zero and the month and day need leading zeros. I learned that the `Date` object can provide the current month, day, and year. I learned that the `Number` object can convert strings, validate results, and compare different parsing methods. I also learned how JavaScript can insert calculated results and conditional messages directly into the webpage through the DOM.

## Extra Credit

This assignment includes all four extra-credit options. The `typeof` section identifies the types of five values. The parsing section compares `Number()`, `Number.parseInt()`, and `Number.parseFloat()` using the value `"42.75px"`; `Number()` returns `NaN`, `parseInt()` returns `42`, and `parseFloat()` returns `42.75`. The ternary operator displays a passing or not-passing message based on a score. The CSS file styles each section as a separate card or panel.

## Project Files

- `index.html` — webpage structure
- `script.js` — JavaScript calculations, objects, conditionals, and DOM output
- `style.css` — page styling and extra-credit card layout
- `screenshot.png` — screenshot of the finished webpage