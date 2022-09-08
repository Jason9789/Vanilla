$(document).ready(function() {
    console.log("ready");
    $("#plusImg").click(function(){
        $("#fold_tag").toggleClass("blind");
    });

    $(".tagItem").click(function(e){
        $(".tagItem").removeClass("check");
        $(e.target).addClass("check");
    })
});