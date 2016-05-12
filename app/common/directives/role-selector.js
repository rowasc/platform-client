/**
 * Ushahidi Angular Role Selector directive
 * Drop in directive for managing roles addition for users
 * and posts
 */

module.exports = [
function (
) {
    var controller = [
        '$scope',
        '$rootScope',
        '$translate',
        'Notify',
        'RoleEndpoint',
        '_',
        function (
            $scope,
            $rootScope,
            $translate,
            Notify,
            RoleEndpoint,
            _
        ) {

            RoleEndpoint.query().$promise.then(function (roles) {
                $scope.roles = roles;
            });

            $scope.checkIfAllSelected = function () {
                return ($scope.roles.length === $scope.post.published_to.length);
            };

            $scope.toggleRole = function (role) {
                if (role === 'draft' || role === '' || $scope.checkifAllSelected()) {
                    $scope.selectedRoles = [];
                }

                $scope.toggleRoleFunc({roles: $scope.selectedRoles});
            };

        }];
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/common/role-selector/role-selector.html',
        scope: {
            selectedRoles: '=',
            toggleRoleFunc: '&'
        },
        controller: controller
    };
}];
