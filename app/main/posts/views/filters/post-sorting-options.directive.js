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
        activate();

        function activate() {
            var order = PostActiveOrderOptions.getOrder();
            $scope.orderGroup = {
                order: order.order,
                orderBy: order.orderBy,
                unlockedOnTop: order.unlockedOnTop
            };
        }

        $scope.change = function () {
            PostActiveOrderOptions.putOrder($scope.orderGroup);
        };
    }
}
