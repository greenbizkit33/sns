//@script RequireComponent(AudioSource)

var DoorOpen : AudioClip;


function OnCollisionEnter(theCollision : Collision){   
    if(theCollision.gameObject.name == "Guy"){
    Debug.Log("hit the door");
    audio.PlayOneShot(DoorOpen);
    yield WaitForSeconds (3);
    Application.LoadLevel ("endGame");
    }
}
