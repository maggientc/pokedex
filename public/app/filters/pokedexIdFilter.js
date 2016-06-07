(function() {
    'use strict';
    angular
        .module('pokedex')
        .filter('pokedexId', pokedexId);

    function pokedexId() {
        return function(n) {
            n = n.toString();
            return '#' + ('00' + n).slice(-3);
        };
    }
})();
