//下拉=>商品
$('#store-icon').mouseenter(function () {
    $('.store').slideDown();
    $('#store-icon').removeClass('icon-xialasanjiao').addClass('icon-shangsanjiao')
});
//三角 不够大的时候可以把它的宽高设置大=>父盒子包含两者
$('#store').mouseleave(function () {
    $('.store').slideUp();
    $('#store-icon').removeClass('icon-shangla2').addClass('icon-xialasanjiao')
});

$('.bottom li a').mouseenter(function () {
    $(this).siblings('.boxes').show()
    $(this).css('color', '#00aeff')
    $(this).next().css('color', '#00aeff')
});
$('.bottom li a').mouseleave(function () {

    $(this).css('color', '#fff')
    $(this).next().css('color', '#4897d9')
});
$('.boxes').mouseleave(function () {
    $(this).hide();
});
$('.icon-sou_suo').click(function (e) {
    e.preventDefault();
    $(this).addClass('blueicon');
    $('#sear').show();
});
//监听下拉框
window.onscroll = function () { //触发操作的事件!!!
    var st = document.documentElement.scrollTop;
    // console.log(st);
    if (st > 78) {
        $('#fixed').css('display', 'block')
        //    $('header .wrap').hide();
    } else {
        $('#fixed').css('display', 'none')
    }
}


//html 宽度小于768
// jquery 设置 html标签响应式布局
$(window).resize(function () {//当浏览器窗口发生改变时，再一次调整界面布局
    // console.log($(window).width());
    if ($(window).width() <= 768) {
        $('.container-wrap .top').css('font-weight', 'normal');
    } else {
        $('.container-wrap .top').css('font-weight', '700');
    }
});
//初始化
$('.chose p').eq(1).css('color', '#e11647');
$('.chose p span').eq(1).css('display', 'block');
$('.chose p').click(function (e) {
    e.preventDefault();
    var index = $('.chose p').index(this)
    $('.chose p').each(function (index, item) {
        $('.chose p').css('color', '#999')
        $('.chose p').find('span').css('display', 'none')
    });
    $(this).css('color', '#e11647')
    $(this).find('span').css('display', 'block')
});
$('header a.top').mouseenter(function () { 
    $(this).addClass('sacle')
});
$('header a.top').mouseleave(function () { 
    $(this).removeClass('sacle')
});
$('.icon-denglu').click(function (e) {
    e.preventDefault();
    layer.open({
        type:0,
        closeBtn:2,
        time: 500,
        anim:4,
        icon:3,
        title:'确认注册吗?',
        content:'提交后不可撤回',
        btn: ['确认', '取消']
        ,yes: function(index, layero){
            //按钮【按钮一】的回调
            layer.msg('提交成功')}
            //按钮【按钮二】的回调
          ,btn2: function(index, layero){
            layer.close(index)  }
          ,cancel: function(){ 
            //右上角关闭回调
            layer.msg('bye') } })
    //加载层
    // var index = layer.load(0, {shade: false, shadeClose:true }); //0代表加载的风格，支持0-2
    // //loading层

    // var index = layer.load(1, {
    //   shade: [0.1,'#fff'] ,shadeClose:true //0.1透明度的白色背景
    // });
    //tips层
    //询问框
    // layer.confirm('你喜欢詹姆斯吗？', {
    //     btn: ['喜欢','很喜欢'] //按钮
    //   }, function(){
    //     layer.msg('我也是', {icon: 1});
    //   }, function(){
    //     layer.msg('你太可爱了', {
    //       time: 2000, //20s后自动关闭
    //       btn: ['下次聊', '永别了']
    //     });
    //   });


    // layer.open({
    //     type: 2,
    //     maxmin:true,
    //     content: 'https://china.nba.com/' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
    // });
});
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        

$('.swiper-container').mouseenter(function () { 
    $('.btn').show()
    $('.btn').append(`<style>.btn::after{}</style>`)
});
$('.swiper-container').mouseleave(function () { 
    $('.btn').hide()
    $('.btn').remove(`<style>.btn::after{}</style>`)
});











//定时器
// var timer=null;
// timer=setInterval(autoplay, 1500)
// var num=1;
// function autoplay() {
//     num++;
//     if (num>=4) {
//         num=0;
//     }
//     $('.chose p').each(function (index, item) {
//         $('.chose p').css('color', '#999')
//         $('.chose p').find('span').css('display', 'none')
//     });
//     $('.chose p').eq(num).css('color', '#e11647')
//     $('.chose p').eq(num).find('span').css('display', 'block')
// }