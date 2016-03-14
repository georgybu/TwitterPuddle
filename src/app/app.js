function appController(puddleService) {
  var ctrl = this;

  ctrl.onChange = function(newValue) {
    puddleService.setInput(newValue);
  };

  ctrl.getValues = function() {
    return puddleService.getData();
  }
}

var appName = 'main';

angular.module(appName, []);

angular.getAppModule = function () {
  return angular.module(appName);
};

angular.getComponent = function (name, bindings) {
  return {
    controller: name + 'Controller',
    templateUrl: 'src/' + name + '/' + name + '.html',
    bindings: bindings || {}
  };
};

angular.getAppModule()
    .component('app', angular.getComponent('app'))
    .controller('appController', appController);
