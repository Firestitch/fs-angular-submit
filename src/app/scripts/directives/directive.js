(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name fs.directives:fs-submit
     * @restrict E
     * @param {string} fs-submit The id of the form
     */
    angular.module('fs-angular-submit',[])
    .directive('fsSubmit', function (fsSubmit) {
        return {
            restrict: 'A',
            scope: {
                id: "@fsSubmit"
            },
            link: {
                post: function($scope,elem) {

                    setTimeout(function() {
                        angular.element(elem).on('click',function() {
                            fsSubmit.submit($scope.id);
                        });
                    });
                }
            }
        };
    });
})();
