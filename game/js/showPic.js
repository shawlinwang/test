function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
     var parent = targetElement.parentNode;
     if(parent.lastChild == targetElement){
         parent.appendChild(newElement); 
     }else{
          parent.insertBefore(newElement,targetElement.nextSibling);
     }
}

function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var addImg = document.addElement("img");
	addImg.setAttribute("id","placeholder");
	addImg.setAttribute("src","img/back.png");
	addImg.setAttribute("alt","This a back!");
	var addP = document.addElement("p");
	p.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	addP.appendChild(desctext);
	document.getElementsByTagName("body")[0].appendChild(addImg);
	document.getElementsByTagName("body")[0].appendChild(addP);
	var gallery = document.getElementById("imagegallery");
	insertAfter(addImg,gallery);
	ininsertAfter(addP,addImg);
}

function parepareGallery(){
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0;i<links.length;i++){
		links[i].onclick = function(){
			return showPic(this);
		}
		links[i].onkeypress = links[i].onclick;
	}
}


function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")){
		var text = whichpic.getAttribute("title");
	}else{
		var text = "";
	}
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}
	return false
}


addLoadEvent(preparePlaceholder)
addLoadEvent(parepareGallery)