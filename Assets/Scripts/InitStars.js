public var star: Transform;
var eastwest : int;
var smallarge : int;
var ew : float;
var magE : float;
var magW : float;
public var cancel : int;
public var time : float;
public var x : float;
public var y : int;
public var z : int;
function Start() {
	eastwest = 0;
	time = 0;
	cancel = 0;
	x = 0;
	y = 0;
	z = 10;
	magE = -4.5;
	magW = 4.5;
	spawn();
}

function Update() {
	time += Time.deltaTime;
	y = Mathf.FloorToInt(time);
	if(y > 0 && y % z == 0 && x < 2.2){
		x += 0.2;
		z += 10;
	}
}
function spawn(){
	while(cancel == 0){
		MakeStars();
		yield WaitForSeconds(4.5 - x);
	}
}

function MakeStars () {
	eastwest = Random.Range(0, 2);
	if(eastwest == 0){
		magE = Random.Range(-4.5 + x, -1.5);
		ew = magE;
	}
	else{
		magW = Random.Range(4.5 - x, 1.5);
		ew = magW;
	}

	Instantiate(star, Vector3(ew, 10, 0), Quaternion.identity);
}