let mainImage = document.querySelector('#mainImage');
let subImages = document.querySelectorAll('#sub-img');
subImages.forEach(e=>{
    e.addEventListener('click',(img)=>{
        subImages.forEach(img=>{
            img.classList.remove('active')
        })
        mainImage.src = img.target.src;
        img.target.classList.add('active')
    })
})