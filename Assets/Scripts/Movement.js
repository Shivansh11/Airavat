public var anim : Animation;
public var phys : Rigidbody;
public var cam : Camera;
public var shatter : ParticleSystem;
public var shatterScript : Burst;
public var flag : int;
public var itself : GameObject;
public var height : float;
public var width : float;
public var ycoord : float;
public var dim : Vector3;
public var initstars : GameObject;
public var exploded : int;
function Start () {
	anim = GetComponent(Animation);
	phys = this.GetComponent(Rigidbody);
	shatterScript = shatter.GetComponent(Burst);
	flag = 0;
	height = 2f * cam.orthographicSize;
	width = height * cam.aspect;
	dim = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height,0));
	ycoord = transform.position.y;
	exploded = 0;

}

function FixedUpdate () {
	if(Input.touchCount == 1){
		if(Input.GetTouch(0).phase == TouchPhase.Began && Input.GetTouch(0).position.x < Screen.width/2){
			if(anim.IsPlaying("Right"))
				anim.CrossFade("Left", 0.25);
			else
				anim.CrossFadeQueued("Left", 0.25, QueueMode.PlayNow);
			if(phys.velocity.x > 0 && transform.position.x > 0){
				phys.velocity.x = 0;
				phys.velocity.x = -3;
				flag = 1;
			}
			else
				moveLeft();
		}
		if(Input.GetTouch(0).phase == TouchPhase.Began && Input.GetTouch(0).position.x > Screen.width/2){
			if(anim.IsPlaying("Left"))
				anim.CrossFade("Right", 0.25);
			else
				anim.CrossFadeQueued("Right", 0.25, QueueMode.PlayNow);
			if(phys.velocity.x < 0 && transform.position.x < 0){
				phys.velocity.x = 0;
				phys.velocity.x = 3;
				flag = 2;
			}
			else
				moveRight();
		}
	}
	if(flag == 1){
		phys.AddForce(transform.right*3);
		/*if(phys.velocity.x > 7.8){
			Debug.Log("Leftside WTHHH"); 
			phys.velocity = Vector2.zero;
			phys.angularVelocity = 0;
			transform.position.x = 0;
			phys.Sleep();
			flag = 0;
		}*/
	}
	if(flag == 2){
		phys.AddForce(-transform.right*3);
		/*if(phys.velocity.x < -7.8){
			Debug.Log("Rightside WTHHH"); 
			phys.velocity = Vector2.zero;
			phys.angularVelocity = 0;
			transform.position.x = 0;
			phys.Sleep();
			flag = 0;
		}*/
	}
	/*if(flag == 1 && phys.velocity.x > 0 && transform.position.x > -0.2 && transform.position.x < 0.2){
		Debug.Log("Leftside WTHHH"); 
			phys.velocity = Vector2.zero;
			phys.angularVelocity = 0;
			transform.position.x = 0;
	}
	if(flag == 2 && phys.velocity.x < 0 && transform.position.x > -0.2 && transform.position.x < 0.2){
		Debug.Log("Rightside WTHHH"); 
			phys.velocity = Vector2.zero;
			phys.angularVelocity = 0;
			transform.position.x = 0;
	}
	if(flag == 1 && transform.position.x > 0.2){
		phys.AddForce(-transform.right*20);
		flag = 3;
	}
	if(flag == 3 && phys.velocity.x < 0 && transform.position.x > -0.2 && transform.position.x < 0.2){
		Debug.Log("Rightside WTHHH"); 
			phys.velocity = Vector2.zero;
			phys.angularVelocity = 0;
			transform.position.x = 0;
	}*/
	//if(transform.position.x > Screen.width/4 || transform.position.x < -(Screen.width/4))
	//	Destroy(gameObject); 

 	if(transform.position.x > dim.x-0.3 || transform.position.x < -dim.x+0.3)
 		bang();
}

function moveLeft(){
	phys.velocity.x = -3;
	flag = 1;
}
function moveRight(){
	phys.velocity.x = 3;
	flag = 2; 
}
function bang(){
	PlayerPrefs.SetInt("died", PlayerPrefs.GetInt("died") + 1);
	exploded = 1;
	shatterScript.state = 1;
	initstars.GetComponent(InitStars).cancel = 1;
   	itself.SetActive(false); 	
}
function OnTriggerEnter(collider : Collider){
	shatterScript.col = collider.gameObject.GetComponent(StarControl).choice;
	bang();
}