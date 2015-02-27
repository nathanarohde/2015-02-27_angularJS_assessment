newspaperRoster.controller('DivisionsCtrl', function DivisionsCtrl($scope, DivisionsFactory){
  $scope.divisions = DivisionsFactory.divisions;
  $scope.DivisionsFactory = DivisionsFactory;
});
