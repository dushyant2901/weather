const checkBtn= document.querySelector("#check");
const city = document.querySelector(".city");
    const country = document.querySelector(".country");
checkBtn.addEventListener("click",clickHandler);


window.addEventListener("load",getTempData);


function getTempData(){
    if(navigator.geolocation){
        getCurrentLocationData()
        //if geolocation is on show that data otherwise use response code 404 in if statement and give long and lat of new delhi city 
    }
    /*else{
        lat
        long
        getdata
        getSearchLocationData() have to remove this as we want this to get initiated on click not on window load
    }*/
}

let lat;
let long;
let api=`` ;  //proxy+api+lat+long;
let proxy=``;
function getCurrentLocationData(){
 (navigator.geolocation.getCurrentPosition(position=>{
    console.log(position)
   long= position.coords.longitude;
   lat= position.coords.latitude;
   getData()
  }))


}
//function getSearchLocationData( input.value){
// return [lat,long] on the basis of userInput
//}

function getData(){
    fetch(api)
    .then(response=>{response.json})
    .then(displayData)
}
//getting data and showing it to the dom
function displayData(data){
 const[temperature,summary,icon]=data.currently;
 const city = document.querySelector(".weatherCountry");
 const temp = document.querySelector(".temperature");
 const weatherDescription = document.querySelector(".weatherDescription");
 const  weatherData= document.querySelectorAll(".data li");

 temp.textContent=temperature;
 weatherDescription.textContent=summary;

const today =new Date()
const date =  document.querySelector(".date");
date.textContent= todayData(today);

 //setIcons(icon,document.querySelector(".icon"))
}

function setIcons(icon,iconID){
    const skycons = new Skycons({color:"white"});
const tempIcon=icon.replace(/-/g,"_").toUpperCase();
    skycons.play();
    
return skycons.set(Skycons[tempIcon],iconID)
}

function clickHandler(){
    
//when click happens get the long and lat of input feed it to the api and then run getdata function
    getData()

}


function todayData(d){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const month=months[d.getMonth()]
const day=days[d.getDay()]
const year=d.getFullYear()
const date=d.getDate()

return `${day} ${date} ${month} ${year}`;
} 