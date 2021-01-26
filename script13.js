//13th

$(document).ready(function(){
    $("#button1").click(function (){
        console.log($("table").find("td").eq(5).text());
    })
})