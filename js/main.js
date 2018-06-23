$(function(){
	requestIndex();
})

// var action = function(){
  
  

//    $("#btn-return").click(function(){
//       requestIndex();
//       $('#qqMain').hide();
//       $('#my_audio').remove();
//       $('.btnpic').css({
//                   "background": "url(images/parse.png)",
//                   "background-size": "100% 100%"
//        });
//        $('.btnpic').attr("item","0");
//         $(".img img").addClass("rainbow"); 
//         $('.front-page').show();
//                 $('.end-page').hide();
//                 $('.time').show();
//                 $('.time_progress').show();
//                 $('.next').show();
//                 $('.btnpic').show();
//                 $('.prev').show();
//                  $('.music_return').hide();
//                 flag = true;

//    })

   // //景区列表进入景区语音讲解页面
   //  $('.contents').on('click','.spot',function(){
   // 	     var spotId = $(this).attr('data-id');
   //       request_spotslist(spotId);
   //       // request_music(4,20);
          
   //       console.log(spotId)
   // })
    
   //  //语音讲解进入语音播放页面
   //  $('.contents').on('click','.temple-item',function(){
   //     var id = $(this).attr('data-id');
   //      pid = $(this).attr('data-pid');
   //  	 request_music(id,pid);
   //  })


   //  $(".btnpic").click(function(){
   //    if($(this).attr("item")=="1"){  
   //       $(this).css({
   //                  "background": "url(images/parse.png)",
   //                  "background-size": "100% 100%"
   //       });
   //       $(this).attr("item","0");
   //    }
   //    else{
   //      $(this).css({
   //                  "background": "url(images/playmusic.png)",
   //                  "background-size": "100% 100%"
   //      });
   //      $(this).attr("item","1");
   //    }
   //      playPause();
   //  });

 
   //   //下一首
   //   $('.next').click(function(){
   //      next_song();
   //   })

   //   //上一首
   //   $('.prev').click(function(){
   //       pre_song();
   //   })

   //  var  flag = true;//在正面播放页面
   //  $('.music-page').click(function(){
   //           if(flag){
   //              $('.front-page').hide();
   //              $('.end-page').show();
   //              $('.time').hide();
   //              $('.time_progress').hide();
   //              $('.next').hide();
   //              $('.btnpic').hide();
   //              $('.prev').hide();
   //              $('.music_return').show();
   //              flag = false;
   //           }
   //           else{
   //              $('.front-page').show();
   //              $('.end-page').hide();
   //              $('.time').show();
   //              $('.time_progress').show();
   //              $('.next').show();
   //              $('.btnpic').show();
   //              $('.prev').show();
   //               $('.music_return').hide();
   //              flag = true;
   //           }
   //  })

    
}


var requestIndex = function(){
	 $.ajax({  
        url:/index/,  
        data:'',    
        type:'get',
        dataType:'json',
        crossDomain: true, 
        success:function(result) {  
            render_index(result);
        }, 
    });  
}

var render_index = function(result){
	var str = '';
	str += '<div class="main"><img src="'+result.info[0].picture+ '" class="header"><ul class="footer clearfix">';
	for(var i=1;i<(result.info.length);i++){
	  	str += '<li class="lists"><a href="' + result.info[i].url + '"><img src="' +result.info[i].picture+'"><div class="titles">' + result.info[i].name +'</div></a></li>'
	}
	str += '</ul></div>';
	$('.contents').html(str);
}

 
// var request_hotel = function(){
// 	 $.ajax({
//           url: /hotel/,
//           type: 'get',
//           data: '',
//           dataType: 'json',
//           success: function(res) {
//             render_hotel(res);
//           }
//     })        
   
// }


