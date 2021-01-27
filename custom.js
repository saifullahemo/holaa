$(document).ready(function(e){

    /**
     * On Clicking on Sign Up Button
     */
    $("#sign_up").on("click", function(e){
        e.preventDefault();
        $(".bg-modal").hide()

        Message.add('Thank you for signing up',{
            vertical:'top',
            horizontal:'center'
        });

    })

    /**
     * On Clicking Close Button
     */
    $(".close").on('click', function(e){
        $(".bg-modal").css("display","none");
    })

    /**
     * On Clicking Modal Show Button
     *   */
    $("#buttonId").on('click', function(e){
        console.log("I am being clicked");
        $(".bg-modal").css("display","flex");
    })

    window.halloweenBats = $.halloweenBats({

        // path to the image
        image: '/assets/images/bats.png',
      
        // total amount of bats
        amount: 15, // Bat amount.
      
        // image width
        width: 35,
      
        // frame height
        height: 20,
      
        // total amount of frames
        frames: 2, 
      
        // animation speed
        speed: 20,
      
        // Higher value = slower
        flickering: 15,

        zIndex: 10000,

      });


});

