module.exports = FilterSavedSearch;

FilterSavedSearch.$inject = [];
function FilterSavedSearch() {
    return {
        restrict: 'E',
        scope: true,
        controller: FilterSavedSearchController,
        template: require('./filter-saved-search.html')
    };
}

FilterSavedSearchController.$inject = ['$scope', '$element', '$attrs', '$rootScope', '$location', 'UserEndpoint', 'SavedSearchEndpoint', '_', 'ModalService'];
function FilterSavedSearchController($scope, $element, $attrs, $rootScope, $location, UserEndpoint, SavedSearchEndpoint, _, ModalService) {
    $scope.searchSearches = searchSearches;
    activate();

    // Reload searches on login / logout events
    $scope.$on('event:authentication:logout:succeeded', loadSavedSearches);
    $scope.$on('event:authentication:login:succeeded', loadSavedSearches);
    $scope.$on('savedSearch:update', loadSavedSearches);

    function activate() {
        loadSavedSearches();
    }

    // Load searches + users
    function loadSavedSearches(query) {
        $scope.searches = [];
        query = query || {};
        SavedSearchEndpoint.query(query).$promise.then(function (searches) {
            $scope.searches = _.filter(searches, function (search) {
                var isOwner = (search.user && search.user.id === _.result($rootScope.currentUser, 'userId')) === true;
                return search.featured || isOwner;
            });
        });
    }

    function searchSearches(query) {
        loadSavedSearches({
            q : query
        });
    }

}
