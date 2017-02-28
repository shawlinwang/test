var abbrKeyValue = new Object();
function displayAbbreviations(){
	var abbrs = document.getElementsByTagName("abbr");
	if(abbrs.length < 1) return false;
	for(var i = 0; i < abbrs.length; i++){
		var abbr = abbrs[i];
		if(abbr.childNodes.length <1) continue;
		if(abbr.getAttribute("title")){
			var abbrTitle = abbr.getAttribute("title");
			var addrText = abbr.lastChild.nodeValue;
			abbrKeyValue[addrText] = abbrTitle;
		}
	}
}

function prepareAbbrKeyValue(){
	var newDl = document.createElement("dl");
	var body = document.getElementsByTagName("body")[0];
	var header = document.createElement("h2");
	var headerText = document.createTextNode("Abbreviations");
	var isNull = false;
	body.appendChild(header);
	header.appendChild(headerText);
	for(var key in abbrKeyValue){
		var newdt = document.createElement("dt");
		var newdd = document.createElement("dd");
		var textNewDt = document.createTextNode(key);
		var textNewDd = document.createTextNode(abbrKeyValue[key]);
		newdt.appendChild(textNewDt);
		newdd.appendChild(textNewDd);
		body.appendChild(newDl);
		newDl.appendChild(newdt);
		insertAfter(newdd,newdt);		
	}	
	if(newDl.length<1) return false;
}

function displayCitations(){
	var blockqoutes = document.getElementsByTagName("blockquote");
	if(blockqoutes.length < 1) return false;
	for(var i = 0; i < blockqoutes.length; i++){
		var blockqoute = blockqoutes[i]
		if(!blockqoute.getAttribute("cite")) continue;
		var url = blockqoute.getAttribute("cite");
		var qouteElements = blockqoute.getElementsByTagName("*");
		if(qouteElements.length < 1) continue;
		var elem = qouteElements[qouteElements.length - 1];
		var link = document.createElement("a");
		var linkText = document.createTextNode("source");
		link.appendChild(linkText);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
	}
}
addLoadEvent(displayAbbreviations);
addLoadEvent(prepareAbbrKeyValue);
addLoadEvent(displayCitations);
