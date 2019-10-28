//check if i am clicking
$("li").click(function() {
    //使用if来转换
    $(this).toggleClass("completed");
});


//X button to delete the li
$("span").click(function(event){
    //alert("click on span");
    $(this).parent().fadeOut(500,function () {
        $(this).remove();//这里的两个this指的是不同的对象
    });

    event.stopPropagation();//停止event listener的连续唤醒
});