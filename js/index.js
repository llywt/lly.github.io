$(function(){
// <!-- //轮播图js -->
		var swiper = new Swiper('.swiper-container', {
		  slidesPerView: 3,
		  spaceBetween: 30,
		  centeredSlides: true,
		  loop: true,
		  pagination: {
			clickable: true,
		  },
		  navigation: {
            nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
      	  },
			autoplay:true,
		});

//点击首页 
        $('.hide').eq(0).show()
        $('.show').eq(0).hide()
        $('.hide').eq(0).parent('span').siblings('p').css('color','#ff9700')
        $('footer>ul').on('click','li',function(){
             $(this).children('span').children('.hide').show()
             $(this).siblings('li').children('span').children('.hide').hide()
             $(this).children('span').children('.show').hide()
             $(this).siblings('li').children('span').children('.show').show()
             //文字
             $(this).children('p').css('color','#ff9700')
             $(this).siblings('li').children('p').css('color','')
        })

//点击书架
$('footer ul li').on('click',function(){
    //console.log($(this).index());
    if($(this).index()==0){
        $('.shouye').show()
        $('.find').hide()
        $('.bookrack').hide()
        $('.mine').hide()
    }else if($(this).index()==1){
        $('.shouye').hide()
        $('.find').show()
        $('.bookrack').hide()
        $('.mine').hide()
    }else if($(this).index()==2){
        $('.shouye').hide()
        $('.find').hide()
        $('.bookrack').show()
        $('.mine').hide()
    }else {
        $('.shouye').hide()
        $('.find').hide()
        $('.bookrack').hide()
        $('.mine').show()
    }
})
//点击图书时的交互







    
})