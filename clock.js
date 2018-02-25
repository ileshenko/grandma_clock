var timeUpdateInterval = 15 * 1000;
var messageUpdateInterval = 5 * 60 * 1000;
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

function getMessageForDay(date)
{
	var message = "";

	for (var i = 0; i < messages.length; i++)
	{
		var d = new Date(messages[i][0]);

		if (date.getFullYear() == d.getFullYear()
			&& date.getMonth() == d.getMonth()
			&& date.getDate() == d.getDate())
		{
			message += messages[i][1] + "\n";
		}
	}

	return message;
}

function updateMessage()
{
	var today = new Date();
	var tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);
	var todayNoon = new Date();
	todayNoon.setHours(13);
	todayNoon.setMinutes(30);

	var messageToday = getMessageForDay(today);
	var messageTomorrow = getMessageForDay(tomorrow);

	var message = "";

	if (today <= todayNoon && messageToday)
	{
		message += "Сегодня - " + messageToday;
	}
	if (messageTomorrow)
	{
		message += "Завтра - " + messageTomorrow;
	}

	if (message == "")
	{
		message = "~";
	}

	document.getElementById("message").innerText = message;
}
