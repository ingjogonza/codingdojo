$(document).ready(function(){
    $("#addclass").click(function(){
        $(".addclass p").addClass("red");
    });
    
    $(".slidetoggle button").click(function(){

        $("img").slideToggle("slow");
    });
    
    $(".append button").click(function(){

        $(".append p").append("<br><p>New paragraph</p>");
    });

});