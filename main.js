
function Galadarbs(){
    document.getElementById();
}

function main(){
var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var day = d.getDate();
var month = d.getMonth() +1;
var year = d.getFullYear();
var html = "";
html += "<p><b>Date:</b>" + day +"/"+ month + "/" + year;
html += "<p><b>Time:</b>" + hour +"/"+ minute + "/" + second;
document.getElementById("output_date").innerHTML = html;
    setTimeout(main,100);
      
}
function initMap() {
        var uluru = {lat: -25.344, lng: 131.036};
        var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
        var marker = new google.maps.Marker({position: uluru, map: map});
  }