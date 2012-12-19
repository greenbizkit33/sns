static var dropletCount = 0;

function OnCollisionEnter(theCollision : Collision){   

    if(theCollision.gameObject.name == "Sphere"){
    Destroy(theCollision.gameObject);
    Debug.Log("Sphere");
    this.GetComponent(CharacterMotor).movement.gravity = 15;
    }
    if(theCollision.gameObject.name == "slide"){
    Debug.Log("slide");
    this.GetComponent(CharacterMotor).movement.gravity = 15;
    }
    if(theCollision.gameObject.name == "droplet"){
    dropletCount ++;
    Debug.Log("droplet");
    Destroy(theCollision.gameObject);
    }
    if(theCollision.gameObject.name == "puddle"){
    Debug.Log("puddle");
    Destroy(theCollision.gameObject);
    moveSlider.velocity += 0.08;
    }  
}