public var loyalsheep : GameObject;
public var best : GameObject;
public var score : GameObject;
public var airavata : GameObject; 
public var pause : GameObject;
public var paused : GameObject;
public var start : GameObject;
public var credits : GameObject; 
public var exit : GameObject;
public var resume : GameObject;
public var cross : GameObject;
public var hamburger : GameObject;
public var menu : GameObject;
public var spawnStars : GameObject;

function Update(){
	if(Input.GetKeyDown(KeyCode.Escape)){
		if(airavata.activeSelf == false)
			exitupp();
	}
}

function startup(){
	best.SetActive(false);
	start.SetActive(false);
	credits.SetActive(false);
	exit.SetActive(false);
	menu.SetActive(false);
	resume.SetActive(false);
	paused.SetActive(false);
	cross.SetActive(false);
	hamburger.SetActive(false);
	score.SetActive(true);
	airavata.SetActive(true);
	pause.SetActive(true);
	spawnStars.SetActive(true);
}
function pauseup(){
	resume.SetActive(true);
	paused.SetActive(true);
	cross.SetActive(true);
	hamburger.SetActive(true);
	pause.SetActive(false);
	Time.timeScale = 0;

} 
function resumeup(){
	resume.SetActive(false);
	paused.SetActive(false);
	cross.SetActive(false);
	hamburger.SetActive(false);
	pause.SetActive(true);
	Time.timeScale = 1;
} 

function restartup(){
	Time.timeScale = 1;
	SceneManagement.SceneManager.LoadScene("genesis");
}

function creditsup(){
	best.SetActive(false);
	start.SetActive(false);
	credits.SetActive(false);
	cross.SetActive(false);
	loyalsheep.SetActive(true);
}

function exitupp(){
	if(exit.activeSelf == false){
		exit.SetActive(true);
		start.SetActive(false);
		credits.SetActive(false);		
		best.SetActive(false);
		paused.SetActive(false);
		hamburger.SetActive(false);
		resume.SetActive(false);
		menu.SetActive(false);
	}
	else
		exitno();
}

function exityes(){
	Application.Quit();
}

function exitno(){
	if(airavata.activeSelf == true){
		exit.SetActive(false);
		paused.SetActive(true);
		hamburger.SetActive(true);
		resume.SetActive(true);
	}
	else{
		exit.SetActive(false);
		start.SetActive(true);
		credits.SetActive(true);		
		best.SetActive(true);
	}
}
function menuup(){
	if(menu.activeSelf == false){
		menu.SetActive(true);
		start.SetActive(false);
		credits.SetActive(false);		
		best.SetActive(false);
		paused.SetActive(false);
		resume.SetActive(false);
		cross.SetActive(false);
		exit.SetActive(false);
	}
	else
		menuno();
}
function menuno(){
	menu.SetActive(false);
	paused.SetActive(true);
	resume.SetActive(true);
	cross.SetActive(true);
}

function rateOk(){
	Application.OpenURL("market://details?id=com.loyalsheep.Airavat");
	PlayerPrefs.SetInt("rate", 1);
	restartup();
}

function rateNever(){
	PlayerPrefs.SetInt("rate", 1);
	restartup();
}

function rateLater(){
	restartup();
}
