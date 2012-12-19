



function Update () {

	if (Input.GetButton("Block"))
	{
    transform.localScale.y = 120; 
	gameObject.collider.enabled = true;

	}
    if (!Input.GetButton("Block"))
	{
	transform.localScale.y = 12;
	gameObject.collider.enabled = false;

	}

}