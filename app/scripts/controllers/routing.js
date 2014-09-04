myApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: '/template/list.html'
         })
        .when('/view/:_id', {
            templateUrl: '/template/item.html',
            controller: 'BlogItemController'

        })
        .otherwise({
            redirectTo: '/'
        });
});