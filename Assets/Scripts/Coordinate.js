public var loyalsheep : GameObject;
public var best : GameObject;
public var airavata : GameObject; 
public var pause : GameObject;
public var paused : GameObject;
public var start : GameObject;
public var credits : GameObject; 
public var exit : GameObject;
public var resume : GameObject;
public var hamburger : GameObject;
public var menu : GameObject;
public var score : GameObject;
public var ratebox : GameObject;
function Start () {
	loyalsheep.SetActive(false);
	best.SetActive(true);
	airavata.SetActive(false);
	pause.SetActive(false);
	paused.SetActive(false);
	start.SetActive(true);
	credits.SetActive(true);
	exit.SetActive(true);
	resume.SetActive(false);
	hamburger.SetActive(false);
	menu.SetActive(false);
	score.SetActive(false);
	ratebox.SetActive(false);
	if(!PlayerPrefs.HasKey("rate"))
		PlayerPrefs.SetInt("rate", 0);
	if(!PlayerPrefs.HasKey("died"))
		PlayerPrefs.SetInt("died", 0);
	if(airavata.activeSelf == false && PlayerPrefs.GetInt("rate") == 0 && PlayerPrefs.GetInt("died") > 0 && PlayerPrefs.GetInt("died") % 10 == 0){
		PlayerPrefs.SetInt("died", PlayerPrefs.GetInt("died") + 1);
		best.SetActive(false);
		start.SetActive(false);
		credits.SetActive(false);
		exit.SetActive(false);
		ratebox.SetActive(true);
	}

}
