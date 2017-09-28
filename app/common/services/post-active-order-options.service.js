module.exports = [
    '$q',
    '$http',
    '_',
    function (
        $q,
        $http,
        _
    ) {
    var CONST_ORDER = {
        orderBy: 'post_date',
        order: 'desc',
        unlockedOnTop: false
    };
    var order = CONST_ORDER;
    return {
        getOrder: function () {
            return order;
        },
        putOrder: function (orderObj) {
            order = orderObj;
            return order;
        },
        reset: function () {
            return this.putOrder(CONST_ORDER);
        }
    };
}];
