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
            //var status_value = obj['response'];
            //alert(obj);
           if(obj == '0')
               {
                //alert('success');
               }
           else
               {
                //alert('fail');
               }

        }

    });

}
