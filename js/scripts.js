


window.addEventListener('load', function(){
	window.onscroll = function(){ stickyNav() };

	var ham = document.querySelector("#ham-icon");
	ham.addEventListener('click', function(){
		var x = document.querySelector("nav");
		if (x.style.display == "block"){
			x.style.display = "none";
		}
		else{
			x.style.display = "block";
		}
	})

	var navbar = document.querySelector("#nav-wrap");
	var sticky = navbar.offsetTop;

	
	function stickyNav(){
		if (window.pageYOffset >= sticky){
			navbar.classList.add("sticky");
		}
		else {
			navbar.classList.remove("sticky");
		}
	}

	
}, false);

