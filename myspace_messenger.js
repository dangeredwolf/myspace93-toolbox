const axios = require("axios")

let incorrect;

// let start = 160;
// let end = 10000;

let start = 77968;
let end = 77968;

function doRequest(flag, callback) {

	reqObj = {
		method:"post",

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
			"Cookie": "PHPSESSID=c1f4glflaml10g7pt921mcp6l5",
	        "Origin": "https://myspace.windows93.net",
			"Referer": "https://myspace.windows93.net/send.php?id=" + flag
	    },

	    url:"https://myspace.windows93.net/mail.php",

	    data:"sub=Greetings%21%21+owo&message=Hello+from+dangered+wolf%0D%0A---%0D%0AI%27m+just+messaging+you+to+say+hi%21+I%27m+a+gay+furry+trying+to+meet+as+many+new+friends+as+possible+on+Myspace.+I+just+joined+Windows+93+Myspace+recently.+I+was+on+the+OG+Myspace+back+in+the+day%2C+so+this+site+helped+me+relive+some+old+memories.%0D%0A%0D%0A*-*%0D%0A%0D%0AOh%2C+by+the+way%21+**I%27ve+sent+you+a+friend+request+if+you+haven%27t+already+accepted+it+yet.**%0D%0A%0D%0ACheck+out+my+profile%21%0D%0A---%0D%0AI+modeled+it+after+my+%5Bown+website%5D%28https%3A%2F%2Fdangeredwolf.com%29%2C+so+it+looks+very+clean+and+modern.+*I%27m+a+web+designer+for+the+last+7+years.*%0D%0A%0D%0APlease+friend+me+on+Myspace+if+you+want+to+support+me+in+my+journey+to+get+more+friends%21%0D%0A---%0D%0A%0D%0A%0D%0AI%27m+also+on+other+platforms+as+well%2C+I+have+a+%5BYouTube+channel+with+7.5K+subs%5D%28https%3A%2F%2Fyoutube.com%2Fc%2Fdangeredwolf%29+and+a+%5BTwitter+account%5D%28https%3A%2F%2Ftwitter.com%2Fdangeredwolf%29%0D%0A%0D%0A*-*%0D%0A%0D%0A**Thanks+for+reading+my+message%21+I+hope+you+have+a+great+day.**&user=" + flag
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

	switch(currentOne) {
		case 1:
		case 5:
		case 6:
			console.log("Skipping " + currentOne);
			currentOne++;
			setTimeout(go, 0);
			return;
	}

	doRequest(currentOne, function(thing) {
		console.log("Successfully messaged " + currentOne);
		
		currentOne++;

		if (end > currentOne) {
			setTimeout(go, 0);
		}

	})
}

go();