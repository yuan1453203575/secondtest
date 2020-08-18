var mySwiper = new Swiper ('.swiper-container', {
//   direction: 'vertical', // 垂直切换选项
  direction: 'horizontal', // 水平切换选项
  loop: true, // 循环模式选项
//   autoplay:true,//等同于以下设置
autoplay: {
	delay: 2000,
	stopOnLastSlide: false,
	disableOnInteraction: false,
},
  // 分页器
  pagination: {
	el: '.swiper-pagination',
	clickable :true,
  },
  // 后退按钮
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },
})
$('.listbanner').mouseenter(function() {
	$(this).find('.prev').css('display','block');
	$(this).find('.next').css('display','block');
})
$('.listbanner').mouseleave(function() {
	$(this).find('.prev').css('display','none');
	$(this).find('.next').css('display','none');
})
$.ajax({
	url: '../json/goods-1.json',
	type: 'get',
	dataType: 'json',
	success: function(json) {
		$.each(json, function(index,item) {
			var newDom = `<li code="${item.code}"><a href="./detail.html"><img src="${item.imgUrl}" ></a>
				<p class="one"><span>${item.title1}</span></p>
				<p class="two">${item.title2}</p>
				<p class="three">${item.title3}</p>
				<p class="four">${item.title4} <span>${item.title5}</span></p>
				<p class="five">${item.title6}</p>
			</li>`;
			$('.goods-1bot ul').append(newDom);
		})
	}
})
$.ajax({
	url: '../json/goods-2.json',
	type: 'get',
	dataType: 'json',
	success: function(json) {
		$.each(json, function(index,item) {
			var newDom = `<li><a href=""><img src="${item.imgUrl}" ></a>
				<p class="one"><span>${item.title1}</span></p>
				<p class="two">${item.title2}</p>
				<p class="three">${item.title3}</p>
				<p class="four">${item.title4} <span>${item.title5}</span></p>
				<p class="five">${item.title6}</p>
			</li>`;
			$('.goods-2bot ul').append(newDom);
		})
	}
})
$('.goods-1bot ul').on('mouseenter','li',function() {
	var index = $(this).index() + 5;
	$(this).find('img').attr('src','../image/goods-1-'+ index +'.jpg');
	$(this).css('background-color','#f2eede');
})
$('.goods-1bot ul').on('mouseleave','li',function() {
	var index = $(this).index() + 1;
	$(this).find('img').attr('src','../image/goods-1-'+ index +'.jpg');
	$(this).css('background-color','#ffffff');
})
$('.goods-2bot ul').on('mouseenter','li',function() {
	var index = $(this).index() + 5;
	$(this).find('img').attr('src','../image/goods-2-'+ index +'.jpg');
	$(this).css('background-color','#f2eede');
})
$('.goods-2bot ul').on('mouseleave','li',function() {
	var index = $(this).index() + 1;
	$(this).find('img').attr('src','../image/goods-2-'+ index +'.jpg');
	$(this).css('background-color','#ffffff');
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
$('.goods').on('click','.goods-1 li',function() {
	var goodsArr = [];
	var code = $(this).attr('code');
	goodsArr.push({"code": code});
	localStorage.setItem('goods',JSON.stringify(goodsArr));
})
