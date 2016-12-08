$(function(){

   $(".fh-tab ul li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parent().parent().next(".fh-panel").children().eq($(this).index()).removeClass("dn").siblings().addClass("dn");
   });

});