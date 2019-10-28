//check if i am clicking
//on只能被添加到运行时已经存在的部件上, 所以要指明一开始就存在的东西, 以及后面的触发目标
$("ul").on("click","li",function() {
    //使用if来转换
    $(this).toggleClass("completed");
});


//X button to delete the li
$("ul").on("click","span",function(event){
    //alert("click on span");
    $(this).parent().fadeOut(500,function () {
        $(this).remove();//这里的两个this指的是不同的对象
    });

    event.stopPropagation();//停止event listener的连续唤醒
});

//input field
$("input[type='text']").keypress(function (event) {
    //使用key code来检测按下的是什么键
    if(event.which === 13){
        //拿到输入的文字
        let inStr = $(this).val();
        $(this).val("");
        //增加ul里面的HTML内容
        $("ul").append("<li><span>X </span>" + inStr + "</li>")
    }
});