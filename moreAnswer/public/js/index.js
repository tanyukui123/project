$(function(){

   $(".answer-ul-tab li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parent().parent().next(".answer-list").children().eq($(this).index()).removeClass("dn").siblings().addClass("dn");
   });

});