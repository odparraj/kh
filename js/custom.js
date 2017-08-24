(function ($) {
    
    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();
    
    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {

       /* $('.button-bar').toggleClass('collapsed');
        $('#mynavbar').toggleClass('in');*/

        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top-60				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });

    $('.nav-clickable').on('click', function(event) {

        $('.button-bar').toggleClass('collapsed');
        $('#mynavbar').toggleClass('in');
    });
    
    
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
        
    });

    $( "#form_email_us" ).submit(function( event ) {
        event.preventDefault();
        $(':input[type="submit"]').prop('disabled', true);
        $('#errormessage').removeClass('show');
        $('#sendmessage').removeClass('show');

        var url = "contactform/contact_me.php"; // the script where you handle the form input.
        $.ajax({
           type: "POST",
           url: url,
           data: $("#form_email_us").serialize(), // serializes the form's elements.
           success: function(data)
           {    
                if (data.error) {                    
                    $('#errormessage').addClass('show');
                    console.log('existe un error');
                }else{
                    $('#sendmessage').addClass('show');
                    console.log('Todo bien');
                    $("#form_email_us").trigger("reset");
                }
                $(':input[type="submit"]').prop('disabled', false);
               
           }
        });
    });

    $("#form_work_us").submit(function( event ) {
        event.preventDefault();       
        $(':input[type="submit"]').prop('disabled', true);
        $('#errormessage2').removeClass('show');
        $('#sendmessage2').removeClass('show');
        var url = "contactform/contact_me.php"; // the script where you handle the form input.
        var file= $('#file_form')[0].files[0];
        var message= $('#form_msg').val();

        var formData = new FormData();

        // add assoc key values, this will be posts values
        formData.append('hv',file);
        formData.append('origin', 'form2');
        formData.append('message', message);

        $.ajax({
           type: "POST",
           url: url,
           data: formData, // serializes the form's elements.
           processData: false,
           contentType: false,
           success: function(data)
           {    
                if (data.error) {                    
                    $('#errormessage2').addClass('show');
                    console.log('existe un error');
                }else{
                    $('#sendmessage2').addClass('show');
                    console.log('Todo bien');
                    $("#form_work_us").trigger("reset");
                }
                $(':input[type="submit"]').prop('disabled', false);
           }
        });
    });
    
})(jQuery);