<!-- use velocity for smoother scrolling --> 
<script src="http://cdn.jsdelivr.net/jquery.velocity/0.4.1/jquery.velocity.min.js"></script> 
// Scroll links from menu
<script> $(document).ready(function(){ 
$( ".scroll-link").on('click',function (e) {
e.preventDefault();
$('.nav a').removeClass('current'); 
$(this).addClass('current'); 
var
target = this.hash, $target = $(target); 
$target 
.velocity("scroll", { duration: 500, offset: -110, easing: "linear" })
.velocity({ opacity: 1 }); 
}); 
});
</script>
