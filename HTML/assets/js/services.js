var login = getQueryVariable("login");
		var user =  getQueryVariable("userid");
		if(login == false || login == null)
		login = "0";
		var user =  getQueryVariable("userid");
		    if(login == "1") {
	    	$("#login").hide();
			$("#account").show();
			$("#name").html(user);
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
	
	function serviceCall(etype){
				if(etype === "floristMap"){
					//1
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d25380.732911195028!2d-121.89906785477184!3d37.32850022869352!3m2!1i1024!2i768!4f13.1!2m1!1sflorist+flower+service+near+san+jose!5e0!3m2!1sen!2sus!4v1479292494905");
					$("#toggle-1").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "restaurantMap"){
					//2
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17945.909930386762!2d-121.89763511723524!3d37.332596162249565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scatering+service+near+san+jose!5e0!3m2!1sen!2sus!4v1479316818377");
					$("#toggle-2").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "djMap"){
					//3
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d50755.656888493904!2d-121.9179640158339!3d37.33709739838169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDJ+near+san+jose!5e0!3m2!1sen!2sus!4v1479317898346");
					$("#toggle-3").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "partyrentalMap"){
					//4
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d50760.102023094194!2d-121.90932125227992!3d37.330518791271324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparty+rentals+near+san+jose!5e0!3m2!1sen!2sus!4v1479318373621");
					$("#toggle-4").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "carMap"){
					//5
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d50760.0167712135!2d-121.90932130159553!3d37.33064496968576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scar+rentals+near+san+jose!5e0!3m2!1sen!2sus!4v1479318727679");
					$("#toggle-5").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "bakeryMap"){
					//6
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d50759.93151924994!2d-121.90932135091107!3d37.33077114785846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spastery+near+san+jose!5e0!3m2!1sen!2sus!4v1479319794579");
					$("#toggle-6").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "bouncerMap"){
					//7
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d101520.34865608935!2d-121.90090838391662!3d37.33041177488321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssecurity+bouncer+near+san+jose!5e0!3m2!1sen!2sus!4v1479320450616");
					$("#toggle-7").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "photoMap"){
					//8
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d101520.03553652536!2d-121.90090858119358!3d37.330643493989115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sphotography+near+san+jose!5e0!3m2!1sen!2sus!4v1479320996447");
					$("#toggle-8").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-9").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-9").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}else if(etype === "hotelMap"){
					//9
					$('#mapSpace').attr('src', "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30182.840290752898!2d-121.90253231642572!3d37.3287687498791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels+near+san+jose!5e0!3m2!1sen!2sus!4v1479401249778");
					$("#toggle-9").removeClass('glyphicon glyphicon-hand-right').addClass('glyphicon glyphicon-ok');
					
					if($("#toggle-1").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-1").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-2").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-2").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-3").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-3").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-4").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-4").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-5").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-5").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-6").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-6").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-7").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-7").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
					if($("#toggle-8").hasClass('glyphicon glyphicon-ok')){
						$("#toggle-8").removeClass('glyphicon glyphicon-ok').addClass('glyphicon glyphicon-hand-right');
					}
				}						
				
			}