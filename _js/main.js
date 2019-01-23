var slides = document.querySelectorAll(".slide");
var slideIndex = 0;

for (var i = 0; i < slides.length; i += 1) {
	if(slides[i] != slides[slideIndex]) {
		slides[i].classList.add("next-slide");
	}
	else {
		slides[i].classList.add("active-slide");
	}
}

document.addEventListener("keyup", function(e) {
  // Go to next slide
	if(e.key == "ArrowDown" && slideIndex < slides.length -1) {
		slides[slideIndex].classList.add("previous-slide");
		slides[slideIndex].classList.remove("active-slide");
		slideIndex += 1;
		slides[slideIndex].classList.add("active-slide");
		slides[slideIndex].classList.remove("next-slide");
  }
  // Go to previous slide
	if(e.key == "ArrowUp" && slideIndex > 0) {
		slides[slideIndex].classList.add("next-slide");
		slides[slideIndex].classList.remove("active-slide");
		slideIndex -= 1;
		slides[slideIndex].classList.add("active-slide");
		slides[slideIndex].classList.remove("previous-slide");
	}
	updateSliderNumber();
})

var sliderNumbers = document.querySelector(".slideNumbers");
var sliderLevel = document.querySelector(".sliderCurrentLevel");
var sliderGauge = document.querySelector(".sliderGauge");
updateSliderNumber();


function updateSliderNumber() {
	sliderNumbers.innerHTML = (slideIndex+1)+" / "+slides.length;
	var sliderPercent = ((slideIndex+1) * 100 / slides.length);
	sliderLevel.style.height = sliderPercent+"%";
}
