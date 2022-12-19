//Unsplash API
const count = 10;
const apiKey = "oikMZCozt8P5wmB88_b5OuAyOYECVnH3HqrU78SlnfI";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos for API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    //catch error
  }
}

//on onload
getPhotos();
