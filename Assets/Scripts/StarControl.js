import UnityEngine.UI;
public var myMaterials: Material[];
public var choice : int; 
public var airavata : GameObject;
public var rotor : int;
public var score : GameObject;
public var points : String;
public var num : int;
function Start () {
	choice = Random.Range(0,5);
	GetComponent.<Renderer>().material = myMaterials[choice];
	rotor = Random.Range(0,2);
	score = GameObject.FindWithTag("score");
	airavata = GameObject.FindWithTag("Player");
}

function Update () {
	transform.position.y -= Time.deltaTime * 2.5;
	if(rotor == 0)
		transform.Rotate(Vector3.up * Time.deltaTime*10);
	else 
		transform.Rotate(-Vector3.up * Time.deltaTime*10);
	if(transform.position.y < -9.3){
		if(airavata.GetComponent(Movement).exploded != 1){
			points = score.GetComponent(Text).text;
			num = parseInt(points);
			num++;
			score.GetComponent(Text).text = ""+num;
			if(num > PlayerPrefs.GetInt("best"))
				PlayerPrefs.SetInt("best", PlayerPrefs.GetInt("best") + 1);
		}
		Destroy(gameObject);
	}
}

