pokedex.controller('PokedexController', function($log, PokedexService) {
    var res = PokedexService.getAll();
    $log.log(res);
});
