public var ship : GameObject;
public var speed : float = 10;
public var min : float = 0.02f;
public var range : float;
public var object : GameObject;
function Start(){
	ship = GameObject.FindWithTag ("Player");
	object = GameObject.FindWithTag ("obj");
}
function Update () {
	
    if (transform.position.y - ship.transform.position.y < 3 && transform.position.y - ship.transform.position.y > -3 && ship.GetComponent(Movement).exploded == 0){
    	if(object.GetComponent(ColorChange).col != GetComponent(StarControl).choice){
    		if(transform.position.x < 0)
       			ship.GetComponent(Rigidbody).AddForce(-transform.right*10);
       		else
       			ship.GetComponent(Rigidbody).AddForce(transform.right*10);
		}
		else{
			if(transform.position.x < 0)
       			ship.GetComponent(Rigidbody).AddForce(transform.right*10);
       		else
       			ship.GetComponent(Rigidbody).AddForce(-transform.right*10);
		}
   	}
}
