document.getElementById("submit").addEventListener("click",callAPI);
let nameField = document.getElementById("name");

function callAPI(){

    let city = nameField.value;
    let urls = ["http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=824d12f1ff7cee5ba4229300f9d4d7d7&units=metric"];   
    let requests = new Array(urls.length);

    for( let i =0; i<urls.length ; i++ ){

        requests[i] = new XMLHttpRequest();
        requests[i].open("GET",urls[i]);
        requests[i].onload= function(){
        let data = JSON.parse(requests[i].response);
             
                 data.list.forEach(list => {
                    list.weather.forEach(weather=> {
                    document.getElementById("city0").innerHTML = city+ "<br>"+ "<br>"+`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`+weather.main; 
                    document.getElementById("W0").innerHTML = 
                    
                      "Temp: "+ list.main.temp+" &#8451 ."
                     +"<br>" 
                     +"Feels like: " + list.main.feels_like+" &#8451 ."               
                     +"<br>"
                     +"Wind: "+list.wind.speed+" m/s."
                     +"<br>"
                     +"Humidity: "+list.main.humidity+" %."
                     +"<br>"
                     +"Pressur: "+list.main.pressure+" hPa."
                     +"<br>"
                     +list.dt_txt.substring(0,10) 
                        
                     list.weather.forEach(weather=> {
                        document.getElementById("res1").innerHTML = 'The weather in '+city+' is '
                        +`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`;
                    }); 
                
                });
            });
              
        };

        requests[i].send();
        nameField.value = "";
        nameField.focus();
    }

}

function callAPI1(){

    var city ="london"
    let urls = ["http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=824d12f1ff7cee5ba4229300f9d4d7d7&units=metric"];     
    let requests = new Array(urls.length);

    for( let i =0; i<urls.length ; i++ ){

        requests[i] = new XMLHttpRequest();
        requests[i].open("GET",urls[i]);
        requests[i].onload= function(){
        let data = JSON.parse(requests[i].response);
            
                 data.list.forEach(list => {
                    list.weather.forEach(weather=> {
                    document.getElementById("city1").innerHTML = city+"<br>"+`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`+weather.main; 
                    document.getElementById("W1").innerHTML = 
                    
                      "Temp: "+ list.main.temp+" &#8451 ."
                     +"<br>" 
                     +"Feels like: " + list.main.feels_like+" &#8451 ."               
                     +"<br>"
                     +"Wind: "+list.wind.speed+" m/s."
                     +"<br>"
                     +"Humidity: "+list.main.humidity+" %."
                     +"<br>"
                     +"Pressur: "+list.main.pressure+" hPa."
                     +"<br>"
                     +list.dt_txt.substring(0,10) 
                        
                     list.weather.forEach(weather=> {
                        document.getElementById("res1").innerHTML = 'The weather in '+city+' is '
                        +`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`;
                    }); 
                
                });
            });
              
        };

        requests[i].send();
        nameField.value = "";
        nameField.focus();
    }

}
function callAPI2(){
    var city ="paris"
    let urls = ["http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=824d12f1ff7cee5ba4229300f9d4d7d7&units=metric"];   
    let requests = new Array(urls.length);

    for( let i =0; i<urls.length ; i++ ){

        requests[i] = new XMLHttpRequest();
        requests[i].open("GET",urls[i]);
        requests[i].onload= function(){
        let data = JSON.parse(requests[i].response);
            
                 data.list.forEach(list => {
                    list.weather.forEach(weather=> {
                    document.getElementById("city2").innerHTML = city+"<br>"+`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`+weather.main; 
                    document.getElementById("W2").innerHTML = 
                    
                      "Temp: "+ list.main.temp+" &#8451 ."
                     +"<br>" 
                     +"Feels like: " + list.main.feels_like+" &#8451 ."               
                     +"<br>"
                     +"Wind: "+list.wind.speed+" m/s."
                     +"<br>"
                     +"Humidity: "+list.main.humidity+" %."
                     +"<br>"
                     +"Pressur: "+list.main.pressure+" hPa."
                     +"<br>"
                     +list.dt_txt.substring(0,10) 
                        
                     list.weather.forEach(weather=> {
                        document.getElementById("res1").innerHTML = 'The weather in '+city+' is '
                        +`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`;
                    }); 
                
                });
            });
              
        };

        requests[i].send();
        nameField.value = "";
        nameField.focus();
    }

}

function callAPI3(){
    var city ="tokyo"
    let urls = ["http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=824d12f1ff7cee5ba4229300f9d4d7d7&units=metric"];                       
    let requests = new Array(urls.length);

    for( let i =0; i<urls.length ; i++ ){

        requests[i] = new XMLHttpRequest();
        requests[i].open("GET",urls[i]);
        requests[i].onload= function(){
        let data = JSON.parse(requests[i].response);
            
                 data.list.forEach(list => {
                    list.weather.forEach(weather=> {
                    document.getElementById("city3").innerHTML = city+"<br>"+`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`+weather.main; 
                    document.getElementById("W3").innerHTML = 
                    
                      "Temp: "+ list.main.temp+" &#8451 ."
                     +"<br>" 
                     +"Feels like: " + list.main.feels_like+" &#8451 ."               
                     +"<br>"
                     +"Wind: "+list.wind.speed+" m/s."
                     +"<br>"
                     +"Humidity: "+list.main.humidity+" %."
                     +"<br>"
                     +"Pressur: "+list.main.pressure+" hPa."
                     +"<br>"
                     +list.dt_txt.substring(0,10) 
                        
                     list.weather.forEach(weather=> {
                        document.getElementById("res1").innerHTML = 'The weather in '+city+' is '
                        +`<img src="http://openweathermap.org/img/wn/`+weather.icon+`@2x.png"/><br>`;
                    }); 
                
                });
            });
              
        };

        requests[i].send();
        nameField.value = "";
        nameField.focus();
    }

}

$(document).ready(function(){
   
    $("button").click(function(){
        $(".main-items").fadeOut(2000);
        $(".main-items1").animate({height: '350px',position: 'absolute',left :'480px'},2000);
        $(".main-items1").show();

    })


   
});

$(document).ready(function(){
   
    $(".main-items").mouseenter(function(){
        
       
        $(".main-items").animate({height: '350px'},1000);   
        $(".content").show(); 
    })

    $(".main-items").mouseleave(function(){
            
        $(".main-items").animate({height: '160px'},2000);   
        $(".content").hide(1000);          
    })    
});



