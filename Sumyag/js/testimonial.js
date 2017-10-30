$(function() {
        $('#testtext-1').show( "slow" );
        $('#testtext-2').hide();
        $('#testtext-3').hide();
        $('div.test-2').addClass('changeafter');
        $('div.test-3').addClass('changeafter');

    $('#test-1').click(function(){
        $('#testtext-1').show( "slow" );
        $('#testtext-2').hide();
        $('#testtext-3').hide();
        $('div.test-1').removeClass('changeafter');
        $('div.test-2').addClass('changeafter');
        $('div.test-3').addClass('changeafter');
    });
    $('#test-2').click(function(){
        $('#testtext-1').hide();
        $('#testtext-2').show( "slow" );
        $('#testtext-3').hide();
        $('div.test-2').removeClass('changeafter');
        $('div.test-1').addClass('changeafter');
        $('div.test-3').addClass('changeafter');
    });
    $('#test-3').click(function(){
        $('#testtext-1').hide();
        $('#testtext-2').hide();
        $('#testtext-3').show( "slow" );
        $('div.test-3').removeClass('changeafter');
        $('div.test-2').addClass('changeafter');
        $('div.test-1').addClass('changeafter');
    });
});