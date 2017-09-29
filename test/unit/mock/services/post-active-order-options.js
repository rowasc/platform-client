module.exports = [function () {
    return {
        get: function () {
            return {
                orderBy: 'post_date',
                order: 'desc',
                unlockedOnTop: false
            };
        },
        put: function (obj) {
            return {
                orderBy: 'post_date',
                order: 'desc',
                unlockedOnTop: false
            };
        }
    };
}];
