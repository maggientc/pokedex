pokedex.filter('pokedexId', function() {
    return function(n) {
        n = n.toString();
        return '#' + ('00' + n).slice(-3);
    }
});
