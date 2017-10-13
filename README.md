# Grandma Clock

Open `index.html` in a browser, and the clock will start ticking.

Daily messages can be scheduled by editing `messages.js`. The format of the file is:

```javascript
var messages = [
	["2017-10-14", "What did the fox say?"],
	["2017-10-13", "Reminder: The Hunger Games start tomorrow!"],
];
```

The file `clock.js` contains the app logic, and settings for update intervals.

The file `index.html` defines the structure of the page and its styling.
The scale of different elements can be controlled by changing the
`font-size` and `margin-top` properties at the top of the file.
