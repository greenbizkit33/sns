#pragma strict

var goingDown = false;
static var velocity = 0.15;
static var wipeout = false;
static var finished = false;
static var myController : CharacterController;

function Start () {


}

function Update () {
//Debug.Log(goingDown);
this.transform.Translate(0, 0 ,velocity);
if(this.transform.position.y < 2 ){
	this.wipeout = true;
	this.GetComponent(moveSlider).enabled = false;
	myController.enabled = false;
//this.GetComponent(CharacterMotor).movement.gravity = 15;
}
if(this.transform.position.x > 405 ){
    this.finished =true; 
 	this.GetComponent(moveSlider).enabled = false;
	myController.enabled = false;
}
if(this.transform.position.x > 0){
  this.GetComponent(CharacterMotor).movement.gravity = 15;
}


}
