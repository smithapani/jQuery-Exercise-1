//7th


$(document).ready(function (){
    $("#button1").click(function() {
        console.log("clicked");
        $("div:animated").toggleClass("colored");

    });

    function animateFirstTwoDiv() {
      $("#div1,#div2").slideToggle("slow", animateFirstTwoDiv);
    }
     
    animateFirstTwoDiv();
})
