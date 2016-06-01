pokedex.controller('PokedexController', function($log, PokedexService) {
    var pokedex = this;

    pokedex.imgUrl = "assets/img/";
    pokedex.list = PokedexService.getAll();
});
