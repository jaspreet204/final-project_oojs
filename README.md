# BlinkType  High Score Typing Game

## Description
BlinkType is a fast typing web game where players type words within a limited time. This version of the game focuses on a **high score system**, where player results are saved, sorted, and displayed after each game.

## Key Feature: High Score System
- Stores player scores using **localStorage**
- Each score includes:
  - Hits (correct words)
  - Percentage (accuracy)
  - Date
- Scores are sorted by **highest hits**
- Displays the **Top 9 scores**
- Scoreboard updates automatically after each game

## Other Features
- 99-second typing challenge
- Random word generation
- Real-time hit counter
- Final score display
- Clean and modern UI

## Technologies Used
- HTML
- CSS
- JavaScript
- localStorage
- JSON (JSON.stringify & JSON.parse)

## How It Works
1. Player starts the game
2. Types words as fast as possible
3. Score is calculated at the end
4. Score is saved in localStorage
5. Scores are sorted and top 9 are displayed in the scoreboard

## How to Play
1. Click "Start Game"
2. Type the displayed word
3. Press Enter after each word
4. Try to achieve the highest score
5. View your score and compare with top scores

## Authors
- Jaspreet  UI Design (HTML, CSS, Scoreboard Layout)
- Blake  Game Logic (JavaScript, localStorage, Sorting System)