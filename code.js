$(document).ready(function(){
    $("button").click(function(){
        if($("button").text() == "U+2630"){
            $("button").text("&#x10102;");
        }else {
            $("button").text("U+2630");
        }
        $("li").toggle("slow");
    });
});