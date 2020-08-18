$('.user').blur(function() {
	var sum = 0;
	var str = $(this).val();
	if(!str) {
		return;
	}
	if(str.length < 8 || str.length > 18) {
		alert("账号长度不符合要求");
		return;
	}
	var reg = /\W/;
	if(reg.test(str) === true) {
		alert("账号只能包括数字、字母、下划线");
	}
})
$('.pass').blur(function() {
	var str = $(this).val();
	if(!str) {
		return;
	}
	if(str.length < 6 || str.length > 18) {
		alert('密码长度不符合要求！');
		return ;
	}
	var reg = /\W/;
	if(reg.test(str) === true) {
		alert('密码只能包括数字、字母、下划线');
	}
	
})
$('.email').blur(function() {
	var str = $(this).val();
	if(!str) {
		return;
	}
	var reg = /(\w{6,24})@([0-9a-z]{1,10})(\.[a-z]{2,3}){1,2}/;
	if(reg.test(str) === false) {
		alert('邮箱格式错误！');
	}
})
var userval = $('.user').val();
var passval = $('.pass').val();
var emailval = $('.email').val();
$('.btn').click(function() {
	$.ajax({
		url: '../json/login.json',
		type: 'get',
		dataType: 'json',
		success: function(json) {
			$.each(json,function(index,item) {
				if(userval === item.name && passval === item.pass && emailval === item.email) {
					window.location.href = 'index.html';
					return;
				}
			})
		}
	})
})

$('.bottom-top .tel').mouseenter(function() {
	$(this).find('img').attr('src','../image/bottom-3.jpg');
	$(this).find('p').css('color','#f1dfbe');
})
$('.bottom-top .tel').mouseleave(function() {
	$(this).find('img').attr('src','../image/bottom-1.jpg');
	$(this).find('p').css('color','#6c6c6c');
})
$('.bottom-top .mes').mouseenter(function() {
	$(this).find('img').attr('src','../image/bottom-4.jpg');
	$(this).find('p').css('color','#f1dfbe');
})
$('.bottom-top .mes').mouseleave(function() {
	$(this).find('img').attr('src','../image/bottom-2.jpg');
	$(this).find('p').css('color','#6c6c6c');
})
$('.bottom-top .focus li').mouseenter(function() {
	$(this).find('div').css('display','block');
})
$('.bottom-top .focus li').mouseleave(function() {
	$(this).find('div').css('display','none');
})
