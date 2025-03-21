$(function () {
   
    $(document).on("click", ".header-main__hamburg", function () {
        $(this).toggleClass("open-menu");
        $(".header-main__menu").slideToggle();
        $("body").toggleClass("main-open-menu");
    });

    if($('.js-pdp-main-slider-for').length > 0){
        $('.js-pdp-main-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-pdp-main-slider-nav',
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    arrows: true,
                    prevArrow: '<button class="slick-arrow prev-arrow"><svg fill=none height=24 viewBox="0 0 21 24"width=21 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><rect fill=url(#pattern0_1121_586) height=24 transform=translate(3.41113) width=14 /><defs><pattern height=1 id=pattern0_1121_586 patternContentUnits=objectBoundingBox width=1><use transform="scale(0.0714286 0.0416667)"xlink:href=#image0_1121_586 /></pattern><image height=24 id=image0_1121_586 preserveAspectRatio=none width=14 xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJGVYSWZJSSoACAAAAAEAPAECAAkAAAAaAAAAAAAAAGltYWdlcnk0AAAnPYy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACYSURBVHgB7dTBDYAgDAVQKwuYwACOopPoaG7iCDqCIzAABPsPJMaotJ482ARSCA96AKpKEdbawTm3IK81iIimPBbBA1pDCL3E5PISSmw4fvRNxIs7NeKo+SZsKSU0IDEkdHxQa4yZkccYe+/9JoJvMB0HGkznCSmmq0kJvoQSfAtL+BE+4SK8w6I/BwsBkOcNVIGT+UGMyHfTin+JFPMFCQAAAABJRU5ErkJggg=="/></defs></svg></button>' ,
                    nextArrow: '<button class="slick-arrow next-arrow"><svg fill=none height=24 viewBox="0 0 21 24"width=21 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><rect fill=url(#pattern0_1121_586) height=24 transform=translate(3.41113) width=14 /><defs><pattern height=1 id=pattern0_1121_586 patternContentUnits=objectBoundingBox width=1><use transform="scale(0.0714286 0.0416667)"xlink:href=#image0_1121_586 /></pattern><image height=24 id=image0_1121_586 preserveAspectRatio=none width=14 xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJGVYSWZJSSoACAAAAAEAPAECAAkAAAAaAAAAAAAAAGltYWdlcnk0AAAnPYy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACYSURBVHgB7dTBDYAgDAVQKwuYwACOopPoaG7iCDqCIzAABPsPJMaotJ482ARSCA96AKpKEdbawTm3IK81iIimPBbBA1pDCL3E5PISSmw4fvRNxIs7NeKo+SZsKSU0IDEkdHxQa4yZkccYe+/9JoJvMB0HGkznCSmmq0kJvoQSfAtL+BE+4SK8w6I/BwsBkOcNVIGT+UGMyHfTin+JFPMFCQAAAABJRU5ErkJggg=="/></defs></svg></button>'
                  }
                },
            ]
        });
        $('.js-pdp-main-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.js-pdp-main-slider-for',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '<button class="slick-arrow prev-arrow"><svg fill=none height=24 viewBox="0 0 21 24"width=21 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><rect fill=url(#pattern0_1121_586) height=24 transform=translate(3.41113) width=14 /><defs><pattern height=1 id=pattern0_1121_586 patternContentUnits=objectBoundingBox width=1><use transform="scale(0.0714286 0.0416667)"xlink:href=#image0_1121_586 /></pattern><image height=24 id=image0_1121_586 preserveAspectRatio=none width=14 xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJGVYSWZJSSoACAAAAAEAPAECAAkAAAAaAAAAAAAAAGltYWdlcnk0AAAnPYy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACYSURBVHgB7dTBDYAgDAVQKwuYwACOopPoaG7iCDqCIzAABPsPJMaotJ482ARSCA96AKpKEdbawTm3IK81iIimPBbBA1pDCL3E5PISSmw4fvRNxIs7NeKo+SZsKSU0IDEkdHxQa4yZkccYe+/9JoJvMB0HGkznCSmmq0kJvoQSfAtL+BE+4SK8w6I/BwsBkOcNVIGT+UGMyHfTin+JFPMFCQAAAABJRU5ErkJggg=="/></defs></svg></button>' ,
            nextArrow: '<button class="slick-arrow next-arrow"><svg fill=none height=24 viewBox="0 0 21 24"width=21 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink><rect fill=url(#pattern0_1121_586) height=24 transform=translate(3.41113) width=14 /><defs><pattern height=1 id=pattern0_1121_586 patternContentUnits=objectBoundingBox width=1><use transform="scale(0.0714286 0.0416667)"xlink:href=#image0_1121_586 /></pattern><image height=24 id=image0_1121_586 preserveAspectRatio=none width=14 xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJGVYSWZJSSoACAAAAAEAPAECAAkAAAAaAAAAAAAAAGltYWdlcnk0AAAnPYy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACYSURBVHgB7dTBDYAgDAVQKwuYwACOopPoaG7iCDqCIzAABPsPJMaotJ482ARSCA96AKpKEdbawTm3IK81iIimPBbBA1pDCL3E5PISSmw4fvRNxIs7NeKo+SZsKSU0IDEkdHxQa4yZkccYe+/9JoJvMB0HGkznCSmmq0kJvoQSfAtL+BE+4SK8w6I/BwsBkOcNVIGT+UGMyHfTin+JFPMFCQAAAABJRU5ErkJggg=="/></defs></svg></button>'
        });
    }

});