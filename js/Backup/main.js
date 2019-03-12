$( document ).ready(function() {
    console.log('Window ready | JS');
    
    //Editar dirección actual
    $('.change-address').click(function(){
        $('.default').hide();
        $('.altern').show();
    });    
    
    //Asistencia Bolivar
    $( '.asist-bolivar-checkbox' ).on( 'click', function() {
        if( $(this).is(':checked') ){
            $('.asist-bolivar').slideDown();
        } else {
            $('.asist-bolivar').slideUp();
        }
    }); 
    
    //Historial de movivimientos
    $('.show-history-select').click(function(){
        $('.history-select').slideToggle();
        $('.main-title img').toggleClass('rotate');
    });  

    //Navegación
    $('.alert').click(function(){
        window.location.href = 'screen-1-credito-movil.html';
    });
    $('.btn-back').click(function() {
        event.preventDefault();
        history.back(1);
    });
    
});

$( window ).resize(function() {

});

$(window).on("load", function() {

});

$(window).scroll(function(){

}); 