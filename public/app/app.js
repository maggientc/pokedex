var pokedex = angular.module('pokedex', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/views/pokedexView.html',
            controller: 'PokedexController as pokedex'
        });
    });