// var render_hotel = function(res){
// 	var str = '';
// 	str += '<div class="hotel">' + '<div class="hotel-title"><div class="third-title">' + res.info.heardtitle.name + '</div>';
// 	str += '<p class="third-des">'+  res.info.heardtitle.title + '</p></div>';
//     str += '<div class="swiper-container swiper-containers">' +'<div class="swiper-wrapper">';
//     for(var i=0;i<res.info.legendbanner.length;i++){
// 	    str += '<div class="swiper-slide" style="background: url('
// 	    + "'"
// 	    + res.info.legendbanner[i].picture+ "')"
// 	    +'">';
//       if(res.info.legendbanner[i].url!= '') {
//         str += '<a href="'+res.info.legendbanner[i].url +'"></a>'
//       }
// 	    str += '<div class="third-banner-title">' + res.info.legendbanner[i].name +'</div><div class="third-banner-des">' + res.info.legendbanner[i].english_name + '</div></div>';
//     }
//    str += '</div> <div class="swiper-pagination"></div></div>';
//    //瀑布流拼接
//    str += '<div class="third-list">';
//    str += '<ul class="third-ul"></ul><ul class="third-ul-right"><ul>';
//    str += '</div>';
//    str +='<img class="returnsbtn" src="images/returns.png"></div>';
//    var count = 0;
//    var imgs = [];
//    var len = res.info.legend.length;
//    var count = 0;
//    var flags = false;
//    for (var i=0;i<len;i++){
//       imgs.push(res.info.legend[i].picture);
//    }
//    $.each(imgs,function(i,src){
//        var imgObj = new Image();
//        $(imgObj).on('load',function(){
//         if(count >=len -1){
//           console.log("加载完成");
//           render_waterfall(str,res.info);
//         }
//          count++;
//        })
//        imgObj.src = src;
//    })

//     $('.contents').html(str);
//      swipers_contents();
// }

// var render_waterfall = function(str,res){
//    var left_height = 0;
//    var right_height = 1;
//    for(var i=0;i<res.legend.length;i++){
//       var new_li = '';
//       new_li += '<li class="third-list-item">';
//       if(res.legend[i].url !=''){
//         new_li += '<a href="' + res.legend[i].url+'">'
//       }
//         new_li += '<img src="' + res.legend[i].picture + '">';
//       new_li += '<p class="third-name">' +  res.legend[i].name + '</p><div class="third-pic-des">';
//       new_li += res.legend[i].title + '</div>';
//       if(res.legend[i].url !=''){
//         new_li += '</a>'
//       }
//        new_li +='</li>';
//       if(left_height < right_height){ 
//          $('.third-ul').append(new_li);
//          left_height = $('.third-ul').height();
//       }
//       else{
//          $('.third-ul-right').append(new_li);
//          right_height = $('.third-ul-right').height();        
//       }
//    }

    
    
// }

// var request_market = function(){
//     $.ajax({
//           url: /market/,
//           type: 'get',
//           data: {id:1},
//           dataType: 'json',
//           success: function(res) {
//             render_market(res)
//           }
//     })     
// }
// var render_market = function(res){
// 	var str = '';
// 	str += '<div class="market">';
// 	str += '<div class="swiper-container market-banner"><div class="swiper-wrapper">';
// 	for(var i=0;i<res.info.amanbanner.length;i++){
// 		str += '<div class="swiper-slide" style="background: url('
// 	    + "'"
// 	    + res.info.amanbanner[i].picture+ "')"
// 	    +'">'
// 	    if(res.info.amanbanner[i].url!= '') {
// 	    	str += '<a href="'+res.info.amanbanner[i].url +'"></a>'
// 	    }
// 	    str += '</div>';
// 	}
// 	str += '</div><div class="swiper-pagination"></div></div>';
    
//     //第二行
//     str += '<div><ul class="clearfix first-line-pic">';
//     for(var i=0;i<4;i++){
//     	str += '<li class="first-line-items">';
//     	if(res.info.yxta[i].url != ''){
//     		str += '<a href="' + res.info.yxta[i].url + '">'; 
//     	}
//     	str +='<img src="' + res.info.yxta[i].picture +'">';
//     	str += '<div class="products">' + res.info.yxta[i].name +'</div>'
//     	if(res.info.yxta[i].url != ''){
//     		str += '</a>'
//     	}
//     	str +='</li>';
//     }
//     str += '</ul></div>'
   
