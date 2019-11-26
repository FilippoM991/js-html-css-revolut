$(document).ready(function(){
    $(".menu-item").mouseenter(function(){

        $(".dropdown-menu").slideUp(0);
        if (!$(this).children(".dropdown-menu").is(":visible")){
            $(this).children(".dropdown-menu").slideDown(0);
        }
        // if ($(this).children(".dropdown-menu").is(":visible")) {
        //     $(".dropdown-menu").slideUp();
        // } else {
        //     $(".dropdown-menu").slideUp();
        //     $(this).children(".dropdown-menu").slideDown();
        // }
    });
    $(document).click(function(){
        $(".dropdown-menu").slideUp();
    });
    // su body non funziona bene, ha effetto solo con gli elementi al suo interno ma non sul body in generale,con document funziona, ma andrebbe messo in un if per limitare l azione che altrimenti rischierebbe di sovracaricare troppo la pagina.
});
