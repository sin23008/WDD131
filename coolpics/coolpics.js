function toggleList() {
    const ul = document.getElementById("links");
    ul.classList.toggle("show");
}

function handleResize() {
    const menu = document.querySelector("#links");
    if (window.innerWidth > 1000) {
      menu.classList.add("show");
    } else {
      menu.classList.remove("show");
    }
  }
  
  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const element = event.target;
    // get the src attribute from that element and 'split' it on the "-"
    const imageSrc = element.getAttribute('src');
    const imageParts = imageSrc.split('-');
    const imageAlt = element.getAttribute('alt');

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImageSrc = imageParts[0] + "-full.jpeg";

    // insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, imageAlt));

    setTimeout(() => {
      document.querySelector(".viewer").classList.add("show-viewer");
    }, 50);
    
    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector('.close-viewer').addEventListener('click', closeViewer)
  }

  function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.classList.remove('show-viewer');
    setTimeout(() => viewer.remove(), 500);
  }

  
  document.querySelector('.gallery').addEventListener('click', viewHandler)

  handleResize();
  window.addEventListener('resize', handleResize);