//     //第三行
//     str += '<div><ul class="clearfix second-line-pic">';
//     for(var i=0;i<3;i++){
//     	str += '<li class="second-line-items">';
//     	if(res.info.zfzta[i].url != ''){
//     		str += '<a href="' + res.info.zfzta[i].url + '">'; 
//     	}
//     	str +='<img src="' + res.info.zfzta[i].picture +'">';
//     	str +='<div class="title-img">' + res.info.zfzta[i].name +'</div>';
//     	if(res.info.zfzta[i].url != ''){
//     		str += '</a>';
//     	}
//     	str +='</li>';
//     }
//     str +='</ul></div>';
 
//    // swiper 转动 width 50%;
//      str += '<div class="swiper-container seconds-container"><div class="swiper-wrapper">'
//      for(var i=0;i<res.info.cfxta.length;i++){
// 	    str += '<div class="swiper-slide seconds-slide" style="background: url('
// 	    + "'"
// 	    + res.info.cfxta[i].picture+ "')"
// 	    +'">';
// 	   if(res.info.cfxta[i].url != ''){
// 	   	 str += '<a href="' + res.info.cfxta[i].url + '"></a>'; 
// 	   }
// 	   str +=  '</div>'
//     }
//     str += '</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div>'
//     //即将上新
//     str += '<img src="../images/future.png" class="future">';
//     for(var i=0;i<res.info.jjsx.length;i++){
//     	str += '<a href="' + res.info.jjsx[i].url +'">' + '<img class="nowadays" src="' + res.info.jjsx[i].picture +'"></a>'
//     }
//     str += '<img class="returnsbtn" src="images/returns.png">';
// 	 $('.contents').html(str);
// 	 $('.swiper-slide').css({
//          "background-size": "100% 100%"
//      });
//      market_banner();
//      second_swipers();
     
// }

// var request_gift = function(){
// 	 $.ajax({
//           url: /gift/,
//           type: 'get',
//           data: {id:1},
//           dataType: 'json',
//           success: function(res) {
//           	console.log(res)
//           	render_gift(res)
//           }
//     })     
// }


// var render_gift = function(res){
// 	var str ='';
// 	str += '<div class="gifts">';
// 	for(var i=0;i<res.info.pradirlist.length;i++){
//       str += '<div>';
//       if(res.info.pradirlist[i].url != ''){
//       	str += '<a href="'+ res.info.pradirlist[i].url +'">'
//       }
//       str +='<img class="gift-pic" src="' + res.info.pradirlist[i].picture + '">';
//       str += '<div class="gift-right"><p class="gift-title">' + res.info.pradirlist[i].name +'</p>';
//       str += '<p class="gift-des">' + res.info.pradirlist[i].title + '</p></div>';
//       if(res.info.pradirlist[i].url != ''){
//       	str += '</a>'
//       }
//       str += '</div>'
// 	}
// 	str +=  '<img class="returnsbtn" src="../images/returns.png"></div>';  
// 	 $('.contents').html(str);
     
// }

// var request_weekend = function(){
// 	 $.ajax({
//           url: /weekend/,
//           type: 'get',
//           data: {id:1},
//           dataType: 'json',
//           success: function(res) {
//           	render_weenkend(res)
//           }
//     })     
// }

 
// var render_weenkend = function(res){
//      var str = '';
//      str += '<div class="weekend">';
//      str += '<div class="swiper-container first-new-swiper"><div class="swiper-wrapper">';

//      for(var i=0;i<res.info.weedynbanner.length;i++){
// 	    str += '<div class="swiper-slide" style="background: url('
// 	    + "'"
// 	    + res.info.weedynbanner[i].picture+ "')"
// 	    +'">';
// 	   if(res.info.weedynbanner[i].url != ''){
// 	   	 str += '<a href="' + res.info.weedynbanner[i].url + '"></a>'; 
// 	   }
// 	   str += '</div>'
//     }

//     str += '</div><div class="swiper-pagination"></div></div>';
    
