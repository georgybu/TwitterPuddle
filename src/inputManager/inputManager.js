// @ngInject
function inputManagerController(common) {
  var ctrl = this;
  var getRange = common.getRange;
  var getRandomInt = common.getRandomInt;

  ctrl.value = '[]';

  ctrl.generate = function() {
    var arrayLen = getRandomInt(5,10);
    ctrl.value = JSON.stringify(getRange(arrayLen).map(function() {
      return getRandomInt(1, arrayLen + 2);
    }));
  };

  ctrl.run = function() {
    ctrl.onValueChange({ newValue: JSON.parse(ctrl.value + '') })
  };

  ctrl.generateAndRun = function() {
    ctrl.generate();
    ctrl.run();
  };

  ctrl.generateAndRun();
}

angular.getAppModule()
    .component('inputManager', angular.getComponent('inputManager', {onValueChange: '&'}))
    .controller('inputManagerController', inputManagerController);
