$(function () {
    $('a.tooltip').mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
        $("body").append(tooltip);
        // console.log(e.pageX,e.pageY);
        $("#tooltip")
            .css({
                "top": e.pageY+10+"px",
                "left": e.pageX+10+"px"
            }).show("fast");
    }).mouseout(function () {
        this.title = this.myTitle;
        $("#tooltip")
            .remove();
    }).mousemove(function (e) {
        console.log(e.pageX,e.pageY);
        $("#tooltip")
            .css({
                "top":e.pageY+10+"px",
                "left":e.pageX+10+"px"
            })
    })
});