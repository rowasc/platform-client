module.exports = PostSortingOptionsDirective;

PostSortingOptionsDirective.$inject = [
    'moment',
    '$rootScope',
    'PostActiveOrderOptions'
];
function PostSortingOptionsDirective(
    moment,
    $rootScope,
    PostActiveOrderOptions
) {
    return {
        restrict: 'E',
        scope: {
        },
        template: require('./post-sorting-options.html'),
        link: PostSortingOptionsLink
    };

    function PostSortingOptionsLink($scope) {
        /**
         * This calls for an Inmediately invoked function
         * @DEVNOTE Ask why activate was being used. Using an IIFE makes me feel confident
         * because we can't move the activate call to the wrong place if it's not there =)
         */
        (function () {
            var order = PostActiveOrderOptions.get();
            $scope.orderGroup = {
                order: order.order,
                orderBy: order.orderBy,
                unlockedOnTop: order.unlockedOnTop
            };
        })();

        $scope.change = function () {
            PostActiveOrderOptions.put($scope.orderGroup);
        };
    }
}
