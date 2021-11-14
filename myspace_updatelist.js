// This script isn't relevant at all anymore because Windows 93 is kil

const axios = require("axios")

let incorrect;

// Lists of previously determined most friended users. I previously only tracked people with 1000+ friends
let list = [1,356,15248,3124,24201,1496,57058,7567,25270,69015,22275,23246,77717,3532,39683,8531,3049,5342,9945,25595,14276,10128,13451,11462,1216,13584,45137,13453,40677,53680,42912,19678,20934,8114,12411,12411,11906,52667,37239,46120,58881,12172,10490,47995,9102,16434,43167,25967,7115,53342,42361,5,34130,45832,45,13332,27136,51364,27699,62600,11281,9537,61750,15702,8006,11054,23579,2025,29076,31483,1962,20123,18847,75999,23873,982,35216,35428,53557,6111,3057,56680,7315,36346,14021,46166,12531,19624,6942,23736,71824,12385,22427,48086,50591,16696,3711,22979,56954,5423,6395,12354,262,31929,36554,58967,11973,5644,7214,10449,72179,18761,30658,28393,26080,65431,56154,6,23856,4161,24184,59022,3536,57645,16094,30678,31407,53274,52569,55434,59995,10191,5074,3545,46405,66497,5419,55998,909,17584,8263,51147,44895,29970,27425,48509,6776,19175,23433,74118,37555,48283,56094,3046,60969,64131,40392,1909,68274,3083,74856,6013,4253,52301,26896,35298,7893,62794,3947,43524,70356,38299,7041,6791,27591,19069,60070,22632,49021,3380,2064,24338,3909,47081,30576,55497,10997,63038,44601,67172,75531,49122,60394]
let i = 0;

function doRequest(flag, callback) {

	reqObj = {
		method:"get",

		headers:{},

		url:"https://myspace.windows93.net/?id=" + flag
	};

	// Proxy through fiddler

	// reqObj.proxy = {
	// 	host:"localhost",
	// 	port:8888
	// };

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
		}

		process.exit(1);
	});

}

var currentOne = 0;

let maxFriendID = 0;
let maxFriends = 0;

let scoreboard = [];

function go() {

	let thisNum = currentOne;

	doRequest(list[currentOne], function(thing) {
		thing = String(thing.data);
		let count = parseInt(thing.match(/(?<=<span class="fwiendCount">)\d+(?=<\/span>)/g));

		if (isNaN(count)) {
			// console.log("User " + thisNum + " doesn't exist");
			currentOne++;
			setTimeout(go, 0);
			return;
		}

		let name = thing.match(/(?<=<h2 class="uName" id="name">).+(?=<\/h2>)/g);

		if (count >= 1000) {
			console.log(name + "," + list[thisNum] + "," + count + "");
		}
		
		currentOne++;

		if (list.length > thisNum) {
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