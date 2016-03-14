// @ngInject
function appController(puddleService) {
  this.puddleService = puddleService;
}

angular.module('main', []);

angular.getAppModule = function () {
  return angular.module('main');
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
