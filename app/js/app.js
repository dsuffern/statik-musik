'use strict';

// Here we set up an angular module. We'll attach controllers and other components to this module.
angular.app('mySite', [])

  // Angular supports chaining, so here we chain the config function onto the module we're configuring.
  .config(function ($routeProvider, ) {

    // We use AngularJS dependency injection to fetch the route provider.The route provider is used to setup our app's routes.  
    // The config below simply says when you visit '/' it'll render the views/main.html template controlled by the MainCtrl controller.
    // The otherwise method specifies what the app should do if it doesn't recognise the route entered by a user. In this case, redirect to home.
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when( '/about', { 
        templateUrl: '/views/about.html',
        controller: 'MainCtrl'
      })
      .when( '/news', { 
        templateUrl: '/views/news.html',
        controller: 'MainCtrl'
      })
      .when( '/contact', { 
        templateUrl: '/views/ontact.html', 
        controller: 'MainCtrl'
      })
      .when( '/videos', { 
        templateUrl: '/views/videos.html',
        controller: 'MainCtrl'
      })  
      .when( '/downloads', { 
        templateUrl: '/views/downloads.html',
        controller: 'MainCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });



function MainCtrl ($scope, $rootScope, $http) {
  // Load pages on startup
  $http.get('/pages.json').success(function (data) {
    $rootScope.pages = data;
  });
  
  // Set the slug for menu active class
  $scope.$on('routeLoaded', function (event, args) {
    $scope.slug = args.slug;
  });

 
}

function RouteController ($scope, $rootScope, $routeParams) {
  // Getting the slug from $routeParams
  var slug = $routeParams.slug;
  
  $scope.$emit('routeLoaded', {slug: slug});
  $scope.page = $rootScope.pages[slug];
}

// CONTROLLER?
angular.module('site')
  .controller('MainCtrl', function ($scope) {
 
  });