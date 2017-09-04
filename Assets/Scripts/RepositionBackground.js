public var length : float;
public var offset : Vector2;
public var textures: Texture[];
public var rend : Renderer;
public var x : int;
public var tank : int[];
public var texlen : int;
public var foreign : GameObject;
public var foreign1 : GameObject;
var j : int;
public var i : int;
public var count : int;
public var flag : int;
public var colored : int;

function Start () {
	length = 15;
	rend = GetComponent.<Renderer>();
	x = 0;
	colored = 0;
	initialize(); //tank
}

function Update () {
	if(this.transform.position.y < -length)
		repositionBg();
}

function initialize(){
	for(j = 0; j < 7; j++){
		tank[j] = 0;
	}
}

function choose(){
	count = 0;
	flag = 0;
	do{
		if(foreign1.GetComponent(RepositionBackground).colored == 1)
			break;

		x = Random.Range(0, 101);
		seti();
		if(i < 2) break;

		if(tank[i] == 0){
			flag = 1;
			tank[i]++;
			foreign.GetComponent(RepositionBackground).tank[i]++;
			break;
		}
		else{
			tank[i] = (tank[i] + 1) % 7;
			foreign.GetComponent(RepositionBackground).tank[i] = (foreign.GetComponent(RepositionBackground).tank[i] + 1) % 7;
		}
			
	count++;	
	}while(count < 10);

	if(flag == 1){
		setcolored();
		colored = 1;	
	}
	else{
		colored = 0;
		setsimple();
	}
}

function seti(){
	if(x < 13)
		i = 0;
	else if(x < 25)
		i = 1;
	else if(x < 40)
		i = 2;
	else if(x < 55)
		i = 3;
	else if(x < 70)
		i = 4;
	else if(x < 85)
		i = 5;
	else if(x < 101)
		i = 6;
} 

function setcolored(){
	if(x < 40)
		rend.material.mainTexture = textures[2];
	else if(x < 55)
		rend.material.mainTexture = textures[3];
	else if(x < 70)
		rend.material.mainTexture = textures[4];
	else if(x < 85)
		rend.material.mainTexture = textures[5];
	else if(x < 101)
		rend.material.mainTexture = textures[6];
}
function setsimple(){
	if(x < 13)
		rend.material.mainTexture = textures[0];
	else if(x < 25)
		rend.material.mainTexture = textures[1];
}
function repositionBg(){
	choose();
	/*x = Random.Range(0, 101);
	if(x < 50)
		rend.material.mainTexture = textures[0];
	else if(x < 75)
		rend.material.mainTexture = textures[1];
	else if(x < 80)
		rend.material.mainTexture = textures[2];
	else if(x < 85)
		rend.material.mainTexture = textures[3];
	else if(x < 90)
		rend.material.mainTexture = textures[4];
	else if(x < 95)
		rend.material.mainTexture = textures[5];
	else if(x < 101)
		rend.material.mainTexture = textures[6];*/
	this.transform.position.y = this.transform.position.y + (length * 2);
}
