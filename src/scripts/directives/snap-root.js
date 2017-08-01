angular.module('snap')
  .directive('snapRoot', ['snapRemote', function(snapRemote) {
    'use strict';
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        var snapId = scope.$eval(attrs.snapId);
        snapRemote.getSnapper(snapId).then(function(snapper) {
          snapper.settings({
            rootElement: element[0]
          });
        });
      }
    };
  }]);
