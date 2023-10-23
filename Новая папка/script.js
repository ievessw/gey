 let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 500;
    if (offset > 3500) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 500;
    if (offset < 0) {
        offset = 3500;
    }
    sliderLine.style.left = -offset + 'px';
});
