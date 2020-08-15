$('.purchase').mouseenter(function() {
	$(this).find('.list').css('display','block');
})
$('.purchase').mouseleave(function() {
	$(this).find('.list').css('display','none');
})
$('.service').mouseenter(function() {
	$(this).find('.list1').css('display','block');
})
$('.service').mouseleave(function() {
	$(this).find('.list1').css('display','none');
})
$('.live').mouseenter(function() {
	$(this).find('div').css('display','block');
})
$('.nav .c1').mouseenter(function() {
	$(this).find('.nav_content').css('display','block');
	var index = $(this).index() - 1;
	$.ajax({
		url: '../json/navjson.json',
		type: 'get',
		dataType: 'json',
		success: function(json) {
			$('.nav_content').html('');
			var newDom = `<ul>
					<h3>${json[index].title1}</h3>
					<li>口碑好物</li>
					<li>抑菌防螨</li>
					<li>春夏好物</li>
					<li>主题床品</li>
					<li>北欧原木</li>
					<li>餐厨爆款清单</li>
				</ul>
				<ul>
					<h3>${json[index].title2}</h3>
					<li>床品件套</li>
					<li>被枕盖毯</li>
					<li>床垫床褥</li>
				</ul>
				<ul>
					<h3>${json[index].title3}</h3>
					<li>客餐厅家具</li>
					<li>卧室家具</li>
					<li>办公书房家居</li>
					<li>小件家具</li>
					<li>灯具</li>
					<li>地毯窗帘</li>
				</ul>
				<ul>
					<h3>${json[index].title4}</h3>
					<li>收纳</li>
					<li>晾晒除味</li>
					<li>毛巾浴巾</li>
					<li>居家拖鞋</li>
					<li>家庭医疗</li>
				</ul>
				<ul>
					<h3>${json[index].title5}</h3>
					<li>抱枕靠垫</li>
					<li>家饰</li>
					<li>居家布艺</li>
				</ul>
				<ul>
					<h3>${json[index].title6}</h3>
					<li>锅具</li>
					<li>餐厨配件</li>
					<li>刀剪拈板</li>
				</ul>
				<ul>
					<h3>${json[index].title7}</h3>
					<li>餐具</li>
					<li>水具杯壶</li>
					<li>茶咖酒具</li>
				</ul>
				<ul>
					<h3>${json[index].title8}</h3>
					<li>宠物食品</li>
					<li>宠物用品</li>
				</ul>`;
			// console.log(json[index]);
			$('.nav_content').append(newDom);
		}
	})
})
$('.nav .c1').mouseleave(function() {
	$(this).find('.nav_content').children().remove();
})
$('.nav .c1').mouseleave(function() {
	$(this).find('.nav_content').css('display','none');
})