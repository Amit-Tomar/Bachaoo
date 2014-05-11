(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", ".uib_w_1", function(evt)
        {
        /* your code goes here */ 
            navigator.geolocation.getCurrentPosition (function (pos)
{
  var lat = pos.coords.latitude;
  var lng = pos.coords.longitude;
    
    $.post("http://iiitb-log.com/cfi/report.php",
  {
	
    lat:lat,
   long:lng
  },
  function(data,status){
   $("#status").text (data+". GPS data uploaded successfully");
  });
    
  $("#lat").text (lat);
  $("#lng").text (lng);
$("#device").text (window.device.name);
});
        });
}
 $(document).ready(register_event_handlers);
})();
