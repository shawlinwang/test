function insertParagraph(text){
	var str = "<p>";
	str += test;
	str += "</P>";
	alert(str);
	document.write(str);
}



window.onload = function(){
	var em = document.createElement("em");
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode("content");
	var testdiv = document.getElementById("testdiv");
	para.appendChild(txt1);
	em.appendChild(txt2);
	para.appendChild(em);
	para.appendChild(txt3);
	testdiv.appendChild(para);
	
}
