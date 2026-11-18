/*
  GameDrop - PC Game Deals
  Small functions for the assessment's Part A requirements.
*/

// A game is on sale when its sale price is lower than its normal price.
function isGameOnSale(game) {
  return game.salePrice < game.normalPrice;
}

// Return only the games that are on sale.
function getGamesOnSale(games) {
  return games.filter(function (game) {
    return isGameOnSale(game);
  });
}

// Calculate the discount and round it to a whole percentage.
function calculateDiscount(game) {
  if (game.normalPrice <= 0) {
    return 0;
  }
  var discount = ((game.normalPrice - game.salePrice) / game.normalPrice) * 100;
  return Math.round(discount);
}

// Return the price a customer would currently pay.
function getCurrentPrice(game) {
  if (isGameOnSale(game)) {
    return game.salePrice;
  }
  return game.normalPrice;
}

// Find the cheapest game. Return null if the list is empty.
function getCheapestGame(games) {
  if (games.length === 0) {
    return null;
  }

  var cheapestGame = games[0];
  for (var i = 1; i < games.length; i++) {
    if (getCurrentPrice(games[i]) < getCurrentPrice(cheapestGame)) {
      cheapestGame = games[i];
    }
  }
  return cheapestGame;
}

// Search game titles without case sensitivity.
function searchGames(games, searchWord) {
  var word = searchWord.trim().toLowerCase();
  if (word === "") {
    return games;
  }

  return games.filter(function (game) {
    return game.title.toLowerCase().includes(word);
  });
}

function formatRand(amount) {
  return "R" + amount.toFixed(2);
}

// Basic checks to make sure the JSON contains the fields we use.
function isValidGame(game) {
  return game &&
    typeof game.title === "string" &&
    typeof game.store === "string" &&
    typeof game.normalPrice === "number" &&
    typeof game.salePrice === "number" &&
    game.normalPrice >= 0 &&
    game.salePrice >= 0;
}

function renderGames(games) {
  var gameList = document.getElementById("game-list");
  var emptyState = document.getElementById("empty-state");
  var resultsLabel = document.getElementById("results-label");

  gameList.innerHTML = "";
  resultsLabel.textContent = games.length + (games.length === 1 ? " game" : " games");
  emptyState.hidden = games.length !== 0;

  games.forEach(function (game) {
    var onSale = isGameOnSale(game);
    var card = document.createElement("article");
    card.className = "game-card";

    var info = document.createElement("div");
    info.className = "game-info";

    var titleRow = document.createElement("div");
    titleRow.className = "title-row";

    var title = document.createElement("span");
    title.className = "game-title";
    title.textContent = game.title;
    titleRow.appendChild(title);

    if (onSale) {
      var tag = document.createElement("span");
      tag.className = "sale-tag";
      tag.textContent = "ON SALE";
      titleRow.appendChild(tag);
    }

    var store = document.createElement("div");
    store.className = "store";
    store.textContent = "Available on " + game.store;
    info.appendChild(titleRow);
    info.appendChild(store);

    var prices = document.createElement("div");
    prices.className = "prices";

    var normal = document.createElement("span");
    normal.className = onSale ? "normal-price discounted" : "normal-price";
    normal.textContent = "Normal: " + formatRand(game.normalPrice);
    prices.appendChild(normal);

    // Only display the sale price when the game is discounted.
    if (onSale) {
      var current = document.createElement("strong");
      current.className = "current-price";
      current.textContent = formatRand(game.salePrice);
      prices.appendChild(current);

      var saving = document.createElement("span");
      saving.className = "saving";
      saving.textContent = calculateDiscount(game) + "% off";
      prices.appendChild(saving);
    }

    card.appendChild(info);
    card.appendChild(prices);
    gameList.appendChild(card);
  });
}

function updateDisplayedGames(allGames) {
  var searchWord = document.getElementById("search-input").value;
  var saleOnly = document.getElementById("sale-only").checked;
  var matchingGames = searchGames(allGames, searchWord);

  if (saleOnly) {
    matchingGames = getGamesOnSale(matchingGames);
  }
  renderGames(matchingGames);
}

function startApp() {
  fetch("deals.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("The deals file could not be loaded.");
      }
      return response.json();
    })
    .then(function (games) {
      if (!Array.isArray(games) || !games.every(isValidGame)) {
        throw new Error("The deals file contains data in an unexpected format.");
      }

      var saleGames = getGamesOnSale(games);
      var cheapestGame = getCheapestGame(games);

      document.getElementById("total-count").textContent = games.length;
      document.getElementById("sale-count").textContent = saleGames.length;

      if (cheapestGame !== null) {
        document.getElementById("cheapest-price").textContent =
          formatRand(getCurrentPrice(cheapestGame));
      }

      document.getElementById("search-input").addEventListener("input", function () {
        updateDisplayedGames(games);
      });
      document.getElementById("sale-only").addEventListener("change", function () {
        updateDisplayedGames(games);
      });

      renderGames(games);
    })
    .catch(function (error) {
      console.error(error);
      document.getElementById("results-label").textContent = "Unable to load games";
      document.getElementById("error-message").textContent =
        error.message + " Run this project using a local web server.";
      document.getElementById("error-message").hidden = false;
    });
}

startApp();
