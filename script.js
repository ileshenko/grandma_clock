updateTime();
setInterval(updateTime, 15 * 1000);

updateMessage();
setInterval(updateMessage, 60 * 60 * 1000 * 0 + 1000);

// Uncomment this to periodically reload the page (and get updates from the server)
// setInterval(function() {location.reload();}, 15 * 60 * 1000);

function updateTime()
{
	console.log('updating time');
	var now = new Date();
	document.getElementById("date").innerText =
		now.toLocaleString('rus-RU', {year: 'numeric', month: 'long', day: 'numeric' });
	document.getElementById("day-time").innerText =
		now.toLocaleString('rus-RU', {weekday: 'long', hour: '2-digit', minute: '2-digit'});
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
