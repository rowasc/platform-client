module.exports = FiltersDropdown;

function FiltersDropdown() {
    return {
        restrict: 'E',
        link: FilterModalLink,
        template: require('./filters-dropdown.html'),
        scope: {
            filtersDropdownToggle: '='
        }
    };
}


function FilterModalLink($scope, $element, $attrs) {
}

