(function(){
  'use strict';

  angular.module('wikipediaApp', [])
  .constant('API_PATH', 'https://en.wikipedia.org/w/api.php')
  .controller('SearchController', SearchController);

  SearchController.$inject = ['$scope', '$http', 'API_PATH'];
  function SearchController($scope, $http, API_PATH){
    var _this = this;
    $scope.results = [];

    _this.searchTerm = '';
    $scope.$watch('ctrl.searchTerm', function(newVal, oldVal) {
      $.getJSON(API_PATH + '?action=opensearch&callback=?&search='
      + newVal, function(json){
        $scope.results = json;
        $scope.$apply();
        // Log Statement Used Only for Debugging
        // console.log($scope.results);
      });
    });

    //--- Search Function replaced with $scope.$watch in Part 2 ---//
    // _this.search = function() {
    //   $.getJSON(API_PATH + '?action=opensearch&callback=?&search='
    //   + _this.searchTerm, function(json){
    //     $scope.results = json;
    //   });
    // };

  }

})();