app.controller('BoardShowCtrl',['$scope', '$location', 'Restangular', 'Boards', 'board', function($scope, $location, Restangular, Boards, board){
  $scope.board = board

  $scope.addList = function(){

  }

  $scope.deleteBoard = function(id){
    Restangular.one('boards', id).remove().then(function(success){
      console.log(success)
      Boards.deleteBoard(success)
    },function(failure){
      console.log(failure)
    })
  };
    // $scope.$on('devise:unauthorized', function(){
    //   console.log("Caught unauthorized!");
    //   $location.path('/board');
    // })
}]);