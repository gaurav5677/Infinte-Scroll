const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photoArrays = [];
//Unsplash API
const count = 10;
const apiKey = "oikMZCozt8P5wmB88_b5OuAyOYECVnH3HqrU78SlnfI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttribute(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// creat elements for links and photos add to dom
function displayPhotos() {
  // Run function for each object in photosArray
  photoArrays.forEach((photo) => {
    // creat <a> to linkt to unsplash
    const item = document.querySelector("a");
    setAttribute(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank"); // for the new window
    // Creat <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttribute(img, {
      src: photo.urls.regualr,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // put <img> inside <a> then put both inside imageContainer element

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos for API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photoArrays = await response.json();
    displayPhotos();
  } catch (error) {
    //catch error
  }
}

//Check to see if scrolling near bottom of page , Load More photos
window.addEventListener("scroll", () => {
  console.log("scrolled");
});
//on onload
getPhotos();
