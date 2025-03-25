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

    $('.qty-minus').click(function() {
        let $input = $(this).siblings('input[name="pdp-qty"]');
        let value = parseInt($input.val()) || 1;
        if (value > 1) {
            $input.val(value - 1);
        }
    });

    $('.qty-plus').click(function() {
        let $input = $(this).siblings('input[name="pdp-qty"]');
        let value = parseInt($input.val()) || 1;
        if (value < 999) {
            $input.val(value + 1);
        }
    });

    let selectedProducts = [];
    
    $(document).on('click', '.pdp-main__color-box ul li img', function () {
        let imgSrc = $(this).attr('src');
        
        if (selectedProducts.length < 5) {
            selectedProducts.push({
              imgSrc
            });
            updateBundle();
        }
          
    });
    
    function updateBundle() {
        let bundleItems = $('.pdp-main__bundle-box ul li');
        bundleItems.each(function (index) {
            
            if (index < selectedProducts.length) {
              $(this).addClass("is-product");
              $(this).html(`<img src="imgs/close-icon.svg" alt="close icon" class="close-icon"> <img src="${selectedProducts[index].imgSrc}" alt="product">`);
              
            } 
        });
    }

    $(document).on('click', '.pdp-main__bundle-box ul li .close-icon', function () {
  
        let parentItem = $(this).closest('li');
        let index = parentItem.index();

        if (index < selectedProducts.length) {
            selectedProducts.splice(index, 1);

            if ($('.pdp-main__bundle-box .free-product').hasClass("is-product")) {
                $('.pdp-main__bundle-box li').removeClass('is-product');
                $('.pdp-main__bundle-box li').removeClass('free-product');
                $('.pdp-main__bundle-box ul').append(`
                    <li class="free-product">
                        <span>Free Box!</span>
                    </li>
                `);
                $('.pdp-main__bundle-box li').last().addClass("free-product");
            } else {
              let lastItem = $('.pdp-main__bundle-box li.free-product').last();
                lastItem.before(`
                    <li>
                        <img src="imgs/all-real-plus-icon.svg" alt="icon">
                    </li>
                `);
            }
            parentItem.remove();
            updateBundle();
        }
      });

      if($('.js-people-saying-slider').length > 0){
        $('.js-people-saying-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            prevArrow: '<button class="slick-arrow prev-arrow"><svg fill=none height=18 viewBox="0 0 10 18"width=10 xmlns=http://www.w3.org/2000/svg><path d="M9 1.5L1.5 9L9 16.5"stroke=black stroke-width=2 /></svg></button>' ,
            nextArrow: '<button class="slick-arrow next-arrow"><svg fill=none height=18 viewBox="0 0 10 18"width=10 xmlns=http://www.w3.org/2000/svg><path d="M1 1.5L8.5 9L1 16.5"stroke=black stroke-width=2 /></svg></button>',
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    arrows: true,

                  }
                },
            ]
        });
      }
    

});