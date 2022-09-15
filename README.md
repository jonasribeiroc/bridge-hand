# Bridge Hand Challenge 
The goal of this challenge is to produce a beautiful and functional web app that shuffles four hands and determines the number of points a hand is worth in bridge.

## Brief
### Intro 
In bridge a hand may have 13 cards, spread across four suits. The four suits are hearts, spades, clubs and diamonds. The royal cards and aces are worth points during bidding. An Ace is worth four points, a King is worth three points, a Queen is worth two, and a Jack is worth one. Other cards are not worth points (but are used in real bidding to determine the contract). 

The task is to generate four face up, hands identifiably belonging to four players (N, E, S, W). Then to calculate the total points in each hand. (Internally to your app, it should be possible to tell points by suit.) 



### Extra information: 
- The four players are named after the directions: north and south, east and west. Opposite directions play together, but points are calculated per hand.
- Cards are sorted by suit (Spade, Heart, Diamond, Club), then by number, (A, K, Q, J, 10, 9...). 
- The extension exercise for the coding interview requires that the points by suit are available in your app, even if not shown to the user.
- Bridge is played with a standard deck of cards. It has 52 cards, one for every number in every suit.

 
## Assessment criteria 
We will measure the app on the quality of its code, the visual quality of the app and the way you approach testing. We do not require server-side code, and will not assess the quality of your build / compile stack or the testing library you use. Use the tooling you are most comfortable with. Good readmes and easy setup are appreciated.

## Install
```code
  yarn install
```

## Run
```code
  yarn start
```
- [http://localhost:3000/](http://localhost:3000/)

## Author

- [@jonasribeiroc](https://www.github.com/jonasribeiroc)