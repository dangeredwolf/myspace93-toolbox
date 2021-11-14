const axios = require("axios")
const fs = require("fs");

let incorrect;

let start = 1;
let end = 85680;

let output = fs.createWriteStream("friends.csv",{
	flags: "a"
});

let status = {}

function findLowestIncomplete() {
	let lowest = 0;

	while (true) {
		if (status[lowest]) {
			lowest++;
		} else {
			return lowest;
		}
	}
}


// Note: the numbers below are very out of date and were used as a rudimentary list before I created the proper script to do it

// #1 Tom (1) 79000+
// #2 Matt (356) 27132 
// ???? koala71783 (3124) 14447
// ???? llilywebskateboarder (1496) 9539
// ???? (7567) 7800
// ???? Jaden Desmond (3532) 5500
// ???? dangeredwolf (77717) 5240
/// ???? (8531) 5281
// ???? jtracome87 (1216) 3204
// ???? Connor (982) 1700

function doRequest(flag, callback) {

	reqObj = {
		method:"get",

		headers:{},

		url:"https://myspace.windows93.net/?id=" + flag
	};

	var req = axios(
	    reqObj
	).then((data) => {
		// console.log(data)
		if (typeof data === "object") {
			// console.log(data)
			callback(data);
		}
	}).catch(e => {
	    console.error(`Request error: ${e.message}\nOccurred during a request`);

			console.log(e.request);
		if (e.response) {
			console.log(e.response.data);
			console.log(e.response.status);
			console.log(e.response.headers);
		} else {
		}
		
		doRequest(flag, callback);
	});

}

var currentOne = start;

let maxFriendID = 0;
let maxFriends = 0;

let scoreboard = [];

function go() {

	let thisNum = findLowestIncomplete();
	status[thisNum] = true;

	doRequest(thisNum, function(thing) {

		thing = String(thing.data);
		let count = parseInt(thing.match(/(?<=<span class="fwiendCount">)\d+(?=<\/span>)/g));

		if (isNaN(count)) {
			// console.log("User " + thisNum + " doesn't exist");
			currentOne++;
			setTimeout(go, 0);
			return;
		}

		let name = thing.match(/(?<=<h2 class="uName" id="name">).+(?=<\/h2>)/g);

		scoreboard.push({friends:count, id:thisNum});

		if (count >= 0) {
			console.log(name + " " + thisNum + " has " + count + " friends");
			output.write(name + "," + thisNum + "," + count + "\n");
		}

		if (count > maxFriends) {
			maxFriendID = thisNum;
			maxFriends = count;
			// console.log("This person has the most friends now.");
		} else {
			// console.log("The person with the most friends is " + maxFriendID + " with " + maxFriends + " friends");
		}

		if (end > thisNum) {
			setTimeout(go, 0);
		}

	})
}

// function printScoreboard() {
// 	scoreMap = scoreboard.map((v, i) => {
// 		let test = v.friends;
// 		return v;
// 	})

// 	scoreMap.sort(function(a,b) {
// 		if (a.value > b.value) {
// 			return 1;
// 		}
// 		if (a.value < b.value) {
// 			return -1;
// 		}
// 		return 0;
// 	});

// 	console.log(scoreMap);

// 	setTimeout(printScoreboard,1000);

// 	return;

// 	console.log(`------------------------------------------`);

// 	for (let i = 0; i < 10; i++) {
// 		if (scoreboard[i])
// 			console.log(`| ${i} | ${scoreboard[i].id} | ${scoreboard[i].friends} |`)
// 	}
// }

// printScoreboard();

go();
setTimeout(go, 100);
setTimeout(go, 200);
setTimeout(go, 300);
setTimeout(go, 400);
setTimeout(go, 500);
setTimeout(go, 600);
setTimeout(go, 700);
setTimeout(go, 800);
setTimeout(go, 900);
setTimeout(go, 1000);
setTimeout(go, 1100);
setTimeout(go, 1200);
setTimeout(go, 1300);
setTimeout(go, 1400);