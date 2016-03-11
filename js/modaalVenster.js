var modaalVenObj = (function() {
    
    var $window = $(window);
    var $Venster = $('<div class="modaal"/>');
    var $Inhoud = $('<div class="inhoud"/>');
    var $sluit = $('<span class="close">&#10005;</span>');

    $Venster.append($Inhoud);
    
    return {
        centreren: function() {
            var left = Math.max($window.width()-$Inhoud.outerWidth(), 0) / 2;
            var up = Math.max($window.height()-$Inhoud.outerHeight(), 0) / 2;
            $Inhoud.css({links: left, top: up});
        },
        openen: function(instellingen) {
            $Inhoud.append($sluit, instellingen.stof);
            $Inhoud.css({width: instellingen.breedte+'px' || 'auto',
                               height: instellingen.hoogte+'px' || 'auto'}).on('click', function(e){e.stopPropagation()});
            $Venster.appendTo('body').on('click', modaalVenObj.sluiten);
            modaalVenObj.centreren();
            $sluit.on('click', modaalVenObj.sluiten);
        },
        sluiten: function() {
            $Inhoud.empty().off('click', modaalVenObj.sluiten);
            $Venster.detach();
        }
    }
}());