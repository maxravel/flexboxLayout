$("#stack").on("click",function(){
    $("article").addClass("stack");
});
$("#grid").on("click",function(){
    $("article").removeClass("stack");
});
// $(document).ready($("a.stack").on("click",function(){
//     $("article").addClass("stack");
// });
// $("a.grid").on("click",function(){
//     $("article").removeClass("stack");
// });)