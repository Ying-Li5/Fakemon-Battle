# Fakèmon-Battle

## Inspiration

Growing up, I spent a lot of time playing Pokèmon on my DS (particularly HeartGold/SoulSilver) so I wanted to create something similar to the game.

Nintendo is currently remastering some of their Pokèmon game which is pretty nostaglic for me --> which brought me over to this.... Fakèmon (to avoid any copyright lol)

## Description

Fakèmon Battle is a milestone project that is mainly focused on web desgin. It contains: HTML & Web Acessibility, CSS & CSS Frameworks, User Experience & User Interface Design (UXUI), and Javascript & Front-End Web Development.

The purpose of this project was to take the lesson and acitvites that were learned during the first part of the course and turn it into a web development game.

This application is a PVP game where **Player 1 (Pikachu)** and **Player 2 (Charmander**) is in a combat. It begins with Player 1 taking their turn firASst followed by Player's 2 turn. Health are deducted by a random roll. _(Refer to how **[how to play](#how-to-play)** for further breakdown on the characters skills and damage.)_

Scoreboard will **automatically** add 1 points to winner's name as well as the announcement title will be changing throughout the game play (who's turn it is, who won, etc.)

## Demo

Provided here is a github deployed version of the game that is currently up to date as of April 22, 2023:

<https://ying-li5.github.io/Fakemon-Battle/>

## Technical Information

Remember to **clone** and run this application. You'll need [Git](https://github.com/git-guides/install-git) and [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (which comes with [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)) already installed on your computer. From your command line:

```shell
# Clone this repository -- make sure that (your-username) is the same as your GitHub username
$ git clone https://github.com/(your-username)/Fakemon-Battle.git

# Go into the repository
$ cd Fakemon-Battle

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Once your npm start, the game will automatically open up in your browser.

## Technologies

* Node.js
* Typescript
* Javascript
* Git

## How to Play

Just to clarify, this is PVP game between **Pikachu** (PLAYER 1) and **Charmander** (PLAYER 2)

There are four abilities for each characters:

* Basic attack
* 2 Speciality attacks
* 1 ultimate attack

**Pikachu attacks:**

* Basic attack (10) - _damage: 0-10_
* Thunderbolt (3) - _damage: 0-20_
* Volt tackle (2) - _damage: 0-40_
* Thunderstorm (1) - _damage: 0-60_

**Charmander attacks:**

* Basic attack (10) - _damage: 0-10_
* Blaze (3) - _damage: 0-20_
* Ember (2) - _damage: 0-40_
* Fire blast (1) - _damage: 0-60_

Each skills/attacks damages are randomly generated

If Pikachu wins, Charmander loses.

If Charmander wins, Pikachu loses.

## Credits

* [Pikachu's skills images](https://game8.co/games/Pokemon-UNITE/archives/338028)
* [Charmander's skills images](https://game8.co/games/Pokemon-UNITE/archives/379178)
* [Character's images](https://www.vecteezy.com/vector-art/141925-set-of-pokemon-icons)

## Unfinished Functionality

Did not get to finish the reset button which clears the scoreboard.

Did not add health silders.

## Issues

Currently, page is non-responsive on mobile app or when not played on full screen.  Listed below are items that will be out of positioning if page are not optimized

* Characters
* Skills
* Scoreboard

## Future Addition to the Project

* Add health bar instead of using numbers
* Make game playable with CPU
* Randomnize who goes first
* Add more characters
* Create page where people can choose their character before entering into the battlefield
* Maybe add window-alert for a maximum game of 3 (e.g. if player 1 have 2 wins, and player 2 have 1 wins, then player 1 wins [total of 3 games])
