function deleteLogin(){
	var del=document.getElementById("login_box");
	var bg_filter=document.getElementById("bg_filter");
	bg_filter.style.display="none";
	del.style.display="none";
}
function showBox(){
	var show=document.getElementById("login_box");
	var bg_filter=document.getElementById("bg_filter");
	show.style.display="block";
	bg_filter.style.display="block";
}

var tmpHtml="";

var obj={

	login:$(".login"),

	init:function(){
		$(".wapper").click(function(){
			obj.sweep();
		});
	},

	sweep:function(){
		tmpHtml=obj.login.html();
		obj.login.empty();
		obj.barcode();
	},

	barcode:function(){
		var text=$("<div>");
		text.addClass("text");
		text.html("Register");
		obj.login.append(text);

		var img=$("<img src='img/sweep01.jpg' />");
		img.addClass("img");
		obj.login.append(img);

		var back=$("<div onclick='obj.reback()'>");
		back.addClass("back");
		back.html("Back to login!!! hahaha I am zhe wang !!");
		obj.login.append(back);

	},
	reback:function(){
		obj.login.html(tmpHtml);
	}
}
obj.init();
