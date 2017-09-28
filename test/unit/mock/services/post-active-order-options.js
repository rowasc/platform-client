module.exports = [function () {
    return {
        getOrder: function () {
            return {
                orderBy: 'post_date',
                order: 'desc',
                unlockedOnTop: false
            };
        },
        putOrder: function (obj) {
            return {
                orderBy: 'post_date',
                order: 'desc',
                unlockedOnTop: false
            };
        }
    };
}];
