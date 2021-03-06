const images = document.querySelectorAll("[src-data]");

function preloadImage(img){
    const src = img.getAttribute("src-data");
    if(!src){
        return;
    }
    img.src = src;
}

const imgOptions = {};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

