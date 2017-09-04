public var particle : ParticleSystem;
public var airavata : GameObject;
public var restart : GameObject;
public var pause : GameObject;
public var state : int;
public var check : int;
public var col : int; 
function Start () {
	particle = GetComponent(ParticleSystem); //retrieve the system
    //particle.Play();  //Fire the System
    state = 0;
    check = 0;
    col = 4;
}

function Update () {
	transform.position.x = 	airavata.transform.position.x;
	if(state == 1){
		state = 0;
		explode();
	}
	if(!particle.isPlaying && check % 2 != 0){
		airavata.transform.position.x = 0;
		restart.SetActive(true);
		pause.SetActive(false);
	}
}
function explode(){
	var main = particle.main;
	if(col == 0)
		main.startColor = new Color(1, 0.92, 0.016, 1);  //yellow
	else if(col == 1)
		main.startColor = new Color(0.24, 0.35, 0.85, 1);  // Blue
	else if(col == 2)
		main.startColor = new Color(0.31, 0.85, 0.27, 1);  //green
	else if(col == 3)
		main.startColor = new Color(0.92, 0.25, 0.25, 1);  //red
	else if(col == 4)
		main.startColor = new Color(1.0, 1.0, 1.0, 1);
	particle.Play();
	check++;
}