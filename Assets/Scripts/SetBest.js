function Start () {
	if(!PlayerPrefs.HasKey("best")){
		PlayerPrefs.SetInt("best", 0);
	}	

	GetComponent(Text).text += PlayerPrefs.GetInt("best");
}

