
import { images } from './gallery-items.js';



const ul = document.querySelector(".gallery")

ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.flexWrap = "wrap";
ul.style.gap = "24px"; 


  ul.innerHTML = images.reduce((html, {preview,original,description }) => 
  html + `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      style= "width:360px ", "height:"200px"
    />
  </a>
</li>`
, "")


// const liElements = ul.querySelectorAll("img");
// liElements.forEach(img => {
//   img.style.width = "360px";
//   img.style.height = "200px";
// });


ul.addEventListener("click", handleImage )


function handleImage(e){
  e.preventDefault();
  const target = e.target.dataset.source;

   if(!target){
    return 
   }

   const instance = basicLightbox.create((`<img src="${target}" />`))
   instance.show()

  window.addEventListener('keydown', (e) => {
    console.log(e.code)
  
    if(e.code === 'Escape'){
      instance.close()
    } 
  })
  
}

//how to get styles
// reduce for markup
// how to make markup
// dataset element 
// style el inside img
// e.preventDefault() - avoid downloading by default
// e.code 
// instance.close()
// window - 'keydown' 





















  






  