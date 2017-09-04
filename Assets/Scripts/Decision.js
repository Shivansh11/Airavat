function Start () {
	if(!PlayerPrefs.HasKey("ins")){
		PlayerPrefs.SetInt("ins", 0);
	}
	if(PlayerPrefs.GetInt("ins") == 0)
		SceneManagement.SceneManager.LoadScene("instr");
	else
		SceneManagement.SceneManager.LoadScene("load");
}
