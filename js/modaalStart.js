$(document).ready( function() {
    var oliStof = $('#oli').detach();
    var huurStof = $('#huur').detach();
    var handStof = $('#hand').detach();
    
    
    $('#oliFoto').on('click', function() {
        modaalVenObj.openen({stof: oliStof, breedte: 760});
    }); 
    $('#huurFoto').on('click', function() {
        modaalVenObj.openen({stof: huurStof, breedte: 760});
    }); 
    $('#handFoto').on('click', function() {
        modaalVenObj.openen({stof: handStof, breedte: 760});
    });
});