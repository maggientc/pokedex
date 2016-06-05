pokedex.factory('PokedexService', function() {
    var factory = {};

    factory.imgUrl = 'assets/img/';

    factory.getAll = function() {
        return pokedex;
    };

    factory.getByName = function(name) {
        return pokedex.find(pkm => name == pkm.name.toLowerCase());
    };

    var pokedex = [{
        id: 1,
        name: 'Bulbasaur',
        type: ['grass', 'poison'],
        image: '001.png',
        link: {
            next: 'ivysaur'
        },
        description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
    }, {
        id: 2,
        name: 'Ivysaur',
        type: ['grass', 'poison'],
        image: '002.png',
        link: {
            prev: 'bulbasaur',
            next: 'venusaur'
        },
        description: "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon."
    }, {
        id: 3,
        name: 'Venusaur',
        type: ['grass', 'poison'],
        image: '003.png',
        link: {
            prev: 'ivysaur',
            next: 'charmander'
        },
        description: "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people."
    }, {
        id: 4,
        name: 'Charmander',
        type: ['fire'],
        image: '004.png',
        link: {
            prev: 'venusaur',
            next: 'charmeleon'
        },
        description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
    }, {
        id: 5,
        name: 'Charmeleon',
        type: ['fire'],
        image: '005.png',
        link: {
            prev: 'charmander'
        },
        description: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color."
    }];

    return factory;
});
