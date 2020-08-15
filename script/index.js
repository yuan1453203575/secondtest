var mySwiper = new Swiper ('.banner .swiper-container', {
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
	el: '.banner .swiper-pagination',
	clickable :true,
  },
  // 后退按钮
  navigation: {
	nextEl: '.banner .swiper-button-next',
	prevEl: '.banner .swiper-button-prev',
  },
})

//新品
$('.new_bottom ul li').mouseenter(function() {
	var index = $(this).index() + 5;
	$(this).find('img').attr('src','../image/new-'+ index +'.jpg');
	$(this).css('background-color','#f2eede');
})
$('.new_bottom ul li').mouseleave(function() {
	var index = $(this).index() + 1;
	$(this).find('img').attr('src','../image/new-'+ index +'.jpg');
	$(this).css('background-color','#ffffff');
})
$('.live-bottom ul li').mouseenter(function() {
	var index = $(this).index() + 5;
	$(this).find('img').attr('src','../image/liveb-'+ index +'.jpg');
	$(this).css('background-color','#f2eede');
})
$('.live-bottom ul li').mouseleave(function() {
	var index = $(this).index() + 1;
	$(this).find('img').attr('src','../image/liveb-'+ index +'.jpg');
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

// live轮播
var imgs = document.querySelectorAll('.live .main img');
var nums = document.querySelectorAll('.live .num li');
var prev = document.querySelector('.live .prev');
var next = document.querySelector('.live .next');
var timer;
var showIndex = 0;
var prevIndex = 0;

animate(imgs[showIndex],{'opacity':1},function (){
    timer = setInterval(function (){
        moveNext();
    },3000);
});
//向下执行
function moveNext(){
    imgs[prevIndex].className = '';
    nums[prevIndex].className = '';
    imgs[prevIndex].style.opacity = 0.02;
    showIndex++;
    if (showIndex >= imgs.length) {
        showIndex = 0;
    }
    imgs[showIndex].className = 'show';
    nums[showIndex].className = 'active';
    prevIndex = showIndex;
    animate(imgs[showIndex],{'opacity':1});
}
//向上执行
function movePrev(){
    imgs[prevIndex].className = '';
    nums[prevIndex].className = '';
    imgs[prevIndex].style.opacity = 0.02;
    showIndex--;
    if (showIndex < 0) {
        showIndex = imgs.length-1;
    }
    imgs[showIndex].className = 'show';
    nums[showIndex].className = 'active';
    prevIndex = showIndex;
    animate(imgs[showIndex],{'opacity':1});
}
//点击下一个
next.onclick = function (){
    clearInterval(timer);
    clearInterval(imgs[showIndex].timer);
    moveNext();
    timer = setInterval(function (){
        moveNext();
    },3000);
}//点击上一个
prev.onclick = function (){
    clearInterval(timer);
    clearInterval(imgs[showIndex].timer);
    movePrev();
    timer = setInterval(function (){
        moveNext();
    },3000);
}
//点击下标
for (var i = 0, len = nums.length; i < len; i++){
    nums[i].index = i;
    nums[i].onmouseenter = function (){
        clearInterval(timer);
        clearInterval(imgs[showIndex].timer);
        imgs[prevIndex].className = '';
        nums[prevIndex].className = '';
        imgs[prevIndex].style.opacity = 0.02;
        showIndex = this.index;
        imgs[showIndex].className = 'show';
        nums[showIndex].className = 'active';
        prevIndex = showIndex;
        animate(imgs[showIndex],{'opacity':1});
        timer = setInterval(function (){
            moveNext();
        },3000);
    }
}