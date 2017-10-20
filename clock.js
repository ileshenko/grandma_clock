var timeUpdateInterval = 15 * 1000;
var messageUpdateInterval = 60 * 60 * 1000;
var colorUpdateInterval = 10 * 60 * 1000;

updateTime();
setInterval(updateTime, timeUpdateInterval);

updateMessage();
setInterval(updateMessage, messageUpdateInterval);

var nightMode = false;
setInterval(function() {
	nightMode = !nightMode;
	document.body.className = nightMode ? "night-mode" : "";
}, colorUpdateInterval);

// Uncomment this to periodically reload the page (and get updates from the server)
// setInterval(function() {location.reload();}, 15 * 60 * 1000);

function updateTime()
{
	var now = new Date();
	document.getElementById("date").innerText =
		now.toLocaleString("rus-RU", {year: "numeric", month: "long", day: "numeric" });
	document.getElementById("day-time").innerText =
		now.toLocaleString("rus-RU", {weekday: "long"/*, hour: "numeric", minute: "2-digit"*/});
}

function updateMessage()
{
	var now = new Date();
	var message = "";

	for (var i = 0; i < messages.length; i++)
	{
		var d = new Date(messages[i][0]);

		if (now.getFullYear() == d.getFullYear()
			&& now.getMonth() == d.getMonth()
			&& now.getDate() == d.getDate())
		{
			message += messages[i][1] + "\n";
		}
	}

	if (message == "")
	{
		message = "~"
	}

	document.getElementById("message").innerText = message;
}
