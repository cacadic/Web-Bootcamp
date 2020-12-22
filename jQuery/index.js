$(document).ready(function(){
    $(document).keypress(function(event){
        $("h1").text(event.key);
    })
})