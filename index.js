const container = document.querySelector('.container')
const input = document.querySelector('input')
const search = document.querySelector('.search')
const temp = document.querySelector('.temp')
const result = document.querySelector('.result')
const percentage = document.querySelector('.percentage')
const speed = document.querySelector('.speed')
const no = document.querySelector('.not')
const clear = document.querySelector('.clear')
const cloud = document.querySelector('.cloud')
const mist = document.querySelector('.mist')
const rain = document.querySelector('.rain')
const snow = document.querySelector('.snow')


const city = input.value;
const APIKey = '31477a0bfb57578222aa7bd181fe7cb1'



async function getdata() {
    console.log(typeof city);
    
    if (input.value == '') {
        return;}


    else{
        // container.style.height = '90vh'

        try {
            let f = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            let data = await f.json()
            console.log(data);
            temp.innerHTML = data.main.temp + "<sup> °C</sup>"
            result.innerHTML = data.weather[0].description;            ;


            temp.addEventListener('click',(e)=>{
                let fr = (data.main.temp * 9/5) + 32
                temp.innerHTML = fr + "<sup> °F</sup>"})

            percentage.innerHTML = data.main.humidity + " %"
            speed.innerHTML = data.wind.speed + " Km/h";

            if (data.weather[0].main == "Rain") {
                rain.style.display = 'block'
            }

            else if (data.weather[0].main == "Clear") {
                clear.style.display = 'block'
            }
            else if (data.weather[0].main == "Clouds") {
                cloud.style.display = 'block'
            }
            else if (data.weather[0].main == "Mist") {
                mist.style.display = 'block'
            }
            else if (data.weather[0].main == "Snow") {
                snow.style.display = 'block'
            }
            



        } catch (error) {
            no.style.display = 'block';
            result.innerHTML = "WEATHER NOT FOUND"
            result.style.color = 'red'
            
        }
    }

    input.value = '';
}

search.addEventListener('click',getdata)