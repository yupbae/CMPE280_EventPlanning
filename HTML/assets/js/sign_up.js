$(document).ready( function() {
		var now = new Date();
		var day = ("0" + now.getDate()).slice(-2);
		var month = ("0" + (now.getMonth() + 1)).slice(-2);
		var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
		$('#eventdate').val(today);
	});
	
	function showpopup() {
		document.getElementById("popup").style.display = "block";
	}
	
	function hidepopup() {
		document.getElementById("popup").style.display = "none";
	}
	
	function validate_password() {
  		var val = document.getElementById("password").value;
		
   		if(val.length >= 7 && val.length <= 20) {
	 	document.getElementById("length").className = "valid";

		}
		else {
			document.getElementById("length").className = "invalid";
		}
		if(val.match(/\w{4}/)) {
			document.getElementById("alpha").className = "valid";
		}
		else {
			document.getElementById("alpha").className = "invalid";
		}
		if(val.match(/\d+/)) {
			document.getElementById("number").className = "valid"; 
		}
		else {
			document.getElementById("number").className = "invalid";
		}
		if(val.match(/[!,#,$,%]{1}/)) {
			document.getElementById("special").className = "valid"; 
		}
		else {
			document.getElementById("special").className = "invalid";
		}
	}
	function loadTheme(){
	
		var date=$('#eventdate').val();
		var themeSelected=$("#theme option:selected").text();
		var guestesCount=$("#capacity option:selected").text();;
		location.href='locations-by-theme.html?date='+date+"&themeSelected="+themeSelected+"&guestesCount="+guestesCount;
	}
	
	function validate() {
		
		function check() {
			if(document.getElementById("firstname").length == 0) {
					document.getElementById("firstname").focus();
					return false;
			}
			if(document.getElementById("lastname").length == 0) {
					document.getElementById("lastname").focus();
					return false;
			}
			if(document.getElementById("email").length == 0) {
					document.getElementById("firstname").focus();
					return false;
			}
			if(document.getElementById("password").length == 0) {
					document.getElementById("firstname").focus();
					return false;
			}
			if($("#password").val() != $("#confirm").val()) {
					alert("Password do not match!");
					document.getElementById("confirm").focus();
					return false;
			}
			if(!document.getElementById("checkb").checked) {
				alert("You can regsiter only if you agree to the terms and conditions!");
				document.getElementById("checkb").focus();
			}
			else {
				return true;
			}
		}
		
		if(check()) {
			var firstname = $("#firstname").val();
			var lastname = $("#lastname").val();
			var email = $("#email").val();
			var password = $("#password").val();
			var dataString = 'fname=' + firstname + '&lname=' + lastname + '&email1=' + email +'&password1=' + password;
			$.ajax({
				url: "server.php",
				type: 'POST',
				data: dataString,
				success: function(){
					location.href = "index.html?login=1";
				}
			});
		}
	}
	
	enableBtn = function() {
		document.getElementById("regBtn").disabled = false;
	};
	
	var onloadCallback = function() {
        captchaContainer = grecaptcha.render('validate', {
          'sitekey' : '6LeUggwUAAAAAIFRIvc19-4jIpAp4RqbEfPmWqzJ',
		  'callback' : enableBtn,
		  'theme': 'dark'
        });
      };