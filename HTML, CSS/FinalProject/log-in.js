$('.kundastemen').click(function (e) {
    e.preventDefault();
$('.povekunos').addClass('discovered');
});
$('.closepovekunos').click(function (e) {
    e.preventDefault();
$('.povekunos').removeClass('discovered');
});