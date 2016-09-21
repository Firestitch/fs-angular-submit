
(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name fs.directives:fs-submit
     * @restrict E
     * @param {string} fs-submit The id of the form
    */
    angular.module('fs-angular-submit',[])
    .directive('fsSubmit', function () {
        return {
            restrict: 'A',
            scope: {
                id: "@fsSubmit"
            },
            link: {
                post: function($scope,elem) {

                    setTimeout(function() {
                        var el = angular.element(document.querySelector('#' + $scope.id));

                        if(el.length) {
                            angular.element(elem).on('click',function() {

                                var button = angular.element('<button>')
                                                .attr('type','submit')
                                                .css('visibility','hidden')
                                                .css('display','none');

                                el.attr('action','javascript:;').append(button);

                                button[0].click();
                                button.remove();
                            });
                        }
                    });
                }
            }
        };
    });
})();


