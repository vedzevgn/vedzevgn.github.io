const bigMenu = document.getElementById("bigMenu");
		const headBack = document.getElementById("headBack");
		let isVisible = false;

		document.getElementById("menuButton").onclick = function() {
  	if(isVisible == true){
  		headBack.style.height = "70px";
  		bigMenu.style.opacity = "0";
  		bigMenu.style.visibility = "hidden"
  	}
  	if(isVisible == false){
  		headBack.style.height = "100vh";
  		bigMenu.style.opacity = "1";
  		bigMenu.style.visibility = "visible"
  	}
  	isVisible = !isVisible

		}