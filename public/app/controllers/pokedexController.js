(function() {
    'use strict';

    angular
        .module('pokedex')
        .controller('PokedexController', PokedexController);

    PokedexController.$inject = ['$log', 'PokedexService'];

    function PokedexController($log, PokedexService) {
        var pokedex = this;

        pokedex.imgUrl = PokedexService.imgUrl;
        pokedex.list = PokedexService.getAll();
        pokedex.filterFunction = filterFunction;

        function filterFunction(searchText) {
            return function(item) {
                var patt = new RegExp(searchText, "i");
                return patt.test(item.name) || patt.test(item.id) || patt.test(item.type); //search for name, id and type only
            };
        }
    }
})();
