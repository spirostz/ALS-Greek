$(document).ready(function (e) {
   // alert(vocalFile.vocalFilename);

 var speakAPI = "https://www.ttsvoice.com/onlinedemo/tts/speak.php?br=32&ln=el&sr=22050&text=Ενα δυο τρια τεσσερα πεντε&voice=Penelope";

 
    $(".listen").click(function() {
        $(".theframe").attr("src", speakAPI);
    });
    

    
//   $.ajax({
//        type: "POST",
//        url: speakAPI,
//        async:true,
//        dataType : 'jsonp',
//        crossDomain:true,
//        success: function(data, status, xhr) {
//            $(".top").html("doooooooooooooooooooooooooooooooone");
//            alert("data.url");
//        }
//    });
    
    
});


//  alert(vocalFile.vocalFilename);
  

 
