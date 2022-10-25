$(function(){
    $("#login-btn").click(function(){
        $("#login-section").addClass("blind");
        $(".popup-background:eq(0)").addClass("blind");
    });
    $("#join-btn").click(function(){
        $("#join-section").addClass("blind");
        $(".popup-background:eq(0)").addClass("blind");
    });

    $("#success-alert-btn").click(function(){
        $(".popup-background").addClass("blind");
        $("#success-alert-popup").addClass("blind");
    });
    $("#fail-alert-btn").click(function(){
        $(".popup-background:eq(1)").addClass("blind");
        $("#fail-alert-popup").addClass("blind");
    });

    $("#logout-closeBtn").click(function(){
        $("#logout-popup").addClass("blind");
        $(".popup-background:eq(0)").addClass("blind");
    });
});