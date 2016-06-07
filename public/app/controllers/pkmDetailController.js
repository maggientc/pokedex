(function() {
    'use strict';
    angular
        .module('pokedex')
        .controller('PkmDetailController', PkmDetailController);

    PkmDetailController.$inject = ['$log', '$stateParams', '$location', 'PokedexService'];

    function PkmDetailController($log, $stateParams, $location, PokedexService) {
        var pkm = this;
        pkm.imgUrl = PokedexService.imgUrl;
        pkm.data = PokedexService.getByName($stateParams.pkmName);

        if (!pkm.data) {
            $location.path('/');
        }
    }
})();
