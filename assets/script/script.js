'use strict';

const start = document.getElementById('start-btn');
const wordinput = document.getElementById('word-input');

const displayTimer = document.getElementById('time');
const displayWord = document.getElementById('current-word');
const displayHits = document.getElementById('hits');

const displayScore = document.getElementById('score-summary');
const finalDate = document.getElementById('final-date')
const finalHits = document.getElementById('final-hits')
const finalPercentage = document.getElementById('final-percentage')

const displayHighScores = document.getElementById('scores-list')

class Score {
    date;
    hits;
    percentage;

    constructor(hits){
        this.date = (new Date()).toLocaleString('en-ca', {month: 'short', day: '2-digit'});
        this.hits = hits;
        this.percentage = ((hits/90)*100).toFixed(3);
    }

    get date() { return this.date }
    get hits() { return this.hits }
    get percentage() { return this.percentage }
}

const music = new Audio('./assets/media/game-music.mp3');
music.type = 'audio/mp3';

let wordlist = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 
    'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute', 'discipline', 'machine', 
    'accurate', 'connection', 'rainbow', 'bicycle', 'eclipse', 'calculator', 'trouble', 'watermelon', 
    'developer', 'philosophy', 'database', 'periodic', 'capitalism', 'abominable', 'component', 
    'future', 'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency', 
    'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician', 'professor', 'triangle', 
    'earthquake', 'baseball', 'beyond', 'evolution', 'banana', 'perfumer', 'computer', 'management', 
    'discovery', 'ambition', 'music', 'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 
    'enemy', 'button', 'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework', 
    'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery', 'famous', 
    'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow', 'keyboard', 'window'];

let currentWord;
let hits = 0;
let time = 99;
let ticker;
let scores = [];

function resetGame (){
    wordinput.removeAttribute("disabled");
    hits = 0;
    displayHits.innerText = 0;
    shuffleList();
    nextWord();
    wordinput.focus();
    time = 99;
    ticker = setInterval(timer, 1000);
    music.play();
}

function shuffleList() {
    /* A simple fischer-yates shuffle algorithm */
    /* Iterates through the array, swapping each entry with one that hasn't been iterated through yet */
    for(let i = 89; i >= 1; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [wordlist[i], wordlist[j]] = [wordlist[j], wordlist[i]];
    }
}

function timer() {
    time--;
    displayTimer.innerText = time;
    if(time === 0){
        clearInterval(ticker);
        endGame();
    }
}

function checkWord(){
    if(wordinput.value.trim().toUpperCase() === currentWord.toUpperCase()){
        hits++;
        displayHits.innerText = hits;
        wordinput.value = '';
        if(hits === 90) {
            endGame();
        } else {
            nextWord();
        }
    }
}

function nextWord(){
    currentWord = wordlist[hits];
    displayWord.innerText = currentWord;
}

function endGame() {
    wordinput.setAttribute("disabled", '');
    let score = new Score(hits);
    scores.push(score);
    localStorage.setItem('Scores', JSON.stringify(scores));
    updateScoreboard();
    finalDate.innerText = `Date: ${score.date}`
    finalHits.innerText = `Score: ${score.hits}`
    finalPercentage.innerText = `Completed: ${score.percentage}%`
    displayScore.showModal();
    wordinput.value = '';
    music.pause();
}

function updateScoreboard(){
    scores = JSON.parse(localStorage.getItem('Scores'));
    displayHighScores.innerHTML = '';
    scores.sort((a, b) => a.hits < b.hits)
    scores.splice(9)
    for(let i = 0; i < scores.length; i++){
        let highscore = document.createElement('li')
        highscore.innerText = (`${scores[i].hits} - ${scores[i].percentage}% - ${scores[i].date}`);
        displayHighScores.appendChild(highscore);
    }
}
if(localStorage.getItem('Scores') !== null){
    updateScoreboard();
}

start.addEventListener("click", function () {
    resetGame();
});

wordinput.addEventListener("input", function () { /* input event happens whenever the user modifies the value of wordinput */
    checkWord();
});