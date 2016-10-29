
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

(function () {
    'use strict';

   /**
     * @ngdoc service
     * @name fs.fsSubmit
     * @description
     */

    angular.module('fs-angular-submit')
    .factory('fsSubmit',function() {

    	var service = {
    		submit: submit
    	};

    	return service;

        /**
         * @ngdoc method
         * @name submit
         * @methodOf fs.fsSubmit
         * @description Targets a &lt;form&gt; and places a hidden button inside and triggers the button's click event which submits the form
         * @param {string} id The id of the form
         **/

    	function submit(id) {
            var el = angular.element(document.querySelector('#' + id));

            if(el.length) {
	            var button = angular.element('<button>')
	                            .attr('type','submit')
	                            .css('visibility','hidden')
	                            .css('display','none');

	            el.attr('action','javascript:;').append(button);

	            setTimeout(function() {
					button[0].click();
	            	button.remove();
	            });
            }
    	}
    });
})();
