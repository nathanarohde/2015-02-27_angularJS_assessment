newspaperRoster.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, DivisionsFactory, UtilitiesFactory){
    $scope.division = UtilitiesFactory.findById(DivisionsFactory.divisions, $stateParams.divisionId);
    $scope.addReporter = function() {
      $scope.division.reporters.push({name: $scope.reporterName, yearsOfService: $scope.reporterYearsOfService, birthDay: $scope.reporterBirthDay});
      $scope.reporterName = null;
      $scope.reporterYearsOfService = null;
      $scope.reporterBirthDay = null;
    }
});
