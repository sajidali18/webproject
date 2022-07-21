const cityname = document.getElementById('cityname');

const submitbtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
     
  const datahide = document.querySelector('.middle_layer');
    

const getinfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityname.value;
    if(cityVal == ""){
        city_name.innerText= 'please write the Name before search ';
        datahide.classList.add('data_hide');
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f5ef77893cc945194b484f6e78a0ec62`;
            const response = await fetch(url); 
            const data = await response.json();
            const arrdata = [data];
            

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;

            const tempMood = arrdata[0].weather[0].main;
            // console.log(tempMood);

            // condition to check sunny or cloudy
            if(tempMood= "clear"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-sun' style='color: #eccc68;'></i>"
            }
            else if(tempMood = "clouds"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if(tempMod ="Rain"){
                temp_status.innerHTML = 
                "<i class = 'fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML = 
                "<i class = 'fas fa-sun' style='color: #eccc68;'></i>"
                
            }
            
        }catch{
            // city_name.innerText = `please write the correct city Name`;
            datahide.classList.remove('data_hide');

            
        }
}
}  
submitbtn.addEventListener('click', getinfo);