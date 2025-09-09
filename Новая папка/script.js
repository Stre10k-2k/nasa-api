const apikey = "H6XhSLzTf4hfr2KJRpVYWaNR92yZcbEdLl4iCdkb";

function request() {

    const parent = document.getElementById("output");

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {

                parent.innerHTML = `<h1>Error: ${error}</h1>`;
            }

            return response.json();
        })
        .then(data =>{
            console.log(data)

            parent.innerHTML = `
            <img class="img" src="${data.url}">
            <p class="output">${data.date}</p>
            `;
        })

        .catch(error => {
            parent.innerHTML = `<h1>Error: ${error}</h1>`;
        })
}