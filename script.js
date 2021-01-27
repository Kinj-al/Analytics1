
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + ':' + dd + ':' + yyyy;

var t = new Date();
var h = String(t.getHours()); 
var m = String(t.getMinutes()).padStart(2, '0'); 
var s = String(t.getSeconds()); 
t = h + ':' + m + ':'+ s;

var rand = randomIntFromInterval(1, 1000)
var  isExecuted = false;
var timeSpentOnPage = 0;
var count = 0;

console.log(rand);
console.log(today);
console.log(t);
console.log(document.title);
//printTime();

window.addEventListener( "click", onDocumentClick, false );

function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
            //document.getElementById("result").innerHTML = positionInfo;
            console.log(positionInfo);
        });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
showPosition();

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/*
function writeData(){
    
    firebase.database().ref('users/'+today + " " + t).set({
    Date : today,
    Time : t,
    PageName : document.title,
    TimeSpent :  timeSpentOnPage,
    Count : count
    }) ;
}
function sendData(){
    setInterval(function(){
        writeData();
    },2000);
}*/

TimeMe.initialize({
    currentPageName: "my-home-page", // current page 
    idleTimeoutInSeconds: 30 // seconds
});
//sendData();
window.onload = function(){
    setInterval(function(){

        timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        document.getElementById('timeInSeconds').textContent = timeSpentOnPage.toFixed(2);
}, 250);
}

function printTime(){
    setInterval(function(){
        console.log("Time elapsed", timeSpentOnPage);
    },2000);
}


// Executes the first 5 times a user leaves the page
TimeMe.callWhenUserLeaves(function(){
    console.log("The user is not currently viewing the page!");
    console.log(timeSpentOnPage);
   // writeData();

}, 50);

// Executes every time a user returns
TimeMe.callWhenUserReturns(function(){
    console.log("The user has come back!");
    var data = JSON.stringify({ "date": today, "time": t, "PageName" : document.title, "TImeSpent" :  timeSpentOnPage, "Count" : count}); 
    console.log("Data :", data);
// console.log(timeSpentOnPage);
});


function onDocumentClick( event ) 
{
    count = count+1;
    console.log(count);

}
$("#bt1").click(function(){
   // saveFile();
    window.open("chart.html");
});
$("#bt2").click(function(){
    // saveFile();
     //window.open("chart.html");
     console.log("Button 2");
 });
 $("#bt3").click(function(){
    // saveFile();
     //window.open("chart.html");
     console.log("Button 3");
 });






