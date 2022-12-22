const slides = document.querySelectorAll(".slider")
slides.forEach(
    (slide,index) => {
       slide.style.left = `${index*100}%`
    }
)
let counter = 0;
const slideimage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
const gonext = () =>{
    if(counter==3)
    counter = 0;
    else
    counter++;
    slideimage();
}
const goprev = () =>{
    counter--;
    slideimage();
}