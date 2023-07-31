const button = document.querySelector('.btn');
const search = document.querySelector('#btn1');
const inpt = document.querySelector('.int');
const heading = document.querySelector('.h1');
const tempt_tem = document.querySelector('.temprtr');
const photo = document.querySelector('.img');



button.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('darkmode');
})

search.addEventListener('click', () => {
    checkWeather(inpt.value);
})

async function checkWeather(city) {
    const api_key = `06d17e6aae8aed9fe46fcb62b0df2f2b`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    tempt_tem.innerHTML = `${Math.round(weather_data.main.temp-273.15)}℃`;
    heading.innerHTML = `${weather_data.name}`;


    switch (weather_data.weather[0].main) {
        case 'Cloud':
            photo.src = "./Images/cloud.png";
            break;

        case 'Clear':
            photo.src = "./Images/sunny.png";
            break;

        case 'Haze':
            photo.src = "./Images/haze.png";
            break;

        case 'Rain':
            photo.src = "./Images/rain.png";
            break;

        case 'Snow':
            photo.src = "./Images/snow.png";
            break;

        case 'Strom':
            photo.src = "./Images/strom.png";
            break;

        case 'Mist':
            photo.src = "./Images/mist.png";
            break;

        case 'Partlycloudy':
            photo.src = "./Images/partlycloudy.png";
            break;
    }

}