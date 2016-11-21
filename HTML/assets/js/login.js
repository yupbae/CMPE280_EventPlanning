$(document).ready( function() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    $('#eventdate').val(today);
     
    
});
function loginAction() {
		var name = $("#username").val();
		var password = $("#password").val();
		var dataString = 'userid=' + name + '&password1=' + password;
		$.ajax({
			url: "check.php",
			type: 'POST',
			data: dataString,
			success: function(response){
				if(response != "failed") {
					location.href = "index.html?login=1&userid="+response;
				}
				else {
					alert("UserId and Password do not match!");
				}
			}
		});
}
function loadTheme(){

var date=$('#eventdate').val();
var themeSelected=$("#theme option:selected").text();
var guestesCount=$("#capacity option:selected").text();;
location.href='locations-by-theme.html?date='+date+"&themeSelected="+themeSelected+"&guestesCount="+guestesCount;
}

enableBtn = function() {
		document.getElementById("loginBtn").disabled = false;
	};
	
	var onloadCallback = function() {
        captchaContainer = grecaptcha.render('validate', {
          'sitekey' : '6LeUggwUAAAAAIFRIvc19-4jIpAp4RqbEfPmWqzJ',
		  'callback' : enableBtn,
		  'theme': 'dark'
        });
      };