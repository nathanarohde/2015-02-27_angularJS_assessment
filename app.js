var newspaperRoster = angular.module('newspaperRoster',['ui.router']);

  newspaperRoster.config(function($stateProvider){
    $stateProvider.state('divisions', {
      url:'',
      templateUrl: "partials/divisions.html",
      controller: "DivisionsCtrl"
    });

    $stateProvider.state('divisions.reporters', {
      url:'/:divisionId',
      templateUrl: "partials/divisions.reporters.html",
      controller: "ReportersCtrl"
    });
  });
