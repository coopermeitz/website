# card-gallery

## Methods

<!-- @vuese:card-gallery:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|swapIndex|Swaps the current index value so a new card can be shown. The method also handles cases where the index would be out of bounds with the array. -1 denotes moving left one card and +1 denotes moving right one card. Should only be called with units of length 1 (to avoid skipping a card) but can technically be used with any number.|-|
|handleArrowClick|Event listener for 'keydown' events for the left and right arrow keys. Allows the keys to simulate button presses of the left and right arrows, respectively. A left arrow click will move the gallery one card to the left and a right arrow click will move the gallery one card to the right.|-|
|mod|Helper method for handling mod calculations of potentially negative numbers. Returns the positive value that is a positive, valid index of the array. of the array of cards.|-|

<!-- @vuese:card-gallery:methods:end -->


