const apod = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=TsPbQtElaFs5xkuOrCjUlbOx46X0UHpLBZpGYHRc';
const request = new XMLHttpRequest;

request.open('GET', apod);
request.responseType = 'json';
request.send();

request.onload = function() {
    let response = request.response;
    main(response)
}

function main(response){
    for(let photo in response.latest_photos){
        console.log(response.latest_photos[photo])
        document.querySelector('.container-fluid').innerHTML += `<img class="img-fluid" src="${response.latest_photos[photo].img_src}">`
    }
}