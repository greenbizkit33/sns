#pragma strict
var myController : CharacterController;
static var started = false;

function Start () {

}

function Update () {



if (Input.GetKeyDown("a")){
myController.enabled = true;
this.GetComponent(moveSlider).enabled = true;
started = true;
}

if (Input.GetKeyDown("b")){
	this.GetComponent(CharacterMotor).movement.gravity = 0;
	started = false;
	moveSlider.wipeout = false;
	moveSlider.finished = false;
	this.transform.position.x = -6;
	this.transform.position.y = 5;
	this.transform.position.z = 100; 
	moveSlider.velocity = 0.13;
	personOnSilder.dropletCount = 0;
}




}