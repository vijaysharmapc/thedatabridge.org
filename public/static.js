//For contact us post
function hk_contactus_post()
{
    //alert("3");
	 $('#contcat_success').show();
    $.ajax({
        dataType: "json",
        type: "POST",
        data: {
            name: $('#user-name').val(),
            email: $('#user-email').val(),
            contact: $('#user-contact').val(),
            message: $('#user-message').val()
        },

        url: 'http://databridge.info/api/messageadd',
        success: function(response) {
            //alert(12);
            var obj = response;

           if(obj == '0')
               {
								 $('#response').empty();
                 $("#response").append("MESSAGE SENT SUCCESSFULLY");
                //alert('success');
               }
           else
               {
								  $('#response').empty();
								  $("#response").append("MESSAGE SENDING FAILED");
                //alert('fail');
               }

        }

    });

}
