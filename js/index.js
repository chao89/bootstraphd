/**
 * Created by Administrator on 2017/3/22.
 */

$(function(){
    $(".cli .lbt-nav .lnd").click(function(){
        var x=$(this).index();
        $(this).addClass("ldd").siblings().removeClass("ldd");
        $(this).parent().siblings(".lbt").eq(x).fadeIn(500).siblings(".lbt").css('display','none')
    })
});
