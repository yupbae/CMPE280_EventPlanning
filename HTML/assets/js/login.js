$(document).ready( function() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    $('#eventdate').val(today);
    
});
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
function loginAction() {
		var name = $("#email1").val();
		var password = $("#password1").val();
		if(name.length == 0 ){
			document.getElementById("email1").focus()
			alert("UserID required!!");
		}
		else if (password.length == 0) {
			document.getElementById("password1").focus();
			alert("Password required!!");
		}
		else {
			var dataString = 'email1='+name+'&password1='+password;
			
			var url = 'https://eclectic.000webhostapp.com/check.php';
			//var url = 'http://localhost/280/check.php';
					var oReq = CreateXMLHttpRequest();
				    oReq.open("POST",url,true);
					if(oReq!=null){
						oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						oReq.onreadystatechange = function() {
						    if(oReq.readyState == 4 && oReq.status == 200) {
						    	var json = JSON.parse(oReq.responseText);
								var op = json.operation;
								var userid = json.userid;
								alert(oReq.responseText);
								if(op === "Ok"){
									window.document.location.href = 'index.html?login=1&userid='+userid;
								}
								else if(op === "Error") {
									alert("UserId and Password do not match!");
									window.document.location.href = 'pages-login.html';
								}
						    }
					    }
						oReq.send(dataString);
					}
		}
		
		
}
function loadTheme(){

var date=$('#eventdate').val();
var themeSelected=$("#theme option:selected").text();
var guestesCount=$("#capacity option:selected").text();;
location.href='locations-by-theme.html?date='+date+"&themeSelected="+themeSelected+"&guestesCount="+guestesCount;

}

/*enableBtn = function() {
		document.getElementById("loginBtn").disabled = false;
	};*/
	
	/*var onloadCallback = function() {
        captchaContainer = grecaptcha.render('validate', {
          'sitekey' : '6LeUggwUAAAAAIFRIvc19-4jIpAp4RqbEfPmWqzJ',
		  'callback' : enableBtn,
		  'theme': 'dark'
        });
      };*/