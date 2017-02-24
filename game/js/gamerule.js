var classcount_tag = document.getElementsByClassName("count")[0]
var ringhtCard = Math.floor(Math.random()*9);
var ul = document.getElementsByClassName("displayul")[0];
var img = ul.getElementsByTagName("img");
var resetbtn = document.getElementsByClassName("resetGame")[0];
var count = 3;
function findCard(){	
	for(var i = 0; i<img.length ; i++){
		img[i].onclick = function(){
			var value = this.getAttribute("index");
			if(count == 0){
				return false;
			}
			if(value != ringhtCard){
				count -= 1;
				classcount_tag.childNodes[0].nodeValue = count;
				this.setAttribute("src","img/king.png");
				if(count == 0){
					this.setAttribute("src","img/king.png");
					setTimeout(function(){alert("很遗憾，游戏结束 没有找到皇后");},200);
				}
			}
			else{
				this.setAttribute("src","img/queue.png");
				setTimeout(function(){alert("恭喜成功");},200);
				count = 0;
			}
		}
	}
}

function resetGame(){
	resetbtn.onclick = function(){
		for(var i = 0; i<img.length ; i++){
			img[i].setAttribute("src","img/back.png");
		}
		findCard();
	}
}
window.onload =function(){
	findCard();
	resetGame();
}