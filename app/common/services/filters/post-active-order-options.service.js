module.exports = [
    '_',
    function (_) {
    var CONST_ORDER = {
        orderBy: {
            value: 'post_date',
            labelTranslateKey: 'global_filter.sort.orderBy.filter_type_tag',
            options: [{
                value: 'post_date',
                labelTranslateKey: 'global_filter.sort.orderBy.post_date.filter_type_tag'
            }]
        },
        order: {
            value: 'desc',
            labelTranslateKey: 'global_filter.sort.order.filter_type_tag',
            options: [
                {
                    value: 'desc',
                    labelTranslateKey: 'global_filter.sort.order.desc.filter_type_tag'
                },
                {
                    value: 'asc',
                    labelTranslateKey: 'global_filter.sort.order.asc.filter_type_tag'
                }
            ]
        },
        unlockedOnTop: {
            value: false,
            labelTranslateKey: 'global_filter.sort.unlockedOnTop.filter_type_tag'
        }
    };
    var order = {};

    return {
        labelTranslateKey: 'global_filter.sort.filter_type_tag',
        get: function () {
            var returnValue = {};
            _.each(CONST_ORDER, function(key, value) {
                returnValue[value] = key.value;
            });
        },
        getDefinition: function () {
            return order;
        },
        put: function (orderObj) {
            order = orderObj;
            return order;
        },
        reset: function () {
            return this.put(CONST_ORDER);
        }
    };
}];
