const NASA_APOD_API =
  "https://api.nasa.gov/planetary/apod?api_key=MKkDg29vVeoeIo8IBnrkriLhB0jyo9go6SjxDeKM";

fetch(NASA_APOD_API)
  .then((response) => response.json())
  .then((data) => {
    const apodElement = document.getElementById("apod");
    apodElement.innerHTML = `<h2>${data.title}</h2><img src=${data.url} alt=${data.title}> <p>${data.explanation}</p>`;
    console.log("data from NASA APOD API", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
