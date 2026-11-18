# Assumptions

1. A game is on sale only when its `salePrice` is strictly lower than its `normalPrice`, following the assessment definition.
2. The current price is the sale price when a game is on sale; otherwise it is the normal price.
3. Discount percentages are rounded to the nearest whole number using `Math.round()`.
4. If two games have the same lowest current price, the first one in the supplied list is returned.
5. Search checks the game title only, ignores capitalisation and trims spaces around the search text.
6. Prices are displayed in Rand with two decimal places.
7. The supplied data is treated as the source of truth. The optional CheapShark API has not been added.
8. The assessment does not prescribe a visual design, so a simple responsive layout and custom green colour scheme were chosen.
9. If the JSON file cannot be loaded or does not contain the expected basic data types, the page displays an error message.
