describe('PostActiveFilterOptions', function () {

    var PostActiveFilterOptions, $rootScope;
    var defaults = {
        orderBy: 'post_date',
        order: 'desc',
        unlockedOnTop: false
    };
    beforeEach(function () {
        makeTestApp()
            .service('PostActiveFilterOptions', require('app/common/services/post-active-order-options.service.js'));


        angular.mock.module('testApp');
    });

    beforeEach(angular.mock.inject(function (_$rootScope_, _PostActiveFilterOptions_) {
        $rootScope = _$rootScope_;
        PostActiveFilterOptions = _PostActiveFilterOptions_;
    }));

    it('should return the default values when I call getOrder', function () {
        expect(PostActiveFilterOptions.getOrder()).toEqual(defaults);
    });

    it('should return the same values I send when I call putOrder', function () {
        expect(PostActiveFilterOptions.putOrder({
            orderBy: 'post_date',
            order: 'desc',
            unlockedOnTop: true
        })).toEqual({
            orderBy: 'post_date',
            order: 'desc',
            unlockedOnTop: true
        });
    });

    it('should return the default values when I call reset after I modify the order', function () {
        PostActiveFilterOptions.putOrder({
            orderBy: 'post_date_fakeorder',
            order: 'desc',
            unlockedOnTop: true
        });
        expect(PostActiveFilterOptions.reset()).toEqual(defaults);
        expect(PostActiveFilterOptions.getOrder()).toEqual(defaults);

    });
});