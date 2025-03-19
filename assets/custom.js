$(function () {
   
    $(document).on("click", ".header-main__hamburg", function () {
        $(this).toggleClass("open-menu");
        $(".header-main__menu").slideToggle();
        $("body").toggleClass("main-open-menu");
    });
    
});