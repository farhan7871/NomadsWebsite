//event pada saat link di klik
$('.page-scroll').on('click', function(e) {


    // ambil isi href
    var scroll = $(this).attr('href');

    // //tangkap elemen yang dituju
    var elemenScroll = $(scroll);

    // //pindahkan scroll
    $('html,body').animate({
        //offset adalah jarak dari atas
        scrollTop: elemenScroll.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});