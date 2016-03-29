// @ngInject
function puddleService(common) {
  var puddleGrid = null;
  var getRange = common.getRange;
  var getMaxOfArray = common.getMaxOfArray;

  function markWater(s) {
    return s.replace(/1(.*0)1/gi, function (n) {
      return n.replace(/0/g, 'W');
    })
  }

  function puddle(numbers) {
    return getRange(getMaxOfArray(numbers)).map(function (level) {
      return markWater(numbers.map(function (n) {
        return +(n - level > 0);
      }).join(''));
    }).reverse();
  }

  function setInput(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('numbers should be array')
    }
    puddleGrid = puddle(numbers).map(function(i) {
      return i.split('');
    });
  }

  function getData() {
    return puddleGrid;
  }

  return {
    getData: getData,
    setInput: setInput
  }

}

angular.getAppModule().factory('puddleService', puddleService);