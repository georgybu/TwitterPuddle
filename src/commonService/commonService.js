if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function common() {

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  function getRange(len) {
    return Array.apply(undefined, {length: len}).map(Number.call, Number);
  }

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return {
    getMaxOfArray: getMaxOfArray,
    getRange: getRange,
    getRandom: getRandom,
    getRandomInt: getRandomInt
  }

}
angular.getAppModule().factory('common', common);