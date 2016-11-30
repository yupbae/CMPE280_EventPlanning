$(document).ready( function() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
    $('#eventdate').val(today);
	var user = getQueryVariable("userid");
    accountInfo(user);
	recentInfo(user);
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

var modal = document.getElementById('myModal');

function submitReview(book_id)
{	
	modal.style.display = "block";
	$('#btnReviewSubmit').attr("bkID",book_id);
}

function sbtReview()
{
	var book_id = $('#btnReviewSubmit').attr("bkID");
	var review = $('#txtReview').val();
	review = review.replace(/'/g, '"');
	alert(book_id +" : " + review);
	var dataString = 'book_id='+book_id+'&review='+review;
	var url = 'https://eclectic.000webhostapp.com/insert_review.php';
	var oReq = CreateXMLHttpRequest();
	oReq.open("POST",url,true);
	if(oReq!=null){
		oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		oReq.onreadystatechange = function() {
		    if(oReq.readyState == 4 && oReq.status == 200) {
				alert(oReq.responseText);
		    	var json = JSON.parse(oReq.responseText);
				var op = json.operation;
				var info = json.sqlUPDATEstatus;
				if(op === "Ok"){
					alert("Review submitted");
				}
				else if(op === "Error") {
					alert("No bookings recorded");
				}
			}
		}
		oReq.send(dataString);
	}
	modal.style.display = "none";
	window.location.reload();
}

function displayInfo(info) {
	var display_bookings = "<tr><th>Location Name</th><th>Event Date</th><th>Review</th></tr>";
	for(i=0; i< info.length; i++) {
		book_id = info[i]["booking_id"];
		loc_id = info[i]["location_id"];
		eventdate = info[i]["eventdate"];
		review = info[i]["review"];
		var json = JSON.parse(locations);
		for(j=0; j<json.location.length; j++) {
			locId = json.location[j].id;
			if (locId == loc_id) {
				loc_name = json.location[i].name;
				display_locname = "<td class='locname'>"+ loc_name +"</td>";
				display_date = "<td class='eventdate'>"+ eventdate +"</td>";
				if (review)
					display_review = "<td class='review'>"+ review +"</td>";
				else
					display_review = "<td><input class ='btn btn-success' type='button' id='rbrn_"+ book_id + "' onclick='submitReview("+ book_id + ")' value='Submit Review'/></td>";
				display_bookings += "<tr>" + display_locname + display_date + display_review + "</tr>";
			}
		}
	}
	$('#bookings').html(display_bookings);
}

function displayRecent(recent) {
	var recent_array = recent.split(',');
	for (i=0; i<recent_array.length; i++){
		loc_id = recent_array[i];
		var json = JSON.parse(locations);
		for(j=0; j<json.location.length; j++) {
			locId = json.location[j].id;
			if (locId == loc_id) {
				loc_name = json.location[i].name;
				loc_img = "assets/img/locations/" + loc_id + "_1.jpg";
				$('#locname'+i).html(loc_name);
				$('#img'+i).attr("src",loc_img);
			}
		}
	}
}

function accountInfo(user) {
		
			var dataString = 'user='+user;
			var url = 'https://eclectic.000webhostapp.com/get_bookings.php';
					var oReq = CreateXMLHttpRequest();
				    oReq.open("POST",url,true);
					if(oReq!=null){
						oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						oReq.onreadystatechange = function() {
						    if(oReq.readyState == 4 && oReq.status == 200) {
						    	var json = JSON.parse(oReq.responseText);
								var op = json.operation;
								var info = json.Booking;
								if(op === "Ok"){
									displayInfo(info);
								}
								else if(op === "Error") {
									alert("No bookings recorded");
								}
						    }
					    }
						oReq.send(dataString);
					}
}

function recentInfo(user) {
		
			var dataString = 'user='+user;
			var url = 'https://eclectic.000webhostapp.com/get_recent.php';
					var oReq = CreateXMLHttpRequest();
				    oReq.open("POST",url,true);
					if(oReq!=null){
						oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						oReq.onreadystatechange = function() {
						    if(oReq.readyState == 4 && oReq.status == 200) {
						    	var json = JSON.parse(oReq.responseText);
								var op = json.operation;
								var recent = json.recent;
								if(op === "Ok"){
									displayRecent(recent);
								}
								else if(op === "Error") {
									alert("No bookings recorded");
								}
						    }
					    }
						oReq.send(dataString);
					}
}