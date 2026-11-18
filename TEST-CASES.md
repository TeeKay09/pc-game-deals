# Manual test cases

Run the project using the README instructions, then check these results.

| Test | Action | Expected result |
|---|---|---|
| Initial page | Open the page | Eight games appear |
| Sale count | Check the summary | Six games are on sale |
| Equal prices | Find Stardew Valley | No sale tag or sale price |
| Equal prices | Find Terraria | No sale tag or sale price |
| Cheapest game | Check the summary | R0.99 |
| Search | Enter `hol` | Hollow Knight appears |
| Case-insensitive search | Enter `HADES` | Hades appears |
| Sale filter | Tick sale-only | Stardew Valley and Terraria disappear |
| Search and filter | Search `cel` with sale-only on | Celeste appears |
| No results | Search `not-a-game` | Empty-state message appears |
| Clear search | Clear the search box | Matching list returns |

## Function examples

After the data has loaded, the functions can be checked in the browser developer console:

- `getGamesOnSale(games)` should return six games.
- `calculateDiscount(games[0])` should return `50` for Hollow Knight.
- `getCheapestGame(games)` should return Portal 2.
- `searchGames(games, "hol")` should return Hollow Knight.

These are manual checks, not an automated test suite.
