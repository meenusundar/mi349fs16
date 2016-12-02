/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var xp = x, yp = y;
var loop = setInterval(
    function()
    {
        speed = 20;
        xp += (mouseX - xp)>speed ? speed : ((mouseX - xp)<-speed ? -speed : (mouseX - xp));
        yp += (mouseY - yp)>speed ? speed : ((mouseY - yp)<-speed ? -speed : (mouseY - yp));
        a.css({left:xp, top:yp});
    },20
);

/*
$(document).mousemove(function(e){
    $("#bird").css({left:e.pageX-20, top:e.pageY-20});
});*/
// $(document).ready(function(e) {
//     var width = "+=" + $(document).width();
//     $("#animate").animate({
//     left: width
//   }, 5000, function() {
//     // Animation complete.
//   });
// });
// $(document).ready(function(){
//     animateDiv();
//
// });
//
//
// function makeNewPosition(){
//
//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;
//
//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);
//
//     return [nh,nw];
//
// }
//
// function animateDiv(){
//     var newq = makeNewPosition();
//     var oldq = $('.a').offset();
//     var speed = calcSpeed([oldq.top, oldq.left], newq);
//
//     $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();
//     });
//
//
// };
//
// function calcSpeed(prev, next) {
//
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
//
//     var greatest = x > y ? x : y;
//
//     var speedModifier = 0.1;
//
//     var speed = Math.ceil(greatest/speedModifier);
//
//     return speed;
//
// }
