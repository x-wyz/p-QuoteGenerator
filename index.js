const quoteApi = "https://programming-quotes-api.herokuapp.com/quotes/random"
const twitterBase = "HTTPS://www.twitter.com/intent/tweet?text="

const author = document.getElementById("author")
const quote = document.getElementById("text")

const tweet = document.getElementById("tweet-quote")

function getQuote(){
	fetch(quoteApi)
	.then(response => response.json())
	.then(response => [response.en, response.author])
	.then(response => {
		quote.innerHTML = response[0]
		author.innerHTML = response[1]
		tweet.href = twitterBase + response[0]
	})
}

getQuote()

document.getElementById("new-quote").addEventListener("click", () => {getQuote()})