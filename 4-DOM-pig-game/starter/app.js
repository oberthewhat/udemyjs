/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// basic game variables

let scores, roundScore, activePlayer, gamePlaying;




init();


document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		//1. a random number 
dice = Math.floor(Math.random() * 6) + 1;
//2. display result
var diceDom = document.querySelector('.dice')
diceDom.style.display = 'block';
diceDom.src = 'dice-' + dice + '.png'
//3. update round score only if the rolled dice is not 1
if(dice > 1) {
	//add score
	roundScore += dice;
	document.querySelector('#current-' + activePlayer).textContent = roundScore
} else {
nextPlayer()
}
	}

}); 

document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying) {
//1. add current score to player score
scores[activePlayer] += roundScore;

//2. update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//3. check if player won the game 
if (scores[activePlayer] >= 100){

document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
document.querySelector('.dice').style.display = 'none';
document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
gamePlaying = false

} else {
  nextPlayer()
}}});
 
function nextPlayer() { 
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  //turnery operator
	roundScore = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;


	//toggle between players
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active'); 

	//Hides dice between turns
	document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init)
 
function init() {
gamePlaying = true;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('name-1').textContent = "player 2";
document.getElementById('name-0').textContent = "player 1";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}



