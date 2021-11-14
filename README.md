# MySpace93 Toolbox

![Creative Commons 0](https://i.creativecommons.org/p/zero/1.0/88x31.png)

Due to the demise of Windows 93 MySpace, I am releasing the source of my toolkit I used to scrape, interact with, and analyze Windows 93 and its users.

## Why I joined and developed these tools

I at first never signed up for Windows 93 MySpace because I actually didn't know it was a real website I could sign up for, otherwise I would have done it sooner than I did. But when I did sign up I figured I might try to poke at the platform, and what I found was astonishing.

* No rate limiting
* Many account actions are get requests, meaning they can be hijacked, as all it checks is the Referer matches, and browsers used to pass Referer for external resources like images, etc.
* Poorly implemented filters against request forgery (as described above) in CSS

I learned a lot about the security problems of the website months before the full website got leaked.

But before that would happen, **I was gonna do what I could to rise to fwiend dominance on Windows 93 MySpace**. Seeing this total lack of rate limiting, I developed a dirty little tool that sent friend requests out as fast as possible. I was able to send a friend request to every user on the platform in the matter of hours because no rate limiting, which I've run a few times (first over the whole friends list, then in batches after that) to be sure I sent everyone on the platform a friend request. 

Speaking personally with Tom/Jankenpopp, they were OK with me using the tools I developed, as long as I was not disruptive, but asked me to not redistribute them as long as Windows 93 MySpace is up. I kept true to that promise, and kept the tools to myself. But Windows 93 MySpace is dead now, so many of these tools aren't of any value anymore anyway. 
So I continued to use them and I developed new tools.

## The tools

*Warning: These tools were developed in-house as quickly as possible to keep up with my demands and are largely uncommented and have quirks, as this toolbox was supposed to only be internal to me. And since Windows 93 MySpace is killed, there is little use for these tools anymore.*

* Mass friend request tool
* Mass message sending tool (which I abandoned very quickly because I found it to be useless in my case, and spammy)
* Tools to iterate the number of friends of every user on the website, which I used to keep track of how many friends I had compared to others.

I used my tools to gain friend dominance, and monitor my rise as one of the most friended people on Windows 93 MySpace... all while it was happening. I was able myself go from Top 20 or so to finally resting at Top 6 most friended person on the entire platform.

These tools are Node.JS, and depend on Axios, a library for sending HTTP requests. You can install it by just running `npm install` in the directory.

## The friend data

I've already done the work of creating a final tally of every Windows 93 MySpace user, sorted by # of friends, which is available at [myspace_most_friended.csv](https://github.com/dangeredwolf/myspace93-toolbox/blob/master/myspace_most_friended.csv). You can just find your display name or ID and check which line it's on. To count the number of lines, you should open it in a text editor or spreadsheet software (Microsoft Excel, Google Sheets) on your computer.

### Licensing

The tools I developed, and the scraped data I collected, I am making available under CC0 so that anyone can learn and take from it.
