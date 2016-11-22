// Portfolio 
$(window).load(function() {
    var $cont = $('.portfolio-group');


    $cont.isotope({
        itemSelector: '.portfolio-group .portfolio-item',
        masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: 20, isFitWidth: true},
        filter: '*',
    });

    $('.portfolio-filter-container a').click(function() {
        $cont.isotope({
            filter: this.getAttribute('data-filter')
        });

        return false;
    });

    var lastClickFilter = null;
    $('.portfolio-filter a').click(function() {

        //first clicked we don't know which element is selected last time
        if (lastClickFilter === null) {
            $('.portfolio-filter a').removeClass('portfolio-selected');
        }
        else {
            $(lastClickFilter).removeClass('portfolio-selected');
        }

        lastClickFilter = this;
        $(this).addClass('portfolio-selected');
    });

});

	var login = getQueryVariable("login");
	var user = getQueryVariable("userid");
	if(login == false || login == null)
	login = "0"; 	
	
	$(document).ready( function() {
		var now = new Date();
		var day = ("0" + now.getDate()).slice(-2);
		var month = ("0" + (now.getMonth() + 1)).slice(-2);
		var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
		$('#eventdate').val(today); 
		
		if(login == "1") {
	    	$("#login-btn").hide();
			$("#account-btn").show();
			var user = getQueryVariable("userid");
			$("#name").html(user);
	    }
   });
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
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Business&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Business&guestesCount=All&login=0";
	    }
		function renderWeddingLocations() {
		  if(login == "1")
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Wedding&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Wedding&guestesCount=All&login=0";
	    }
		function renderCulturalLocations() {
		  if(login == "1")
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Cultural&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Cultural&guestesCount=All&login=0";
	    }
		function renderBirthdayLocations() {
		  if(login == "1")
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Birthday&guestesCount=All&login=1&userid="+user;
		  else
		  location.href = "locations-by-theme.html?date=01/12/2016&themeSelected=Birthday&guestesCount=All&login=0";
	    }
		function renderServices() {
		  if(login == "1")
		  location.href = "services.html?login=1&userid="+user;
		  else
		  location.href = "services.html?login=0";
	    }
	
	function loadTheme(){	
	    if(login == "1") {
		var date=$('#eventdate').val();
		var themeSelected=$("#theme option:selected").text();
		var guestesCount=$("#capacity option:selected").text();;
		location.href='locations-by-theme.html?date='+date+"&themeSelected="+themeSelected+"&guestesCount="+guestesCount + "&login=1&userid="+user;
		}
		else {
		var date = $('#eventdate').val();
		var themeSelected=$("#theme option:selected").text();
		var guestesCount=$("#capacity option:selected").text();;
		location.href='locations-by-theme.html?date='+date+"&themeSelected="+themeSelected+"&guestesCount="+guestesCount + "&login=0";
		}
	}

// Mobile Menu
$(function(){
    $('#hornavmenu').slicknav();
});