//     str += '<div class="first-wrapper"><div class="first-wrapper"><img src="../images/tem.png" class="pic-one">';
//     str += ' <div class="introducation"><div>' + res.info.weedyn[0].name + '</div><div>' + res.info.weedyn[0].name +'</div></div></div>';
//     //下面展示为偶数个
//          for(var i=1;i<(res.info.weedyn.length);i++)
//          {
//          	str += '<div class="week-pic">'
//          	if(res.info.weedyn[i].url !=''){
//          		str += '<a href="'+ res.info.weedyn[i].url +'">' 
//          	}
//          	if(i%2 != 0){
// 	         	str += '<img src="' + res.info.weedyn[i].picture + '" class="pic-sun">';
// 	         	str += '<div class="introducation-week"><img class="small-icon" src="' + res.info.weedyn[i].smallicons +'">';
// 	         	str += '<div class="small-tips">' + res.info.weedyn[i].name +'</div>';
// 	         	str += '<div class="small-des">' + res.info.weedyn[i].title +'</div></div>';
//             }
//             else{
// 	         	str += '<div class="introducation-week"><img class="small-icon" src="' + res.info.weedyn[i].smallicons +'">';
// 	         	str += '<div class="small-tips">' + res.info.weedyn[i].name +'</div>';
// 	         	str += '<div class="small-des">' + res.info.weedyn[i].title +'</div></div>';
// 	         	str += '<img src="' + res.info.weedyn[i].picture + '" class="pic-sun">';
//             }

//          	if(res.info.weedyn[i].url !=''){
//          		str += '</a>';
//          	}
//          	str +='</div>';
//          }
//          str += '</div><img class="returnsbtn" src="../images/returns.png"></div>'
	      

//     $('.contents').html(str);
//      $('.swiper-slide').css({
//          "background-size": "100% 100%"
//      });
   
//    weekSwiper(); 
// }

// var request_spots = function(){
// 	 $.ajax({
//           url: /spots/,
//           type: 'get',
//           data: {id:1},
//           dataType: 'json',
//           success: function(res) {
//             console.log(res);
//           	render_spots(res)
//           }
//     })   
// }

// var render_spots = function(res){
// 	var str ='';
// 	str += '<div class="tour">';
//     for(var i = 0;i<res.info.speprelist.length;i++){
//     	str += '<div class="listens"><div class="spot" data-id='+ res.info.speprelist[i].id+'><img src="'+ res.info.speprelist[i].picture +'">';
//     	str += '<div class="triangle"></div></div><p class="first-pass">' + res.info.speprelist[i].name + '</p>';
//     	str += '<p class="second-pass">' + res.info.speprelist[i].title + '</p></div>'
//     }
//     str += '<img class="returnsbtn" src="../images/returns.png"></div>';
//     $('.contents').html(str);
   
// }

// var request_spotslist = function(id){
//    $.ajax({
//           url: /spotslist/+'?m=api&subm=xhxmy&action=scespo',
//           type: 'get',
//           data: {
//             id:id
//           },
//           dataType: 'json',
//           success: function(res) {
//             console.log(res)
//           	render_spotslist(res.info)
//           }
//     })   
// }



// var render_spotslist = function(res){
//     var str = '';
//     str += '<div class="temple">';
//     for(var i=0;i<res.length;i++){
// 	    str += '<div class="temple-item" data-id='+ res[i].id + ' data-pid=' + res[i].pid+'><img src="' + res[i].picture + '" class="temple-pic">';
// 	    str += ' <div class="temple-wrapper"><p class="temple-title">' + res[i].name + '</p>';
// 	    str += ' <p class="temple-time">' + res[i].playbacktime +'</p>';
// 	    str += '<p class="temple-desc">' + res[i].title +'</p></div></div>';
// 	}
// 	str +=  '<img class="returnsbtn" src="images/returns.png"></div>';
// 	$('.contents').html(str);
// }

// var request_lists = function(){
// 	 $.ajax({
//           url: /lists/,
//           type: 'get',
//           data: {id:1},
//           dataType: 'json',
//           success: function(res) {
//           	console.log(res)
//           	render_lists(res)
//           }
//     })     
// }
// var render_lists = function(res){
//    render_gift(res);
// }

