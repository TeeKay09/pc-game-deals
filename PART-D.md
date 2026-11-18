# Part D - Tell Us About It

**Personalise this draft before submitting.** Replace the bracketed sections with your actual experience. Do not claim to have used a resource or spent time that does not reflect what you did.

## Setup

I built the project using HTML, CSS and JavaScript. The game information is stored in a separate JSON file. To run the project, I open a terminal in the project folder and start a local server using `python -m http.server 8000` (or `py -m http.server 8000` on Windows). I then open `http://localhost:8000` in a browser.

## Choices

I chose plain HTML, CSS and JavaScript because the assessment allows these tools and I wanted to focus on programming fundamentals. I kept the game data in `deals.json` so it is separate from the page and JavaScript. I wrote small functions for checking sales, calculating discounts, finding the cheapest game and searching titles. I also attempted the optional live search and sale-only filter.

## Obstacles

One part I had to think about was which price counts as the current price. I followed the brief: use the sale price only when it is lower than the normal price. I also needed to run a local server so the browser could load the JSON data. I added basic checks for the data file so an error message appears if it cannot be loaded or has an unexpected format.

## Resources

I used the assessment brief and **[add the documentation, tutorials, AI tools or other resources you actually used]**.

## Time

The time I spent was approximately **[enter your actual time]**.

## Next time

If I had another day, I would add automated tests and explore the optional CheapShark API. I would also improve error handling and test the page on more browsers and screen sizes.
