private static var instance : Music;
public static function GetInstance() : Music{
	return instance;
}
function Awake () {
	if(instance != null && instance != this){
		Destroy(this. gameObject);
		return;
	}
	else{
		instance = this;
	}
	DontDestroyOnLoad(this.gameObject);
}

function Update () {
	if(GetComponent.<AudioSource>().isPlaying == false)
		GetComponent.<AudioSource>().Play();
}	