// var request_music = function(id,pid){
//      $.ajax({
//           url: /play/ +'?m=api&subm=xhxmy&action=scenicspot',
//           type: 'get',
//           data: {
//           	id:id,
//           	pid:pid
//           },
//           dataType: 'json',
//           success: function(res) {
//             console.log(res);
//           	render_play(res);
//             nextSong_id = res.info.next;
//             preSong_id = res.info.pre;
//           }
//     })     
// }


// var render_play = function(res){
//      $('.contents').html('');

//      $('#qqMain').show();
//       var my_audio = document.createElement("AUDIO");
//       my_audio.setAttribute("autoplay", 'true');
//       my_audio.setAttribute("id", 'my_audio');
//       my_audio.addEventListener('canplay', function(){
//         document.getElementById("all_time").innerHTML = timeFormat(my_audio.duration);
//       }, false);
//       document.getElementById('qqMain').appendChild(my_audio);
     
//      $('.qqMain-title').html(res.info.name); 
//      $('.img-wrapper img').attr('src',res.info.picture);
//      $('.musicName span').html(res.info.title);
//      $('#qqMain').css({'background':'url('+ res.info.picture +')',"background-size": "100% 100%"});
//      $('#my_audio').attr('src',res.info.voiceaddress);
    
//      var newStr = res.info.content;
//       $('.lyrics-contenter').html(newStr);
//       my_audio.play();
//       play_song();
// }

// var swipers_contents = function(){
//    var swiper = new Swiper('.swiper-containers', {
//         pagination: '.swiper-pagination',
//         effect: 'coverflow',
//         grabCursor: true,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         autoplay:3000,
//         paginationClickable: true,
//         autoplayDisableOnInteraction: false,
//         coverflow: {
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows : true
//         }
//     });
// }


// var second_swipers = function(){
// 	  var swiper = new Swiper('.seconds-container', {
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         slidesPerView: 2,//一行显示2个
//     });
// }

// var weekSwiper = function(){
// 	 var swiper = new Swiper('.first-new-swiper', {
//         pagination: '.swiper-pagination',
//         effect: 'coverflow',
//         grabCursor: true,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         autoplay:3000,
//         paginationClickable: true,
//         autoplayDisableOnInteraction: false,
//         coverflow: {
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows : true
//         }
//     });
// }

// var market_banner = function(){
// 	var swiper = new Swiper('.market-banner', {
//         pagination: '.swiper-pagination',
//         effect: 'coverflow',
//         grabCursor: true,
//         centeredSlides: true,
//         slidesPerView: 'auto',
//         autoplay:3000,
//         paginationClickable: true,
//         autoplayDisableOnInteraction: false,
//         coverflow: {
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows : true
//         }
//     });
// }


// var play_song = function(){
//     var my_audio = document.getElementById("my_audio");
//     my_audio.play();
//     var startX = startY = endX = endY = 0;  
          
//   my_audio.ontimeupdate = function(){
//     //获取当前播放时间
//     document.getElementById("now_time").innerHTML = timeFormat(my_audio.currentTime);
//     //播放到歌曲的末尾了
//     if(my_audio.duration == my_audio.currentTime)
//     {
//       $(".img img").removeClass("rainbow");
//       next_song();
//     }
//     //当前的长度
//       now_long=my_audio.currentTime/my_audio.duration*p_all;
//       $(".bar").css({width:now_long});
//       var btn_l=now_long-10+'px';
//       $(".btn").css({left:btn_l});
//       addListenTouch();
//   }
  
// }


// //暂停或播放
// var playPause = function()
// { 
//   if(my_audio.paused)
//     {
//       my_audio.play();
//       $(".img img").addClass("rainbow");
//     }
//     else
//     {
//       my_audio.pause();
//       $(".img img").removeClass("rainbow");
//     }   
// }
  
//   var timeFormat = function(seconds){
//       var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
//       var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
//       return m+":"+s;
//     };  

//   //手动拉拽进度条的部分
//   var addListenTouch = function(){
//     var btn=document.getElementById("btn");
//     document.getElementById("btn").addEventListener("touchstart", touchStart, false);
//     document.getElementById("btn").addEventListener("touchmove", touchMove, false);
//     document.getElementById("btn").addEventListener("touchend", touchEnd, false);
//   }

