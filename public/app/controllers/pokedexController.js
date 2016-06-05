pokedex.controller('PokedexController', function($log, PokedexService) {
    var pokedex = this;

    pokedex.imgUrl = PokedexService.imgUrl;

    pokedex.list = PokedexService.getAll();

    pokedex.filterFunction = function(searchText){
        return function(item){
            var patt = new RegExp(searchText, "i");
            return patt.test(item.name) || patt.test(item.id) || patt.test(item.type); //search for name, id and type only
        };
    };
});
