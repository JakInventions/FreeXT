
async function loadSettings(){
	
	document.body.style.background = "#282828";
	
	await sleep(1000);
	
	$(document).ready(function(){
		
		$("#settingsContainer").fadeIn(500);
		
	});
	
};

function openIndex(){
	
	$(document).ready(function(){
		
		$("#settingsContainer").fadeOut(500, async function(){
			
			document.body.style.background = "#fffd8c";
			
			await sleep(1000);
			
			loadFunction();
			
		});
		
	});
	
}

/*try{
	navigator.Backbutton.goBack(function() {
	  alert('success')
	}, function() {
	  alert('fail')
	});
}
catch(e){
	
	alert("mission failed")
	
}*/

