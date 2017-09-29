module.exports = FilterPostSortingOptionsDirective;

FilterPostSortingOptionsDirective.$inject = [
    'moment',
    '$rootScope',
    'PostActiveOrderOptions'
];
function FilterPostSortingOptionsDirective(
    moment,
    $rootScope,
    PostActiveOrderOptions
) {
    return {
        restrict: 'E',
        scope: {},
        template: require('./filter-post-sorting-options.html'),
        link: PostSortingOptionsLink,
        controller: FilterPostSortingOptionsController
    };

    function PostSortingOptionsLink($scope) {
        (function () {
            $scope.mySelect = '';
            $scope.orderByOptions = PostActiveOrderOptions.getDefinition().order.options;
            console.log($scope.orderByOptions);
            $scope.orderGroup = PostActiveOrderOptions.get();
        })();

    }
}
FilterPostSortingOptionsController.$inject = [
    '$scope',
    'PostActiveOrderOptions'
];
function FilterPostSortingOptionsController($scope,PostActiveOrderOptions) {
    $scope.mySelect = 'post_date';
    $scope.change = function () {
        PostActiveOrderOptions.put($scope.orderGroup);
    };
}
