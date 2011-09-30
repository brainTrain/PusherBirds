$(document).ready( function() {

    soundManager.url = 'static/js/swf';     //location of swf folder to handle flash fallback
    soundManager.debugMode = false;         //deactivate the soundmanager2 debug console
    soundManager.flashLoadTimeout = 0;      //(patiently) waits forever for flash to load
                                            //keeps flashblockers etc from crashing the page

    soundManager.onready( function() {      //creates sounds when soundmanager2 is ready 
                                             
        //all of these sounds share names with ids in the index.html
        soundManager.createSound('whitebird', 'static/sounds/squawk.mp3');
        soundManager.createSound('drunkbird', 'static/sounds/chirp.mp3');
        soundManager.createSound('redbird', 'static/sounds/chirp.mp3');


    });   
    //subscribe to a pusher app and channel
    var pusher = new Pusher('[app key]');
    var channel = pusher.subscribe('birds');

    //listens for squawk events on channel birds and passes data in
    //(in this case data is the id of the image that's clicked on)
    channel.bind('squawk', function(data) {
        //animates id that's clicked on   
        $("#" + data).effect("bounce", { times: 2 });   

        //plays sound corresponding to the clicked on id
        soundManager.play(data);    

    }); 
    //makes an ajax call on click
    $(".squawk").click( function() { 
        $.ajax( {                                       
            type: "GET",
            url: "trigger.php?button=" + $(this).attr('id'),  //sends the id of squawk element that's clicked
            dataType: "http"
        }); 
    }); 
}); 

