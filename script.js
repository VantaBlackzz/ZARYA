document.addEventListener("DOMContentLoaded", function () {
	let slideIndex = 0;
		showSlides();

  	function showSlides() {
	let i;
    let slides = document.getElementsByClassName("mySlides");
    	for (i = 0; i < slides.length; i++) {
      	slides[i].style.display = "none";
    	}
    	slideIndex++;
    	if (slideIndex > slides.length) {
      	slideIndex = 1;
    	}
    	slides[slideIndex - 1].style.display = "block";
    	setTimeout(showSlides, 4000);
  	}
});
function openNav() {
  	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  	document.getElementById("myNav").style.width = "0%";
}
var modal = document.getElementById("id01");

window.onclick = function (event) {
	if (event.target == modal) {
    modal.style.display = "none";
	}
};
function openSM() {
	document.getElementById("SM").style.width = "100%";
}

function closeSM() {
	document.getElementById("SM").style.width = "0%";
};