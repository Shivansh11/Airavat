var time : float;
var y : int;
var x : float;
var z : int;
public var col : int;
function Start () {
	time = 0;
	y = 0;
	x = 0;
	z = 10;
	col = 4;
	set_color();
}

function set_color(){
	while(true){
	Debug.Log("wegw");
		col = Random.Range(0, 5);
		if(col == 0)
			GetComponent.<Renderer>().material.color = new Color(1, 0.92, 0.016, 1);  //yellow
		else if(col == 1)
			GetComponent.<Renderer>().material.color = new Color(0.24, 0.35, 0.85, 1);  // Blue
		else if(col == 2)
			GetComponent.<Renderer>().material.color = new Color(0.31, 0.85, 0.27, 1);  //green
		else if(col == 3)
			GetComponent.<Renderer>().material.color = new Color(0.92, 0.25, 0.25, 1);  //red
		else if(col == 4)
			GetComponent.<Renderer>().material.color = new Color(1.0, 1.0, 1.0, 1);
		yield WaitForSeconds(Random.Range(2, 7));
	}
}

