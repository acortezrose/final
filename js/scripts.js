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

	var acc = document.querySelectorAll(".accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    /* Toggle between adding and removing the "active" class,
	    to highlight the button that controls the panel */
	    this.classList.toggle("active");

	    /* Toggle between hiding and showing the active panel */
	    var panel = this.nextElementSibling;
	    if (panel.style.display === "block") {
	      panel.style.display = "none";
	    } else {
	      panel.style.display = "block";
	    }
	  });
	}

	window.onclick = function(event){
		if (!document.querySelector("#ham-icon").contains(event.target)) {
			console.log("clicked outside of icon")
		    var dropdown = document.querySelector("nav");
		    if (dropdown.style.display == "block") {
		        dropdown.style.display = "none";
		        console.log("hiding");
		    }
	  }
	}

	
	function stickyNav(){
		if (window.pageYOffset >= sticky){
			navbar.classList.add("sticky");
		}
		else {
			navbar.classList.remove("sticky");
		}
	}

	
}, false);

