		fetch('quotes.json')
		.then(response => response.json())
		.then(data => {
		const randomIndex = Math.floor(Math.random() * data.quotes.length);
		const randomQuote = data.quotes[randomIndex];

		const linkElement = document.getElementById('link1');
		if (randomQuote.hasOwnProperty('author') && !!randomQuote.author) {
			document.getElementById('quote').innerHTML = "“" + randomQuote.text + "” ——" + randomQuote.author;
		} else {
			document.getElementById('quote').innerHTML = randomQuote.text;
		}
		if (randomQuote.hasOwnProperty('link') && !!randomQuote.link) {
			linkElement.href = randomQuote.link;
			linkElement.innerHTML = randomQuote.link_text;
		} else {
			linkElement.textContent = '\u00A0';
		}
	})
	.catch(error => console.error(error));
function reloadScript() {
  var oldScript = document.getElementById('quotesjs');
  var newScript = document.createElement('script');
  newScript.setAttribute('src', 'quotes.js');
  newScript.setAttribute('id', 'quotesjs');
  oldScript.parentNode.replaceChild(newScript, oldScript);
}
