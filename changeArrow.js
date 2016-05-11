

function changeArrow(){
	var ranDir = Math.ceil(Math.random()*2);
	var dirChosen;
	if( ranDir == 1){
		dirChosen = 'left';
		document.getElementById('arrowLeft').style.display="block";
		document.getElementById('clickMe').style.display="none";
	}else if( ranDir == 2){
		dirChosen = 'right';
		document.getElementById('arrowRight').style.display="block";
		document.getElementById('clickMe').style.display="none";
	}else{
		console.log('Error: ranDir != 1||2; ranDir=='+ranDir);
	}
	console.log('Direction: '+dirChosen);
	setTimeout(normal, 3000);
}

function normal(){
	document.getElementById('arrowLeft').style.display="none";
	document.getElementById('arrowRight').style.display="none";
	document.getElementById('clickMe').style.display="block";
}