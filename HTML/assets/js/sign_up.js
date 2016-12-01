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
  		var val = document.getElementById("password1").value;
		
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
			if(document.getElementById("email1").length == 0) {
					document.getElementById("email1").focus();
					alert("Email required!");
					return false;
			}
			if(document.getElementById("password1").length == 0) {
					document.getElementById("password1").focus();
					alert("Password required!");
					return false;
			}
			if($("#password1").val() != $("#confirm").val()) {
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
			submitdata();
		}
	}
	function CreateXMLHttpRequest() {
		if (typeof XMLHttpRequest != "undefined") {
			//All modern browsers (IE7+, Firefox, Chrome, Safari, and Opera) uses XMLHttpRequest object
			return new XMLHttpRequest();
		}
		else if (typeof ActiveXObject != "undefined") {
			//Internet Explorer (IE5 and IE6) uses an ActiveX Object
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
		else {
			throw new Error("XMLHttpRequestnot supported");
		}
	}
	function submitdata() {
		
			var firstname = $("#fname").val();
			var lastname = $("#lname").val();
			var email = $("#email1").val();
			var password = $("#password1").val();
			var dataString = 'fname=' + firstname + '&lname=' + lastname + '&email1=' + email +'&password1=' + password;
			var url = 'https://eclectic.000webhostapp.com/server.php';
					var oReq = CreateXMLHttpRequest();
				    oReq.open("POST",url,true);
					if(oReq!=null){
						oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						oReq.onreadystatechange = function() {
						    if(oReq.readyState == 4 && oReq.status == 200) {
						    	var json = JSON.parse(oReq.responseText);
								var SQLInsertStat = json.sqlINSERTstatus;
								var op = json.operation;
								var userid = json.userid;
								if(SQLInsertStat === "DUPLICATEError"){
									document.getElementById("email1").innerHTML = "Error: Email ID Record Already Exists. Try with a new one...";
					                console.log("SQl Duplicate insert");
									
								}else if(op === "success" && SQLInsertStat === "Success"  ){
									window.document.location.href = 'index.html?login=1&userid='+userid;
								}
								else {
									alert("Registration failed!!");
									window.document.location.href = 'pages-sign-up.html';
								}
						    }
					    }
						oReq.send(dataString);
					}
			}
	
	enableBtn = function() {
		document.getElementById("regBtn").disabled = false;
	};
	
	var onloadCallback = function() {
        captchaContainer = grecaptcha.render('validate', {
          'sitekey' : '6Le2mw0UAAAAAD2iL3lFRiAyzTTiRpzkszk2GATg',
		  'callback' : enableBtn,
		  'theme': 'dark'
        });
    };