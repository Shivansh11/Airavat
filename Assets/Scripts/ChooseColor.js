public var star : GameObject;
var choose : int;
function Start () {
	choose = star.GetComponent(StarControl).choice;
	if(choose == 0)
		GetComponent(SpriteRenderer).color = new Color(1, 0.92, 0.016, 1);
	else if(choose == 1)
		GetComponent(SpriteRenderer).color = new Color(0, 0, 1.0, 1);
	else if(choose == 2)
		GetComponent(SpriteRenderer).color = new Color(0, 1, 0, 1);
	else if(choose == 3)
		GetComponent(SpriteRenderer).color = new Color(1, 0, 0, 1);
	else if(choose == 4)
		GetComponent(SpriteRenderer).color = new Color(1.0, 1.0, 1.0, 1);
}
