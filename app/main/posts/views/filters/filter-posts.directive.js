module.exports = FilterPostsDirective;

FilterPostsDirective.$inject = [];
function FilterPostsDirective() {
    return {
        restrict: 'E',
        scope: {
            filters: '=',
            currentView: '='
        },
        replace: true,
        controller: FilterPostsController,
        template: require('./filter-posts.html')
    };
}

FilterPostsController.$inject = ['$scope', '$timeout','ModalService', 'MainsheetService', 'PostFilters'];
function FilterPostsController($scope, $timeout, ModalService, MainsheetService, PostFilters) {
    $scope.searchSavedToggle = false;
    $scope.cancel = cancel;
    $scope.applyFilters = applyFilters;
    $scope.openFilterModal = openFilterModal;
    $scope.openSavedModal = openSavedModal;
    activate();

    function activate() {
    }

    function cancel() {
        // Reset filters
        rollbackForm();
        // .. and close the dropdown
        ModalService.close();
    }

    function openFilterModal() {
        // Set active task so we know who this attribute will belong to
        MainsheetService.openTemplate('<filter-modal></filter-modal>', 'app.filter_by', $scope);
    }
    function applyFilters(event) {
        // ngFormController automatically commits changes to the model ($scope.filters)
        // Just close the dropdown
        MainsheetService.close();
    }

    function openSavedModal() {
        ModalService.openTemplate('<saved-search-modal></saved-search-modal>', 'nav.saved_searches', '/img/iconic-sprite.svg#star', $scope, true, true);
    }

    function rollbackForm() {
        PostFilters.clearFilters();
    }
}
