pokedex.filter('pokedexId', function() {
    return function(n) {
        n = n.toString();
        return '#' + ('00' + n).slice(-3);
    };
});

pokedex.filter('pokedexName', function() {
    return function(name) {
        return name.toLowerCase().split(' ').map((a) => a.charAt(0).toUpperCase() + a.substr(1)).join(' ');
    };
});