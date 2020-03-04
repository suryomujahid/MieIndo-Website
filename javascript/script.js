var sliderIndex = 0;
showSlides(sliderIndex);

function showSlides(){
    var x;
    var slides = document.getElementsByClassName("slider");
    for (x = 0; x < slides.length; x++){
        slides[x].style.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > slides.length) {
        sliderIndex = 1;
    }
    slides[sliderIndex-1].style.display= "block";
    setTimeout(showSlides, 5000);
}