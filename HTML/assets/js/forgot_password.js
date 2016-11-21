$(document).ready( function() {
   
  $("#login-form-main-message").html("");
  $("#fp_email").val("");

});

  function resetPassword(e){
	 console.log("in reset password");
		$("#login-form-main-message").html("Reset Link Sent");
	$("#fp_email").val("");
		e.preventDefault();
		return false;
  }