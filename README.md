# GameDrop - PC Game Deals

A small PC game deals browser built with HTML, CSS and JavaScript for the Silvertree Education Developer Accelerator entry assessment.

## Features

- Displays all eight games from the supplied data.
- Identifies games on sale when `salePrice` is lower than `normalPrice`.
- Shows the normal price for every game.
- Shows the sale price and an `ON SALE` label only for discounted games.
- Calculates whole-number discounts.
- Finds the cheapest game using its current price.
- Searches titles without case sensitivity.
- Includes live search and a sale-only filter.

## Project files

- `index.html` - page structure.
- `styles.css` - custom layout, colours and responsive styling.
- `app.js` - Part A functions and page behaviour.
- `deals.json` - data supplied in the assessment.
- `PART-D.md` - draft write-up.
- `ASSUMPTIONS.md` - assumptions.
- `TEST-CASES.md` - manual checks.

## How to run

You need a modern browser and Python 3 for the local server.

1. Extract the ZIP file.
2. Open a terminal in the `pc-game-deals` folder.
3. Run `python -m http.server 8000`. On some Windows computers use `py -m http.server 8000`.
4. Open `http://localhost:8000` in your browser.
5. Press `Ctrl + C` in the terminal to stop the server.

The local server is needed because the page loads `deals.json` using JavaScript `fetch()`. Opening the HTML file directly may prevent the browser from loading the JSON.

## Implementation notes

I used functions, arrays, conditions, loops and array methods such as `filter()` and `forEach()`. I kept the code in plain JavaScript so the main steps are easy to follow. Game cards are created using DOM methods and `textContent`. The data file is checked before it is displayed.

The optional CheapShark API integration has not been added. This version uses the fixed dataset in the assessment.

Before submitting, run through `TEST-CASES.md` and personalise `PART-D.md` to accurately describe your own process, resources and time spent.
