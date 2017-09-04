public var ins : GameObject[];
public var count : int;
var i : int;
public var backButton : GameObject;
public var ship : GameObject;
public var star : GameObject;
public var left : GameObject;
public var right : GameObject;
public var glow : GameObject;
function Start () {
	backButton.SetActive(false);
	left.SetActive(false);
	right.SetActive(false);
	glow.SetActive(false);
	count = -1;
	next();
}
function next(){
	count++;
	if(count > 0){
		backButton.SetActive(true);
		ship.SetActive(false);
	}
	if(count == 1){
		star.SetActive(true);
		glow.SetActive(true);
	}
	else{
		star.SetActive(false);
		glow.SetActive(false);
    }
	if(count == 3)
		left.SetActive(true);
	else
		left.SetActive(false);
	if(count == 4)
		right.SetActive(true);
	else
		right.SetActive(false);
	if(count == 9){
		PlayerPrefs.SetInt("ins", 1);
		SceneManagement.SceneManager.LoadScene("load");	
	}
	else{
		for(i = 0; i < ins.length; i++)
			ins[i].SetActive(false);

		ins[count].SetActive(true);
	}
}

function back(){
	count--;
	if(count == 1){
		star.SetActive(true);
		glow.SetActive(true);
	}
	else{
		star.SetActive(false);
		glow.SetActive(false);
    }
	if(count == 3)
		left.SetActive(true);
	else
		left.SetActive(false);
	if(count == 4)
		right.SetActive(true);
	else
		right.SetActive(false);
	if(count == 0){
		backButton.SetActive(false);
		ship.SetActive(true);
	}
	for(i = 0; i < ins.length; i++)
		ins[i].SetActive(false);

	ins[count].SetActive(true);
}


