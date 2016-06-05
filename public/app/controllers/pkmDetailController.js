pokedex.controller('PkmDetailController', function($log, $stateParams, PokedexService) {
    var pkm = this;
    pkm.imgUrl = PokedexService.imgUrl;
    pkm.data = PokedexService.getByName($stateParams.pkmName);
});