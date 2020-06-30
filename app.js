// Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
};

// Change level
const currentLevel = levels.easy;

// Global
let time = currentLevel,
    score = 0,
    isPlaying;
    
// Dom Elements
const seconds = document.querySelector('#seconds'),
    currentWord = document.querySelector('#current-word'),
    wordInput = document.querySelector('#input'),
    reset = document.querySelector('#resetBtn'),
    message = document.querySelector('#message'),
    timeDisplay = document.querySelector('#time'),
    scoreDisplay = document.querySelector('#score');

const words = ['hello','hat', 'river','lucky','statue','generate','stubborn','runaway','joke','developer','document','type','hero','revolver','echo','establishment','nutrition','siblings','magic','master','space','definition','laughter','symptom','horrendous','trick','wander','faulty','stormy','glib','muscle','healthy','tough','prepare','bath','grass','beds','tickle','gamy','punish','tick','orange','walk','shiny','field','annoy','wheel','mix','kettle','stretch','gabby','sniff','damaging','madly','overwrought','crack','linen','maniacal','habitual','passenger','loud','unbecoming','feigned','guarantee','stocking','leather','mountain','bite','step','tank','left','wonderful','daffy','thaw','obtainable','chop','stay','tasty','merciful','secretive','minute','hard-to-find','shade','large','machine','dusty','arithmetic','erect','continue','purpose','symptomatic','absorbing','stem','condemned','club','fold','lonely','instruct','dad','ill','egg','capable','sock','drum','ratty','political','false','foamy','fire','push','spot','remove','shock','immense','sun','plug','release','racial','violent','trot','fast','classy','busy','proud','record','scrawny','call','consider','escape','beautiful','suspend','joyous','confess','coil','unable','maid','graceful','cub','unique','mailbox','satisfy','pull','alive','zippy','march','questionable','grade','receive','materialistic','treatment','slippery','look','argue','detail','lackadaisical','sort','zip','stage','bulb','crush','skirt','fetch','heat','magic'];

// Init Game
window.addEventListener('load', e => {
    seconds.innerHTML = time;
    timeDisplay.innerHTML = time;
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(contdown, 1000);
    setInterval(checkStatus, 50);
});

// Pick and show random words
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex]; 
};

// Start matching the numbers
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    };
};

// Matching currentWord with wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct';
        message.style.color = '#00BB38';
        return true;
    }else{
        return false;
    };
};

// Contdown timer
function contdown(){
    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    };
    timeDisplay.innerHTML = time;
};

// Check game status
function checkStatus(){
    if(time === 0){
        message.innerHTML  = 'Game Over!';
        message.style.color = '#FF3535'
        score = -1;
    };
};

// Reset game
reset.addEventListener('click', e => {
    time = currentLevel +1;
    scoreDisplay.innerHTML = 0;
    message.innerHTML = '';
});