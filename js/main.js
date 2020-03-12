new fullpage('#container', {
    autoScrolling: true,
    //navigation: true,
    licenseKey: 'YOUR_KEY_HERE'
})

$('.dot').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    if ($('.menu').css("visibility") == "hidden") {
        $('.menu').css('visibility', "visible")
    } else {
        $('.menu').css('visibility', "hidden")
    }
});