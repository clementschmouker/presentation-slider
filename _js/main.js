var slides = document.querySelectorAll(".slide");
var slideIndex = 0;

slides.forEach(function(item, index)Â {
	if(item != slides[slideIndex]) {
		item.classList.add("next-slide");
	}
	else {
		item.classList.add("active-slide");
	}
})

document.addEventListener("keyup", function(e) {
	if(e.keyCode == 40 && slideIndex < slides.length -1) {
		slides[slideIndex].classList.add("previous-slide");
		slides[slideIndex].classList.remove("active-slide");
		slideIndex += 1;
		slides[slideIndex].classList.add("active-slide");
		slides[slideIndex].classList.remove("next-slide");
	}
	if(e.keyCode == 38 && slideIndex > 0) {
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
