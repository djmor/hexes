/*function NewGame() {
	this.name = "We Are Alone";
	this.description = "It turns out that we are indeed the only sentient race in the universe. Who knew?";
	this.numbers = [];
	for (var i=0;i<10;i++) {
		this.numbers[i] = i;
	}
}

var Game = new NewGame();
var SaveGame = JSON.stringify(Game);*/
var Timer;
var blinktimer;
var time = 0;
var ezo = 0;
var disableEzoGather = 0;
var h = 0;
var h2 = 0;
var Sat1 = "Hydrogen Scoop";
var Sat1C = 10;
var Sat1PS = 1;
var Sat1Q = 0;
var ezopressure = 0;

/*
function SaveGame() {
	window.localStorage['AllAlone'] = JSON.stringify(Game);	
	}

function LoadGame() {
	window.GameTwo = JSON.parse(window.localStorage['AllAlone']);
	}
*/	
function enableButton(x) {
	document.getElementById(x).disabled="";
	}
	
function disableButton(x) {
	document.getElementById(x).disabled="disabled";
	}
	
function hideElem(x) {
	document.getElementById(x).style.visibility = 'hidden';
	}

function showElem(x) {
	document.getElementById(x).style.visibility = 'visible';
	}

function WriteText(x) {
	document.getElementById("textline3").innerHTML = document.getElementById("textline2").innerHTML;
	document.getElementById("textline2").innerHTML = document.getElementById("textline1").innerHTML;
	document.getElementById("textline1").innerHTML = x;
	}	

function Tick() {
	h = h + ((Sat1Q * Sat1PS)/4);
	document.getElementById("h").innerHTML = h;
	}
	
function PassTime(x) {
	time = time + x;
	if (time != 0) {
		showElem('timeline');
		};
	switch (time) {
		case 10:
			WriteText("Nothing seems to be happening...");
			break;
		case 20:
			WriteText("No, really, there's nothing here.");
			break;
		case 30:
			WriteText("Oh, I think I see something...");
			break;
		case 40:
			disableButton('PassTimeBtn');
			WriteText("Stop! Catch it!");
			showElem('GetEzoBtn');
			break;
		case 50:
			WriteText("So, umm...");
			break;
		case 60:
			WriteText("Yeah, what should I do?");
			break;
		case 70:
			WriteText("... Nah, that won't do anything.");
			break;
		case 80:
			WriteText("Well, may as well try.");
			showElem('PressEzoBtn');
			disableBtn("PassTimeBtn");
			break;
		default:
			break;
		} 
	document.getElementById("time").innerHTML = time;
	}
		
function GetEzo(x) {
	ezo = ezo + (x);
	if (ezo != 0) {
		showElem('ezoline');
		}
	if (ezo == 2) {
	WriteText("Ow. Sharp.");
	}
	if (ezo == 4) {
	WriteText("This bit's soft, but it fits right..");
	}
	if (ezo == 5) {
	WriteText("OW.");
	}
	if (ezo == 7) {
	WriteText("Okay, you need a name.");
	}
	if (ezo == 10) {
	WriteText("OW. Well, there were none of you before now, so...");
	}
	if (ezo == 12) {
	document.getElementById("GetEzoBtn").value = "Get Element Zero";
	document.getElementById("sfsezo").innerHTML = "Element Zero:";
	}
	if (ezo == 15) {
	WriteText("That's almost all of it.");
	}
	if (ezo == 20) {
	disableButton('GetEzoBtn');
	WriteText("Huh, they look like two halves of a whole. They seem to be... repelling each other.");
	disableButton('PassTimeBtn');
	}
	document.getElementById("ezo").innerHTML = (ezo/10);
	}
	
function PressEzo() {
		ezopressure++;
	switch (ezopressure) {
		case 1:
			WriteText("This isn't so hard.");
			break;
		case 2:
			WriteText("Wow, it's going slowly.");
			break;
		case 4:
			WriteText("Really starting to push back.");
			break;
		case 8:
			WriteText("Oh man, I don't know how long I can keep this up.");
			break;
		case 16:
			WriteText("Only... a... little... more...");
			break;
		case 32:
			WriteText("Dammit, so... close..");
			break;
		case 64:
			WriteText("I can't keep this up, my arms are getting tired.");
			break;
		case 128:
			WriteText("Just a little more~");
			break;
		case 160:
			WriteText("Urgh...");
			break;
		case 192:
			WriteText("Arrrghh...");
			break;
		case 224:
			WriteText("*grunt*");
			break;
		case 256:
			WriteText("Ahmigawwwwwddddd!");
			hideElem('GetEzoBtn');
			hideElem('PressEzoBtn');
			document.getElementById('GetEzoBtn').style.zIndex = '-1';
			document.getElementById('PressEzoBtn').style.zIndex = '-1';
			hideElem('ezopress');
			document.getElementById('ezopress').style.zIndex = '-1';
			hideElem('ezoline');
			document.getElementById('ezoline').style.zIndex = '-1';
			CreateUniverse();
			break;
		default:
			break;
		}
	}
	
function CreateUniverse() {
	Timer = window.setInterval(function(){CreateStars()}, 250);
	}
	
function CreateStars() {
	console.log("alert");
	var starbtn = document.createElement("input");	
	starbtn.setAttribute("type","button");
	starbtn.setAttribute("value","Explore Star");
	starbtn.setAttribute("style","width:100%");
	starbtn.disabled="disabled";
	for (i = 1; i < 60; i++) { 
		var pt1 = "stbtn";
		var pt2 = i.toString();
		var stname = pt1.concat(pt2);
		console.log("for called, iteration " + i + ", " + stname + " concat works");
		starbtn.setAttribute("id", stname);
		starbtn.setAttribute("onclick", "Explore(" + stname + ");");
		document.getElementById("canvas").appendChild(starbtn);
		}
	}
function ReplaceEzo() {
	var ezobtn1 = document.getElementById("GetEzoBtn");
	var starbtn1 = document.createElement("input");
	starbtn1.setAttribute("id","asd7");
	starbtn1.setAttribute("type","button");
	starbtn1.setAttribute("value","Explore Star");
	starbtn1.setAttribute("style","width:100%");
	starbtn1.setAttribute("onclick","Explore(asd7)");
	starbtn1.disabled="disabled";
	ezobtn1.parentNode.replaceChild(starbtn1, ezobtn1);
	}

function BuySat1() {
	if (money >= Sat1C) {
		money = money - Sat1C;
		Sat1Q = Sat1Q + 1;
		document.getElementById("Satellite1Q").innerHTML = Sat1Q;
		document.getElementById("money").innerHTML = money;		
		}
	}

	