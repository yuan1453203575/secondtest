$('.content').on('mouseenter','.leftimg', function() {
	$('.mask').css('display','block');
	$('.maxBox').css('display','block');
})
$('.content').on('mouseleave','.leftimg', function() {
	$('.mask').css('display','none');
	$('.maxBox').css('display','none');
})
$('.content').on('mousemove','.leftimg',function(ev) {
		var e = ev || event;
		var x = $('.leftimg').offset().left;
		var y = $('.leftimg').offset().top;
		var maskX = e.clientX - x - $('.mask').width()/2;
		var maskY = e.clientY - y - $('.mask').height()/2 + $(document).scrollTop();	
	    if (maskX <= 0){
	        maskX = 0;
	    }
	    if (maskX >= ($('.leftimg').width() - $('.mask').width())) {
	        maskX = $('.leftimg').width() - $('.mask').width();
	    }
	    if (maskY <= 0){
	        maskY = 0;
	    }
	    if (maskY >= ($('.leftimg').height() - $('.mask').height())) {
	        maskY = $('.leftimg').height() - $('.mask').height();
	    }
		$('.mask').css('left',maskX + 'px');
		$('.mask').css('top',maskY + 'px');
	    var scaleX = maskX / ($('.leftimg').width() - $('.mask').width());
	    var scaleY = maskY / ($('.leftimg').height() - $('.mask').height());
	    var maxImgX = scaleX * ($('.maxBox img').width() - $('.maxBox').width());
		var maxImgY = scaleY * ($('.maxBox img').height() - $('.maxBox').height());
		$('.maxBox img').css('left', -maxImgX + 'px');
		$('.maxBox img').css('top', -maxImgY + 'px');
})
var code = localStorage.getItem('goods');
var code = JSON.parse(code);
$.ajax({
	url: '../json/detail.json',
	type: 'get',
	dataType: 'json',
	success: function(json) {
		$.each(json,function(index,item) {
			if(code[0].code === item.code) {
				var newDom = `<div class="contentlist">
					<ul>
						<li>${item.list1}<span>></span></li>
						<li>${item.list2}<span>></span></li>
						<li>${item.list3}<span>></span></li>
						<li>${item.list4}</li>
					</ul>
				</div>
				<div class="contentgoods">
					<div class="left">
						<div class="leftimg">
							<img src="${item.imgUrlmid1}" >
							<div class="mask"></div>
						</div>
						<ul>
							<li><img src="${item.imgUrlmin1}" ></li>
							<li><img src="${item.imgUrlmin2}" ></li>
							<li><img src="${item.imgUrlmin3}" ></li>
							<li><img src="${item.imgUrlmin4}" ></li>
							<li><img src="${item.imgUrlmin5}" ></li>
						</ul>
						<p><span>企业采购更优惠 <em>&gt;</em></span></p>
					</div>
					<div class="right">
						<div class="right-1">
							<h3>${item.list4}</h3>
							<span>${item.r1}%</span>
						</div>
						<div class="right-2">
							<span class="one">${item.r21}</span>
							<span class="two">好评率 &gt;</span>
						</div>
						<div class="right-3">
							<p class="p1"><span class="p1-1">${item.r311}</span><span class="p1-2">低至${item.r312}</span>
								<span class="p1-3">距优惠开抢 14:49:32</span><span class="p1-4">更多抢购 &gt;</span></p>
							<p class="p2"><span class="tit">价格</span><span class="p2-1">${item.r321}</span></p>
							<p class="p3"><span class="p3-1">Pro专享</span><span class="p3-2">Pro会员叠加优惠，到手价<em>${item.r331}</em></span>
								<span class="p3-3">立即开通 &gt;</span></p>
							<p class="p4"><span class="tit">促销</span><span class="p4-1">${item.r341}</span>
								<span class="p4-2">818科技狂欢节，家电爆款低至1折</span></p>
							<p class="p5"><span class="p5-1">${item.r351}</span><span class="p5-2">你的消暑神券来了!清凉爆品无门槛直减</span></p>
							<p class="p6"><span class="tit">购物返</span><span class="p6-1">最高返<em>${item.r361}</em></span></p>
							<p class="p7"><span class="tit">邮费</span><span class="p7-1">${item.r371}</span></p>
							<p class="p8"><span class="tit">配送</span>至
								<select>
									<option value="0">请选择地址</option>
									<option value="1">深圳</option>
									<option value="2">郑州</option>
									<option value="3">北京</option>
									<option value="4">广州</option>
									<option value="5">上海</option>
								</select></p>
							<p class="p9"><span class="tit">服务</span><span class="p9-1">· 网易自营品牌</span>
								<span class="p9-1">· ${item.r391}</span><span class="p9-1">· ${item.r392}</span></p>	
						</div>
						<div class="right-4">
							<ul>
								<li>颜色</li>
								<li class="change"><img src="${item.r4img1}" ></li>
								<li class="change"><img src="${item.r4img2}" ></li>
							</ul>
						</div>
						<div class="right-5">
							<span class="n1">数量</span>
							<span class="n2">-</span>
							<span class="n3">1</span>
							<span class="n4">+</span>
						</div>
						<div class="rigth-6">
							<button class="buy">立即购买</button>
							<button class="add">加入购物车</button>
						</div>
					</div>
					<div class="maxBox">
					    <img src="${item.imgUrlmax1}" alt="">
					</div>
				</div>
				<div class="detail">
					<div class="detailnav">
						<ul>
							<li>详情</li>
							<li>评价<span>${item.com}</span></li>
							<li>常见问题</li>
						</ul>
					</div>
					<div class="detailbanner">
						<img src="../image/detail-nav1.jpg" >
					</div>
					<div class="materials">
						<div class="one">
							<div class="left">材料</div>
							<div class="right">
								<p>发热煲、高压漏斗：压铸铝</p>
								<p>蒸汽管、双杯滤网：304不锈钢</p>
								<p>主体、顶盖、前盖、接水盘、水箱盖：ABS材料；</p>
								<p>水箱：透明AS材料；</p>
							</div>
						</div>
						<p><span class="tit1">电压功率</span><span>电压：220V ~ 50Hz</span>
							<span class="vol2">功率：1100W</span></p>
						<p><span class="tit1">水箱容量</span>${item.cap}
							<span class="tit1 tit2">产品尺寸</span>388 mm* 200 mm* 314mm</p>
						<p><span class="tit1">净重</span>${item.wei}
							<span class="tit1 tit2">泵压</span>15bar</p>	
						<div class="intro">
							<h3>使用说明</h3>
							<p>${item.intro1}</p>
							<p>${item.intro2}</p>
						</div>
						<p><span class="tit1">重要提示</span>${item.imp}</p>	
					</div>
					<div class="detailimg">
						<img src="${item.deimg1}" >
						<img src="${item.deimg2}" >
						<img src="${item.deimg3}" >
						<img src="${item.deimg4}" >
						<img src="${item.deimg5}" >
						<img src="${item.deimg6}" >
						<img src="${item.deimg7}" >
						<img src="${item.deimg8}" >
						<img src="${item.deimg9}" >
					</div>
				</div>`;
				$('.content').append(newDom);
			}
		})
	}
})
$('.content').on('mouseenter','.left li',function() {
	var index = $(this).index() + 1;
	$('.leftimg img').attr('src','../image/detail'+ code[0].code +'-mid-'+ index + '.jpg');
	$('.maxBox img').attr('src','../image/detail'+ code[0].code +'-max-'+ index + '.jpg');
})
$('.content').on('click','.right-4 .change',function() {
	var index = $(this).index();
	$('.leftimg img').attr('src','../image/kind'+ code[0].code +'-mid-'+ index + '.jpg');
	$('.maxBox img').attr('src','../image/kind'+ code[0].code +'-max-'+ index + '.jpg');
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

