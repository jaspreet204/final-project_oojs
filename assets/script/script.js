'use strict';

const start = document.getElementById('start-btn');
const restart = document.getElementById('restart-btn');
const wordinput = document.getElementById('word-input');

const timer = document.getElementById('time');
const displayWord = document.getElementById('current-word');
const displayHits = document.getElementById('hits');

const wordlist = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 
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

function resetGame (){
    /* A shuffle will be added here later */
    hits = 0;
    displayHits.innerText = 0;
    nextWord();
}

function checkWord(){
    if(wordinput.value === currentWord){
        hits++;
        displayHits.innerText = hits;
        wordinput.value = '';
        nextWord();
    }
}

function nextWord(){
    currentWord = wordlist[hits];
    displayWord.innerText = currentWord;
}

restart.addEventListener("click", function () {
    resetGame();
});

wordinput.addEventListener("input", function () { /* input event happens whenever the user modifies the value of wordinput */
    checkWord();
});