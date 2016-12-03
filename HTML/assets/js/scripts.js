

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

	var login = getQueryVariable("login");
	var user = getQueryVariable("userid");
	
	if(login == false || login == null)
	login = "0";

function getReviews() {
	var url = 'http://ec2-54-183-40-122.us-west-1.compute.amazonaws.com/php/get_reviews.php';
	var oReq = CreateXMLHttpRequest();
	oReq.open("POST",url,true);
	if(oReq!=null){
		oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		oReq.onreadystatechange = function() {
		    if(oReq.readyState == 4 && oReq.status == 200) {
		    	var json = JSON.parse(oReq.responseText);
				var op = json.operation;
				var reviews = json.Review;
				if(op === "Ok"){
					var displayReviews = "";
					for (i=0; i<10 && i<reviews.length; i++) {
						review = reviews[i]["review"];
						if(review) {
						eventdate = reviews[i]["eventdate"];
						userid = reviews[i]["username"];
						displayReviews += "<li class='locationList' style='border-left:5px solid blue;'><img class='imgThumbnail' src='assets/img/theteam/"+userid.toLowerCase()+".jpg'/> &nbsp;"+review+"</li><li><i>Posted by </i><b>"+userid+"</b> on "+eventdate+"</li><br>";
						}
					}
					$('#reviews').html(displayReviews);
				}
		    }
		}
		oReq.send();
	}
}
	
   function getQueryVariable(variable) {
				var query = window.location.search.substring(1);
				var vars = query.split("&");
       			for (var i=0; i<vars.length; i++) {
					var pair = vars[i].split("=");
               		if(pair[0] == variable){return pair[1];}
       			}
       			return(false);
   }
   function renderIndexPage() {
	   
		  if(login == "1")
		  location.href = "index.html?login=1&userid="+user;
		  else
		  location.href = "index.html?login=0";
	    }
    function renderIndexPage_CN() {
       
          if(login == "1")
              location.href = "index_cn.html?login=1&userid="+user;
          else
              location.href = "index_cn.html?login=0";
    }
function renderIndexPage_HB() {
    
    if(login == "1")
        location.href = "index_hb.html?login=1&userid="+user;
    else
        location.href = "index_hb.html?login=0";
}
function renderIndexPage_JP() {
    
    if(login == "1")
        location.href = "index_jp.html?login=1&userid="+user;
    else
        location.href = "index_jp.html?login=0";
}
		function renderContactPage() {
		  if(login == "1")
		  location.href = "contact.html?login=1&userid="+user;
		  else
		  location.href = "contact.html?login=0";
	    }
		function renderAboutPage() {
		  if(login == "1")
		  location.href = "pages-about-us.html?login=1&userid="+user;
		  else
		  location.href = "pages-about-us.html?login=0";
	    }
		function renderTeamPage() {
		  if(login == "1")
		  location.href = "pages-about-us.html?login=1&userid="+user;	  
		  else
		  location.href = "pages-about-us.html?login=0";
	    }
		function renderBusinessLocations() {
		  if(login == "1")
		  location.href = "locations-by-theme.html?themeSelected=Business&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?themeSelected=Business&guestesCount=All&login=0";
	    }
		function renderWeddingLocations() {
		  if(login == "1")
		  location.href = "locations-by-theme.html?themeSelected=Wedding&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?themeSelected=Wedding&guestesCount=All&login=0";
	    }
		function renderCulturalLocations() {
		  if(login == "1")
		  location.href = "locations-by-theme.html?themeSelected=Cultural&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?themeSelected=Cultural&guestesCount=All&login=0";
	    }
		function renderBirthdayLocations() {
		  if(login == "1")
		  location.href = "locations-by-theme.html?themeSelected=Birthday&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?themeSelected=Birthday&guestesCount=All&login=0";
	    }
		function renderServices() {
		  if(login == "1")
		  location.href = "services.html?login=1&userid="+user;
		  else
		  location.href = "services.html?login=0";
	    }
		function renderAccountDetails() {
			if(login == "1")
				location.href = "account-details.html?login=1&userid="+user;
		}
        function renderContactPage_CN() {
            if(login == "1")
                location.href = "contact_cn.html?login=1&userid="+user;
            else
                location.href = "contact_cn.html?login=0";
        }
        function renderContactPage_HB() {
            if(login == "1")
                location.href = "contact_hb.html?login=1&userid="+user;
            else
                location.href = "contact_hb.html?login=0";
        }
        function renderContactPage_JP() {
            if(login == "1")
                location.href = "contact_jp.html?login=1&userid="+user;
            else
                location.href = "contact_jp.html?login=0";
        }

        function renderAboutPage_CN() {
            if(login == "1")
                location.href = "pages-about-us_cn.html?login=1&userid="+user;
            else
                location.href = "pages-about-us_cn.html?login=0";
        }
        function renderAboutPage_HB() {
            if(login == "1")
                location.href = "pages-about-us_hb.html?login=1&userid="+user;
            else
                location.href = "pages-about-us_hb.html?login=0";
        }
        function renderAboutPage_JP() {
            if(login == "1")
                location.href = "pages-about-us_jp.html?login=1&userid="+user;
            else
                location.href = "pages-about-us_jp.html?login=0";
        }


	function loadTheme(){
	    if(login == "1") {
		var themeSelected=$("#theme option:selected").text();
		var guestesCount=$("#capacity option:selected").text();;
		location.href="locations-by-theme.html?themeSelected="+themeSelected+"&guestesCount="+guestesCount + "&login=1&userid="+user;
		}
		else {
		var themeSelected=$("#theme option:selected").text();
		var guestesCount=$("#capacity option:selected").text();;
		location.href="locations-by-theme.html?themeSelected="+themeSelected+"&guestesCount="+guestesCount + "&login=0";
		}
	}

// Mobile Menu
$(function(){
    $('#hornavmenu').slicknav();
});

