describe('PostActiveOrderOptions', function () {

    var PostActiveOrderOptions, $rootScope;
    var defaults = {
        orderBy: 'post_date',
        order: 'desc',
        unlockedOnTop: false
    };
    beforeEach(function () {
        makeTestApp()
            .service('PostActiveOrderOptions', require('app/common/services/filters/post-active-order-options.service.js'));


        angular.mock.module('testApp');
    });

    beforeEach(angular.mock.inject(function (_$rootScope_, _PostActiveOrderOptions_) {
        $rootScope = _$rootScope_;
        PostActiveOrderOptions = _PostActiveOrderOptions_;
    }));

    it('should return the default values when I call get', function () {
        expect(PostActiveOrderOptions.get()).toEqual(defaults);
    });

    it('should return the same values I send when I call put', function () {
        expect(PostActiveOrderOptions.put({
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
        PostActiveOrderOptions.put({
            orderBy: 'post_date_fakeorder',
            order: 'desc',
            unlockedOnTop: true
        });
        expect(PostActiveOrderOptions.reset()).toEqual(defaults);
        expect(PostActiveOrderOptions.get()).toEqual(defaults);

    });
});
