var pokedex = angular.module('pokedex', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/views/pokedexView.html',
            controller: 'PokedexController as pokedex'
        });

        $stateProvider.state('detail', {
            url: '/detail/:pkmName',
            templateUrl: '/views/pkmDetailView.html',
            controller: 'PkmDetailController as pkm'
        });
    });
