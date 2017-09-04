public var rb2d : Rigidbody2D;

function Start () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	rb2d = this.GetComponent(Rigidbody2D);
	rb2d.velocity = new Vector2(0, -0.5);
}

