alert("Can't decide who will be cooking Dinner tonight?");

alert("Let this dice game help you out!");

alert("Go ahead, call your partner, and within a few seconds decision will be out.");

alert("This is a simple dice game of 4 rounds. Both of you take turns in playing each round. The player who has the LOWER SCORE WINS.");

alert("All numbers count at their face value. Except 3 = 0. If 2 or more dice draw the same number in the round, they count as zero.");

alert("Each round has 6 dice; a 4 sided, a 6 sided, a 8 sided, a 10 sided, a 12 sided and a 20 sided.");

alert("LET THE GAME BEGIN.")


let player1, player2; 											//these will be used throughout 

let player1Total = 0; 											// total score 

let player2Total = 0;

let player1Rounds = 0; 											//no.of rounds played

let player2Rounds = 0;

function rollDie(numberSides){									//function for generating random numbers for all 6 dice 
		let dieValue =Math.floor(Math.random()* numberSides)+1;
		return dieValue;
}

function generateNumbersForPlayer1()
{
	if(player1Rounds < 4){										//as each player plays 4 rounds/game
	
		let num1 = rollDie(4);									//number generated on dice with 4 sides
		document.getElementById("first1").innerHTML = num1;

		let num2 = rollDie(6);
		document.getElementById("second1").innerHTML = num2; 	//number generated on dice with 6 sides
		
		let num3 = rollDie(8);	
		document.getElementById("third1").innerHTML = num3;		//number generated on dice with 8 sides

		let num4 = rollDie(10);	
		document.getElementById("fourth1").innerHTML = num4;  	//number generated on dice with 10 sides

		let num5 = rollDie(12);	
		document.getElementById("fifth1").innerHTML = num5;		//number generated on dice with 12 sides

		let num6 = rollDie(20);
		document.getElementById("sixth1").innerHTML = num6;		//number generated on dice with 20 sides


		let sortArray1 = [num1,num2,num3,num4,num5,num6]; 	//sorting out in ascending order for later stage,
		sortArray1.sort(function(a,b){						//so that it helps in grouping repeat numbers, if any. short for ((a,b)+>(a-b).this function takes 2 parameters(a & b) that represent any elements
		return a-b;						//from the array. sorting will based on the return values. if a negative value, the value in'a' will be ordered before'b'.
		})								//if returned value is 0, the ordering wont change. if returned value is positive 'b' will be ordered before 'a'.
		console.log(sortArray1);		// b-a would have given descending order.


		let repeatresults = [3];							// identifying any repeating values. compares the 
		for (let i = 0; i < sortArray1.length - 1; i++) {	//current value to the one ahead of it, if they hold
    		if (sortArray1[i + 1] === sortArray1[i]) {		//the same value then it is pushed into a new array
        	repeatresults.push(sortArray1[i]);
    		}
		}
		console.log(repeatresults);							

		finalarrayresult = sortArray1.filter(function(value) {	//with the help of the array filter() method, number (values) which were in the repeatresults array are omitted.
			if(repeatresults.includes(value)){						
			return false;
			}
			else
			return true;
			}
		)

		console.log(finalarrayresult);

		let currentSum = 0;											
		for (let i=0; i<finalarrayresult.length; i++) {
		currentSum += finalarrayresult[i];
		}

	
	player1Total = player1Total + currentSum;							//scores will be updated after every round
	document.getElementById("sum1").innerHTML = player1Total; 			// grand total after 4 rounds have been played.

	player1Rounds = player1Rounds + 1;									//shows the total no. of rounds that have been played
	document.getElementById("currentPlayer1Round").innerHTML = player1Rounds;
	document.getElementById("player1Button").style.display = "none";	//the button are active only when its the player's turn to play.
	document.getElementById("player2Button").style.display = "block";	
}

}


function generateNumbersForPlayer2()
{
	if(player2Rounds < 4){

		let num1 = rollDie(4);
		document.getElementById("first2").innerHTML = num1;

		let num2 = rollDie(6);
		document.getElementById("second2").innerHTML = num2;
		
		let num3 = rollDie(8);	
		document.getElementById("third2").innerHTML = num3;

		let num4 = rollDie(10);	
		document.getElementById("fourth2").innerHTML = num4;

		let num5 = rollDie(12);	
		document.getElementById("fifth2").innerHTML = num5;
		
		let num6 = rollDie(20);
		document.getElementById("sixth2").innerHTML = num6;

		let sortArray1 = [num1,num2,num3,num4,num5,num6]; 				
		sortArray1.sort(function(a,b){
		return a-b;
		})

		console.log(sortArray1);	


		let repeatresults = [3];								
		for (let i = 0; i < sortArray1.length - 1; i++) {
    		if (sortArray1[i + 1] === sortArray1[i]) {
        	repeatresults.push(sortArray1[i]);
    		}

		}
		console.log(repeatresults);	


		finalarrayresult = sortArray1.filter(function(value) {
		if(repeatresults.includes(value)){
			return false;
		}
		else
			return true;
		})

		console.log(finalarrayresult);


		let currentSum = 0;
		for (let i=0; i<finalarrayresult.length; i++) {
		currentSum += finalarrayresult[i];
		}


		player2Total = player2Total + currentSum;
		document.getElementById("sum2").innerHTML = player2Total;

		player2Rounds = player2Rounds + 1;
	
		document.getElementById("currentPlayer2Round").innerHTML = player2Rounds;
		document.getElementById("player2Button").style.display = "none";
		document.getElementById("player1Button").style.display = "block";


		if (player2Rounds === 4)					//only when player 2 has finised playing 4 rounds will the scores be compared.
		CompareTotals();							

	}


}


function CompareTotals(){

	if(player1Total > player2Total)
	document.getElementById("result").innerHTML = "Player2 Wins. Dinner of your choice will be served soon!";
    
    else if (player1Total < player2Total)
 	document.getElementById("result").innerHTML = "Player1 Wins. Dinner of your choice will be served soon!";
     
    else
 	document.getElementById("result").innerHTML = "Nothing better than cooking together, right?!";
}