module.exports = PostSortingOptionsDirective;

PostSortingOptionsDirective.$inject = [
    'moment',
    '$rootScope'
];
function PostSortingOptionsDirective(
    moment,
    $rootScope
) {
    return {
        restrict: 'E',
        scope: {
            orderBy: '<',
            order: '<',
            onChange: '&'
        },
        template: require('./post-sorting-options.html'),
        link: PostSortingOptionsLink
    };

    function PostSortingOptionsLink($scope) {
        $scope.change = change;

        activate();

        function activate() {

        }

        function change() {
            $scope.onChange({order: $scope.order, orderBy: $scope.orderBy});
        }
    }
}
