// show the toggel mnue
let mnue = document.querySelector("#menu")
let btnToOPen = document.querySelector(".open-menu") 
let btnToClose = document.querySelector(".close-menu")
btnToOPen.addEventListener("click", ()=>{
    mnue.classList.add("active")
})
btnToClose.addEventListener("click", ()=>{
    mnue.classList.remove("active")
})
//handle header links 
let headerLinks = document.querySelectorAll("[header-link]")
console.log(headerLinks);
headerLinks.forEach(e=>{
    e.addEventListener("click", ()=>{
        headerLinks.forEach(e=>{
            e.classList.remove("active")
        })
        e.classList.add("active")
    })
})
// /////////////////////////////////////////////
const parallaxItems = document.querySelectorAll("[data-parallax-item]");
console.log(parallaxItems);
let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }
  
  if(window.innerWidth <= 684 ) {  
    // console.log(222222);
    parallaxItems.forEach(i=>{
        i.attributes.removeNamedItem('data-parallax-item');
        i.attributes.removeNamedItem('data-parallax-speed');
        parallaxItems[i].style.transform = `translate(${0})`;

    })
    }else if(window.innerWidth >= 684 ){
        parallaxItems.forEach(i=>{
            i.setAttribute('data-parallax-item');
            i.setAttribute('data-parallax-speed',"4");

            })
    }
});

console.log(window.innerWidth);
