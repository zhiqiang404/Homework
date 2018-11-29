// <%=item._id%>
//捉不到？
//因为页面元素还没有出来
$(function (e) {
    $(".edit").on("click", function (e) {
        console.log("click");
        //1、找到表单
        //2、编辑表单的action
        var dataId = $(this).attr("data-id");
        console.log(dataId);

        var value = $(this).parent().parent().parent().first().text();
        value = value.trim();
        console.log(typeof value);

        //模态框
        $(".modal-content").prop("action", "edit/"+dataId+"");
        $(".modal-body>input").val(value);

    });
});