//   var touchStart = function(e){
//     //判断移动时候播放器的状态
//      if(my_audio.paused){
//       state = true;
//      }
//      else{
//       state = false;
//      }
//     e.preventDefault();
//     var touch=e.touches[0];
//     startX=touch.pageX;
//     my_audio.pause();
//     document.getElementById("all_time").innerHTML = timeFormat(my_audio.duration);  
//     //歌词区域touch移动距离
//     var touchSong = e.targetTouches[0];
//         startSongX = touchSong.pageX;
//         startSongY = touchSong.pageY;
//     }

//   var touchMove = function(e){//滑动
//     e.preventDefault();
//     var touch=e.touches[0];
//     x=touch.pageX-startX//滑动的距离
//     var widthBar=now_long+x;
//     //
//     $(".bar").css({width:widthBar});
//     if(widthBar<p_all){
//       $("#btn").css({left:widthBar-10+'px'});
//       $("#bar").css({width:widthBar});  
//     }
//     var touchSong = e.targetTouches[0];
//         endSongX = touchSong.pageX;
//         endSongY = touchSong.pageY;
       
//     var yu=widthBar/p_all*my_audio.duration;
//     document.getElementById("now_time").innerHTML = timeFormat(yu);
//   }

//   var touchEnd = function(e){//手指离开屏幕
//     e.preventDefault();//取消事件的默认动作
//     now_long=parseInt(btn.style.left);
//     var touch=e.touches[0];
//     var dragPaddingLeft=btn.style.left;
//     var change=dragPaddingLeft.replace("px","");
//     numDragpaddingLeft=parseInt(change);
//     var currentTimeNew=(numDragpaddingLeft/(p_all-20)*my_audio.duration);
//     my_audio.currentTime = currentTimeNew;
//     document.getElementById("now_time").innerHTML = timeFormat(currentTimeNew);
//     if(state){
//       my_audio.pause();
//     }
//     else{
//      my_audio.play();
//     }
//     document.getElementById("all_time").innerHTML = timeFormat(my_audio.duration);  
//   }

//   var next_song = function(){
//        requestNext_song(nextSong_id,pid);
      
//         $('.btnpic').css({
//                     "background": "url(../images/parse.png)",
//                     "background-size": "100% 100%"
//         });
//         $(".img img").addClass("rainbow");
//         $('.btnpic').attr("item","0");
//   }

//   var requestNext_song = function(id,pid){
//        $.ajax({
//           url: /play/ +'?m=api&subm=xhxmy&action=scenicspot',
//           type: 'get',
//           data: {
//             id:id,
//             pid:pid
//           },
//           dataType: 'json',
//           success: function(res) {
//             render_play_next_pre(res)
//             nextSong_id = res.info.next;
//             preSong_id = res.info.pre;
//           }
//     })     
//   }

//   var render_play_next_pre = function(res){
//      $('.qqMain-title').html(res.info.name); 
//      $('.img-wrapper img').attr('src',res.info.picture);
//      $('.musicName span').html(res.info.title);
//      $('#qqMain').css({'background':'url('+ res.info.picture +')',"background-size": "100% 100%"});
//      $('#my_audio').attr('src',res.info.voiceaddress);
//      var newStr = res.info.content;
//       $('.lyrics-contenter').html(newStr);
//   }

//   var pre_song = function(){
//      requestPre_song(preSong_id,pid)
//      $('.btnpic').css({
//                 "background": "url(../images/parse.png)",
//                 "background-size": "100% 100%"
//      });
//     $('.btnpic').attr("item","0");
//     $(".img img").addClass("rainbow"); 
//   }
//   var requestPre_song = function(id,pid){
//        $.ajax({
//           url: /play/ +'?m=api&subm=xhxmy&action=scenicspot',
//           type: 'get',
//           data: {
//             id:id,
//             pid:pid
//           },
//           dataType: 'json',
//           success: function(res) {
//             render_play_next_pre(res)
//             nextSong_id = res.info.next;
//             preSong_id = res.info.pre;
//           }
//     })     
//   }
