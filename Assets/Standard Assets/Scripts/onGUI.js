#pragma strict

function OnGUI () {
    if(startGame.started == true){
	GUI.Label (Rect (10, 10, 100, 20), "Droplets: " + personOnSilder.dropletCount );
	}
	if(startGame.started== false){
	GUI.Label (Rect (140, 140, 100, 20), "Press 'a' to get started ");
	}
	if(moveSlider.wipeout == true){
	GUI.Label (Rect (140, 140, 100, 20), "Wipeout! Press b to restart ");
	}
	if(moveSlider.finished == true){
	GUI.Label (Rect (140, 140, 350, 20), "Cool You Made It! Droplet Count =  " + personOnSilder.dropletCount 
	+ " Press b to restart");
	}
	
	
	
}