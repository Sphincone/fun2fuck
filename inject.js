chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		walk(document.body);

function walk(node){
	var child, next;

	switch (node.nodeType){
		case 1:
		case 9:
		case 11:
			child = node.firstChild;
			while(child){
				next = child.nextSibling;
				walk(child);
				child = next;
				}
			break;
		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var fs = textNode.nodeValue;

    fs = fs.replace(/\bFunHaus\b/g, "FuckHaus");
	fs = fs.replace(/\bFunhaus\b/g, "FuckHaus");
    fs = fs.replace(/\bfunhaus\b/g, "fuckhaus");
	fs = fs.replace(/\bFUNHAUS\b/g, "FUCKHAUS");
	fs = fs.replace(/\bCapiche\b/g, "Chipotle");
	fs = fs.replace(/\bcapiche\b/g, "chipotle");
	
	textNode.nodeValue = fs;
}



		console.log("Fun to Fuck is completed. RIP Spoole and Joel :(.");
	}
	}, 10);
});