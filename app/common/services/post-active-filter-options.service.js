module.exports = [
    '$q',
    '$http',
    '_',
    function (
        $q,
        $http,
        _
    ) {

    var order = {
        orderBy: 'post_date',
        order: 'desc',
        unlockedOnTop: false
    };
    return {
        getOrder: function () {
            return order;
        },
        patchOrder: function (orderObj) {
            order = _.merge(order, orderObj);
            return order;
        },
        putOrder: function (orderObj) {
            order = orderObj;
            return order;
        }
    };
}];
