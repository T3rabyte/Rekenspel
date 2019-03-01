const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

const timer = document.getElementById("time");

let mySum;
let sound = new Audio();

let LastClick = 0;

var index;

var a;
var b;

var aantal = 0;
var goed = 0;
var fout = 0;

function makeSum()
{
	a = Math.floor(Math.random() * 9 + 1);
	b = Math.floor(Math.random() * 9 + 1);
	mySum = a + " X " + b;
	 sleep(50).then(() => 
	 {
    	myAssignment.innerHTML = mySum;
    	myAnswer.focus();
    	if(index <= 5) 
    	{
      		makeSum();
      		index++;
    	} 
    	else 
    	{
      		index = 0;
    	}
  	});
	getallen();
}

function keyPressed(evt) 
{
	if (evt.keyCode == 13)
	{
		if(eval( a * b ) == myAnswer.value)
		{
			feedback.src = "img/goed.png";
			sound.src = "img/good.wav";
			sound.play();
			aantal ++;
			goed ++;
			timer.innerHTML = "Je deed " + Math.floor((new Date()/1000)-(LastClick/1000)) + " seconden" + "<br>" + "over de som!";
    		LastClick = new Date();
			getallen();
		}
		else
		{
			feedback.src = "img/fout.png";
			sound.src = "img/wrong.wav";
			sound.play();
			aantal ++;
			fout ++;
			timer.innerHTML = "Je deed " + Math.floor((new Date()/1000)-(LastClick/1000)) + " seconden" + "<br>" + "over de som!";
    		LastClick = new Date();
			getallen();
		}
		window.setTimeout(waiting, 2000);
	}
}

function waiting() 
{
	feedback.src = "img/feedback.png";
	myAnswer.value = "";
	makeSum();
}

function sleep (time) 
{
  return new Promise((resolve) => setTimeout(resolve, time));
}

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false);

function getallen()
{
	pogingen.innerHTML = aantal + " opgaven gemaakt "+ "<br>" + goed + " goed " + fout + " fout";
}