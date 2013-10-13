'use strict'; 

/* Controllers */

// var phonecatControllers = angular.module('phonecatControllers', []);

// phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);

// phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//       $scope.mainImageUrl = phone.images[0];
//     });

//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     }
//   }]);

/* Controllers */
// Here we attach this controller to our testApp module 
// angular.module('newSite.controllers', []).
  // .controller('MyCtrl1', [function($scope, $timeout, ngProgress) {

  // }])
  // .controller('MyCtrl2', [function() {

 // }]);


var app = angular.module('progressApp', ['ngProgress']);

    app.config(function(ngProgressProvider){
        // Default color is firebrick
        ngProgressProvider.setColor('firebrick');
        // Default height is 2px
        ngProgressProvider.setHeight('2px');
    });

    var MyCtrl1 = function($scope, $timeout, ngProgress) {
        $scope.name = 'Lars';
        $scope.show = false;

        $scope.color = ngProgress.color();
        $scope.height = ngProgress.height();

        ngProgress.start();
        $timeout(function(){
            ngProgress.complete();
            $scope.show = true;
        }, 2000);

        $scope.setWidth = function(new_width, $event) {
            ngProgress.set(new_width);
            $event.preventDefault();
        }

        $scope.startProgress = function($event) {
            $event.preventDefault();
            ngProgress.start();
        }

        $scope.count = function($event) {
            $event.preventDefault();
            ngProgress.set(ngProgress.status() + 9);
        }

        $scope.new_color = function(color, $event) {
            $event.preventDefault();
            ngProgress.color(color);
        }

        $scope.new_height = function(new_height, $event) {
            $event.preventDefault();
            ngProgress.height(new_height);
        }

        $scope.completeProgress = function($event) {
            $event.preventDefault();
            ngProgress.complete();
        }

        $scope.stopProgress = function($event) {
            $event.preventDefault();
            ngProgress.stop();
        }

        $scope.resetProgress = function($event) {
            ngProgress.reset();
            $event.preventDefault();
        }
    }
ngProgress.start();