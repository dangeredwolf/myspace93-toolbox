// Utility for sending mass friends on Windows 93 MySpace

const axios = require("axios")

let incorrect;

let start = 78600;
let end = 79100;

const cookie = String(require("fs").readFileSync("cookie"));

function doRequest(flag, callback) {

	reqObj = {
		method:"get",

		headers:
	    {
			"Connection": "keep-alive",
			"sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="90", "Microsoft Edge";v="90"',
			"sec-ch-ua-mobile": "?0",
			"Upgrade-Insecure-Requests": 1,
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36 Edg/90.0.818.42",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Sec-Fetch-Site": "same-origin",
			"Sec-Fetch-Mode": "navigate",
			"Sec-Fetch-Dest": "document",
			"Accept-Encoding": "gzip, deflate, br",
			"Accept-Language": "en-US,en;q=0.9",
			"Cookie": cookie,
	        "Origin": "https://myspace.windows93.net",
			"Referer": "https://myspace.windows93.net/?id=" + flag
	    },

	    url:"https://myspace.windows93.net/invitation.php?id=" + flag
	};

	reqObj.proxy = {
		host:"localhost",
		port:8888
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

		process.exit(1);
	});

}

var currentOne = start;

function go() {

	doRequest(currentOne, function(thing) {
		console.log("Successfully friend requested " + currentOne);
		
		currentOne++;

		if (end > currentOne) {
			setTimeout(go, 0);
		}

	})
}

// 4 friend-seeking threads

go();
go();
go();
go();