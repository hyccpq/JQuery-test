$(function () {
    let x = 10;
    let y = 20;
    $("img.tooltip").mouseover(function (e) {
        this.myTitle = this.alt;
        // this.alt = "";
        let imgTitle = `<br>${this.myTitle}`;
        let tooltip = "<div id='tooltip'><img src="+this.src+" alt='产品预览图'>"+imgTitle+"</div>";
        $("body").append(tooltip);
        console.log(e.pageX,e.pageY);
        $("#tooltip")
            .css({
                "top":(e.pageY+y) + 'px',
                "letf":(e.pageX+x)+ 'px'
            }).show("fast");
    }).mouseout(function () {
        // this.alt = this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function (e) {
        $("#tooltip")
            .css({
                "top":(e.pageY+y) + 'px',
                "left":(e.pageX+x) + 'px'
            });
    });
});

