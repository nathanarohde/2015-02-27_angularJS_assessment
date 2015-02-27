newspaperRoster.factory('DivisionsFactory', function DivisionsFactory(){
  var factory = {};
    factory.divisions = [];
    factory.addDivision = function() {
      factory.divisions.push({name: factory.divisionName, id: factory.divisions.length + 1, reporters: []});
      factory.divisionName = null;
    };
    return factory;
});
