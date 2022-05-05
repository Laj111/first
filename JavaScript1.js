function check() {

	var name = document.getElementById("name").value;  //读取表单数据，创建变量
	var pass = document.getElementById("pass").value;

	if (name == "gt" && pass == "941009") {
		alert("登录成功！");
		window.document.f.action = "/gt.html";  //此处设置登录后跳转页面
		window.document.f.submit();
	}
	else if (name == "whl" && pass == "xxxxxxxx") {
		alert("登录成功！");
		window.document.f.action = "/whl.html";  //此处设置登录后跳转页面
		window.document.f.submit();
	}

	else {
		alert("用户名或密码错误！");
	}

}