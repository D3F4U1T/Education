(function($){
	this.SignIn = function() {
	 	var Log = $("#Login").val();
	 	localStorage.setItem('LOGIN', Log);
	 	var Pass = $("#Password").val();
        localStorage.setItem('PASSWORD', Pass);
	}
})(jQuery)