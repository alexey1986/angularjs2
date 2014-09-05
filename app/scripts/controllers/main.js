'use strict';

/**
 * @ngdoc function
 * @name angularHome2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHome2App
 */

var myApp = angular.module('angularHome2App', ['ngRoute']);

    myApp.controller('contentCtrl', function ($scope, requestSession) {

        $scope.content = [];

        var handleSuccess = function(data, status) {
            $scope.content = data;
        };

        requestSession.getSessions().success(handleSuccess);

        $scope.delete = function(e) {
            var dataId = e.item._id;

            requestSession.deleteRequest(dataId).success(function() {
                $scope.content.splice(dataId, 1);
            });
        };

        $scope.edit = function(e) {
            $scope.contentItem = e.item;
            $scope.showEdit();
        };

        $scope.showModal = function() {
            $('#modal').modal();
        };

        $scope.showEdit = function() {
            $('#editModal').modal();
        };

        $scope.getDate = function() {
            var currentDate = new Date(),
                year = currentDate.getFullYear(),
                month = currentDate.getMonth(),
                day = currentDate.getDate(),
                hour = currentDate.getHours(),
                minute = currentDate.getMinutes();

            if (minute < 10){
                minute = "0" + minute
            }
            if (month < 10){
                month = "0" + month
            }

            var dateTime = day + "." + month + "." + year + " " + hour + ":" + minute;
            dateTime.toString();
            return dateTime;
        };

        $scope.addPost = function() {
            $scope.contentItem.date = $scope.getDate();
            $scope.content.push($scope.contentItem);
            $scope.clearPost();
            requestSession.addRequest($scope.content[$scope.content.length-1]);

            $('#modal').modal('hide');
        };

        $scope.editPost = function() {
            var id = $scope.contentItem._id,
                data = $scope.contentItem;

            requestSession.updateRequest(id, data);

            $('#editModal').modal('hide');
        };

        $scope.clearPost = function() {
            $scope.contentItem = '';
        };
    });

    // adding a picture
    myApp.directive('file', function(){
        return {
            scope: {
                file: '='
            },
            link: function($scope, el, attrs){
                el.bind('change', function(event){
                    var files = event.target.files;
                    var file = files[0];
                    $scope.file = file ? file.name : undefined;
                    $scope.$apply();
                });
            }
        };
    });

    myApp.directive('modal', function() {

        return {
            restrict: "E",
            templateUrl:"../../template/modal.html",
            replace: true
        }
    });

    myApp.directive('edit', function() {

        return {
            restrict: "E",
            templateUrl:"../../template/edit.html",
            replace: true
        }
    });

    myApp.directive('blog', function() {

        return {
            templateUrl:"../../template/blog.html",
            replace: true
        }
    });

    myApp.controller('BlogItemController', function($scope, $location, $routeParams) {
        $scope.item = $scope.content[$routeParams._id];
    });

//$http.get('/someUrl').success(successCallback);
//$http.post('/someUrl', data).success(successCallback);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   