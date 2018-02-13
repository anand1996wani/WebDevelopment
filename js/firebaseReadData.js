var propertyId = "property-id1" 
var databaseReference = firebase.database().ref('/property-details/' + propertyId);
var propertyObject;

databaseReference.on("value", function(snapshot) {
   //console.log(snapshot.val());
   propertyObject = snapshot.val();
   document.getElementById('overviewParameter').innerHTML = propertyObject.overview;
   document.getElementById('propertyTitle').innerHTML = propertyObject.title;
   document.getElementById('type').innerHTML = propertyObject.plan.type;
   document.getElementById('area').innerHTML = propertyObject.plan.area;
   document.getElementById('rate').innerHTML = propertyObject.plan.rate;
   document.getElementById('total').innerHTML = propertyObject.plan.total;
}, function (error) {
   console.log("Error: " + error.code);
});

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
    });
    var marker = new google.maps.Marker({
    	position: uluru,
        map: map
    });
}