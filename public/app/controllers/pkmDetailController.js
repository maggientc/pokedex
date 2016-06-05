pokedex.controller('PkmDetailController', function($log, $stateParams, $location, PokedexService) {
    var pkm = this;
    pkm.imgUrl = PokedexService.imgUrl;
    pkm.data = PokedexService.getByName($stateParams.pkmName);

    if(!pkm.data){
        $location.path('/');
    }
});